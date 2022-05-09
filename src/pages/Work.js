import React, {useState} from 'react';
import WorkItem from '../components/WorkItem';
import './Work.css';

function Work(props) {

  const [curTag, setTag] = useState('ALL');
  const [data, setData] = useState(props.data);

  const onChangeTag = (tag) => {
    setTag(tag);
    filterTag(tag);
  };

  const filterTag = (curTag) => {
    switch (curTag) {
      case '3D':
        setData(props.data.filter((d) => d.tag.indexOf('3D') > -1));
        break;
      case 'VIDEO':
        setData(props.data.filter((d) => d.tag.indexOf('VIDEO') > -1));
        break;
      case 'MOTION':
        setData(props.data.filter((d) => d.tag.indexOf('MOTION') > -1));
        break;
      case 'UI/UX':
        setData(props.data.filter((d) => d.tag.indexOf('UI/UX') > -1));
        break;
      case 'GRAPHIC':
        setData(props.data.filter((d) => d.tag.indexOf('GRAPHIC') > -1));
        break;
      case 'BRANDING':
        setData(props.data.filter((d) => d.tag.indexOf('BRANDING') > -1));
        break;
      case 'ILLUSTRATION':
        setData(props.data.filter((d) => d.tag.indexOf('ILLUSTRATION') > -1));
        break;
      case 'PRODUCT':
        setData(props.data.filter((d) => d.tag.indexOf('PRODUCT') > -1));
        break;
      default:
        setData(props.data);
        break;
    };
  };

  return (
    <div className="work">
      <div className="work__menu">
        <div className={curTag === 'ALL' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('ALL')}>ALL</div>
        <div className={curTag === '3D' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('3D')}>3D</div>
        <div className={curTag === 'VIDEO' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('VIDEO')}>VIDEO</div>
        <div className={curTag === 'MOTION' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('MOTION')}>MOTION</div>
        <div className={curTag === 'UI/UX' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('UI/UX')}>UI/UX</div>
        <div className={curTag === 'GRAPHIC' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('GRAPHIC')}>GRAPHIC</div>
        <div className={curTag === 'BRANDING' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('BRANDING')}>BRANDING</div>
        <div className={curTag === 'ILLUSTRATION' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('ILLUSTRATION')}>ILLUSTRATION</div>
        <div className={curTag === 'PRODUCT' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('PRODUCT')}>PRODUCT</div>
      </div>
      <div /> {/* 태그 및에 있는 라인 */}
      <div className="work__section">
        {
          Object.values(data).map(d =>
            <WorkItem imageURL={d.imageURL} title={d.title} author={d.author} />
          )
        }
        {
          Object.values(data).map(d =>
            <WorkItem imageURL={d.imageURL} title={d.title} author={d.author} />
          )
        }
        {
          Object.values(data).map(d =>
            <WorkItem imageURL={d.imageURL} title={d.title} author={d.author} />
          )
        }
      </div>
    </div>
  );
}

export default Work;