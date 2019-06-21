import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { getIssues } from '../../actions/issues.actions';
import { Button, Heading, IssueTable } from '../../components/index';
import './Dashboard.scss';

const Dashboard = ({ getIssues, issues, repos }) => {
    const [selectedRepo, setSelectedRepo] = useState(null);

    return (
        <section className={classNames("dashboard",
            {
                "dashboard--center": !selectedRepo,
                "dashboard--left": selectedRepo
            }
        )}>
            <div className="dashboard__repos">
                <Heading>Repositories</Heading>
                { repos.map((repo, index) => {
                    return (
                        <div className="dashboard__repos-button" style={{ animationDuration: `${index * 0.25}s` }} key={ repo.id }>
                            <Button
                                buttonType="secondary"
                                selected={selectedRepo === repo.id}
                                type="button"
                                onClick={() => {
                                    setSelectedRepo(repo.id);
                                    getIssues(repo.name);
                                }}
                            >
                                { repo.name }
                            </Button>
                        </div>
                    )
                })}
            </div>
            <div className="dashboard__issues">
                { selectedRepo && issues.length === 0 && <h2 className="dashboard__issues-heading">No issues found</h2> }
                { issues.length > 0 &&
                    <>
                        <h2 className="dashboard__issues-heading">Issues</h2>
                        <IssueTable issues={issues} />
                    </>
                }
            </div>
        </section>
    )
}


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
