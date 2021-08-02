import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator />;
    }
    const { children } = this.props;
    return children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.element.isRequired,
};
