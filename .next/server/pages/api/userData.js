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
exports.id = "pages/api/userData";
exports.ids = ["pages/api/userData"];
exports.modules = {

/***/ "(api)/./pages/api/userData.js":
/*!*******************************!*\
  !*** ./pages/api/userData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/userData.js\nasync function handler(req, res) {\n    try {\n        // Fetch data from the API endpoint\n        const response = await fetch(\"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\");\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch data from the API\");\n        }\n        const data = await response.json();\n        // Extract the required data\n        const { user  } = data;\n        const { about , avatar , timeline , skills , youtube , projects , social_handles , services , testimonials , email , _id , username , role  } = user;\n        // Prepare the data to be sent in the response\n        const userData = {\n            about,\n            avatar,\n            timeline,\n            skills,\n            youtube,\n            projects,\n            social_handles,\n            services,\n            testimonials,\n            email,\n            _id,\n            username,\n            role\n        };\n        // Send the data as JSON response\n        res.status(200).json(userData);\n    } catch (error) {\n        console.error(\"Error fetching data:\", error.message);\n        res.status(500).json({\n            error: \"Failed to fetch data from the API\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlckRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHdCQUF3QjtBQUVULGVBQWVBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLElBQUk7UUFDRixtQ0FBbUM7UUFDbkMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1FBRTdCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTSxxQ0FBcUM7UUFDdkQsQ0FBQztRQUVELE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtRQUVoQyw0QkFBNEI7UUFDNUIsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0Y7UUFDakIsTUFBTSxFQUNKRyxNQUFLLEVBQ0xDLE9BQU0sRUFDTkMsU0FBUSxFQUNSQyxPQUFNLEVBQ05DLFFBQU8sRUFDUEMsU0FBUSxFQUNSQyxlQUFjLEVBQ2RDLFNBQVEsRUFDUkMsYUFBWSxFQUNaQyxNQUFLLEVBQ0xDLElBQUcsRUFDSEMsU0FBUSxFQUNSQyxLQUFJLEVBQ0wsR0FBR2I7UUFFSiw4Q0FBOEM7UUFDOUMsTUFBTWMsV0FBVztZQUNmYjtZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBRUEsaUNBQWlDO1FBQ2pDcEIsSUFBSXNCLE1BQU0sQ0FBQyxLQUFLaEIsSUFBSSxDQUFDZTtJQUN2QixFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkEsTUFBTUUsT0FBTztRQUNuRHpCLElBQUlzQixNQUFNLENBQUMsS0FBS2hCLElBQUksQ0FBQztZQUFFaUIsT0FBTztRQUFvQztJQUNwRTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWxpbW92LXJlYWN0Ly4vcGFnZXMvYXBpL3VzZXJEYXRhLmpzP2VjMjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3VzZXJEYXRhLmpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBGZXRjaCBkYXRhIGZyb20gdGhlIEFQSSBlbmRwb2ludFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3BvcnRmb2xpby1iYWNrZW5kLTMwbXAub25yZW5kZXIuY29tL2FwaS92MS9nZXQvdXNlci82NWIzYTIyYzAxZDkwMGU5NmM0MjE5YWUnKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhIGZyb20gdGhlIEFQSScpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBcclxuICAgICAgLy8gRXh0cmFjdCB0aGUgcmVxdWlyZWQgZGF0YVxyXG4gICAgICBjb25zdCB7IHVzZXIgfSA9IGRhdGE7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBhYm91dCxcclxuICAgICAgICBhdmF0YXIsXHJcbiAgICAgICAgdGltZWxpbmUsXHJcbiAgICAgICAgc2tpbGxzLCBcclxuICAgICAgICB5b3V0dWJlLFxyXG4gICAgICAgIHByb2plY3RzLFxyXG4gICAgICAgIHNvY2lhbF9oYW5kbGVzLFxyXG4gICAgICAgIHNlcnZpY2VzLFxyXG4gICAgICAgIHRlc3RpbW9uaWFscyxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBfaWQsXHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgcm9sZVxyXG4gICAgICB9ID0gdXNlcjtcclxuICAgICAgXHJcbiAgICAgIC8vIFByZXBhcmUgdGhlIGRhdGEgdG8gYmUgc2VudCBpbiB0aGUgcmVzcG9uc2VcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgYWJvdXQsXHJcbiAgICAgICAgYXZhdGFyLFxyXG4gICAgICAgIHRpbWVsaW5lLFxyXG4gICAgICAgIHNraWxscyxcclxuICAgICAgICB5b3V0dWJlLFxyXG4gICAgICAgIHByb2plY3RzLFxyXG4gICAgICAgIHNvY2lhbF9oYW5kbGVzLFxyXG4gICAgICAgIHNlcnZpY2VzLFxyXG4gICAgICAgIHRlc3RpbW9uaWFscyxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBfaWQsXHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgcm9sZVxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgLy8gU2VuZCB0aGUgZGF0YSBhcyBKU09OIHJlc3BvbnNlXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXJEYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggZGF0YSBmcm9tIHRoZSBBUEknIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJ1c2VyIiwiYWJvdXQiLCJhdmF0YXIiLCJ0aW1lbGluZSIsInNraWxscyIsInlvdXR1YmUiLCJwcm9qZWN0cyIsInNvY2lhbF9oYW5kbGVzIiwic2VydmljZXMiLCJ0ZXN0aW1vbmlhbHMiLCJlbWFpbCIsIl9pZCIsInVzZXJuYW1lIiwicm9sZSIsInVzZXJEYXRhIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/userData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/userData.js"));
module.exports = __webpack_exports__;

})();