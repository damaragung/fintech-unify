import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import Card from 'unify-react-mobile/build/Card';
import Button from 'unify-react-mobile/build/Button';
import Menu from 'unify-react-mobile/build/Menu';

import { historyCardStyle } from './_HistoryCardStyle';

class HistoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenuWaiting: false,
      displayMenuFailed: false,
    };
  }

  toggleMenuWaiting = () => {
    this.setState({
      displayMenuWaiting: !this.state.displayMenuWaiting,
    });
  };

  toggleMenuFailed = () => {
    this.setState({
      displayMenuFailed: !this.state.displayMenuFailed,
    });
  };

  handleHowToPay = () => {
    window.location.href = 'https://www.tokopedia.com/help';
  };

  handleBantuanClick = () => {
    window.location.href = 'https://www.tokopedia.com/help';
  };

  handleToSaldo = () => {
    window.location.href = 'https://www.tokopedia.com/deposit.pl?nref=dside';
  };

  render() {
    return (
      <Card padding="0" style={{ position: 'relative' }}>
        <div className={historyCardStyle}>
          <div
            className={ClassNames('ft-oms__status', {
              failed: this.props.status === 'failed',
            })}
          >
            {this.props.status === 'waiting' && 'Menunggu Pembayaran'}
            {this.props.status === 'success' && 'Transaksi Berhasil'}
            {this.props.status === 'failed' && 'Transaksi Gagal'}
          </div>
          <div className="ft-oms__info">
            <a href=" ">
              <div className="date">9 Jan 2017</div>
              <div className="inv">{this.props.id}</div>
            </a>
            {this.props.status === 'waiting' && (
              <div
                className="dropdown"
                onClick={e => {
                  e.stopPropagation();
                  this.toggleMenuWaiting();
                }}
              />
            )}
            {this.props.payment && this.props.status === 'failed' && (
              <div
                className="dropdown"
                onClick={e => {
                  e.stopPropagation();
                  this.toggleMenuFailed();
                }}
              />
            )}
          </div>
          {this.props.payment && this.props.status === 'failed' && (
            <div className="ft-oms__additional ft-info ft-info--warning">Dana dikembalikan ke Saldo Refund</div>
          )}
          <div className="ft-oms__detail">
            <a href=" ">
              <img src={this.props.card_icon} className="icon" alt="modal toko" />
              <div className="ft-oms__detail-wrapper">
                <div className="ft-oms__detail-list">
                  <div className="label--title">
                    {this.props.payment ? 'Pembayaran Modal Toko' : 'Pencairan Modal Toko'}
                  </div>
                  <div className="label--inv">TX ID: {this.props.id}</div>
                </div>
                <div className="ft-oms__detail-list">
                  <div className="label--main">{this.props.payment ? 'Nominal Pembayaran' : 'Nominal Pencairan'}</div>
                  <div className="label--amount">Rp{this.props.amount.toLocaleString('ID')}</div>
                </div>
                {this.props.due_date && (
                  <div className="ft-oms__detail-list">
                    <div className="label--main">Batas Waktu Pembayaran</div>
                    <div className="label--value">{this.props.due_date}</div>
                  </div>
                )}
                {this.props.method && (
                  <div className="ft-oms__detail-list">
                    <div className="label--main">Metode Pembayaran</div>
                    <div className="label--value">{this.props.method}</div>
                  </div>
                )}
              </div>
            </a>
          </div>
          {this.props.payment &&
            (this.props.status === 'success' ? (
              <div className="ft-oms__action">
                <Button block ghost style={{ borderRadius: '0' }}>
                  Bantuan
                </Button>
              </div>
            ) : this.props.status === 'failed' ? (
              <div className="ft-oms__action">
                <Button block ghost style={{ borderRadius: '0' }}>
                  Tarik Dana ke Rekening
                </Button>
              </div>
            ) : this.props.status === 'waiting' ? (
              <div className="ft-oms__action">
                <Button block ghost style={{ borderRadius: '0' }}>
                  Cara Bayar
                </Button>
              </div>
            ) : (
              ''
            ))}
        </div>
        <Menu
          display={this.state.displayMenuWaiting}
          items={[
            {
              key: 1,
              text: 'Cara Bayar',
              onClick: this.handleHowToPay,
            },
            {
              key: 2,
              text: 'Bantuan',
              onClick: this.handleBantuanClick,
            },
          ]}
          actionText="Tutup"
          onClose={() => this.toggleMenuWaiting()}
          onAction={() => this.toggleMenuWaiting()}
        />
        <Menu
          display={this.state.displayMenuFailed}
          items={[
            {
              key: 1,
              text: 'Tarik Dana ke Rekening',
              onClick: this.handleToSaldo,
            },
            {
              key: 2,
              text: 'Bantuan',
              onClick: this.handleBantuanClick,
            },
          ]}
          actionText="Tutup"
          onClose={() => this.toggleMenuFailed()}
          onAction={() => this.toggleMenuFailed()}
        />
      </Card>
    );
  }
}

export default HistoryCard;

HistoryCard.propTypes = {
  card_icon: PropTypes.string,
  payment: PropTypes.bool,
  id: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
  amount: PropTypes.number,
  due_date: PropTypes.string,
  method: PropTypes.string,
};
HistoryCard.defaultProps = {
  card_icon: 'https://ecs7.tokopedia.net/img/fintech/category/mt/colored-active.png',
  payment: false,
  id: 'defaultProps.id',
  status: 'success',
  date: 'defaultProps.date',
  amount: 8888888,
  due_date: 'defaultProps.due_date',
  method: 'defaultProps.method',
};
