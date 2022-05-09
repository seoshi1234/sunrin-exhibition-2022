import React from 'react';
import Image from '../assets/MainImage.png';
import Icon1 from '../assets/HomeWorkIcon.png';
import Icon2 from '../assets/HomeVideoIcon.png';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div> {/* flex 위치 조정 때문에 넣음 */}
        <div className="home__section-wrapper">
          <div className="home__section">
            <p className="home__section-title">
              <b>Beginning</b> <br />
              : 우리의 <b>첫</b> 걸음에 <b>초대</b>합니다
            </p>
            <p className="home__section-desc">
              제 <b>10회</b> 콘텐츠디자인과 전시회 <br />
              <b>Beginning</b>입니다.
            </p>
            <p className="home__section-desc">
              <b>다양한 첫 번째 경험을 이겨내고 <br />
                화려하게 시작하는 저희의 모습을 <br />
                보여준다는 의미</b>를 담았습니다.
            </p>
          </div>
          <div className="home__image">
            <img src={Image}></img>
          </div>
        </div>
        <div className="home__btns-wrapper">
          <div className="home__btns">
            <Link to="/work">전시회 작품 보러가기<img src={Icon1} /></Link>
          </div>
          <div className="home__btns">
            <a href="https://youtube.com">메인 티저 영상 보러가기<img src={Icon2} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home