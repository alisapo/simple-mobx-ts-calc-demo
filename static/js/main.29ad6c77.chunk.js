(this["webpackJsonpsovr-tech"]=this["webpackJsonpsovr-tech"]||[]).push([[0],{13:function(e,t,_){},14:function(e,t,_){},17:function(e,t,_){"use strict";_.r(t);var s=_(0),c=_.n(s),a=_(4),r=_.n(a),l=(_(13),_(14),_(3)),o={calculatorStore:new(_(6).a)},n=Object(s.createContext)(o),i=function(){return Object(s.useContext)(n)},u=_(2),b=Object(l.a)((function(){var e=i().calculatorStore;return Object(u.jsx)("div",{className:"calculations",children:e.calculations})})),h=Object(l.a)((function(){var e=i().calculatorStore;return Object(u.jsx)("div",{className:"result",children:e.result})})),d=Object(l.a)((function(){var e=i().calculatorStore;return Object(u.jsx)("div",{className:"keyboard",children:["AC","DEL","/","7","8","9","*","4","5","6","+","1","2","3","-",".","0","="].map((function(t){return Object(u.jsx)("button",{className:"keyboard-buttons",onClick:function(){return e.addValue(t)},children:t},t)}))})}));var m=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsx)(h,{}),Object(u.jsx)(d,{})]})},O=function(e){e&&e instanceof Function&&_.e(3).then(_.bind(null,18)).then((function(t){var _=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;_(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(n.Provider,{value:o,children:Object(u.jsx)(m,{})})}),document.getElementById("root")),O()},6:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Admin_Desktop_tests_sovr_tech_sovr_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),C_Users_Admin_Desktop_tests_sovr_tech_sovr_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),mobx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),CalculatorStore=function(){function CalculatorStore(){var _this=this;Object(C_Users_Admin_Desktop_tests_sovr_tech_sovr_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalculatorStore),this.result="",this.calculations="",this.calculate=function(){try{_this.result=(eval(_this.calculations)||"0")+""}catch(error){_this.result="error"}},this.reset=function(){_this.result="",_this.calculations=""},this.delSymbol=function(){_this.calculations=_this.calculations.slice(0,-1)},Object(mobx__WEBPACK_IMPORTED_MODULE_2__.e)(this,{result:mobx__WEBPACK_IMPORTED_MODULE_2__.f,calculations:mobx__WEBPACK_IMPORTED_MODULE_2__.f,addValue:mobx__WEBPACK_IMPORTED_MODULE_2__.b})}return Object(C_Users_Admin_Desktop_tests_sovr_tech_sovr_tech_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalculatorStore,[{key:"addValue",value:function(e){var t=this;"="===e?this.calculate():"AC"===e?this.reset():"DEL"===e?this.delSymbol():(this.calculations=this.calculations+e,this.calculations.length>20&&(this.calculations="out of limit",setTimeout((function(){t.calculations=""}),1500)),this.result&&(this.result=""))}}]),CalculatorStore}();__webpack_exports__.a=CalculatorStore}},[[17,1,2]]]);
//# sourceMappingURL=main.29ad6c77.chunk.js.map