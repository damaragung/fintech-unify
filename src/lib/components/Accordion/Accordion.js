import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import { accordionStyle } from './_AccordionStyle';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showChild: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { showChild } = this.state;
    this.setState({
      showChild: !showChild,
    });
  }

  renderChild() {
    const { children } = this.props;
    const { showChild } = this.state;
    if (showChild && children) {
      return children;
    } else {
      return null;
    }
  }

  render() {
    const { showChild } = this.state;
    const { title, value, isBordered } = this.props;
    return (
      <div
        onClick={this.handleClick}
        className={ClassNames(accordionStyle, { 'accordion-header--bordered': isBordered })}
      >
        <div
          className={ClassNames('accordion-header', {
            'accordion-header--bordered': isBordered,
          })}
        >
          <div
            className={ClassNames('accordion-header__title', {
              'accordion-header__title--active': showChild,
            })}
          >
            <p>{title}</p>
          </div>
          <div className={ClassNames('accordion-header__value')}>
            <p>{value}</p>
          </div>
          <div className={`ft-arrow accordion-arrow ft-arrow--down ${showChild ? 'accordion-arrow--active' : ''} `} />
        </div>
        <div
          className={ClassNames('accordion-child', {
            'accordion-child--active': showChild,
          })}
        >
          {this.renderChild()}
        </div>
      </div>
    );
  }
}

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  isBordered: PropTypes.bool,
  children: PropTypes.any,
};
Accordion.defaultProps = {
  title: 'accordion title',
  value: '',
  isBordered: false,
  children: 'accordion content Lorem ipsum blablabla',
};
