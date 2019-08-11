import React, { Component } from 'react';
import * as moment from 'moment';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            date: this.horario()
        }
    }

    horario() {
        return moment().format('DD/MM/YYYY HH:mm:ss');
    }

    componentDidMount() {
        setInterval(this.timer.bind(this), 1000);
    }

    timer() {
        this.setState({
            date: this.horario()
        })
    }

    render() {
        return <header>{this.state.date}</header>;
    }
} 