import React from 'react'
import Layout from '../../components/Layout'

import {useState, useEffect, useRef} from 'react'
import { Link } from 'gatsby'
//import requests from "../../requests";
//import axio from '../../axios';
import PagesData from '../../components/PagesData'

//import axios from 'axios'
import Pagination from "../Pagination"
//import { initializeApp } from "firebase/app";
import 'firebase/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Loadings from '../../components/Loadings'
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation , Trans} from 'react-i18next';
import Language from "../Language";
import i18n from "../../components/i18n";
import { useAuth } from '../../Accounts/useAuth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faDownload, faHeart, faSave } from "@fortawesome/free-solid-svg-icons";

const firebaseConfig7 = {
  apiKey: "AIzaSyBL9EyNItdif__jADl2m8rx5TFMBXFl6NE",
  authDomain: "zenaitsworld.firebaseapp.com",
  projectId: "zenaitsworld",
  storageBucket: "zenaitsworld.appspot.com",
  messagingSenderId: "752059821465",
  appId: "1:752059821465:web:a892347312cbfad858f708",
  measurementId: "G-GEMHBSGYPY"

};
const firebaseConfig16195 = {
  // Your Firebase configuration here
  apiKey: "AIzaSyDiegssGy9vROHCfVsCDNrPCJrbilonB-U",

  authDomain: "compo-57c97.firebaseapp.com",

  databaseURL: "https://compo-57c97-default-rtdb.firebaseio.com",

  projectId: "compo-57c97",

  storageBucket: "compo-57c97.appspot.com",

  messagingSenderId: "475037571261",

  appId: "1:475037571261:web:9db4f4bdd540a72bbb3fd4"

};

const firebaseConfig14124 = {

  apiKey: "AIzaSyBh8ygMi8nTJ7WVcA9amKSwABs_NzJZQk4",

  authDomain: "chatszen.firebaseapp.com",

  databaseURL: "https://chatszen-default-rtdb.firebaseio.com",

  projectId: "chatszen",

  storageBucket: "chatszen.appspot.com",

  messagingSenderId: "83570132385",

  appId: "1:83570132385:web:b9d0772699726c7bb4f7e0",

  measurementId: "G-4S4BTTXP48"

};


