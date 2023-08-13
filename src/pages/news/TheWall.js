import React, {useEffect, useState} from 'react';

import VideoPlayer from './Videoplayer';

import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';

export default function TheWall() {

  return (


  <main style={{marginTop:"150px"}}>
    <Navbar />
    <button >Record Video +</button>
  <VideoPlayer />

    </main>

  )
}



export const Head = () => <title>TheWall</title>
