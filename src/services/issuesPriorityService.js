class IssuesPriorityService {
    currentRepoName = null;

    set = issuePriorities => {
        const issuesById = issuePriorities.reduce((map, obj) => {
            map[obj.id] = obj.priority;
            return map;
        }, {});
        sessionStorage.setItem(`issues-priorities-${this.currentRepoName}`, JSON.stringify(issuesById));
    }

    get = repoName => {
        this.currentRepoName = repoName;
        return sessionStorage.getItem(`issues-priorities-${repoName}`);
    }
}

export default new IssuesPriorityService();
