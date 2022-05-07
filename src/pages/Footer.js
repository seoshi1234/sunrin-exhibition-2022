import React from 'react'
import './Footer.css';
import Facebook from '../assets/FooterFacebookIcon.png';
import Instagram from '../assets/FooterInstagramIcon.png';
import Sunrin from '../assets/FooterSunrinIcon.png';
import Youtube from '../assets/FooterYoutubeIcon.png';


function Footer() {
  return (
    <footer>
      <div>
        <p className="footer__section-title">선린인터넷고등학교 콘텐츠디자인과</p>
        <p className="footer__section-desc">
          서울특별시 용산구 원효로97길 33-4 <br />
          선린인터넷고등학교 3호관 2층 <br />
          콘텐츠디자인과 <br />
          Tel. 713-6213 | Fax. 704-0960
        </p>
        <p className="footer__section-desc">
          © 2022. 선린인터넷고등학교 콘텐츠디자인과 <br />
          All Rights Reserved.
        </p>
      </div>
      <div>
        <p className="footer__section-title">
          웹사이트
        </p>
        <p className="footer__section-desc">
          디자인  |  김고은 김유진 최지안 <br />
          개발  |  최지원 정진오
        </p>
      </div>
      <div>
        <p className="footer__section-title">졸업전시회준비위원회</p>
        <p className="footer__section-desc">
          김고은 김유라 김유진 김민주 김유한 <br />
          김혜린 서도담 신상호 안서연 윤서영 <br />
          윤서현 윤지민 이성민 이예강 임동하 <br />
          전계승 조승현 최지안
        </p>
        <div className="footer__btns-wrapper">
          <a className="footer__btns" href="">
            <img src={Sunrin} />
          </a>
          <a className="footer__btns" href="">
            <img src={Facebook} />
          </a>
          <a className="footer__btns" href="">
            <img src={Youtube} />
          </a>
          <a className="footer__btns" href="">
            <img src={Instagram} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer