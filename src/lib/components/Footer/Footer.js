import React, { Component } from 'react'
import { FintechFooter } from './_FooterStyle'

class Footer extends Component {
  render() {
    const dataFooterDownload = [
      {
        link: 'https://itunes.apple.com/us/app/tokopedia/id1001394201?ls=1&mt=8',
        img: 'https://ecs7.tokopedia.net/assets/images/store/appstore-new.png',
        alt: 'Appstore'
      },
      {
        link: 'https://play.google.com/store/apps/details?id=com.tokopedia.tkpd',
        img: 'https://ecs7.tokopedia.net/assets/images/store/googleplay-new.png',
        alt: 'Playstore'
      }
    ]

    const dataFooterShare = [
      {
        link: 'https://www.facebook.com/tokopedia/',
        img: 'https://ecs7.tokopedia.net/assets/images/social/facebook-new.png',
        alt: 'Facebook'
      },
      {
        link: 'https://www.instagram.com/tokopedia/',
        img: 'https://ecs7.tokopedia.net/assets/images/social/instagram-new.png',
        alt: 'Instagram'
      },
      {
        link: 'https://twitter.com/tokopedia/',
        img: 'https://ecs7.tokopedia.net/assets/images/social/twitter-new.png',
        alt: 'Twitter'
      },
      {
        link: 'https://www.youtube.com/user/tokopedia',
        img: 'https://ecs7.tokopedia.net/assets/images/social/youtube-new.png',
        alt: 'Youtube'
      },
      {
        link: 'https://www.tokopedia.com/blog/',
        img: 'https://ecs7.tokopedia.net/assets/images/social/blog-new.png',
        alt: 'Blog'
      }
    ]

    return (
      <FintechFooter>
        <div className="ft-wrapper ft-wrapper--1170 footer__container">
          <span className="footer__copyright">&copy; 2009 - 2019, PT Tokopedia</span>

          <div className="footer__content">
            <ul className="content">
              {dataFooterDownload.map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={item.alt} height="30" />
                  </a>
                </li>
              ))}
            </ul>

            <ul className="content">
              {dataFooterShare.map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={item.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FintechFooter>
    )
  }
}

export default Footer
