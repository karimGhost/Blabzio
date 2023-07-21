import { Link } from "gatsby"
import Layout from "../components/Layout"
import React, { useEffect, useState, useRef } from 'react';
import '../styles/index.css'
import axios from 'axios';
import $, { event }  from "jquery"
import Loadings from "../components/Loadings";
import imgs from "../images/sunrise.jpg"
import img from "../images/sunset.png"

import Cloud from './Cloud'
import PagesData from "../components/PagesData"
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Pagination from "./Pagination"
import { initializeApp } from "firebase/app";
import 'firebase/database';
//import { useTranslation , Trans} from 'react-i18next Data';
import Language from "./Language";
//import i18n from "../components/i18n";
import { useAuth } from '../Accounts/useAuth';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FaHotjar, FaViacoin } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faDownload, faHeart, faSave } from "@fortawesome/free-solid-svg-icons";
import 'pure-react-carousel/dist/react-carousel.es.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import nothumb from "../images/no-image.jpg"
import Stocks from "./Stocks";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut,FadeUp } from "react-scroll-motion";

const firebaseConfig0 = {
  apiKey: "AIzaSyBL9EyNItdif__jADl2m8rx5TFMBXFl6NE",
  authDomain: "zenaitsworld.firebaseapp.com",
  projectId: "zenaitsworld",
  storageBucket: "zenaitsworld.appspot.com",
  messagingSenderId: "752059821465",
  appId: "1:752059821465:web:a892347312cbfad858f708",
  measurementId: "G-GEMHBSGYPY"

};



     
const firebaseConfig1919 = {
  // Your Firebase configuration here
  apiKey: "AIzaSyDiegssGy9vROHCfVsCDNrPCJrbilonB-U",

  authDomain: "compo-57c97.firebaseapp.com",

  databaseURL: "https://compo-57c97-default-rtdb.firebaseio.com",

  projectId: "compo-57c97",

  storageBucket: "compo-57c97.appspot.com",

  messagingSenderId: "475037571261",

  appId: "1:475037571261:web:9db4f4bdd540a72bbb3fd4"

};

const firebaseConfig1212 = {

  apiKey: "AIzaSyBh8ygMi8nTJ7WVcA9amKSwABs_NzJZQk4",

  authDomain: "chatszen.firebaseapp.com",

  databaseURL: "https://chatszen-default-rtdb.firebaseio.com",

  projectId: "chatszen",

  storageBucket: "chatszen.appspot.com",

  messagingSenderId: "83570132385",

  appId: "1:83570132385:web:b9d0772699726c7bb4f7e0",

  measurementId: "G-4S4BTTXP48"

};




export default  function IndexPage()  {
  const { user, loading,signOut } = useAuth();
  const isBloged = useRef(true)
  ////data base update PAth Started
 
  firebase.initializeApp(firebaseConfig0, 'app0');
  const app0 = firebase.app('app0');


 firebase.initializeApp(firebaseConfig1212, 'app1212');

  const app1212 = firebase.app('app1212')

  useEffect(() => {
    AOS.init();
  }, [])



  const [isPlaying, setIsPlaying] = useState(true);

  const handleNext = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 5000);
  };



