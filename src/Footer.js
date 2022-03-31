import React from 'react'
import './App.css';


function Footer() {
  return (
      <footer>
          <div className="app__footerWrapper">
              <div>
                  <p className="app__footerSectionTitle">선린인터넷고등학교 콘텐츠디자인과</p>
                  <p className="app__footerSectionDesc">
                      서울특별시 용산구 원효로97길 33-4 <br />
                      선린인터넷고등학교 3호관 2층 <br />
                      콘텐츠디자인과 <br />
                      Tel. 713-6213 | Fax. 704-0960
                  </p>
                  <p className="app__footerSectionDesc">
                      © 2022. 선린인터넷고등학교 콘텐츠디자인과 <br />
                      All Rights Reserved.
                  </p>
              </div>
              <div>
                  <p className="app__footerSectionTitle">
                    웹사이트
                  </p>
                  <p className="app__footerSectionDesc">
                    디자인  |  김고은 김유진 최지안 <br />
                    개발  |  최지원 정진오
                  </p>
              </div>
              <div>
                <p className="app__footerSectionTitle">졸업전시회준비위원회</p>
                <p className="app__footerSectionDesc">
                    김고은 김유라 김유진 김민주 김유한 <br />
                    김혜린 서도담 신상호 안서연 윤서영 <br />
                    윤서현 윤지민 이성민 이예강 임동하 <br />
                    전계승 조승현 최지안
                  </p>
                  <div className="app__footerBtnsWrapper">
                    <a className="app__footerBtns" href="">
                        <img src={`${process.env.PUBLIC_URL}/Sunrin.png`}/>
                    </a>
                    <a className="app__footerBtns" href="">
                        <img src={`${process.env.PUBLIC_URL}/Facebook.png`}/>
                    </a>
                    <a className="app__footerBtns" href="">
                        <img src={`${process.env.PUBLIC_URL}/Yotube.png`}/>
                    </a>
                    <a className="app__footerBtns" href="">
                        <img src={`${process.env.PUBLIC_URL}/Instagram.png`}/>
                    </a>
                </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer