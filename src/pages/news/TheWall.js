import React, {useEffect, useState} from 'react';

import VideoPlayer from './Videoplayer';

import Layout from '../../components/Layout';


export default function TheWall() {

  return (

<Layout>
<VideoPlayer />
</Layout>
  )
}



export const Head = () => <title>TheWall</title>
