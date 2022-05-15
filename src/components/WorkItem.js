import React from 'react';
import './WorkItem.css';
import { Link } from 'react-router-dom';

function WorkItem(props) {
  return (
    <div className="work-item">
      <Link to={'/work/' + props.title}><div className="work-item__image" style={{'backgroundImage':`url(${props.thumnail})`}}/></Link>
      <Link to={'/work/' + props.title} className="work-item__title">{props.title}</Link>
      <Link to={'/work/' + props.author} className="work-item__author">{props.author}</Link>
    </div>
  );
}

export default WorkItem;