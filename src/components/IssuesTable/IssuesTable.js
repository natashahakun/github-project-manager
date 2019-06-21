import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { issuesSortedByPriority } from '../../selectors';
import { Button } from '../../components';
import { decreasePriority, increasePriority } from '../../actions/issues.actions';
import './IssuesTable.scss';

const IssuesTable = ({ decreasePriority, increasePriority, issues }) =>
    <table className='table'>
        <thead className='table__head'>
            <tr className='table__row'>
                <th className='table__data-standard table__data-assignee'>Assignee</th>
                <th className='table__data-wide'>Title</th>
                <th className='table__data-standard table__data-created'>Created</th>
                <th className='table__data-standard table__data-updated'>Last Updated</th>
                <th className='table__data-standard table__data-priority'>Priority</th>
            </tr>
        </thead>
        
        <tbody>
            { issues.map(issue =>
                <tr className='table__row' key={issue.id}>
                    <td className='table__data-standard table__data-assignee'>
                        { issue.assignee ? <img className='table__image' src={ issue.assignee.avatar_url } alt='avatar' /> : 'None' }
                    </td>
                    <td className='table__data-wide'>{ issue.title }</td>
                    <td className='table__data-standard table__data-created'>{ moment(issue.created_at).format('MM/DD/YYYY') }</td>
                    <td className='table__data-standard table__data-updated'>{ moment(issue.updated_at).fromNow() }</td>
                    <td className='table__data-standard table__data-priority'>
                        <Button
                            accessibleText='Increase priority'
                            buttonType='icon' disabled={issue.priority === 1}
                            onClick={() => increasePriority(issue.id)}
                        >
                            +
                        </Button>
                        <Button
                            accessibleText='Decrease priority'
                            buttonType='icon'
                            disabled={issue.priority === issues.length}
                            onClick={() => decreasePriority(issue.id)}
                        >
                            -
                        </Button>
                    </td>
                </tr> 
            )}
        </tbody>
    </table>

IssuesTable.propTypes = {
    decreasePriority: PropTypes.func.isRequired,
    increasePriority: PropTypes.func.isRequired,
    issues: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const mapStateToProps = state => ({
    issues: issuesSortedByPriority(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    decreasePriority,
    increasePriority
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IssuesTable);
