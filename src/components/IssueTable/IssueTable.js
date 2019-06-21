import React, { Component } from 'react';
import moment from 'moment';
import './IssueTable.scss';

class IssueTable extends Component {
    render() {
        const { issues } = this.props;

        return (
            <table className="table">
                <thead className="table__head">
                    <tr>
                        <th>Assignee</th>
                        <th>Title</th>
                        <th>Created</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                
                <tbody>
                    { issues.map(issue =>
                        <tr className="table__row" key={issue.id}>
                            <td className="table__data-image">
                                { issue.assignee ? <img className="table__image" src={ issue.assignee.avatar_url } alt="avatar" /> : 'No assignee' }
                            </td>
                            <td>{ issue.title }</td>
                            <td>{ moment(issue.created_at).format('MM/DD/YYYY') }</td>
                            <td>{ moment(issue.updated_at).fromNow() }</td>
                        </tr> 
                    )}
                </tbody>
            </table>
        )
    }
}

export default IssueTable;