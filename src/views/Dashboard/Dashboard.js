import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { getIssues } from '../../actions/issues.actions';
import { repoHasIssues } from '../../selectors';
import { Button, Heading, IssuesTable, NativeSelect } from '../../components/index';
import './Dashboard.scss';

const Dashboard = ({ getIssues, hasIssues, repos }) => {
    const [selectedRepo, setSelectedRepo] = useState(null);

    return (
        <section className={classNames('dashboard',
            {
                'dashboard--center': !selectedRepo,
                'dashboard--left': selectedRepo
            }
        )}>
            <div className='dashboard__repos'>
                <Heading>Repositories</Heading>
                <div className='dashboard__select-wrapper'>
                    <NativeSelect
                        label="repos"
                        options={repos}
                        value={selectedRepo || 0}
                        handleOnChange={event => {
                            const repoId = parseInt(event.target.value)
                            setSelectedRepo(repoId);
                            getIssues(repos.find(repo => repo.id === repoId).name);
                        }}
                    />
                </div>

                <div className='dashboard__repos-wrapper'>
                    { repos.map((repo, index) => {
                        return (
                            <div className='dashboard__repos-button' style={{ animationDuration: `${index * 0.25}s` }} key={repo.id}>
                                <Button
                                    buttonType='secondary'
                                    selected={selectedRepo === repo.id}
                                    type='button'
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
            </div>
            <div className='dashboard__issues'>
                { selectedRepo && !hasIssues && <h2 className='dashboard__issues-heading'>No issues found</h2> }
                { hasIssues &&
                    <>
                        <h2 className='dashboard__issues-heading'>Issues</h2>
                        <IssuesTable />
                    </>
                }
            </div>
        </section>
    )
}


Dashboard.propTypes = {
    getIssues: PropTypes.func.isRequired,
    hasIssues: PropTypes.bool,
    repos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }))
};

const mapStateToProps = ({ repos, ...state }) => ({
    hasIssues: repoHasIssues(state),
    repos
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getIssues
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
