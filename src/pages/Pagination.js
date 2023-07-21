import * as React from "react"
import { uselation , } from 'react-i18next';
import Language from "./Language";
//import i18n from "../components/i18n";
const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  // Generate an array of page numbers
  const pageNumbers = Array.from(Array(totalPages).keys()).map(i => i + 1);
  
  return (        

    <div className="pagination">
      {currentPage > 1 ? (
        <button id="btp"  className="btn1" onClick={() => handlePageChange(currentPage - 1)}><>Previous</> </button>
      ) : null}

      {pageNumbers.map(number => (
        // Only render a button if there are items to display on that page
        number <= totalPages ? (
          // Only render the current page button and the buttons for the two pages before and after the current page
          number === currentPage || number === currentPage - 1 || number === currentPage + 1 || number === totalPages ? (
            <button  style={{color: 'black'}}  className={number   === currentPage ? "current " : "btnum"}  key={number} onClick={() => handlePageChange(number)}>
              {number === 1 ?  <>1</> : number === 2 ?  <>2</> : number === 3 ?  <>3</> : number === 4 ?  <>4</> :
              number === 5 ?  <>5</> : number === 6 ?  <>6</> : number === 7 ?  <>7</> : number === 8 ?  <>8</> : number === 9 ?  <>9</>  : number === 10 ?  <>10</> : number}
            </button>
          ) : null
        ) : null
      ))}
      {currentPage < totalPages ? (
        <button id="btp" className="btn2"  onClick={() => handlePageChange(currentPage + 1)}><>Next</> </button>
      ) : null}
    </div>
  );
};

export default Pagination;
