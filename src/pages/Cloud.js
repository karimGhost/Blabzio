import React from 'react'

/*

import React, { useEffect, useState } from 'react';
import { startTransition } from 'react-dom';
async function getContent(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const title = doc.querySelector('title').textContent;
    const paragraphs = Array.from(doc.querySelectorAll('p')).map((p) => p.textContent);
    return {
      title,
      paragraphs,
    };
  } catch (error) {
    console.error(error);
  }
}

function Cloud(props) {
  const [data, setData] = useState(null);
  const {url} = props;

  useEffect(() => {
    getContent(url).then((data) => {
      setData(data);
    });
  }, [url]);

 
  if (!data) {
    return <div>Loading...</div>;
  }

 
  return (
    <div>
      <h1>{data.title}</h1>
      {data.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Cloud;

*/


export default function Cloud() {
  return (
    <div>
      
    </div>
  )
}
