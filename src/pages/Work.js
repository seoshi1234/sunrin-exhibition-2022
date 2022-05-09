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
        setData(props.data.filter((d) => d.tag.includes('3D')));
        break;
      case 'VIDEO':
        setData(props.data.filter((d) => d.tag.includes('VIDEO')));
        break;
      case 'MOTION':
        setData(props.data.filter((d) => d.tag.includes('MOTION')));
        break;
      case 'UI/UX':
        setData(props.data.filter((d) => d.tag.includes('UI/UX')));
        break;
      case 'GRAPHIC':
        setData(props.data.filter((d) => d.tag.includes('GRAPHIC')));
        break;
      case 'BRANDING':
        setData(props.data.filter((d) => d.tag.includes('BRANDING')));
        break;
      case 'ILLUSTRATION':
        setData(props.data.filter((d) => d.tag.includes('ILLUSTRATION')));
        break;
      case 'PRODUCT':
        setData(props.data.filter((d) => d.tag.includes('PRODUCT')));
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
          Object.values(data).map((d,i) =>
            <WorkItem key={i} imageURL={d.imageURL} title={d.title} author={d.author} />
          )
        }
        {
          Object.values(data).map((d,i) =>
            <WorkItem key={i} imageURL={d.imageURL} title={d.title} author={d.author} />
          )
        }
        {
          Object.values(data).map((d,i) =>
            <WorkItem key={i} imageURL={d.imageURL} title={d.title} author={d.author} />
          )
        }
      </div>
    </div>
  );
}

export default Work;