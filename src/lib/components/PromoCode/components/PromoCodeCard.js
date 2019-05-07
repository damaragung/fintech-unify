import React, { Component } from 'react';
import EmptyState from 'unify-react-mobile/build/EmptyState';
import Card from 'unify-react-mobile/build/Card';
import Button from 'unify-react-mobile/build/Button';
import Toaster from 'unify-react-mobile/build/Toaster';
import LoaderSquare from 'unify-react-mobile/build/LoaderSquare';
import LoaderLine from 'unify-react-mobile/build/LoaderLine';

import { FintechIcon, CardContainer } from '../_PromoCodeStyle';

class PromoCodeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showError: false,
      isLoading: false,
    };
  }

  toggleToaster = () => {
    this.setState({ showError: !this.state.showError });
  };

  render() {
    let dummyCoupons = [
      {
        bannerImg: 'https://via.placeholder.com/576x192',
        bannerLink: '#!',
        dueDate: '17 April 2019',
        minTx: 'Rp100.000',
      },
      {
        bannerImg: 'https://via.placeholder.com/576x192',
        bannerLink: '#!',
        dueDate: '18 Mei 2019',
        minTx: 'Rp150.000',
      },
      {
        bannerImg: 'https://via.placeholder.com/576x192',
        bannerLink: '#!',
        dueDate: '19 Juni 2019',
        minTx: 'Rp200.000',
      },
    ];

    return (
      <CardContainer>
        <p className="title">Kupon Saya:</p>

        {dummyCoupons.length > 0 ? (
          this.state.isLoading ? (
            <Card className="ft-promo-card__container" style={{ padding: '16px' }}>
              <LoaderSquare width="100%" paddingBottom="40%" />
              <LoaderLine width="100%" height="8px" marginBottom="16px" />
              <LoaderLine width="100%" height="8px" marginBottom="0" />
            </Card>
          ) : (
            dummyCoupons.map((item, index) => (
              <Card key={index} className="ft-promo-card__container">
                <a className="promo__banner--wrapper" href={item.bannerLink}>
                  <img className="promo__banner" src={item.bannerImg} alt="Promo Banner" />
                </a>
                <div className="promo__detail--wrapper">
                  <div className="promo__detail">
                    <FintechIcon className="icon--clock" />
                    <div className="text--wrapper">
                      <p className="label">Berlaku hingga:</p>
                      <p className="value">
                        <strong>{item.dueDate}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="promo__detail">
                    <FintechIcon className="icon--money" />
                    <div className="text--wrapper">
                      <p className="label">Min. transaksi:</p>
                      <p className="value">
                        <strong>{item.minTx}</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="promo__cta--wrapper">
                  <Button main filled small block onClick={this.toggleToaster}>
                    Gunakan
                  </Button>
                </div>
              </Card>
            ))
          )
        ) : (
          <EmptyState
            className="ft-promo-card__empty--wrapper"
            title="Anda tidak memiliki kupon untuk kategori ini"
            image="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/df25ccae.png"
          >
            Tukar Points Anda dengan kupon di halaman TokoPoints.
          </EmptyState>
        )}

        <Toaster
          error
          display={this.state.showError}
          onActionClick={this.toggleToaster}
          onClose={this.toggleToaster}
          actionText="OK"
        >
          Error Message (ex: Minimum Transaction)
        </Toaster>
      </CardContainer>
    );
  }
}

export default PromoCodeCard;
