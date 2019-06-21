import { createSelector } from 'reselect';

const issuesSelector = ({ issues }) => issues;

const sortByPriority = (a, b) => { return a.priority - b.priority }

export const issuesSortedByPriority = createSelector(
	issuesSelector,
	issues => issues.sort(sortByPriority)
);

export const repoHasIssues = createSelector(
	issuesSelector,
	issues => issues.length > 0
);
