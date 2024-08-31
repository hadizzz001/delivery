"use strict";
(() => {
var exports = {};
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 63453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/auth/login/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./app/constants/index.ts
var constants = __webpack_require__(82410);
// EXTERNAL MODULE: ./node_modules/cookie/index.js
var cookie = __webpack_require__(21024);
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(39518);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
;// CONCATENATED MODULE: ./app/api/auth/login/route.ts




const MAX_AGE = 60 * 60 * 24 * 30; // days;
async function POST(request) {
    const body = await request.json();
    const { username, password } = body;
    if (username !== "admin" || password !== "admin") {
        return next_response/* default */.Z.json({
            message: "Failed , please check login info and try again"
        }, {
            status: 401
        });
    }
    // Always check this
    const secret = process.env.JWT_SECRET || "";
    const token = (0,jsonwebtoken.sign)({
        username
    }, secret, {
        expiresIn: MAX_AGE
    });
    const seralized = (0,cookie/* serialize */.q)(constants/* COOKIE_NAME */.B, token, {
        httpOnly: true,
        secure: "production" === "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: "/"
    });
    const response = {
        message: "Success!"
    };
    return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
            "Set-Cookie": seralized
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Flogin%2Froute&name=app%2Fapi%2Fauth%2Flogin%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cabc%5CDesktop%5CHadi%5CMy%20Bussiness%5CDonishka%5Cweb%20-%20delivery%5Capp&appPaths=%2Fapi%2Fauth%2Flogin%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/login/route","pathname":"/api/auth/login","filename":"route","bundlePath":"app/api/auth/login/route"},"resolvedPagePath":"C:\\Users\\abc\\Desktop\\Hadi\\My Bussiness\\Donishka\\web - delivery\\app\\api\\auth\\login\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/auth/login/route"

    

/***/ }),

/***/ 82410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ COOKIE_NAME)
/* harmony export */ });
const COOKIE_NAME = "OurSiteJWT";


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,625,706,24], () => (__webpack_exec__(63453)));
module.exports = __webpack_exports__;

})();