/*

  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

  const vr = "http://localhost:8080/"
  const API_KEY = "94044cd2f55546cc9a5703814c9ca1a6";
  const date = new Date().toISOString().slice(0, 10);
  const dats = `https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=${API_KEY}`;

  // Use a CORS proxy to bypass the CORS restrictions

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
    await firebase.database().ref('articles').remove();

    // Fetch the new data
    const articles = await getContent(link);

      // Iterate over the articles and set them to the Firebase database
        articles.forEach(article => {
      const key = firebase.database().ref('articles').push().key;

      firebase.database().ref('articles').child(key).update({
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
//data base update PAth Finised

const app1919 = firebase.initializeApp(firebaseConfig1919, 'app1919');
const database = app1919.database();

  const [data, setData] = useState(null);

  const databaseSavedNews = app1212.database();
  const savedItemsRef = user && databaseSavedNews.ref(`savedNews/${user.uid}`);

const [saved, setSaved] = useState([])



function saveIt(item, urls) {
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


const [lives, setLives] = useState([])

const apiToken = '1ef10a75c8cd42e893cabb664c484a68';
const apiUrl = 'https://api.football-data.org/v4/matches';

function  vaar(){
fetch(apiUrl, {
  headers: {
    'X-Auth-Token': apiToken,
  },
})
  .then(response => response.json())
  .then(data => {
    setLives(data)
    console.log("football datr",data);
  })
  .catch(error => {
    console.error('Error fetching live matches:', error);
  });
}

  const [location, setLocation] = useState('')

  const ur = `http://api.openweathermap.org/data/2.5/weather/?q=${location}&units=imperial&limit=1&appid=536e0c73b73421c0bd19b557f230e2e2`;

  const [isOpen, setIsOpen] = useState(true);

const currentHour = new Date().getHours();

const styled = {
    background: currentHour <= 16 ?  `url(${imgs})` :  `url(${img})`,
backgroundRepeat: 'norepeat',
backgroundPosition: 'center',
backgroundSize: 'cover',
boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.1)',

  }






  
  


  const [trendin, setTrendings] = useState(null);


  const [trendit, setTrendingst] = useState(null);
  const [trendib, setTrendingsb] = useState(null);
  const [trendiT, setTrendingsT] = useState(null);
  const [loaded, setLoaded] = useState(false)



 
  const [dark,setDark] = useState(false)

  const [Loads, setLoads] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await app0.database().ref('Entertainment').once('value');
        const data = snapshot.val();

        const snapshotT = await app0.database().ref('articles').once('value');
        const snapshotb = await app0.database().ref('Business').once('value');
        const snapshotech = await app0.database().ref('Technology').once('value');

        const dataT = snapshotT.val();
        const datab = snapshotb.val();
        const datatech = snapshotech.val();

        if (data) {
          // Convert the object to an array and store it in the state
          const dataArray = Object.values(data);
          setTrendings(dataArray);
        }

        if (dataT && datab && datatech) {
          // Convert the object to an array and store it in the state
          const dataArrayT = Object.values(dataT);
          const dataArrayb = Object.values(datab);
          const dataArraytech = Object.values(datatech);

          setTrendingsT(dataArrayT)
          setTrendingsb(dataArrayb)
          setTrendingst(dataArraytech)
        }

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const trendings = trendin && trendin

  const  Technology = trendiT && trendiT    
  const business = trendib && trendib
  const trending = trendit && trendit   


    const [itemsPerPage] = useState(4); // number of items to display per page
    const [currentPage, setCurrentPage] = useState(1); // current page number
    const totalPages = trendings ? Math.ceil(Object.keys(trendings).length / itemsPerPage) : 0;
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
  const currentNews = trendings && Object.values(trendings).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage )
  const currentNewT = trending && Object.values(trending).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage )
  const currentNewB = business && Object.values(business).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage )
  const currentNewt = Technology && Object.values(Technology).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage )
  
const [local,setlocal] = useState(false)
const [da, setda] = useState(null);
const [off, setoff] =  useState(false);





 const [lang, setLang] = useState("");
  const [language, setLanguage] = useState("");

 const [lag,setLag] = useState('')
 const [la,setLa] = useState('')

 console.log(`$the object is as ${lag}`)
const [v , setv] = useState()

 
       
  //const compo = <MyComponent  dats ={da} />

//const regex = '/^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?$/';


/*
  
  if (!trendings) {
    return <div style={{color: "black", fontSize: "3rem", justifySelf:"center", textAlign: "center", fontWeight: "bold"}}>Getting there ... Please wait!</div>;
      }
    
  */
 const [datas, setdata] = useState({})

  const searchLocation = (event) => {

    if(event.key === 'Enter' ) {
      axios.get(ur).then((response) => {
        setdata(response.data)
    console.log(response.data)
      })
      setLocation('')
    
    }
  }
  
  
  console.log(datas)

  const isBrowser = typeof window !== "undefined";

  if(isBrowser){

    window.setInterval(rollback, 10000);
    
    function rollback(){
      
      let first =  $("#caro").find("div:first");
      
      let width = first.width();
      
      first.animate({marginLeft: -width}, 6000, function(){
       
        let last = $("#caro").find("div:last");
       
        last.after(first);
       
        first.css({marginLeft: 0})
    })
      
    }
    
  }

  const [light,setLight ] = useState(false)

/*
if(!news){
  return(
    <div>...Getting ready,Please Be Patient</div>
  )
  }
*/







