import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// style
import './main.layout.scss'

export default class MainLayout extends Component {
  static propTypes  = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: null,
  }

  render() {
    const { className } = this.props;
    const classNames = cx({
        MainLayout: true,
        [className]: className && classNames.length,
    });

    return (
      <div className={classNames}>
        Main layout
      </div>
    )
  }
}
