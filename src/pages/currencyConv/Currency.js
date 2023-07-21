import React, { useEffect } from 'react'

import { InputText } from 'primereact/inputtext';
import { Stack } from 'react-bootstrap';
import * as currency from '../../styles/Currency.module.css'; 

import { AutoComplete } from 'primereact/autocomplete';
import * as  style from "../../styles/Business.module.css";
import axios from 'axios';
import { useState } from 'react';

const options = ['USD', ''];

export default function Currency() {
  
   

  const api = "https://api.exchangerate-api.com/v4/latest/USD";



  //// eve
 

  const [resultFrom, setResultFrom] = useState('');
const [resultTo, setResultTo] = useState('');
const [searchValue, setSearchValue] = useState('');

const handleFromCurrencyChange = (event) => {
  setResultFrom(event.target.value);
};

const handleToCurrencyChange = (event) => {
  setResultTo(event.target.value);
};

const handleInputChange = (e) => {
  setSearchValue(e.target.value);
};
const [convertedValue, setConvertedValue] = useState('');
const handleConvert = () => {

  fetch(`${api}`)
    .then((response) => response.json())
    .then((data) => {
      const fromRate = data.rates[resultFrom];
      const toRate = data.rates[resultTo];
      const convertedValue = ((toRate / fromRate) * searchValue).toFixed(2);
      setConvertedValue(convertedValue);
    
    });
};


const clearVal = () => {
  alert("clear")
  setSearchValue('');
  setResultFrom(' ');
  setResultTo('');
  setConvertedValue('');
};
  return (

<>
    <div>
    <h1 className={`${currency.heading} text-center display-2`}>
      Currency Converter
    </h1>
    <hr className={currency.hr} />
    <div className="container">
      <div className={currency.main}>
      <div style={{display:"flex"}}>
        <div className="form-group">
          <label style={{marginTop: "-30px" , background:"transparent", padding:"0", }} className={`${currency.main} `} htmlFor="oamount">
          Amount to Convert:
          </label>
          <input
         
            type="number"
            className="form-control searchBox"
            onChange={handleInputChange}
            placeholder="0.00"
            id="oamount"
          />


        </div>
        <div style={{marginTop:"-23px", width:" 100%", marginLeft:"3px"}}>
          <span  style={{width:"100%"}}>Converted :</span>
        <input disabled value={convertedValue}  className="form-control searchBox" style={{color:"green", width:"100%"}} />
</div>
      </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">From</span>
              </div>
              <select
                className="form-control from"
                onChange={handleFromCurrencyChange}
                id="sel1"
              >
                    <option style={{width:"100%"}} value="">Select One …</option>
                        <option value="USD">USD</option>
                        <option value="AED">AED</option>
                        <option value="ARS">ARS</option>
                        <option value="AUD">AUD</option>
                        <option value="BGN">BGN</option>
                        <option value="BRL">BRL</option>
                        <option value="BSD">BSD</option>
                        <option value="CAD">CAD</option>
                        <option value="CHF">CHF</option>
                        <option value="CLP">CLP</option>
                        <option value="CNY">CNY</option>
                        <option value="COP">COP</option>
                        <option value="CZK">CZK</option>
                        <option value="DKK">DKK</option>
                        <option value="DOP">DOP</option>
                        <option value="EGP">EGP</option>
                        <option value="EUR">EUR</option>
                        <option value="FJD">FJD</option>
                        <option value="GBP">GBP</option>
                        <option value="GTQ">GTQ</option>
                        <option value="HKD">HKD</option>
                        <option value="HRK">HRK</option>
                        <option value="HUF">HUF</option>
                        <option value="IDR">IDR</option>
                        <option value="ILS">ILS</option>
                        <option value="INR">INR</option>
                        <option value="ISK">ISK</option>
                        <option value="JPY">JPY</option>
                        <option value="KRW">KRW</option>
                        <option value="KZT">KZT</option>
                        <option value="MVR">MVR</option>
                        <option value="MXN">MXN</option>
                        <option value="MYR">MYR</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="PAB">PAB</option>
                        <option value="PEN">PEN</option>
                        <option value="PHP">PHP</option>
                        <option value="PKR">PKR</option>
                        <option value="PLN">PLN</option>
                        <option value="PYG">PYG</option>
                        <option value="RON">RON</option>
                        <option value="RUB">RUB</option>
                        <option value="SAR">SAR</option>
                        <option value="SEK">SEK</option>
                        <option value="SGD">SGD</option>
                        <option value="THB">THB</option>
                        <option value="TRY">TRY</option>
                        <option value="TWD">TWD</option>
                        <option value="UAH">UAH</option>
                        <option value="UYU">UYU</option>
                        <option value="ZAR">ZAR</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">To</span>
              </div>
              <select
                className="form-control to"
                onChange={handleToCurrencyChange}
                id="sel2"
              >
                 <option style={{width:"fit-content"}} value="">Select One …</option>
                        <option value="USD">USD</option>
                        <option value="AED">AED</option>
                        <option value="ARS">ARS</option>
                        <option value="AUD">AUD</option>
                        <option value="BGN">BGN</option>
                        <option value="BRL">BRL</option>
                        <option value="BSD">BSD</option>
                        <option value="CAD">CAD</option>
                        <option value="CHF">CHF</option>
                        <option value="CLP">CLP</option>
                        <option value="CNY">CNY</option>
                        <option value="COP">COP</option>
                        <option value="CZK">CZK</option>
                        <option value="DKK">DKK</option>
                        <option value="DOP">DOP</option>
                        <option value="EGP">EGP</option>
                        <option value="EUR">EUR</option>
                        <option value="FJD">FJD</option>
                        <option value="GBP">GBP</option>
                        <option value="GTQ">GTQ</option>
                        <option value="HKD">HKD</option>
                        <option value="HRK">HRK</option>
                        <option value="HUF">HUF</option>
                        <option value="IDR">IDR</option>
                        <option value="ILS">ILS</option>
                        <option value="INR">INR</option>
                        <option value="ISK">ISK</option>
                        <option value="JPY">JPY</option>
                        <option value="KRW">KRW</option>
                        <option value="KZT">KZT</option>
                        <option value="MVR">MVR</option>
                        <option value="MXN">MXN</option>
                        <option value="MYR">MYR</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="PAB">PAB</option>
                        <option value="PEN">PEN</option>
                        <option value="PHP">PHP</option>
                        <option value="PKR">PKR</option>
                        <option value="PLN">PLN</option>
                        <option value="PYG">PYG</option>
                        <option value="RON">RON</option>
                        <option value="RUB">RUB</option>
                        <option value="SAR">SAR</option>
                        <option value="SEK">SEK</option>
                        <option value="SGD">SGD</option>
                        <option value="THB">THB</option>
                        <option value="TRY">TRY</option>
                        <option value="TWD">TWD</option>
                        <option value="UAH">UAH</option>
                        <option value="UYU">UYU</option>
                        <option value="ZAR">ZAR</option>
              </select>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className={`${currency.btn}btn btn-primary convert m-2`}
            type="button"
            onClick={handleConvert}
          >
            Convert
          </button>
          <button
            className={`${currency.btn} btn btn-primary m-2`}
            onClick={clearVal}
          >
            Reset
          </button>
        </div>
      </div>
      
    </div>
  </div>

  </>
  );
}

