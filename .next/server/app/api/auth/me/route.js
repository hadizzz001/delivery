(() => {
var exports = {};
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 9910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

// NAMESPACE OBJECT: ./app/api/auth/me/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./app/constants/index.ts
var constants = __webpack_require__(82410);
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(39518);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(63919);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
;// CONCATENATED MODULE: ./app/api/auth/me/route.ts




async function GET() {
    const cookieStore = (0,headers.cookies)();
    const token = cookieStore.get(constants/* COOKIE_NAME */.B);
    if (!token) {
        return next_response/* default */.Z.json({
            message: "Unauthorized"
        }, {
            status: 401
        });
    }
    const { value } = token;
    // Always check this
    const secret = process.env.JWT_SECRET || "";
    try {
        (0,jsonwebtoken.verify)(value, secret);
        const response = {
            user: "Super Top Secret User"
        };
        return new Response(JSON.stringify(response), {
            status: 200
        });
    } catch (e) {
        return next_response/* default */.Z.json({
            message: "Something went wrong"
        }, {
            status: 400
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fme%2Froute&name=app%2Fapi%2Fauth%2Fme%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=C%3A%5CUsers%5Cabc%5CDesktop%5CHadi%5CMy%20Bussiness%5CDonishka%5Cweb%20-%20delivery%5Capp&appPaths=%2Fapi%2Fauth%2Fme%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/me/route","pathname":"/api/auth/me","filename":"route","bundlePath":"app/api/auth/me/route"},"resolvedPagePath":"C:\\Users\\abc\\Desktop\\Hadi\\My Bussiness\\Donishka\\web - delivery\\app\\api\\auth\\me\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/auth/me/route"

    

/***/ }),

/***/ 82410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ COOKIE_NAME)
/* harmony export */ });
const COOKIE_NAME = "OurSiteJWT";


/***/ }),

/***/ 63919:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(83851);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,625,706], () => (__webpack_exec__(9910)));
module.exports = __webpack_exports__;

})();