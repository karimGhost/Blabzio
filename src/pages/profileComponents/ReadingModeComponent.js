import React, { useState, useEffect } from 'react';
import {  useLocation } from '@reach/router';
import MySaved from './MySaved';
import noImage from "../../images/no-image.jpg"
const ReadingModeComponent = ({location}) => {

  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const imageSrc = queryParams.get('imageSrc');
  const paragraphs = JSON.parse(queryParams.get('paragraphs'));

  const [newsSaved, setnewsSaved] = useState([])
  return (
   
    <div className="container">
      <div style={{display:"none"}}>
      {  /* <MySaved setnewsSaved={setnewsSaved} /> */ }
      </div>
      
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h2 className="text-center titled">{title}</h2>
        <img className="img-fluid" src={imageSrc || imageSrc ? imageSrc  : noImage} alt="Image" />
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>
    </div>
  </div>
  );
};

export default ReadingModeComponent;
