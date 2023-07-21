import React from 'react'
import  i18n from '../components/i18n';
import { useState } from 'react';
import * as en from '../../locales/en.json';
import { useTranslation , Trans} from 'react-i18next';

export default function Language(props) {
    const {language, handleLanguageChange} = props;

   
  
    const { t } = useTranslation();
    const [F, setF] = useState(false);
 
  
  return (
    <div>
  <div className='LangContain'>
      <div id='la'>
    
      <select   className={F ? 'selected' : ''} value={language} onChange={handleLanguageChange}>

      <option style={{color: "red", fontSize: "2rem" } } className={  'option' }  ><p style={{color: "red"}}><Trans>Language</Trans></p></option>
 <option className={  'option' } value="en" ><Trans>English</Trans></option>
 <option value="am"><Trans>Amharic</Trans></option>    
<option value="es"><Trans>Spanish</Trans></option>
 <option value="ar"><Trans>Arabic</Trans></option>
 <option value="sw"><Trans>Swahili</Trans></option>
 <option  value="fr"><Trans>French</Trans></option>

</select>
</div> 
    </div> 
    </div> 

  )
}
