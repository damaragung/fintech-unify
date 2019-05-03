import React, { Component, Fragment } from 'react';
import ClassNames from 'classnames';

import SideBar from 'unify-react-mobile/build/SideBar';

import { FintechHeader, IconHeader } from './_HeaderStyle';
import SubNavBar from 'unify-react-mobile/build/SubNavBar';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySidebar: false,
      userLogin: true,
    };
  }

  toggleDisplaySidebar = () => {
    this.setState({
      displaySidebar: !this.state.displaySidebar,
    });
  };

  handleToggleSubNavBar = () => {
    this.setState({
      displaySub: !this.state.displaySub,
    });
  };

  render() {
    const dataBridgeWidget = [
      {
        icon: 'icon icon--marketplace',
        title: 'Jual Beli Online',
        url: 'https://www.tokopedia.com/',
      },
      {
        icon: 'icon icon--os',
        title: 'Official Store',
        url: 'https://www.tokopedia.com/official-store/',
      },
      {
        icon: 'icon icon--digital',
        title: 'Produk Digital',
        url: 'https://www.tokopedia.com/pulsa/',
      },
      {
        icon: 'icon icon--tiket',
        title: 'Tiket Kereta',
        url: 'https://tiket.tokopedia.com/kereta-api/',
      },
      {
        icon: 'icon icon--donation',
        title: 'Donasi',
        url: 'https://www.tokopedia.com/berbagi/',
      },
      {
        icon: 'icon icon--fintech',
        title: 'Keuangan',
        url: 'https://www.tokopedia.com/keuangan/',
      },
    ];

    return (
      <FintechHeader layout={this.props.layout}>
        <div className="ft-navbar">
          <div className="ft-wrapper ft-wrapper--1170 header__container">
            <div className="burger__container" onClick={this.toggleDisplaySidebar}>
              <div className="burger__bar" />
              <div className="burger__bar" />
              <div className="burger__bar" />
            </div>

            <a className="header__logo--wrapper" href="/">
              <span className="header__logo">Tokopedia Product</span>
            </a>
            {this.props.layout === 'desktop' && (
              <ul className="header__menu">
                {this.state.userLogin ? (
                  <Fragment>
                    <li>
                      <a href="#!" target="_blank" rel="noopener noreferrer">
                        Other Menu
                      </a>
                    </li>
                    <li>
                      <div className="header__avatar--wrapper">
                        <img
                          className="user__avatar"
                          src="https://ecs7.tokopedia.net/img/cache/100-square/default_v3-usrnophoto1.png"
                          alt="User Avatar"
                        />
                        <span className="user__name">User Name</span>

                        <div className="user__profile__overlay" />
                        <div className="user__profile--wrapper">
                          <div className="user__info">
                            <img
                              className="user__avatar large"
                              src="https://ecs7.tokopedia.net/img/cache/100-square/default_v3-usrnophoto1.png"
                              alt="User Avatar"
                            />
                            <div className="user__account">
                              <p className="ft-truncate">
                                <strong>User Name</strong>
                              </p>
                              <p className="ft-truncate">user.name@tokopedia.com</p>
                            </div>
                          </div>

                          <div className="user__saldo">
                            <span>OVO Cash</span>
                            <span className="ft-right">
                              <strong>Rp8.888.888</strong>
                            </span>
                            <span>OVO Points</span>
                            <span className="ft-right">
                              <strong>Rp88.888</strong>
                            </span>

                            {/* if OVO Cash not active, then show this one */}
                            {/* <span>OVO Cash</span>
                            <a className="ft-right" href="https://tokopedia.com/ovo/" rel="noopener noreferrer">
                              Aktivasi
                            </a> */}
                            {/* end of if OVO Cash not active, then show this one */}
                          </div>

                          <a href="#!" className={ClassNames(IconHeader, 'link__logout')}>
                            <i className="icon icon--logout" />
                            Keluar
                          </a>
                        </div>
                      </div>
                    </li>
                  </Fragment>
                ) : (
                  <Fragment>
                    <li>
                      <a href="#!" target="_blank" rel="noopener noreferrer">
                        Menu 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" target="_blank" rel="noopener noreferrer">
                        Menu 2
                      </a>
                    </li>
                    <li>
                      <a className="menu__button" href="#!">
                        Masuk
                      </a>
                    </li>
                  </Fragment>
                )}
                <li>
                  <div className="bridge-widget">
                    <div className="bridge-widget__overlay" />
                    <div className={ClassNames('bridge-widget--wrapper', IconHeader)}>
                      {dataBridgeWidget.map((item, index) => (
                        <a key={index} className="bridge-widget__item" href={item.url}>
                          <i className={item.icon} />
                          <p>{item.title}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
        {this.props.layout === 'mobile' && (
          <Fragment>
            <SideBar
              noAnim
              display={this.state.displaySidebar}
              onClose={this.toggleDisplaySidebar}
              userData={{
                username: this.props.userData.username,
                wallet: this.props.userData.wallet,
                points: this.props.userData.points,
              }}
              listItems={[
                {
                  text: 'Belanja',
                  description: 'Beli segala macam produk kebutuhanmu',
                  arrow: true,
                  onClick: () => {
                    window.location.href = 'https://m.tokopedia.com/kategori-belanja';
                  },
                  props: { 'data-cy': 'Shopping' },
                },
                {
                  text: 'Top up & Tagihan',
                  description: 'Isi ulang pulsa, voucher game, dan lain lain',
                  arrow: true,
                  onClick: () => {
                    window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=2';
                  },
                  props: { 'data-cy': 'TopUp' },
                },
                {
                  text: 'Travel',
                  description: 'Bayar tagihan BPJS, air PDAM, dan lain lain',
                  arrow: true,
                  onClick: () => {
                    window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=3';
                  },
                  props: { 'data-cy': 'Travel' },
                },
                {
                  text: 'Entertainment',
                  description: 'Pesan tiket perjalanan hingga tiket event',
                  arrow: true,
                  onClick: () => {
                    window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=5';
                  },
                  props: { 'data-cy': 'Entertainment' },
                },
                {
                  text: 'Pinjaman & Investasi',
                  description: 'Cek deals terbaik untuk semua aktivitas',
                  arrow: true,
                  onClick: () => {
                    window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=7';
                  },
                  props: { 'data-cy': 'Invest' },
                },
                {
                  text: 'Pengajuan',
                  description: 'Ajukan pinjaman, kartu kredit, dan asuransi',
                  arrow: true,
                  onClick: () => {
                    window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=7';
                  },
                  props: { 'data-cy': 'Submission' },
                },
                {
                  text: 'Donasi',
                  description: 'Mulai berdonasi dan berzakat untuk segala',
                  arrow: true,
                  onClick: () => {
                    window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=2';
                  },
                  props: { 'data-cy': 'Donate' },
                },
                {
                  text: 'Gold Merchant & TopAds',
                  description: 'Berinvestasi Reksadana dan Emas',
                  arrow: true,
                  onClick: () => {
                    window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=9';
                  },
                  props: { 'data-cy': 'GMTopAds' },
                },
              ]}
              url={{
                home: () => (window.location.href = 'https://m.tokopedia.com/'),
                profile: 'https://m.tokopedia.com/user/profile',
                register: 'https://m.tokopedia.com/register',
                googleLogin: 'https://m.tokopedia.com/login',
                fbLogin: () => console.log('login'),
                phoneLogin: 'https://m.tokopedia.com/login',
                otherLogin: 'https://m.tokopedia.com/login',
                wallet: {
                  img: 'https://ecs7.tokopedia.net/img/ovo-logo.png',
                  title: 'OVO',
                  url: 'https://www.ovo.id/',
                },
                // wallet: 'https://www.tokocash.com/topup',
                tokopoints: 'https://m.tokopedia.com/tokopoints',
                promo: 'https://www.tokopedia.com/promo/',
                contactUs: 'https://m.tokopedia.com/help/problem',
                help: 'https://m.tokopedia.com/help',
                logout: 'https://m.tokopedia.com/logout',
                referral: 'https://www.tokopedia.com/referral/',
              }}
            />
            {this.props.subNavBar && (
              <SubNavBar
                className="ft-subnavbar"
                display={this.state.displaySub}
                title={{ text: 'Product Name', link: '/' }}
                menuList={this.props.subNavBar}
                onClick={this.handleToggleSubNavBar}
                onClose={this.handleToggleSubNavBar}
              />
            )}
          </Fragment>
        )}
      </FintechHeader>
    );
  }
}

export default Header;

Header.defaultProps = {
  userData: {
    username: 'username',
    wallet: 888888,
    points: 888,
  },
  layout: 'mobile',
};
