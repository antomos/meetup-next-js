"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/meetups/[meetupId]";
exports.ids = ["pages/api/meetups/[meetupId]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/meetups/[meetupId].js":
/*!*****************************************!*\
  !*** ./pages/api/meetups/[meetupId].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// /api/new-meetup\n// POST /api/new-meetup\nasync function getStaticPaths() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://amoschetti:test@cluster0.axoxoiw.mongodb.net/meetups?retryWrites=true&w=majority\");\n    const db = client.db();\n    const meetupsCollection = db.collection(\"meetups\");\n    const meetups = await meetupsCollection.find({}, {\n        _id: 1\n    }).toArray();\n    client.close();\n    return {\n        fallback: \"blocking\",\n        paths: meetups.map((meetup)=>({\n                params: {\n                    meetupId: meetup._id.toString()\n                }\n            }))\n    };\n}\nasync function handler(req, res) {\n    if (req.method === \"DELETE\") {\n        console.log(\"DELETE\");\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://amoschetti:test@cluster0.axoxoiw.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const { meetupId  } = req.query;\n        const result = await meetupsCollection.deleteOne({\n            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(meetupId)\n        });\n        console.log(req.query);\n        client.close();\n        res.status(200).json({\n            message: `${meetupId}Meetup deleted!`\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVldHVwcy9bbWVldHVwSWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFFaEQsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUNoQixlQUFlRSxjQUFjLEdBQUc7SUFDckMsTUFBTUMsTUFBTSxHQUFHLE1BQU1ILHdEQUFtQixDQUN0QyxnR0FBZ0csQ0FDakc7SUFDRCxNQUFNSyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO0lBRXRCLE1BQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFFbEQsTUFBTUMsT0FBTyxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQUVDLEdBQUcsRUFBRSxDQUFDO0tBQUUsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7SUFFdEVSLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFLENBQUM7SUFFZixPQUFPO1FBQ0xDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCQyxLQUFLLEVBQUVOLE9BQU8sQ0FBQ08sR0FBRyxDQUFDLENBQUNDLE1BQU0sR0FBTTtnQkFDOUJDLE1BQU0sRUFBRTtvQkFBRUMsUUFBUSxFQUFFRixNQUFNLENBQUNOLEdBQUcsQ0FBQ1MsUUFBUSxFQUFFO2lCQUFFO2FBQzVDLEVBQUU7S0FDSixDQUFDO0FBQ0osQ0FBQztBQUVELGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFL0IsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixNQUFNdEIsTUFBTSxHQUFHLE1BQU1ILHdEQUFtQixDQUN0QyxnR0FBZ0csQ0FDakc7UUFDRCxNQUFNSyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO1FBRXRCLE1BQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFFbEQsTUFBTSxFQUFFVyxRQUFRLEdBQUUsR0FBR0csR0FBRyxDQUFDSyxLQUFLO1FBRTlCLE1BQU1DLE1BQU0sR0FBRyxNQUFNckIsaUJBQWlCLENBQUNzQixTQUFTLENBQUM7WUFBRWxCLEdBQUcsRUFBRVQsaURBQVEsQ0FBQ2lCLFFBQVEsQ0FBQztTQUFFLENBQUM7UUFFN0VNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixHQUFHLENBQUNLLEtBQUssQ0FBQyxDQUFDO1FBRXZCdkIsTUFBTSxDQUFDUyxLQUFLLEVBQUUsQ0FBQztRQUVmVSxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxDQUFDLEVBQUViLFFBQVEsQ0FBQyxlQUFlLENBQUM7U0FBRSxDQUFDLENBQUM7SUFHbEUsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9tZWV0dXBzL1ttZWV0dXBJZF0uanM/MGJiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxuLy8gL2FwaS9uZXctbWVldHVwXG4vLyBQT1NUIC9hcGkvbmV3LW1lZXR1cFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICdtb25nb2RiK3NydjovL2Ftb3NjaGV0dGk6dGVzdEBjbHVzdGVyMC5heG94b2l3Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xuXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmYWxsYmFjazogJ2Jsb2NraW5nJyxcbiAgICBwYXRoczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcbiAgICAgIHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXG4gICAgfSkpLFxuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgY29uc29sZS5sb2coJ0RFTEVURScpO1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgICAnbW9uZ29kYitzcnY6Ly9hbW9zY2hldHRpOnRlc3RAY2x1c3RlcjAuYXhveG9pdy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgICApO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICAgIGNvbnN0IHsgbWVldHVwSWQgfSA9IHJlcS5xdWVyeTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmRlbGV0ZU9uZSh7IF9pZDogT2JqZWN0SWQobWVldHVwSWQpIH0pO1xuXG4gICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5KTtcblxuICAgIGNsaWVudC5jbG9zZSgpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBgJHttZWV0dXBJZH1NZWV0dXAgZGVsZXRlZCFgIH0pO1xuXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiT2JqZWN0SWQiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIm1lZXR1cHMiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImNsb3NlIiwiZmFsbGJhY2siLCJwYXRocyIsIm1hcCIsIm1lZXR1cCIsInBhcmFtcyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwicmVzdWx0IiwiZGVsZXRlT25lIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/meetups/[meetupId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/meetups/[meetupId].js"));
module.exports = __webpack_exports__;

})();