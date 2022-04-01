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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/i18n/callerName.json":
/*!**************************************************************************************************!*\
  !*** /Users/manju/DevEcoStudioProjects/SmartBike/entry/src/main/js/default/i18n/callerName.json ***!
  \**************************************************************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"callerName\":\"Ajith M\"}]");

/***/ }),

/***/ "../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/i18n/music_info.json":
/*!**************************************************************************************************!*\
  !*** /Users/manju/DevEcoStudioProjects/SmartBike/entry/src/main/js/default/i18n/music_info.json ***!
  \**************************************************************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"musicName\":\"In  the  Name  of  Love\",\"AlbumName\":\"Album Name\",\"musicCover\":\"/common/images/right/music_image.png\"}]");

/***/ }),

/***/ "../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/i18n/speed.json":
/*!*********************************************************************************************!*\
  !*** /Users/manju/DevEcoStudioProjects/SmartBike/entry/src/main/js/default/i18n/speed.json ***!
  \*********************************************************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"speedValue\":\"56\",\"Kmh\":\"60 Km/h\",\"Kms\":\"2462 Kms\"}]");

/***/ }),

/***/ "../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.hml?entry":
/*!*********************************************************************************************************!*\
  !*** /Users/manju/DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../../../../../Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/manju/Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/manju/Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.css":
/*!********************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/manju/DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container1": {
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#2E2E2E",
    "alignItems": "center",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px"
  },
  ".child-container1": {
    "backgroundImage": "/common/images/indication_bg.png",
    "height": "68.14px",
    "width": "586px",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "justifyContent": "space-around",
    "alignItems": "center",
    "marginBottom": "3px"
  },
  "image": {
    "width": "43px",
    "height": "43px"
  },
  ".child-container2": {
    "display": "flex",
    "flexDirection": "row",
    "marginBottom": "-40px"
  },
  ".left": {
    "width": "330px",
    "marginLeft": "53px",
    "display": "flex",
    "flexDirection": "column"
  },
  ".right": {
    "width": "393px",
    "height": "521px",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".middle": {
    "width": "393px",
    "height": "521px",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".caller": {
    "backgroundImage": "/common/images/middle/info_bg.png",
    "display": "flex",
    "flexDirection": "column",
    "backgroundRepeat": "no-repeat",
    "height": "86px",
    "paddingTop": "2%"
  },
  ".call": {
    "justifyContent": "space-around"
  },
  ".speedometer": {
    "marginTop": "20px",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.231)",
    "width": "242px",
    "height": "343px",
    "borderBottomLeftRadius": "90px",
    "borderBottomRightRadius": "90px",
    "borderTopLeftRadius": "90px",
    "borderTopRightRadius": "90px",
    "textAlign": "center",
    "display": "flex",
    "flexDirection": "column"
  },
  ".min-progress": {
    "width": "230px",
    "strokeWidth": "12px",
    "marginTop": "5px",
    "color": "#0cb3fc",
    "marginBottom": "-5px"
  },
  ".EKL": {
    "display": "flex",
    "flexDirection": "column",
    "marginTop": "50px"
  },
  ".musicProgress": {
    "display": "flex",
    "flexDirection": "column",
    "marginTop": "20px",
    "width": "241px"
  },
  ".musicbar": {
    "strokeWidth": "7px",
    "marginTop": "5px",
    "color": "#FFFFFF",
    "marginBottom": "-5px"
  },
  ".musicButtons": {
    "width": "241px",
    "height": "54px",
    "marginTop": "35px",
    "alignItems": "center",
    "justifyContent": "space-around"
  },
  ".child-container3": {
    "height": "37px",
    "width": "100%",
    "marginLeft": "53px",
    "marginRight": "55px",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "marginBottom": "10px"
  },
  ".fuelindicator": {
    "marginTop": "54.84px",
    "height": "48.59px"
  },
  ".fuel-read": {
    "display": "flex",
    "alignItems": "flex-end"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.hml":
/*!***********************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/manju/DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.hml ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:1",
    "className": "container1"
  },
  "type": "div",
  "classList": [
    "container1"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:2",
        "className": "child-container1"
      },
      "type": "div",
      "classList": [
        "child-container1"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:3",
            "className": "image",
            "src": function () {return this.leftindicator},
            "alt": "left_indicator"
          },
          "type": "image",
          "classList": [
            "image"
          ],
          "events": {
            "click": "leftindicatorclick"
          },
          "style": {
            "marginLeft": "36px"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:4",
            "className": "image",
            "src": function () {return this.lowbeam},
            "alt": "low_beam"
          },
          "type": "image",
          "classList": [
            "image"
          ],
          "events": {
            "click": "lowbeamonclick"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:5",
            "className": "image",
            "src": function () {return this.bluetooth},
            "alt": "bluetooth"
          },
          "type": "image",
          "classList": [
            "image"
          ],
          "events": {
            "click": "bluetoothclick"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:6",
            "value": function () {return this.time}
          },
          "type": "text",
          "style": {
            "color": "#FFFFFF",
            "fontWeight": "800",
            "fontSize": "27.3px"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:7",
            "className": "image",
            "src": function () {return this.sidestand},
            "alt": "sidestand"
          },
          "type": "image",
          "classList": [
            "image"
          ],
          "events": {
            "click": "sidestandclick"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:8",
            "className": "image",
            "src": function () {return this.highbeam},
            "alt": "high_beam"
          },
          "type": "image",
          "classList": [
            "image"
          ],
          "events": {
            "click": "highbeamclick"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:9",
            "className": "image",
            "src": function () {return this.indicatoroff},
            "alt": "right_beam"
          },
          "type": "image",
          "classList": [
            "image"
          ],
          "events": {
            "click": "rightindicatorclick"
          },
          "style": {
            "marginRight": "36px"
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:11",
        "className": "child-container2"
      },
      "type": "div",
      "classList": [
        "child-container2"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:12",
            "className": "left"
          },
          "type": "div",
          "classList": [
            "left"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:13"
              },
              "type": "div",
              "style": {
                "marginTop": "49.63px"
              },
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:14",
                    "value": function () {return this.Front30PSI}
                  },
                  "type": "text",
                  "style": {
                    "color": "#8C8C8C",
                    "fontSize": "18px",
                    "paddingRight": "17%",
                    "fontWeight": "500"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:15",
                    "value": function () {return this.Rear32PSI}
                  },
                  "type": "text",
                  "style": {
                    "color": "#8C8C8C",
                    "fontSize": "18px",
                    "fontWeight": "500"
                  }
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:18"
              },
              "type": "div",
              "style": {
                "marginTop": "87.41px"
              },
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:19",
                    "value": function () {return this.E}
                  },
                  "type": "text",
                  "style": {
                    "color": "#FFFFFF",
                    "fontSize": "26.13px"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:20",
                    "value": function () {return this.R}
                  },
                  "type": "text",
                  "style": {
                    "color": "#FFFFFF",
                    "fontSize": "26.13px",
                    "paddingLeft": "58.48px"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:21",
                    "value": function () {return this.SPORT}
                  },
                  "type": "text",
                  "style": {
                    "marginLeft": "47.28px",
                    "paddingTop": "5px",
                    "paddingRight": "5px",
                    "paddingBottom": "5px",
                    "paddingLeft": "5px",
                    "color": "#FFA500",
                    "borderTopWidth": "1px",
                    "borderRightWidth": "1px",
                    "borderBottomWidth": "1px",
                    "borderLeftWidth": "1px",
                    "borderTopStyle": "solid",
                    "borderRightStyle": "solid",
                    "borderBottomStyle": "solid",
                    "borderLeftStyle": "solid",
                    "borderTopColor": "#FFA500",
                    "borderRightColor": "#FFA500",
                    "borderBottomColor": "#FFA500",
                    "borderLeftColor": "#FFA500",
                    "fontWeight": "500",
                    "borderBottomLeftRadius": "3px",
                    "borderBottomRightRadius": "3px",
                    "borderTopLeftRadius": "3px",
                    "borderTopRightRadius": "3px"
                  }
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:26",
                "className": "fuelindicator"
              },
              "type": "div",
              "classList": [
                "fuelindicator"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:27",
                    "src": function () {return this.fuel},
                    "value": "/"
                  },
                  "type": "image",
                  "style": {
                    "marginTop": "5px"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:28",
                    "className": "fuel-read"
                  },
                  "type": "div",
                  "classList": [
                    "fuel-read"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:29",
                        "src": function () {return this.level10}
                      },
                      "type": "image",
                      "style": {
                        "width": "18px",
                        "height": "4px",
                        "marginLeft": "10px"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:30",
                        "src": function () {return this.level20}
                      },
                      "type": "image",
                      "style": {
                        "width": "18px",
                        "height": "11px",
                        "marginLeft": "4px"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:31",
                        "src": function () {return this.level40}
                      },
                      "type": "image",
                      "style": {
                        "width": "18px",
                        "height": "19px",
                        "marginLeft": "4px"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:33",
                        "src": function () {return this.level60}
                      },
                      "type": "image",
                      "style": {
                        "width": "18px",
                        "height": "27px",
                        "marginLeft": "4px"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:34",
                        "src": function () {return this.level80}
                      },
                      "type": "image",
                      "style": {
                        "width": "18px",
                        "height": "40px",
                        "marginLeft": "4px"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:36",
                        "src": function () {return this.level100}
                      },
                      "type": "image",
                      "style": {
                        "width": "18px",
                        "height": "49px",
                        "marginLeft": "4px"
                      }
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:40",
                    "value": function () {return 80}
                  },
                  "type": "text",
                  "style": {
                    "color": "#FFFFFF",
                    "fontSize": "31px",
                    "marginLeft": "57px"
                  }
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:42",
                "className": "EKL"
              },
              "type": "div",
              "classList": [
                "EKL"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:43"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:44",
                        "className": "min-progress",
                        "type": "horizontal",
                        "percent": "70"
                      },
                      "type": "progress",
                      "classList": [
                        "min-progress"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:45",
                        "value": function () {return 110}
                      },
                      "type": "text",
                      "style": {
                        "color": "#FFFFFF",
                        "fontSize": "26px",
                        "fontWeight": "500",
                        "marginLeft": "25px"
                      }
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:47"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:48",
                        "value": function () {return this.Ekm}
                      },
                      "type": "text",
                      "style": {
                        "color": "#8C8C8C",
                        "marginTop": "10px",
                        "fontSize": "18px"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:52",
            "className": "middle"
          },
          "type": "div",
          "classList": [
            "middle"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:53",
                "className": "caller"
              },
              "type": "div",
              "classList": [
                "caller"
              ],
              "repeat": function () {return this.caller},
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:54",
                    "className": "call"
                  },
                  "type": "div",
                  "classList": [
                    "call"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:55",
                        "src": function () {return this.callericon}
                      },
                      "type": "image"
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:56",
                        "value": function () {return this.$item.callerName}
                      },
                      "type": "text",
                      "style": {
                        "fontSize": "32px",
                        "color": "#FFFFFF"
                      },
                      "events": {
                        "click": "onclickcaller"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:57",
                        "src": function () {return this.callaccept}
                      },
                      "type": "image",
                      "style": {
                        "marginLeft": "-2%"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:58",
                        "src": function () {return this.callreject}
                      },
                      "type": "image",
                      "style": {
                        "marginLeft": "-2%"
                      }
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:60",
                    "value": function () {return this.Incomingcall}
                  },
                  "type": "text",
                  "style": {
                    "color": "#8C8C8C",
                    "fontSize": "14px",
                    "marginLeft": "20%"
                  }
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:62",
                "className": "speedometer"
              },
              "type": "div",
              "classList": [
                "speedometer"
              ],
              "repeat": function () {return this.speed},
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:63",
                    "value": function () {return this.$item.speedValue}
                  },
                  "type": "text",
                  "style": {
                    "color": "#FFFFFF",
                    "fontSize": "90px",
                    "fontWeight": "800",
                    "marginTop": "34.5px"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:64",
                    "value": function () {return this.$item.Kmh}
                  },
                  "type": "text",
                  "style": {
                    "fontSize": "24px",
                    "color": "#8C8C8C",
                    "marginTop": "10.84px"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:66",
                    "value": function () {return this.avg}
                  },
                  "type": "text",
                  "style": {
                    "fontSize": "18px",
                    "color": "#8C8C8C",
                    "marginTop": "4.01px"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:68",
                    "value": function () {return this.$item.Kms}
                  },
                  "type": "text",
                  "style": {
                    "fontSize": "32px",
                    "color": "#FFFFFF",
                    "marginTop": "20.01px"
                  }
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:72",
            "className": "right"
          },
          "type": "div",
          "classList": [
            "right"
          ],
          "repeat": function () {return this.music},
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:73",
                "src": function () {return this.$item.musicCover}
              },
              "type": "image",
              "style": {
                "height": "241px",
                "width": "241px"
              }
            },
            {
              "attr": {
                "debugLine": "pages/index/index:74",
                "value": function () {return this.$item.AlbumName}
              },
              "type": "text",
              "style": {
                "color": "#FFFFFF",
                "fontSize": "18px",
                "marginTop": "4%"
              }
            },
            {
              "attr": {
                "debugLine": "pages/index/index:75",
                "value": function () {return this.$item.musicName}
              },
              "type": "text",
              "style": {
                "color": "#FFFFFF",
                "fontSize": "14px",
                "marginTop": "4%"
              }
            },
            {
              "attr": {
                "debugLine": "pages/index/index:76",
                "className": "musicProgress"
              },
              "type": "div",
              "classList": [
                "musicProgress"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:77"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:78",
                        "className": "musicbar",
                        "type": "horizontal",
                        "percent": "70"
                      },
                      "type": "progress",
                      "classList": [
                        "musicbar"
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:80"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:81",
                        "value": function () {return this.music_start_timestamp}
                      },
                      "type": "text",
                      "style": {
                        "color": "#FFFFFF",
                        "marginTop": "5px",
                        "fontSize": "10px"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:82",
                        "value": function () {return this.music_stop_timestamp}
                      },
                      "type": "text",
                      "style": {
                        "color": "#FFFFFF",
                        "left": "600%",
                        "marginTop": "5px",
                        "fontSize": "10px"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:85",
                "className": "musicButtons"
              },
              "type": "div",
              "classList": [
                "musicButtons"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:86",
                    "src": function () {return this.previousplay}
                  },
                  "type": "image",
                  "style": {
                    "width": "28px",
                    "height": "23px"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:87",
                    "src": function () {return this.pause}
                  },
                  "type": "image",
                  "style": {
                    "width": "22px",
                    "height": "30px"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:88",
                    "src": function () {return this.nextplay}
                  },
                  "type": "image",
                  "style": {
                    "width": "52px",
                    "height": "52px"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:92",
        "className": "child-container3"
      },
      "type": "div",
      "classList": [
        "child-container3"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:93",
            "src": function () {return this.menu}
          },
          "type": "image",
          "events": {
            "click": "menuclick"
          },
          "style": {
            "width": "31px",
            "height": "31px"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:94",
            "src": function () {return this.location}
          },
          "type": "image",
          "events": {
            "click": "locationclick"
          },
          "style": {
            "width": "23px",
            "height": "30px"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:95",
            "src": function () {return this.home}
          },
          "type": "image",
          "style": {
            "width": "37px",
            "height": "37px"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:96",
            "src": function () {return this.headset}
          },
          "type": "image",
          "events": {
            "click": "hearphoneclick"
          },
          "style": {
            "width": "30px",
            "height": "30px"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:97",
            "src": function () {return this.phone}
          },
          "type": "image",
          "events": {
            "click": "phoneclick"
          },
          "style": {
            "width": "30px",
            "height": "30px"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/manju/Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/manju/Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK6/SDK-offline-2.2.0.3-mac 2/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!/Users/manju/DevEcoStudioProjects/SmartBike/entry/src/main/js/default/pages/index/index.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _callerName = _interopRequireDefault(__webpack_require__(/*! ../../i18n/callerName.json */ "../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/i18n/callerName.json"));

