"use strict";
exports.id = 1462;
exports.ids = [1462];
exports.modules = {

/***/ 66905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cloud)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*

import React, { useEffect, useState } from 'react';
import { startTransition } from 'react-dom';
async function getContent(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const title = doc.querySelector('title').textContent;
    const paragraphs = Array.from(doc.querySelectorAll('p')).map((p) => p.textContent);
    return {
      title,
      paragraphs,
    };
  } catch (error) {
    console.error(error);
  }
}

function Cloud(props) {
  const [data, setData] = useState(null);
  const {url} = props;

  useEffect(() => {
    getContent(url).then((data) => {
      setData(data);
    });
  }, [url]);

 
  if (!data) {
    return <div>Loading...</div>;
  }

 
  return (
    <div>
      <h1>{data.title}</h1>
      {data.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Cloud;

*/function Cloud(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null);}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-cloud-js.js.map