import React, { Component } from 'react';
import './IssueTable.scss';

class IssueTable extends Component {
    render() {
        const { issues } = this.props;

        return (
            <table>
                <thead>
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
                            <td>{ issue.created_at }</td>
                            <td>{ issue.updated_at }</td>
                        </tr> 
                    )}
                </tbody>
            </table>
        )
    }
}

export default IssueTable;