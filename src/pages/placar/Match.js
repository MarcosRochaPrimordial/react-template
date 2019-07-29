import React from 'react';

export default class Match extends React.Component {
    render() {
        const { date } = this.props;
        return (
            <div>{date.date()}</div>
        );
    }
}