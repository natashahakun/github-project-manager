import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { decreasePriority, increasePriority } from '../../actions/issues.actions';
import './IssueTable.scss';

class IssueTable extends Component {
    sortByPriority = (a, b) => { return a.priority - b.priority }

    render() {
        const { decreasePriority, increasePriority, issues } = this.props;

        return (
            <table className="table">
                <thead className="table__head">
                    <tr>
                        <th>Assignee</th>
                        <th>Title</th>
                        <th>Created</th>
                        <th>Last Updated</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                
                <tbody>
                    { issues.sort(this.sortByPriority).map(issue =>
                        <tr className="table__row" key={issue.id}>
                            <td className="table__data-image">
                                { issue.assignee ? <img className="table__image" src={ issue.assignee.avatar_url } alt="avatar" /> : 'No assignee' }
                            </td>
                            <td>{ issue.title }</td>
                            <td>{ moment(issue.created_at).format('MM/DD/YYYY') }</td>
                            <td>{ moment(issue.updated_at).fromNow() }</td>
                            <td>
                                <button disabled={issue.priority === 1} onClick={() => increasePriority(issue.id)}>+</button>
                                <button disabled={issue.priority === issues.length} onClick={() => decreasePriority(issue.id)}>-</button>
                            </td>
                        </tr> 
                    )}
                </tbody>
            </table>
        )
    }
}

IssueTable.propTypes = {
    decreasePriority: PropTypes.func,
    increasePriority: PropTypes.func
};

const mapDispatchToProps = dispatch => bindActionCreators({
    decreasePriority,
    increasePriority
}, dispatch)

export default connect(null, mapDispatchToProps)(IssueTable);