if(!trendin){
  return <Loadings head={<>News</>} />
}

if(!Loads){
  return <Loadings  head ={<></>}  />

}

const handleLanguageChange = () => {

}





function locale(ne){

setda(ne)
 /* localStorage.setItem('data', JSON.stringify(ne)) */
setoff(true)

handleNext()
//localStorage.setItem('data', JSON.stringify(ne))
setlocal(pre => !pre);
  }


  return (
    <Layout  isBloged={isBloged} setDark={setDark} setLoads={setLoads} light={light} setLight= {setLight}  className="container-scroller" off={off} lag={lag} trendings = {trendings} handleLanguageChange ={handleLanguageChange} language={language}>


<PagesData light={light} setLight= {setLight} off={off} setoff={setoff}  da={da} />



<div style={{marginTop: "px"}} className="main-panel">
      <div className="">
        <Cloud />
       
           
       {/* partial */}
      
      
      
      <div  className={ `content-wrapper ${light && "back"}  `}>
        
        <div    className=" container" >

 <div style={{borderRadius: "10px"}}>
 
          
            <div className="row" >  
              <div style={{borderRadius: "10px"}} className="col-xl-8 stretch-card grid-margin ">
                <div className="card"  style={{borderRadius: "10px"}}>

 <div style={{borderRadius: "10px"}}
 className={`banner-content col-xl-12 card-body cont ${light && "backframe"}  position-relative `}>

          
                    <CarouselProvider 
                  
                    className={`heigh ${light && "backframe"}`}  
  style={{
    backgroundColor:  light ? "rgb(20,21,21)" : '#fff',
    padding: '1px',
    margin: '15px',
    boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.1)',
    overflowY:"hidden",
      
       borderTopLeftRadius: "15px",
       borderTopRightRadius:"15px",
       
    textAlign: "bottom",

  

  }}
  naturalSlideWidth={1}
  naturalSlideHeight={1}
  totalSlides={Object.keys(trending ? trending : '0').length}
  isPlaying={isPlaying}
  autoPlay
  interval={5000}>
    <div style={{  background: "black"}}>
           
                    <Slider>
        { Object.values(trending ? trending : "").map((news, index) => (     
       <Slide   
onClick={() => locale(news.url)}
key={index}


style={{
  backgroundImage: `url(${news.urlToImage})`,
  backgroundSize: 'contain',
  objectFit:"cover",
  backgroundRepeat: 'no-repeat',
 height:"500px",

 position:"relative"

}}
  className={`img-fluid heighimg vh-100 col-xl-8 `}
    index={index}
  >



  <figcaption className="bottoms" style={{position: "absolute",left: "10px", right: "10px",bottom:  "50%",  zIndex: "10"}}>

  <div   className="badge badge-danger    fs-12 font-weight-bold mb-3">
                     Trending news
                    </div>

    <h1 style={{textAlign:"center"}}  className="mt-20 color-dark">
      {news.title
        ? news.title.length > 20
          ? news.title.slice(0, 6) + '...'
          : news.title
        : news.title}
    </h1>

    <h1 style={{fontSize: "1.2rem"}} className="mb-2 s-13 color-dark">
    {news.content
        ? news.content.length > 100
          ? news.content.slice(0, 100) + '...'
          : news.content
        : news.content}...
      Read More
                    </h1>

                    <div  className="fs-12">
                      <span className="mr-2 mb-0 color-dark">Photo </span>{news.publishedAt > 13 ? news.publishedAt.slice(0, 10) : news.publishedAt}
                    </div>
  </figcaption>
</Slide>

        ))}




                    



             </Slider>   
        <ButtonBack onClick={handleNext} className="back-button"> <FontAwesomeIcon icon={faChevronLeft} /></ButtonBack>
<ButtonNext  onClick={handleNext}   lockOnWindowScroll  className="next-button">  <FontAwesomeIcon icon={faChevronRight} /></ButtonNext>

</div>
</CarouselProvider>



