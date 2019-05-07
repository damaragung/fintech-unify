import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import Card from 'unify-react-mobile/build/Card';

import { FintechIcon, TriggerContainer } from '../_PromoCodeStyle';

class PromoCodeTrigger extends Component {
  static propTypes = {
    empty: PropTypes.bool,
    filled: PropTypes.bool,
    type: PropTypes.string,
    onClose: PropTypes.func,
    display: PropTypes.func,
  };

  render() {
    return (
      <TriggerContainer>
        <Card container className={ClassNames('ft-promo-trigger__container', { filled: this.props.type === 'filled' })}>
          <div
            className={ClassNames(
              'promo-trigger__content',
              { 'promo-empty': this.props.type === 'empty' },
              { 'promo-filled': this.props.type === 'filled' },
            )}
          >
            {this.props.type === 'empty' && <FintechIcon className="icon--coupon" />}
            {this.props.type === 'empty' && (
              <p className="text" onClick={this.props.display}>
                Gunakan Promo Tokopedia
              </p>
            )}
            {this.props.type === 'filled' && (
              <Fragment>
                <div className="text__container">
                  <p className="text">Cashback 20% Terpasang</p>
                  <p className="text text--secondary">Anda akan mendapatkan cashback ke OVO Points hingga Rp20.000</p>
                </div>
                <FintechIcon className="icon--close" onClick={this.props.onClose} />
              </Fragment>
            )}
          </div>
        </Card>
      </TriggerContainer>
    );
  }
}

export default PromoCodeTrigger;
