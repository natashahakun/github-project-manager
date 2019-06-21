import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIssues } from '../../actions/issues.actions';
import { Button, Heading } from '../../components/index';
import './Dashboard.scss';

const Dashboard = ({ getIssues, issues, repos }) =>
    <section className="dashboard">
        <div className="dashboard__repos">
            <Heading>Repositories</Heading>
            { repos.map(repo => {
                return (
                    <div className="dashboard__repos-button" key={ repo.id }>
                        <Button
                            buttonType="secondary"
                            type="button"
                            onClick={() => getIssues(repo.name)}
                        >
                            { repo.name }
                        </Button>
                    </div>
                )
            })}
        </div>
        {/* add reminder to click on repo && add 'no Issues' warning */}
        <div>
            {issues && issues.map(issue => {
                return (
                    <div key={issue.id}>{ issue.title }</div>
                )
            })}
        </div>
    </section>


Dashboard.propTypes = {
    getIssues: PropTypes.func.isRequired,
    issues: PropTypes.arrayOf(PropTypes.shape({})),
    repos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }))
};

const mapStateToProps = ({ repos, issues }) => ({
    issues,
    repos
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getIssues
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
