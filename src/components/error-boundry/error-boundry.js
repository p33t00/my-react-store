import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    }

// TODO: check if error stack is not displayed on production.
    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        console.log(this.state.hasError);
        if (this.state.hasError) return <ErrorIndicator />
        return this.props.children;
    }
}