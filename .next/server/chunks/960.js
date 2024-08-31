exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 64789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W0: () => (/* binding */ fetchTemp2),
/* harmony export */   rU: () => (/* binding */ fetchTemp3),
/* harmony export */   sj: () => (/* binding */ fetchTemp1),
/* harmony export */   z5: () => (/* binding */ fetchTemp)
/* harmony export */ });
async function fetchTemp() {
    const response = await fetch("/api/posts", {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}
async function fetchTemp1() {
    const response = await fetch("/api/order", {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}
async function fetchTemp2() {
    const response = await fetch("/api/postss", {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}
async function fetchTemp3(id) {
    const response = await fetch(`/api/order/${id}`, {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.posts;
}


/***/ }),

/***/ 31621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(27977)


/***/ })

};
;