<div style={{padingTop:"20%",borderBottomLeftRadius:"10px",borderBottomRightRadius: "10px", color: "blue",left: "48px", right: "48px", bottom: "0",  background: "black",position:"absolute", zIndex: "5", overflow:"scroll"}} className="stock"> 
<Stocks/> 
 </div>  





                  </div>
                </div>

                 </div>
      


         


              <div className="col-xl-4 stretch-card grid-margin">

                <div className={`card ${light ? "backframe": "bg-dark"} text-white`}>
                  <div className="card-body">
                    <h2>Latest news</h2>

                    {currentNewT && currentNewT.map((newss, index) => (
        
      
       



        <div key={index}
        className={`d-flex hovered ${light ? "bottom-white" : "border-bottom-blue"}   pb-4 pt-4 align-items-center justify-content-between`} >
        <div className="pr-3 boxin">
        
          <h5 onClick={() => locale(newss.url)} >{newss.title.length > 30 ? newss.title.slice(0, 30) + '...' : newss.title }</h5>
          <div className="fs-12">
            <span className="mr-2">Photo </span> {newss.publishedAt}
          </div>
          <button 
        onClick={() => saveIt(newss, newss.url)}
        style={{
          color: saved[newss.title] ? "tomato" : "yellowgreen",
          border: "none"
        }}
      ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[newss.title] ? "tomato" :  "yellowgreen"}} /> {saved[newss.title] ? 'saved' : "save"} </button>  
        </div>
        <div className="rotate-img" onClick={() => locale(newss.url)} >
        <img id="colmg"  className="img-fluid img-lg g" src={newss.urlToImage ? newss.urlToImage : nothumb}  alt="thumb" onClick={() => locale(newss.url)} />
        
        
        </div>
        </div>
        
        
        
        
              ))}
                
                  </div>
                </div>
              </div>
              
              </div >
           

            

<div className={`content-wrapper ${light && "back"}`}>

  
                       <div  className="row  rounded"    data-aos='fade-up'> 


              <div className=" col-lg-3 stretch-card grid-margin">
                <div className="card">
                  <div className={`card-body ${light && "backframe" }`} >
                    <h2>Category</h2>
                 

                    <ul className="vertical-menu">
                    
                      <li><Link to="/news/Business">Business</Link></li>
                      <li><Link to="/news/">Entertainent</Link></li>
                      <li><Link to="/news/">Sports</Link></li>
                      <li><Link to="/news/">Technology</Link></li>
                      <li><Link to="/news/">Politics</Link></li>
                      <li><Link to="/news/">Trending</Link></li>
                      <li><Link to="/news/">Magazine</Link></li>
                      <li><Link to="/news/">Art</Link></li>
                      <li><Link to="/news/">Travel</Link></li>
                    </ul>
                   
                  </div>
                </div>
              </div>
            

             

             
  
                 
              <div className="col-lg-9 stretch-card grid-margin">
                <div className="card">
                  <div className={`card-body ${light && "backframe" }`}>

                  { currentNewt &&  currentNewt.map((newss, key) => (

                    <div  key={key} className="row hovered">
                      <div className="col-sm-4 grid-margin">
                        <div className="position-relative">
                          <div className="rotate-img" onClick={() => locale(newss.url)}>
                         
                       <img
                              src={newss.urlToImage ? newss.urlToImage : nothumb}
                              alt="thumb"
                              className="img-fluid"
                              onClick={() => locale(newss.url)}
                            />
                          </div>
                          <div className="badge-positioned">
                            <span className={` badge badge-dark ${light && "darks"} mb font-weight-bold`} > Zena updates</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8  grid-margin">
                        <h2 className="mb-2 font-weight-600" onClick={() => locale(newss.url)}>
                        {newss.title}
                        </h2>
                        <div className="fs-13 mb-2">
                          <span className="mr-2">Photo </span>{newss.publishedAt}
                        </div>
                        <button 
        onClick={() => saveIt(newss,newss.url)}
        style={{
          color: saved[newss.title] ? "tomato" : "yellowgreen",
          border: "none"
        }}
      ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[newss.title] ? "tomato" :  "yellowgreen"}} /> {saved[newss.title] ? 'saved' : "save"} </button>                         
       <p className="mb-0" onClick={() => locale(newss.url)}>
                        {newss.content}...Read More 
                        </p>
                        
                      </div>
                    </div>
))}


