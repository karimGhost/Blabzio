import React, { useEffect, useState, useRef } from 'react'
//import 'firebase/auth';
import 'firebase/database';
import Form from 'react-bootstrap/Form';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle, FaEnvelope, FaEye, FaEyeSlash, FaThinkPeaks, FaEarlybirds, FaBug, FaDragon } from 'react-icons/fa';
import ForgotPassword from './ForgotPassword';
import GoogleSignIn from './GoogleSignIn';
import { useAuth } from './useAuth';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import "../styles/PasswordDemo.css"
import { Button } from 'primereact/button';
import { FaCrow } from 'react-icons/fa';
import { Row } from 'primereact/row';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import img from '../images/1558314.jpg'
import{
faSun,faG, faEye, faEyeSlash
  } from '@fortawesome/free-solid-svg-icons';
  import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../pages/ProfilePage/ProfileSettup';
import { Col } from 'react-bootstrap';
import { size } from 'lodash';
import ZenaAccSignUp from './ZenaAccSignUp';
import randomstring from 'randomstring';

const firebaseConfig2 = {
  apiKey: "AIzaSyAM5p7O6YuAvCxfDCbR48Duz019qkoVp0Y",

  authDomain: "itsmynodezena.firebaseapp.com",

  databaseURL: "https://itsmynodezena-default-rtdb.firebaseio.com",

  projectId: "itsmynodezena",

  storageBucket: "itsmynodezena.appspot.com",

  messagingSenderId: "299392955521",

  appId: "1:299392955521:web:ef5671ad2702d441304980"


};

