import React, { Component } from 'react';
import { Wrapper } from './_ContainerAutohideStyle';

class ContainerAutohide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false,
      lastScroll: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }

  handleScroll() {
    if (window.scrollY === 0) {
      this.setState({
        sticky: false,
      });
    } else {
      this.setState({
        sticky: true,
      });
    }
  }

  render() {
    return (
      <Wrapper {...this.props} sticky={this.state.sticky}>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default ContainerAutohide;
