import React, { Component } from 'react';

import Card from 'unify-react-mobile/build/Card';
import TextField from 'unify-react-mobile/build/TextField';
import Button from 'unify-react-mobile/build/Button';

import { BoxContainer } from '../_PromoCodeStyle';

class PromoCodeBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promoCode: '',
      showError: false,
    };
  }

  handleChange = e => {
    this.setState({ promoCode: e.target.value });
  };

  render() {
    return (
      <BoxContainer>
        <Card container className="ft-promo-box__container">
          <div className="promo__input--wrapper">
            <TextField
              className="promo__input"
              label="Kode Promo"
              placeholder="Ketik kode promo"
              value={this.state.promoCode}
              onChange={this.handleChange}
              error
              info="Error message here"
            />
          </div>
          <div className="promo__cta--wrapper">
            <Button main filled>
              Gunakan
            </Button>
          </div>
        </Card>
      </BoxContainer>
    );
  }
}

export default PromoCodeBox;