</div>
                </div>
                </div>
                </div> 
          
             

            </div>
 
                  
{/*  //////////////////////////////////////////////// */ }
                     


                
            


            <div className="row" data-aos='fade-up' >
              <div className="col-sm-12">
                <div className="card">
                  <div className={`card-body ${light && "backframe" }`}>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="card-title">
                          Spot light News
                        </div>
           
                        <div  className="row">


                          <div  className="col-xl-6 col-lg-8 col-sm-6">
                        
                            <div className="rotate-img" onClick={() => locale(currentNews && currentNews[1].url)}>
                              <img
                                src={currentNews && currentNews[1].urlToImage ? currentNews[1].urlToImage  : nothumb}
                                alt="thumb"
                                className="img-fluid"  onClick={() => locale(currentNews && currentNews[1].url)}/>
                            </div>

                            <h2 className="mt-3 text-primary mb-2" onClick={() => locale(currentNews && currentNews[1].url)}>
                            {currentNews && currentNews[1].title}

                            </h2>
                            <p className="fs-13 mb-1 text-muted" onClick={() => locale(currentNews && currentNews[1].url)}>
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </p>
                            <button 
        onClick={() =>currentNews &&  saveIt(currentNews[1],  currentNews[1].url)}
        style={{
          color: saved[currentNews[1].title] ? "tomato" : "yellowgreen",
          border: "none"
        }}
      ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[currentNews[1].title] ? "tomato" :  "yellowgreen"}} /> {saved[currentNews[1].title] ? 'saved' : "save"} </button>  
                            <p className="my-3 fs-15" onClick={() => locale(currentNews && currentNews[1].url)}>
                            {currentNews && currentNews[1].content}
                            </p>
                            <Link to="/" className="font-weight-600 fs-16 text-dark" >Read more</Link>
                        
                       
                          </div>
                                    

                       



                          <div className="col-xl-6 col-lg-4 col-sm-6">
                          { currentNewB &&  currentNewB.map((news, index) => (
                            <div   key={index} className="border-bottom pb-3 mb-3">
                              <h3 className="font-weight-600 mb-0" onClick={() => locale(news.url)}>
                              {news.title
        ? news.title.length > 10
          ? news.title.slice(0, 9) + '...'
          : news.title
        : news.title}.
                              </h3>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <button 
        onClick={() => saveIt(news, news.url)}
        style={{
          color: saved[news.title] ? "tomato" : "yellowgreen",
          border: "none"
        }}
      ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[news.title] ? "tomato" :  "yellowgreen"}} /> {saved[news.title] ? 'saved' : "save"} </button>  
                              <p className="mb-0" onClick={() => locale(news.url)}>
                              {news.content
        ? news.content.length > 20
          ? news.content.slice(0, 20) + '...'
          : news.content
        : news.content}.Read More
                              </p>

                            </div>
                          ))}

                          </div>
                        </div>
                      </div>
                 
                    


                      <div className="col-xl-6">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="card-title">
                              Sport light Celebrity
                            </div>

                       
                            <div className="border-bottom pb-3">
                              <div className="rotate-img"  onClick={() => locale( currentNewB &&  currentNewB[1].url)}>
                                <img
                                  src=   { currentNewB &&  currentNewB[1].urlToImage ? currentNewB[1] : nothumb}
                                  onClick={() => locale( currentNewB &&  currentNewB[1].url)}
                                  alt="thumb"
                                  className="img-fluid"
                                />

                              </div>
                              <p className="fs-16 font-weight-600 mb-0 mt-3"  onClick={() => locale( currentNewB &&  currentNewB[1].url)}>
                              { currentNewB &&  currentNewB[1].title >= 5 ?  currentNewB.title[1].slice(0, 10) + '...' :  currentNewB &&  currentNewB[1].title}

                              </p>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <button 
        onClick={() =>  currentNewB && saveIt( currentNewB[1],  currentNewB[1].url)}
        style={{
          color: saved[ currentNewB && currentNewB[1].title] ? "tomato" : "yellowgreen",
          border: "none"
        }}
      ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[currentNewB && currentNewB[1].title] ? "tomato" :  "yellowgreen"}} /> {saved[ currentNewB && currentNewB[1].title] ? 'saved' : "save"} </button>  
                            </div>
                           

                       

                            <div className="pt-3 pb-3" onClick={() => locale(currentNews && currentNews[3].url)}>
                              <div className="rotate-img">
                                <img
                                  src=  {currentNews && currentNews[3].urlToImage ? currentNews[3].urlToImage : nothumb}
                                  alt="thumb"
                                  className="img-fluid"
                                  onClick={() => locale(currentNews && currentNews[3].url)}
                                />
                              </div>
                              <p className="fs-16 font-weight-600 mb-0 mt-3">
                              {currentNews && currentNews[3].title >= 5 ? currentNews[3].title.slice(0, 10) + '...' : currentNews && currentNews[3].title}
                              </p>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <button 
        onClick={() =>currentNews && saveIt(  currentNews[3],  currentNews[3].url)}
        style={{
          color: saved[ currentNews[3].title] ? "tomato" : "yellowgreen",
          border: "none"
        }}
      ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[currentNews[3].title] ? "tomato" :  "yellowgreen"}} /> {saved[currentNews[3].title] ? 'saved' : "save"} </button>  
                            </div>


                       
                          </div>


                          <div className="col-sm-6">

                            <div className="card-title">
                              Celebrity news
                            </div>
                            { currentNewT &&  currentNewT.map((newss, index) => (

                            <div key={index} className="row hovered" >

                              <div className="col-sm-12">
                                <div className="border-bottom pt-3">
                                  <div className="row">
                                    <div className="col-sm-5 pr-2">
                                      <div className="rotate-img" onClick={() => locale(newss.url)}>
                                        <img
                                          src={newss.urlToImage ? newss.urlToImage : nothumb}
                                          alt="thumb"
                                          className="img-fluid w-100"
                                          onClick={() => locale(newss.url)}
                                        />
                                      </div>
                                    </div>

                                    <div className="col-sm-7 pl-2">
                                      <p className="fs-16 font-weight-600 mb-0" onClick={() => locale(newss.url)}>
                                      {newss.title
        ? newss.title.length > 10
          ? newss.title.slice(0, 9) + '...'
          : newss.title
        : newss.title}.
                                      </p>
                                      <p className="fs-13 text-muted mb-0">
                                        <span className="mr-2">Photo </span>10
                                        Minutes ago
                                      </p>
                                      <button 
        onClick={() => saveIt(newss, newss.url)}
        style={{
          color: saved[newss.title] ? "tomato" : "yellowgreen",
          border: "none"
        }}
      ><FontAwesomeIcon icon={faDownload} className="savedit" style={  { color: saved[newss.title] ? "tomato" :  "yellowgreen"}} /> {saved[newss.title] ? 'saved' : "save"} </button>  
                                      <p className="mb-0 fs-13" onClick={() => locale(newss.url)}>
                                      {newss.content
        ? newss.content.length > 20
          ? newss.content.slice(0, 20) + '...'
          : newss.content
        : newss.content}.Read More
                                      </p>
                                    </div>

                                  </div>
                                </div>
                              </div>
                          
                            </div>
                              ))}
                            </div>
                          
