import React from 'react';
import './WorkItem.css';
import { Link } from 'react-router-dom';

function WorkItem(props) {
  return (
    <div className="work-item">
      <Link to={'/work/' + props.title}><img className="work-item__image" src={props.imageURL} /></Link>
      <Link to={'/work/' + props.title} className="work-item__title">{props.title}</Link>
      <Link to={'/work/' + props.author} className="work-item__author">{props.author}</Link>
    </div>
  );
}

export default WorkItem;