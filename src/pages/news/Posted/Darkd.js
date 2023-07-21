import {React, useEffect, ReactFragment} from 'react'

import MyProfile from "../../profileComponents/Myprofile"
import Profiles from "../../profileComponents/Profiles"
export default function Darkd(props) {

  useEffect(() => {
 

    if(props.dark){
     
      props.setDark(pre => !pre)
    
    


      }
    }, [props.dark])
     


  
}
