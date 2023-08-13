import React, {useEffect, useState} from 'react';

import VideoPlayer from './Videoplayer';

import Layout from '../../components/Layout';


export default function TheWall() {

  return (

<Layout>

  <div style={{marginTop:"200px"}}>
    <button style={{marginBottom:"40px"}}>Record Video +</button>
  <VideoPlayer />

    </div>
</Layout>
  )
}



export const Head = () => <title>TheWall</title>