function ZenaAcc(props) {

  const msgs = useRef("");




  firebase.initializeApp(firebaseConfig2, 'app05');
  const app05 = firebase.app('app05');
  
  const { user, setUser } = useAuth();
  
  const [appInitialized, setAppInitialized] = useState(false);
  const [app, setApp] = useState();
  
  useEffect(() => {
    if (!appInitialized) {
      firebase.initializeApp(firebaseConfig2, 'app05');
      setApp(firebase.app('app05'));
      setAppInitialized(true);
    }
  }, [appInitialized]);

  const [userData, setUserData] = useState({ username: '', email: '' });

  function GoogleS() {
    const provider = new firebase.auth.GoogleAuthProvider();
    app05.auth().signInWithPopup(provider)
      .then(result => {
        const gmailUsername = result.user.displayName;
        const gmailEmail = result.user.email;
  
        const normalizedUsername = gmailUsername.trim().toLowerCase();
        const normalizedEmail = gmailEmail.trim().toLowerCase();
  
        const usersRef = app05.database().ref('profile');
  
        // Check if the user already exists
        usersRef.once('value', snapshot => {
          const users = snapshot.val();
  
          if (!users && result.user.uid) {
            app05.database().ref('profile/' + result.user.uid).set({
              username: normalizedUsername,
              email: normalizedEmail,
              text: "<div>Hello World!</div>",
              status: "Write something here...",
              followers: "1",
              following: "1",
              side: 'to bottom',
              colors: ["ghostwhite"],
            });
  
          } else if (users) {
            let existingUserKey = Object.keys(users).find(key => users[key].email === normalizedEmail);
  
            if (existingUserKey) {
              // User already exists, handle accordingly
              console.log('User already exists:', users[existingUserKey]);
  
              const existingUser = users[existingUserKey];
  
              // Check if the user has an existing username
              if (existingUser.username) {
                return;
              } else {
                usersRef.child(existingUserKey).update({
                  username: normalizedUsername,
                  text: "<div>Hello World!</div>",
                  status: "Write something here...",
                  followers: "1",
                  following: "1",
                  side: 'to bottom',
                  colors: ["ghostwhite"],
                });
              }
            } else {
              app05.database().ref('profile/' + result.user.uid).set({
                username: normalizedUsername,
                email: normalizedEmail,
                text: "<div>Hello World!</div>",
                status: "Write something here...",
                followers: "1",
                following: "1",
                side: 'to bottom',
                colors: ["ghostwhite"],
              });
              
            }
          } else {
            const password = randomstring.generate({
              length: 12, // specify the desired length of the password
              charset: 'alphanumeric', // include both letters and numbers
            });
  
            console.log(password);
            // Create a new user and save user data
            app05.auth().createUserWithEmailAndPassword(gmailEmail, password)
              .then(userCredential => {
                const newUser = userCredential.user;
  
                app05.database().ref('profile/' + newUser.uid).set({
                  username: normalizedUsername,
                  email: normalizedEmail,
                  text: "<div>Hello World!</div>",
                  status: "Write something heree...",
                  followers: "1",
                  following: "1",
                  side: 'to bottom',
                  colors: ["ghostwhite"],
                });
                setUser(result.user);
              })
              .catch(error => {
                // Handle error while creating a new user
              });
          }
        });
      })
      .catch(error => {
        setUser(null);
      });
  }
  
  
  const [sta, setsta] = useState(false);
  const [showed, setShowed] = useState(false);

  const [use, setUse] = useState(true)


  const [Logindata,setLoginData] = useState({
    user2: '',
    pass3: ''
  });

 
 
  

  const [user2, setUser2] = useState('');
   const [vv, setvv] = useState(false)
  useEffect(() =>{
    let userData = localStorage.getItem('user');
    if(userData){
      let js = userData;
    const jj = js.slice(0, 5)
    console.log(jj)
      // Use the parsed data here
    
}
    }, [])
  
    const [value3,setValue3] = useState('');

  function Logins({event}){

    const logs = event.target.value;
    setLoginData(pre => {
      return{
        ...pre,
        user2: logs.user2,
        pass3: logs.pass3
      }
    })
  }


console.log(Logindata)
const [pass, setpass] = useState("password")
 const [eye, setEye] = useState(true);
 const [type, setType] = useState(false);

const Eye = () => {
  if(pass == "password"){
    setpass("text");
    setEye(false);
    setType(true)
  }else{

    setpass("password");
    setEye(true);
    setType(false)
}
}

const [error, setError] = useState('');

const [person, setPerson] = useState('')

function handleSubmit(event){
  event.preventDefault();
  const form = event.target;
  const user2 = form.elements.formControlLg.value;
  const pass3 = form.elements.formControl.value;


  if (!user2) {

    msgs.current.show(
      { severity: 'warn', summary: 'Warning', detail: 'User field is required',   life:3000 }
  );
 



  }


    if (!pass3) {

      msgs.current.show(
        { severity: 'warn', summary: 'Warning', detail: 'Password field is required',   life:3000 }
    );
   
     
    
  
    return;
  }
  setError('');

  // Check if the user2 is an email address
  if (/\S+@\S+\.\S+/.test(user2)) {
    // Authenticate using email
    app05.auth().signInWithEmailAndPassword(user2, pass3)
      .then((userCredential) => {
        // User authenticated
        const user = userCredential.user;
        console.log("User authenticated with email:", user.email);
      })
      .catch((error) => {
        console.log(error);
        msgs.current.show(
          { severity: 'error', summary: 'Error', detail: 'An error occurred while signing in. Please check your credentials and try again.',  life:3000 }
      );
     
   
      });
  } else {
    // Normalize the username
    const normalizedUsername = user2.trim().toLowerCase();

    // Authenticate using username
    app05.database().ref('profile').orderByChild('username').equalTo(normalizedUsername).once('value')
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userId = Object.keys(snapshot.val())[0];
          const email = snapshot.val()[userId].email;

          app05.auth().signInWithEmailAndPassword(email, pass3)
            .then((userCredential) => {
              // User authenticated
             setPerson(userCredential.user);

              console.log("User authenticated with username:", normalizedUsername);

msgs.current.show(
{ severity: 'success', summary: 'Success', detail: `Welcome ${ normalizedUsername}`,   life:3000 })
})
            .catch((error) => {
              console.log(error);
             
            
if( msgs.current){
         msgs.current.show(
              { severity: 'error', summary: 'Error', detail: 'An error occurred while signing in. Please check your credentials and try again.',  life:3000 }) 
          } 
            });
          
        } else {

          msgs.current.show(
            { severity: 'error', summary: 'Error', detail: 'User not found. Please check your credentials and try again.',  life:3000 }

          )
        
        }
      })
      .catch((error) => {
        console.log(error);
        msgs.current.show(
          { severity: 'error', summary: 'Error', detail: 'An error occurred while signing in. Please check your credentials and try again.',   life:3000 }

        )
    
      
    if(error.code === 'auth/wrong-password'){
      msgs.current.show(
        { severity: 'error', summary: 'Error', detail: 'Password is incorrect.',   life:3000 }

      )
     
    } else if (error.code === 'auth/user-not-found'){
     
      msgs.current.show(
        { severity: 'error', summary: 'Error', detail: 'Email/User is incorrect.',   life:3000 }

      )

    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user2)) {
   
      msgs.current.show(
        { severity: 'error', summary: 'Error', detail: 'Please enter a valid email',   life:3000 }

      )
    }
        });
    }
  };
  
  ////
  
  
 




  return (


    <div className='container containersmall' onSubmit={handleSubmit} fluid>
      <Row className='d-flex' >
      <Toast ref = {msgs} />
  <div className='w-50'>
        <Col className='Cols' >
       
          <div className='d-flex flex-row ps-5 pt-5 '>
            <FaDragon  fas icon=" fa-3x me-3 " style={{color:"purple", divor: '#709085' }}/>
         


            <span className="h1 fw-bold mb-0" style={{color:"whitesmoke"}}  >Blab<b style={{color: "purple", fontFamily:"sans-serif"}}>Z</b>io </span>
          </div>
       
          <div className='d-flex flex-column justify-content-center h-custom-2 w-80 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}> {error ?   <p className="error-message">{error}</p> :  'Log in'}</h3>

<form onSubmit={handleSubmit}>
<InputGroup className="mb-3 ">
       


<Form.Control
          placeholder="User/Email"
          aria-label="User/Email"
          
          aria-describedby="basic-addon1" wrapperClass='mb-4 mx-5 w-100' label='Email/user' id='formControlLg'   type='text'   value={Logindata.user}
onChange={event => setLoginData(event.target.value)}  autoComplete='off'/>
  
      </InputGroup>
          

      <InputGroup className="mb-3 w-100">
      
      <Form.Control  placeholder="Password" 
       style={{position: "relative"}} wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControl' 
       type={pass} size="lg" className='pass3' value={Logindata.pass3} 
          onChange={event => setLoginData(event.target.value)}   autoComplete='off'  />
<FontAwesomeIcon style={{cursor: "pointer", position:"absolute", top: "35%", right: '25px', marginRight:"auto", zIndex:"20"}} onClick={Eye} icon={eye ? faEye : faEyeSlash}/> 


</InputGroup>

<Button style={{background: "rgb(20,21,21)", color: "white"}} className="mb-4 px-5 mx-3 " color='info' size='sm'  >Login</Button>



            </form>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" >Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <button  className='aquad' style={{cursor: "pointer", background: "none", border: "none", color:"aqua"}} onClick={() => props.setReady(false)} class="link-info">Register here</button></p>
            <div className="divider d-flex justify-content-center align-items-center w-75 my-4 mx-8">
            <p className="text-center mx-auto  fw-bold mx-5 mb-0">OR</p>
          </div>
         

          <Button onClick={GoogleS}  style={{backgroundColor: '#dd4b39', marginLeft:"-120px"}} className="mb-4 px-1 w-100 mx-1  w-100" color='info' size='lg' >


<FontAwesomeIcon  style={{fontWeight: "bold", fontSize:"2rem"}} className="text-bold px-2" icon={faG} /> signup with Google
</Button>
         
             
          </div>

          </Col>
</div>

        <Col sm='6' className='d-none d-sm-block pl-5 w-50' >
          <img src={img}
            alt="Login image" className="" style={{height: '120vh', maxHeight:" 100%",objectFit: 'cover', objectPosition:"right"}} />
        </Col>
     
      </Row>
    
    </div>
  );
}

export default ZenaAcc;