import React, { useEffect, useState } from 'react';
import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import 'firebase/database';


function MyComponent(props) {

  const firebaseConfig3 = {
    // Your Firebase configuration here
    apiKey: "AIzaSyDiegssGy9vROHCfVsCDNrPCJrbilonB-U",
  
    authDomain: "compo-57c97.firebaseapp.com",
  
    databaseURL: "https://compo-57c97-default-rtdb.firebaseio.com",
  
    projectId: "compo-57c97",
  
    storageBucket: "compo-57c97.appspot.com",
  
    messagingSenderId: "475037571261",
  
    appId: "1:475037571261:web:9db4f4bdd540a72bbb3fd4"
  
  };


  
  firebase.initializeApp(firebaseConfig3, 'app4');


  const app1 = firebase.app('app4');


  const database = app1.database();

  const [data, setData] = useState(null);


  const {dats} = props;

  /*
  const val1 = 'http://localhost:8080/'

const val2 = 'https://cors-anywhere.herokuapp.com/'
  async function getContent(url) {
    // Send a GET request to the website
   
    try {
      // Use the local CORS proxy to make the request
      const corsProxyUrl =  val1;
      const response = await axios.get(corsProxyUrl + url);

      // Load the HTML content into 
      const $ = .load(response.data);

      // Select the elements you want to extract data from
      const title = $('title').text();
      const paragraphs = $('p').map((i, element) => $(element).text()).get();
      const images = $('img').map((i, element) => $(element).attr('src')).get();
      // Return the data you extracted
      return {
        title,
        paragraphs,
        images
      };
    } catch (error) {
      console.error(error);
    }
  }

let ti = dats;
console.log(`this is the likkkk${ti}`)

  useEffect(() => {
    const link = dats;
    if (link) {
      const sanitizedLink = link.replace(/[.#\$\[\]]/g, '_');
      getContent(link).then(data => {
       
        const value = sanitizedLink || sanitizedLink.slice(0, 20).replace(':', '') ;
if(value && data !== undefined  ){
        // Save the data to the Realtime Database, replacing any previous data with the same name
        database.ref(value).set(data);      
}
      });
    }
  }, [dats]);

*/

  useEffect(() => {
    const link = dats;
    if (link) {

    const sanitizedLink = link.replace(/[.#\$\[\]]/g, '_');
    app1.database().ref(sanitizedLink).on('value', snapshot => {
     
      setData(snapshot.val());
    });
    }
    }, []) ;

   
   
  
    
 

  if (!data) {
    return <div style={{ fontSize:"3rem", color:"blue"}}>...Loading{dats}</div>;
  }
  const regex = /(https?:\/\/\S+)/; // regular expression to match a lik  console.log(`data ${data.images}`)
  return (
    <div  style={{margin: "auto"}}>
      <h1>{data.title}</h1>
      {/*data.images   ? <img className='pixyB' src={(data.images[0] && data.images[0].match('icon')) || 'icons' ? "" : data.images[6]} />: null  */}
      {/*data.images   ? <img className='pixyB' src={(data.images[2] && data.images[2].match('300')) || 'icons' ? "" : data.images[6]} />: null  */}
      {data.images   ? <img className='pixyB' src={ data.images[1] ? data.images[1]  : data.images[1] ? data.images[1] : data.images[2] ? data.images[2] : data.images[3] ? data.images[3] : "" } />: null  }

      {data.images   ? <img className='pixyB' src={ data.images ? data.images  : ""} />: null  }


      <p className='pixyP'> {data.paragraph}</p>
    {data.paragraphs ? data.paragraphs.map((paragraph, index) => {
      const match = paragraph.match(regex); // get the first link i the paragraph
      if (match) {
        const imageUrl = match[1]; // get the link from the match
        return <img className='pixyBig'  src={imageUrl} key={index} />;
      } else {
        return <p className='pixyP' key={index}>{paragraph}</p>;
      }
    }) :  ""} 
    </div>
  );
}

export default MyComponent;
