import React, {useState,useEffect} from 'react';
import WorkItem from '../components/WorkItem';
import './Work.css';

function Work(props) {

  
  
  const [curTag, setTag] = useState('ALL');  
  const [data, setData] = useState(props.data);
  
  useEffect(()=>{
    window.scrollTo(0, 0);
    onChangeTag(props.lastTag);
  },[])

  

  const onChangeTag = (tag) => {
    setTag(tag);
    filterTag(tag);
    props.setLastTag(tag);
  };

  const filterTag = (curTag) => {
    switch (curTag) {
      case '3D':
        setData(props.data.filter((d) => d.tag.includes('3D')));
        break;
      case 'GRAPHIC DESIGN':
        setData(props.data.filter((d) => d.tag.includes('GRAPHIC DESIGN')));
        break;
      case 'ILLUSTRATION':
        setData(props.data.filter((d) => d.tag.includes('ILLUSTRATION')));
        break;
      case 'PRODUCT & BRANDING':
        setData(props.data.filter((d) => d.tag.includes('PRODUCT & BRANDING')));
        break;
      case 'VIDEOGRAPHY':
        setData(props.data.filter((d) => d.tag.includes('VIDEOGRAPHY')));
        break;
      case 'UI/UX':
        setData(props.data.filter((d) => d.tag.includes('UI/UX')));
        break;
      case 'ETC':
        setData(props.data.filter((d) => d.tag.includes('ETC')));
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
        <div className={curTag === 'GRAPHIC DESIGN' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('GRAPHIC DESIGN')}>GRAPHIC DESIGN</div>
        <div className={curTag === 'ILLUSTRATION' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('ILLUSTRATION')}>ILLUSTRATION</div>
        <div className={curTag === 'PRODUCT & BRANDING' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('PRODUCT & BRANDING')}>PRODUCT & BRANDING</div>
        <div className={curTag === 'UI/UX' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('UI/UX')}>UI/UX</div>
        <div className={curTag === 'VIDEOGRAPHY' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('VIDEOGRAPHY')}>VIDEOGRAPHY</div>
        <div className={curTag === 'ETC' ? 'work__menu-tag selected' : 'work__menu-tag'} onClick={() => onChangeTag('ETC')}>ETC</div>
      </div>
      <div /> {/* 태그 및에 있는 라인 */}
      <div className="work__section">
        {

          Object.values(data).map((d,i) =>
            d.thumnail != "" ?
            <WorkItem key={i} thumnail={d.thumnail} title={d.title} author={d.author} curTag={curTag}/>
            :
            <></>
          )
        }
      </div>
    </div>
  );
}

export default Work;