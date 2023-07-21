import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const Stocks = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch data from the Alpha Vantage API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=2XIOQNKU3KUAHAJE"
        );
        const { data } = response;

        // Extract the top gainers and losers from the API response
        const { top_gainers, top_losers } = data;

        // Add the isGainer property to each stock in the gainers array
        const gainers = top_gainers.map((stock) => ({ ...stock, isGainer: true }));

        // Add the isGainer property to each stock in the losers array
        const losers = top_losers.map((stock) => ({ ...stock, isGainer: false }));

        // Combine gainers and losers and randomize the order
        const combinedStocks = shuffle([...gainers, ...losers]);

        setStocks(combinedStocks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Shuffle an array using Fisher-Yates algorithm
  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (

    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={30}
    totalSlides={stocks.length}
    visibleSlides={3}
    autoPlay={true}
    interval={1000}
    className="carousel"
  >
    <Slider className="slider">
      {stocks.map((stock, index) => (
        <Slide index={index} key={index} className="slided">
          <div className="sizes"
            style={{
              width: "100%",
              color: stock.isGainer ? "green" : "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            {stock.ticker} - {stock.price}
            {stock.isGainer ? (
              <FontAwesomeIcon icon={faArrowUp} style={{ marginLeft: "0.5rem" }} />
            ) : (
              <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: "0.5rem" }} />
            )}
          </div>
        </Slide>
      ))}
    </Slider>
  </CarouselProvider>
  );
};

export default Stocks;
