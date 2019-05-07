import React, { Component, Fragment } from 'react';
import BottomSheetV2 from 'unify-react-mobile/build/BottomSheetV2';

import PromoCodeTrigger from './components/PromoCodeTrigger';
import PromoCodeBox from './components/PromoCodeBox';
import PromoCodeCard from './components/PromoCodeCard';

class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typePromo: 'empty',
      displayPromo: false,
    };
  }

  toggleDisplayPromo = () => {
    this.setState({ displayPromo: !this.state.displayPromo });
  };

  handleRemovePromo = () => {
    this.setState({ typePromo: 'empty' });
  };

  render() {
    return (
      <Fragment>
        <PromoCodeTrigger
          type={this.state.typePromo}
          display={this.toggleDisplayPromo}
          onClose={this.handleRemovePromo}
        />
        <BottomSheetV2
          full
          withClose
          title="Gunakan kode promo/kupon"
          onClose={this.toggleDisplayPromo}
          display={this.state.displayPromo}
        >
          <div style={{ padding: '16px' }}>
            <PromoCodeBox />
            <PromoCodeCard />
          </div>
        </BottomSheetV2>
      </Fragment>
    );
  }
}

export default PromoCode;
