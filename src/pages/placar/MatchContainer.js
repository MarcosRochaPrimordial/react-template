import React from 'react';
import './MatchContainer.css';
import Match from './Match';

export default class MatchContainer extends React.Component {
    render() {
        const { match } = this.props;
        return (
            <div className="container">
                <Match {...match} />
            </div>
        );
    }
}