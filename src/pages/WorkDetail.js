import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './WorkDetail.css';

function WorkDetail(props) {
  const { title } = useParams();
  const [data, setData] = useState(props.data);
  
  useEffect(() => {
    setData(props.data.filter((d) =>
      d.title === title
    ));
  }, [])

  return (
    <div className="work_detail">
      <img src={data[0].imageURL} />
      <div>{data[0].title}</div>
      <div>{data[0].author}</div>

    </div>
  )
}

export default WorkDetail;