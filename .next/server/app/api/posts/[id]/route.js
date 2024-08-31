"use strict";
(() => {
var exports = {};
exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

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

/***/ 48845:
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

// NAMESPACE OBJECT: ./app/api/posts/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  PATCH: () => (PATCH)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./app/libs/prismadb.js
var prismadb = __webpack_require__(97012);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
;// CONCATENATED MODULE: ./app/api/posts/[id]/route.js
// url: http://localhost:3000/api/posts/12345


const GET = async (request, { params })=>{
    try {
        const { id } = params;
        const post = await prismadb/* default */.Z.post.findUnique({
            where: {
                id
            }
        });
        if (!post) {
            return next_response/* default */.Z.json({
                message: "Post not found",
                err
            }, {
                status: 404
            });
        }
        return next_response/* default */.Z.json(post);
    } catch (err1) {
        return next_response/* default */.Z.json({
            message: "GET Error",
            err: err1
        }, {
            status: 500
        });
    }
};
const PATCH = async (request, { params })=>{
    try {
        const body = await request.json();
        const { title, description, img, price, category } = body;
        const { id } = params;
        const updatePost = await prismadb/* default */.Z.post.update({
            where: {
                id
            },
            data: {
                title,
                description,
                img,
                price,
                category
            }
        });
        if (!updatePost) {
            return next_response/* default */.Z.json({
                message: "Post not found",
                err
            }, {
                status: 404
            });
        }
        return next_response/* default */.Z.json(updatePost);
    } catch (err1) {
        return next_response/* default */.Z.json({
            message: "update Error",
            err: err1
        }, {
            status: 500
        });
    }
};
const DELETE = async (request, { params })=>{
    try {
        const { id } = params;
        await prismadb/* default */.Z.post.delete({
            where: {
                id
            }
        });
        return next_response/* default */.Z.json("Post has been deleted");
    } catch (err1) {
        return next_response/* default */.Z.json({
            message: "DELETE Error",
            err: err1
        }, {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fposts%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fposts%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5Cabc%5CDesktop%5CHadi%5CMy%20Bussiness%5CDonishka%5Cweb%20-%20delivery%5Capp&appPaths=%2Fapi%2Fposts%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/posts/[id]/route","pathname":"/api/posts/[id]","filename":"route","bundlePath":"app/api/posts/[id]/route"},"resolvedPagePath":"C:\\Users\\abc\\Desktop\\Hadi\\My Bussiness\\Donishka\\web - delivery\\app\\api\\posts\\[id]\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/posts/[id]/route"

    

/***/ }),

/***/ 97012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 32413:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(72917); //# sourceMappingURL=next-response.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,625], () => (__webpack_exec__(48845)));
module.exports = __webpack_exports__;

})();