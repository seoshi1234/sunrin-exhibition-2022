import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './WorkDetail.css';

function WorkDetail(props) {
  const { title } = useParams();
  const [data, setData] = useState(props.data);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setImageLoaded(false);
    setData(props.data.filter((d) =>
      d.title === title
    ));
  }, [])


  return (
    <div className="detail">
      <div className="detail__content-wrapper">
        <div className="detail__author-info">
          <div>
            <div className="detail__title">{data[0]?.title}</div>
            <div className="detail__author">{data[0]?.author}</div>
            {
              data[0]?.authorInfo.map((info,i) => {
                return (<div key={i} className="detail__author-contact">{info}</div>)
              })
            }
          </div>
          <div>
            {
              data[0]?.authorImage.map((image,i) => {
                return (<div key={i} className="detail__author-image" 
                style={{backgroundImage:`url(${image})`}}></div>)
              })
            }
          </div>
        </div>
        <div className="detail__work-info">
          {            
            data[0]?.workInfo.split('\n').map((line, i) => (
              <span key={i}>
                  {line}
                  <br/>
              </span>
          ))
          }
        </div>
        <div className="detail__work">
          {
            data[0]?.workURL[0] ?             
              data[0].workURL.map((url,i) => {
                return (<iframe key={i} className="detail_work-iframe" src={url} scrolling ="no"></iframe>);
              })            
            :
            <></>
          }
          {
            data[0]?.workImage.map((image,i) => {
              return (<img key={i} className="detail__work-image" style={imageLoaded?{}:{display:'none'}} src={image} onLoad={()=>setImageLoaded(true)}></img>);
            })
          }
        </div>
      </div>
    </div>
  )
}

export default WorkDetail;