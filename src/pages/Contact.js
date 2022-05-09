import React from 'react'
import './Contact.css';
import Image from '../assets/MainImage.png';

function Contact() {
  return (
    <div className="contact">
      <div>
        <div className="contact__image">
          <img src={Image} />
        </div>
        <div className="contact__title">
          우리의 <b>첫</b> 걸음에 <b>초대</b>합니다
        </div>
        <div className="contact__desc">
          2022년 <b>제 10회</b> 선린인터넷고등학교<br />
          콘텐츠디자인과 졸업전시회<br />
          <b className="contact__desc-accent">Beginning</b>
        </div>
      </div>
    </div>
  );
}

export default Contact;