export default function Sports() {


  const { user, loading,signOut } = useAuth();


  firebase.initializeApp(firebaseConfig7, 'app7');
  const app7 = firebase.app('app7');


  useEffect(() => {
    AOS.init();
  }, [])

const [saved, setSaved] = useState([])







firebase.initializeApp(firebaseConfig14124, 'app1312');

const app1212 = firebase.app('app1312')

const databaseSavedNews = app1212.database();
const savedItemsRef = user && databaseSavedNews.ref(`savedNews/${user.uid}`);


const app1919 = firebase.initializeApp(firebaseConfig16195, 'app1819');
const database = app1919.database();



function saveit(item, urls) {
const dats = urls;
const val = item.title.replace(/[.#$\[\]]/g, " ");

const isSaved = saved[val] || false;


setSaved({
  ...saved,
  [val]: !isSaved,
});



const sanitizedLink = dats.replace(/[.#$[\]]/g, '_');
database.ref(sanitizedLink).on('value', (snapshot) => {
  const snap = snapshot.val();

  savedItemsRef.child(val).once('value', (snapshot) => {
  
    if(snapshot.exists()){
    savedItemsRef.child(val).remove();

  } else {
    savedItemsRef.child(val).set(snap);

  }

})
});

}





useEffect(() => {
if (!savedItemsRef) {
  return;
}

const onDataChange = (snapshot) => {
  const savedData = snapshot.val();
  if (savedData) {
    const titles =  savedData;
    setSaved(titles);
  } else {
    setSaved({});
  }
};

savedItemsRef.on('value', onDataChange);

return () => {
  savedItemsRef.off('value', onDataChange);
};
} ,[user]);

const isBloged = useRef(true)

  
/*

  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

  const vr = "http://localhost:8080/"
  const API_KEY = "94044cd2f55546cc9a5703814c9ca1a6";
  const date = new Date().toISOString().slice(0, 10);
  const dats = `https://newsapi.org/v2/everything?q=Entertainment&from=${date}&sortBy=popularity&apiKey=${API_KEY}`;

// Setup Firebase realtime for data Realtime Database
  
  async function getContent(url) {
    try {
      // Use the CORS proxy to make the request to the News API
      const response = await axios.get(url);
  
      // Return the data from the News API
      return response.data.articles;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  async function updateDatabase(link) {
  
    try {
      // Clear the existing data in the database
      await firebase.database().ref('Entertainment').remove();

      // Fetch the new data
      const articles = await getContent(link);
  
      // Iterate over the articles and set them to the Firebase database
      articles.forEach(article => {
        const key = firebase.database().ref('Entertainment').push().key;
  
        firebase.database().ref('Entertainment').child(key).update({
              title: article.title,
              description: article.description,
              urlToImage: article.urlToImage,
              content: article.content,
              publishedAt: article.publishedAt,
              url: article.url
            });
      })
        } catch (error) {
          console.error(error);
        }
  }
  
  
  
  useEffect(() => {
    updateDatabase(dats);
  
  }, []);  
   */
  //End of settingup realtime firebase 
  const [news, setNews] = useState();

  useEffect(() => {
    app7.database().ref('Sports').on('value', snapshot => {
      setNews(snapshot.val());

    })
    },[]) ;

    const [itemsPerPage] = useState(40); // number of items to display per page
    const [currentPage, setCurrentPage] = useState(1); // current page number
    const totalPages = news ? Math.ceil(Object.keys(news).length / itemsPerPage) : 0;
    console.log(`totalpages ${totalPages}`)
    console.log(`currentPages ${currentPage}`)
    console.log(`itemsperpage ${itemsPerPage}`)

  
  // Method for handling page changes
  const handlePageChange = (page) => {
    if (page <= totalPages) {
      setCurrentPage(page);
    }
  };


  
  // Get the news items for the current page
  const currentNews = news && Object.values(news).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage )
  


  // Get the news items for the current page
  const [da, setda] = useState('Ent')
 
  const [off, setoff] =  useState(false);
 



  function locale(ne){

    setda(ne)
     /* localStorage.setItem('data', JSON.stringify(ne)) */
    setoff(true)
    //localStorage.setItem('data', JSON.stringify(ne))
   
    }
    
    const [lang, setLang] = useState("");
  const [language, setLanguage] = useState("");

 const [lag,setLag] = useState('')
 const [la,setLa] = useState('')

 console.log(`$the object is as ${lag}`)
const [v , setv] = useState()
useEffect(() => {
  // Only run the effect if the user object is defined
  if (user) {
    app7.database().ref(`users/${user.uid}`).on('value', snapshot => {
      console.log(JSON.stringify(snapshot.val()))
      if (!snapshot.val()) {
        setLag(true);
        console.log("Snapshot value is null or undefined");
        return;
      }
      setLag(false);
      // check if snapshot.val() is an object
      if(typeof snapshot.val() === 'object'){
        const val = snapshot.val();
        i18n.changeLanguage(val.language);
      } else {
        i18n.changeLanguage(snapshot.val());
      }
    });
  }
}, [user]);

function handleLanguageChange(event) {
  const newLanguage = event.target.value;
  setLanguage(newLanguage);
  i18n.changeLanguage(newLanguage);


  app7.database().ref(`users/${user.uid}`).set({ language: newLanguage })


 // localStorage.setItem('lag', JSON.stringify(newLanguage));
}

const [light,setLight ] = useState(false)

    
const [dark, setDark] = useState(false)     

    
  
    if(!news){
      return <Loadings  head ={<Trans>Sports</Trans>}  />
    }

  return (
    <Layout isBloged={isBloged} setDark={setDark} setLight={setLight} light={light} lag={lag} off={off} handleLanguageChange ={handleLanguageChange} language={language}>
     
 
    <PagesData light={light} setLight= {setLight} off={off} setoff={setoff}  da={da} />

  


<div className={ `content-wrapper ${light && "back"}  `}>
         <div className="container">
           <div className="col-sm-12">
             <div className="card" data-aos="fade-up">
               <div  className={`card-body  ${light && "backframe"} `}>
                 <div className="row">
                   <div className="col-sm-12">
                     <h1 className="font-weight-600 mb-4">
                 SPORTS
                     </h1>
                   </div>
                 </div>

                 <div className="row">
                   <div className="col-lg-8">

                   {currentNews && currentNews.slice(0, 10).map((newss, index) => ( 
                     <div  key={index} className="row">
                       <div className="col-sm-4 grid-margin">
                         <div className="rotate-img" onClick={() => locale(newss.url)}>
                           <img
                             src={newss.urlToImage}
                             alt="banner"
                             className="img-fluid"
                             onClick={() => locale(newss.url)}
                           />
                         </div>
                       </div>
                       <div className="col-sm-8 grid-margin">
                         <h2 className="font-weight-600 mb-2" onClick={() => locale(newss.url)}>
                         {newss.title.length > 30 ? newss.title.slice(0, 33) : newss.title }
                         </h2>
                         <p className="fs-13 text-muted mb-0">
                           <span className="mr-2">Photo </span>10 Minutes ago
                         </p>
                         <button 
       onClick={() => saveit(newss, newss.url)}
       style={{
         color: saved[newss.title] ? "tomato" : "yellowgreen",
         border: "none",
         width: "fit-content",
         height:"fit-content"
       }}
     ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[newss.title] ? "tomato" :  "yellowgreen"}} /> {saved[newss.title] ? 'saved' : "save"} </button>   

                         <p className="fs-15" onClick={() => locale(newss.url)}>
                         {newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g, '').length >= 120 ? newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g, '').slice(0, 110) : newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g, '')}

                         </p>
                       </div>
                     </div>
                   ))}

                   {currentNews && currentNews.slice(10, 20).map((newss, index) => (
                     <div  key={index} className="row">
                       <div className="col-sm-4 grid-margin">
                         <div className="rotate-img" onClick={() => locale(newss.url)}>
                           <img
                             src={newss.urlToImage}
                             alt="banner"
                             className="img-fluid"
                             onClick={() => locale(newss.url)}
                           />
                         </div>
                       </div>
                       <div className="col-sm-8 grid-margin">
                         <h2 className="font-weight-600 mb-2" onClick={() => locale(newss.url)}>
                         {newss.title.length > 30 ? newss.title.slice(0, 33) : newss.title }
                         </h2>
                         <p className="fs-13 text-muted mb-0">
                           <span className="mr-2">Photo </span>10 Minutes ago
                         </p>
                         <button 
       onClick={() => saveit(newss, newss.url)}
       style={{
         color: saved[newss.title] ? "tomato" : "yellowgreen",
         border: "none",
         width: "fit-content",
         height:"fit-content"
       }}
     ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[newss.title] ? "tomato" :  "yellowgreen"}} /> {saved[newss.title] ? 'saved' : "save"} </button>  
                         <p className="fs-15" onClick={() => locale(newss.url)}>
                         {newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g, '').length >= 120 ? newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g, '').slice(0, 110) : newss.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g, '')}

                         </p>
                       </div>
                     </div>

                   ))}
                   </div>


                   <div className="col-lg-4">
                     <h2 className="mb-4 text-primary font-weight-600">
                       Latest news
                     </h2>
                     {currentNews && currentNews.length >= 20 && currentNews.slice(20,30).map((newss, index) => (

                     <div  key={index} className="row">
                       <div className="col-sm-12">
                         <div className="border-bottom pb-4 pt-4">
                           <div className="row">
                             <div className="col-sm-8">
                               <h5 className="font-weight-600 mb-1" onClick={() => locale(newss.url)} >
                               {newss.title.length > 30 ? newss.title.slice(0, 33) : newss.title }
                               </h5>
                               <p className="fs-13 text-muted mb-0">
                                 <span className="mr-2">Photo </span>10 Minutes ago
                               </p>
                               <button 
       onClick={() => saveit(newss, newss.url)}
       style={{
         color: saved[newss.title] ? "tomato" : "yellowgreen",
         border: "none",
         width: "fit-content",
         height:"fit-content"
       }}
     ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[newss.title] ? "tomato" :  "yellowgreen"}} /> {saved[newss.title] ? 'saved' : "save"} </button>  
                             </div>
                             <div className="col-sm-4">
                               <div className="rotate-img" onClick={() => locale(newss.url)}>
                                 <img
                                   src={newss.urlToImage}
                                   alt="banner"
                                   className="img-fluid"
                                   onClick={() => locale(newss.url)}
                                 />
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     ))}

                     <div className="trending">
                       <h2 className="mb-4 text-primary font-weight-600">
                         Trending
                       </h2>
                       {currentNews &&   currentNews.slice(30, 40).map((newss, index) => (

                       <div  key={index} className="mb-4">
                         <div className="rotate-img" onClick={() => locale(newss.url)}>
                           <img
                             src={newss.urlToImage}
                             alt="banner"
                             className="img-fluid"
                             onClick={() => locale(newss.url)}
                           />
                         </div>
                         <h3 className="mt-3 font-weight-600" onClick={() => locale(newss.url)}>
                         {newss.title.length > 30 ? newss.title.slice(0, 33) : newss.title }
                         </h3>
                         <p className="fs-13 text-muted mb-0">
                           <span className="mr-2">Photo </span>10 Minutes ago
                         </p>
                         <button 
       onClick={() => saveit(newss, newss.url)}
       style={{
         color: saved[newss.title] ? "tomato" : "yellowgreen",
         border: "none",
         width: "fit-content",
         height:"fit-content"
       }}
     ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[newss.title] ? "tomato" :  "yellowgreen"}} /> {saved[newss.title] ? 'saved' : "save"} </button>  
                       </div>

                       ))}
                       <Pagination  totalPages = {totalPages} currentPage ={currentPage} handlePageChange ={handlePageChange}/>

                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <Pagination  totalPages = {totalPages} currentPage ={currentPage} handlePageChange ={handlePageChange}/>

       </Layout>
    
  )
}

export const Head = () => <title>SPORTS</title>