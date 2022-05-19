import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WorkItemModel from './models/WorkItemModel';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import ProfileItemModel from './models/ProfileItemModel';

const workInfo = [
  new WorkItemModel(
    /* 썸네일 */ 'https://thumbnail.imgbin.com/25/4/2/imgbin-pepe-the-frog-meme-anger-sticker-meme-green-frog-illustration-A8mkcsCK0MceRLc8dWMsYLd36_t.jpg',
    /* 작품 제목 */ '작품제목',
    /* 이름 */ '김선린',
    /* 태그 */ ['3D'],
    /* 연락처 */ ['kkykky0707@gamil.com', '@kimgone_'],
    /* 사진 */ ['https://qph.fs.quoracdn.net/main-qimg-b7d20d8762d99375dfad27dc36feecde-pjlq', 'https://qph.fs.quoracdn.net/main-qimg-b7d20d8762d99375dfad27dc36feecde-pjlq', 'https://qph.fs.quoracdn.net/main-qimg-b7d20d8762d99375dfad27dc36feecde-pjlq'],
    /* 작품 소개 */ 'medicheck는 병원, 의약품, 건강 정보 등 의료와 관련한 모든 정보를 담은 애플리케이션입니다. \n 홈 화면은 최근 검색 약품과 가까운 병원, 건강 정보 등을 보여주며, 진료 화면은 병원을 찾고 예약하거나 비대면으로 진료할 수 있는 기능을, 약 검색 화면은 이름 또는 외형으로 약을 검색할 수 있고 찾는 약을 보유하고 있는 약국을 보여주는 서비스를 제공합니다.',
    /* 작품 사진 */ ['https://drive.google.com/u/1/uc?id=1DurTpKzwzgK_NddgFljGHzE7UWWNGikg&export=download'],
    /* 작품 URL */ ['https://www.youtube.com/embed/yB-fL2VshO4']
  )
  , new WorkItemModel(
    'data:image/png;base64,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',
    '작품제목2',
    '김선린2',
    ['VIDEOGRAPHY'],
    ['jino9492@gmail.com', '@jino9492'],
    ['https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5aa6e2286fc1eba74645bddae50692a0', 'https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5aa6e2286fc1eba74645bddae50692a0', 'https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5aa6e2286fc1eba74645bddae50692a0'],
    'hello world',
    ['https://thumbnail.imgbin.com/25/4/2/imgbin-pepe-the-frog-meme-anger-sticker-meme-green-frog-illustration-A8mkcsCK0MceRLc8dWMsYLd36_t.jpg', 'https://thumbnail.imgbin.com/25/4/2/imgbin-pepe-the-frog-meme-anger-sticker-meme-green-frog-illustration-A8mkcsCK0MceRLc8dWMsYLd36_t.jpg'],
    []
  )
];
const profileInfo = [
  new ProfileItemModel('https://thumbnail.imgbin.com/25/4/2/imgbin-pepe-the-frog-meme-anger-sticker-meme-green-frog-illustration-A8mkcsCK0MceRLc8dWMsYLd36_t.jpg','이름')
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/sunrin-exhibition-2022'>
      <App profileData={profileInfo}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();