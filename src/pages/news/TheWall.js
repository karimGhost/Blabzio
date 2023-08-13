import React, {useEffect, useState} from 'react';

import VideoPlayer from './Videoplayer';

import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';

export default function TheWall() {

  return (


  <main style={{marginTop:"150px"}}>
    <Navbar />
    <button style={{position:"fixed", top:"110px",zIndex:"5", margin:"0 20%", left:"0", right: "0", borderRadius:"15px", }} >Record Video +</button>
    <div className='mtop width:"fit-content ", height:"fit-content ", marginTop:"50px"'>
        <VideoPlayer />

    </div>

    </main>

  )
}



export const Head = () => <title>TheWall</title>