var _speed = _interopRequireDefault(__webpack_require__(/*! ../../i18n/speed.json */ "../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/i18n/speed.json"));

var _music_info = _interopRequireDefault(__webpack_require__(/*! ../../i18n/music_info.json */ "../../../../../../../DevEcoStudioProjects/SmartBike/entry/src/main/js/default/i18n/music_info.json"));

var _default = {
  data: {
    title: "This is  title",
    leftindicator: '/common/images/header/left_indicator_on.png',
    lowbeam: '/common/images/header/low_beam.png',
    bluetooth: "/common/images/header/bluetooth.png",
    sidestand: "/common/images/header/side_stand.png",
    highbeam: "/common/images/header/high_beam_on.png",
    indicatoroff: "/common/images/header/right_indicator_off.png",
    fuel: "/common/images/left/fuel.png",
    level10: "/common/images/left/level_10.png",
    level20: "/common/images/left/level_20.png",
    level40: "/common/images/left/level_40.png",
    level60: "/common/images/left/level_60.png",
    level80: "/common/images/left/level_80.png",
    level100: "/common/images/left/level_100.png",
    callericon: "/common/images/middle/user_pic.png",
    callaccept: "/common/images/middle/call_connect.png",
    callreject: "/common/images/middle/call_disconnect.png",
    music_cover: "/common/images/right/music_image.png",
    previousplay: "/common/images/right/previous.png",
    pause: "/common/images/right/pause.png",
    nextplay: "/common/images/right/next_on.png",
    menu: "/common/images/bottom/menu.png",
    location: "/common/images/bottom/location.png",
    home: "/common/images/bottom/home.png",
    headset: "/common/images/bottom/Hearphone_select.png",
    phone: "/common/images/bottom/contact_icon.png",
    low_beamon: '/common/images/onClick/low_beam_on.png',
    left_indicatoroff: '/common/images/onClick/left_indicator_off.png',
    bluetooth_off: '/common/images/onClick/bluetooth_off.png',
    side_stand_on: '/common/images/onClick/side_stand_on.png',
    high_beam_off: '/common/images/onClick/high_beam_off.png',
    right_indicator_on: '/common/images/onClick/right_indicator_on.png',
    menu_select: '/common/images/onClick/menu_select.png',
    location_select: '/common/images/onClick/location_select.png',
    Hearphone_off: '/common/images/onClick/Hearphone.png',
    contact_select: '/common/images/onClick/contact_select.png',
    Front30PSI: "Front 30 PSI",
    Rear32PSI: "Rear 32 PSI",
    E: "E",
    R: "R",
    SPORT: "SPORT",
    80: "80 %",
    110: "110",
    Ekm: "Est Km Range Left",
    time: "01 : 20 PM",
    callername: "",
    Incomingcall: "Incoming call ... ",
    48: "48",
    Kmh: "60 Km/h",
    avg: "Average Speed",
    Kms: "2762 Kms",
    song_name: "In the Name of Love",
    album_name: "Album Name",
    music_start_timestamp: "00:00",
    music_stop_timestamp: "04:55",
    myname: "Ajith M",
    caller: [],
    speed: [],
    music: []
  },
  onInit: function onInit() {
    setInterval(this.time_calc, 1000);
    this.setCallerName();
    this.setSpeed();
    this.setMusic();
  },
  lowbeamonclick: function lowbeamonclick() {
    if (this.lowbeam === '/common/images/header/low_beam.png') {
      this.lowbeam = this.low_beamon;
      console.info('Inside if condition of lowbeamonclick()');
    } else {
      this.lowbeam = '/common/images/header/low_beam.png';
      console.info('Inside else condition of lowbeamonclick()');
    }
  },
  leftindicatorclick: function leftindicatorclick() {
    if (this.leftindicator === '/common/images/header/left_indicator_on.png') {
      this.leftindicator = this.left_indicatoroff;
    } else {
      this.leftindicator = '/common/images/header/left_indicator_on.png';
    }
  },
  bluetoothclick: function bluetoothclick() {
    if (this.bluetooth === '/common/images/header/bluetooth.png') {
      this.bluetooth = this.bluetooth_off;
    } else {
      this.bluetooth = '/common/images/header/bluetooth.png';
    }
  },
  sidestandclick: function sidestandclick() {
    if (this.sidestand === "/common/images/header/side_stand.png") {
      this.sidestand = this.side_stand_on;
    } else {
      this.sidestand = "/common/images/header/side_stand.png";
    }
  },
  highbeamclick: function highbeamclick() {
    if (this.highbeam === "/common/images/header/high_beam_on.png") {
      this.highbeam = this.high_beam_off;
    } else {
      this.highbeam = "/common/images/header/high_beam_on.png";
    }
  },
  rightindicatorclick: function rightindicatorclick() {
    if (this.indicatoroff === "/common/images/header/right_indicator_off.png") {
      this.indicatoroff = this.right_indicator_on;
    } else {
      this.indicatoroff = "/common/images/header/right_indicator_off.png";
    }
  },
  menuclick: function menuclick() {
    if (this.menu === "/common/images/bottom/menu.png") {
      this.menu = this.menu_select;
    } else {
      this.menu = "/common/images/bottom/menu.png";
    }
  },
  locationclick: function locationclick() {
    if (this.location === "/common/images/bottom/location.png") {
      this.location = this.location_select;
    } else {
      this.location = "/common/images/bottom/location.png";
    }
  },
  hearphoneclick: function hearphoneclick() {
    if (this.headset === "/common/images/bottom/Hearphone_select.png") {
      this.headset = this.Hearphone_off;
    } else {
      this.headset = "/common/images/bottom/Hearphone_select.png";
    }
  },
  phoneclick: function phoneclick() {
    if (this.phone === "/common/images/bottom/contact_icon.png") {
      this.phone = this.contact_select;
    } else {
      this.phone = "/common/images/bottom/contact_icon.png";
    }
  },
  time_calc: function time_calc() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var ampm = "PM";

    if (hr > 12) {
      hr = hr - 12;
    } else {
      ampm = "AM";
    }

    if (min >= 60) {
      hr = hr + 1;
      min = min - 60;
    }

    if (min < 10) {
      min = "0" + min;
    }

    this.time = hr + ":" + min + " " + ampm;
  },
  setCallerName: function setCallerName() {
    var d = JSON.stringify(_callerName["default"]);
    this.caller = JSON.parse(d);
  },
  setSpeed: function setSpeed() {
    var d = JSON.stringify(_speed["default"]);
    this.speed = JSON.parse(d);
  },
  setMusic: function setMusic() {
    var d = JSON.stringify(_music_info["default"]);
    this.music = JSON.parse(d);
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map