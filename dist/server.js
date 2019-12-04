/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/graphs/application/resolvers.js":
/*!*********************************************!*\
  !*** ./src/graphs/application/resolvers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var _this = undefined;

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    blogApplication: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(obj, _ref2, ctx) {
        var input = _ref2.input;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  blogOnline: true
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function blogApplication(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./src/graphs/application/schema.graphql":
/*!***********************************************!*\
  !*** ./src/graphs/application/schema.graphql ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"Date"},"directives":[]},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"DateTime"},"directives":[]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"blogApplication"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"BlogApplication"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"BlogApplication"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"blogOnline"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]}]}],"loc":{"start":0,"end":127}};
    doc.loc.source = {"body":"scalar Date\nscalar DateTime\n\ntype Query {\n  blogApplication: BlogApplication\n}\n\ntype BlogApplication {\n  blogOnline: Boolean\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/graphs/blog/resolvers.js":
/*!**************************************!*\
  !*** ./src/graphs/blog/resolvers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var _this = undefined;

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    posts: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(obj, _ref2, ctx) {
        var input = _ref2.input;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", [{
                  id: "1",
                  title: "My First Post"
                }, {
                  id: "2",
                  title: "My Second Post"
                }]);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function posts(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./src/graphs/blog/schema.graphql":
/*!****************************************!*\
  !*** ./src/graphs/blog/schema.graphql ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"posts"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPost"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"BlogPost"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]}],"loc":{"start":0,"end":81}};
    doc.loc.source = {"body":"type Query {\n  posts: [BlogPost]\n}\n\ntype BlogPost {\n  id: ID!\n  title: String!\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/graphs/resolvers.js":
/*!*********************************!*\
  !*** ./src/graphs/resolvers.js ***!
  \*********************************/
/*! exports provided: blog, application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blog_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog/resolvers */ "./src/graphs/blog/resolvers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blog", function() { return _blog_resolvers__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _application_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application/resolvers */ "./src/graphs/application/resolvers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "application", function() { return _application_resolvers__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/graphs/schema.js":
/*!******************************!*\
  !*** ./src/graphs/schema.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_schema_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application/schema.graphql */ "./src/graphs/application/schema.graphql");
/* harmony import */ var _application_schema_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application_schema_graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blog_schema_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog/schema.graphql */ "./src/graphs/blog/schema.graphql");
/* harmony import */ var _blog_schema_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blog_schema_graphql__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ([_application_schema_graphql__WEBPACK_IMPORTED_MODULE_0___default.a, _blog_schema_graphql__WEBPACK_IMPORTED_MODULE_1___default.a]);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/server.js");


/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_federation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/federation */ "@apollo/federation");
/* harmony import */ var _apollo_federation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_federation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _graphs_resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphs/resolvers */ "./src/graphs/resolvers.js");
/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! merge-graphql-schemas */ "merge-graphql-schemas");
/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphs_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphs/schema */ "./src/graphs/schema.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  ", "\n"], ["\n  ", "\n"]);




// Needed to create a federationready schema.






// use of graphql-tag/loader in webpack + merge-graphjql-schemas tocreated a typedef
// ready to use in federated schema
var mergedDefs = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject, Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_6__["mergeTypes"])(_graphs_schema__WEBPACK_IMPORTED_MODULE_7__["default"]));

var test = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.reduce(_graphs_resolvers__WEBPACK_IMPORTED_MODULE_5__, function (prev, next) {
  return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(prev, next);
});

var PORT = process.env.PORT || 2990;
var server = new apollo_server__WEBPACK_IMPORTED_MODULE_1__["ApolloServer"]({
  schema: Object(_apollo_federation__WEBPACK_IMPORTED_MODULE_3__["buildFederatedSchema"])([{
    typeDefs: mergedDefs,
    resolvers: test
  }]),
  playground: true
});

// Start accepting connections.
server.listen({ port: PORT }).then(function (_ref) {
  var url = _ref.url;

  console.log("\uD83D\uDE80 Blog server running on port " + url);
});

/***/ }),

/***/ "@apollo/federation":
/*!*************************************!*\
  !*** external "@apollo/federation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/federation");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/taggedTemplateLiteral":
/*!**************************************************************!*\
  !*** external "babel-runtime/helpers/taggedTemplateLiteral" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "merge-graphql-schemas":
/*!****************************************!*\
  !*** external "merge-graphql-schemas" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("merge-graphql-schemas");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map