</div>
</div>
</div>

                        </div>
                      </div>
                    </div>
                   
          </div>
                 
                </div>
              </div>
         </div>
                 
      
       {/* main-panel ends */}
       {/* container-scroller ends */}

       {/* partial:partials/_footer.html */}
      
</div>
</div>


</Layout>
  )
};
    

export const Head = () => <title><>Home Page</></title>




                 
{/*
                           <div className="row" data-aos="fade-up">

              <div className="col-sm-12 grid-margin">


 <div className="card">
 <div className="card-body">
                    <div className="row">
                      <div className="col-lg-8">

                        <div className="card-title">
                          Vide
                        </div>
                        <div className="row">

                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_7.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>

                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >Lifestyle</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_8.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >National News</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="row">
                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_9.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >Lifestyle</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_10.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold"
                                    >National News</span
                                  >
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
................................ col vidd 2 ................................
                      <div className="col-lg-4">
                        <div
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div className="card-title">
                            Latest Video
                          </div>
                          <p className="mb-3">See all</p>
                        </div>

                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_11.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            Apple Introduces Apple Watch
                          </h3>
                        </div>

                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_12.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            SEO Strategy & Google Search
                          </h3>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_13.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            Cycling benefit & disadvantag
                          </h3>
                        </div>


                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_14.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600">
                            The Major Health Benefits of
                          </h3>
                        </div>



                        <div
                          className="d-flex justify-content-between align-items-center pt-3"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_15.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            Powerful Moments of Peace
                          </h3>
                        </div>
  </div>  
    </div>
              </div>
            </div>
 */}
                    
