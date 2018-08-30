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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/geekdom/index.js":
/*!***************************************!*\
  !*** ./node_modules/geekdom/index.js ***!
  \***************************************/
/*! exports provided: render, h, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nconst render = __webpack_require__(/*! ./src/reco-render.js */ \"./node_modules/geekdom/src/reco-render.js\").render\nconst h = __webpack_require__(/*! ./src/hyperscript.js */ \"./node_modules/geekdom/src/hyperscript.js\").default\nconst Component = __webpack_require__(/*! ./src/component.js */ \"./node_modules/geekdom/src/component.js\")\n\n// export default {\n//     render,\n//     h,\n//     Component\n// }\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ2Vla2RvbS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZWVrZG9tL2luZGV4LmpzP2NjMGQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVuZGVyID0gcmVxdWlyZSgnLi9zcmMvcmVjby1yZW5kZXIuanMnKS5yZW5kZXJcbmNvbnN0IGggPSByZXF1aXJlKCcuL3NyYy9oeXBlcnNjcmlwdC5qcycpLmRlZmF1bHRcbmNvbnN0IENvbXBvbmVudCA9IHJlcXVpcmUoJy4vc3JjL2NvbXBvbmVudC5qcycpXG5cbi8vIGV4cG9ydCBkZWZhdWx0IHtcbi8vICAgICByZW5kZXIsXG4vLyAgICAgaCxcbi8vICAgICBDb21wb25lbnRcbi8vIH1cblxuZXhwb3J0IHtyZW5kZXIsIGgsIENvbXBvbmVudH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/geekdom/index.js\n");

/***/ }),

/***/ "./node_modules/geekdom/src/component.js":
/*!***********************************************!*\
  !*** ./node_modules/geekdom/src/component.js ***!
  \***********************************************/
/*! exports provided: Component, componentInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"componentInstance\", function() { return componentInstance; });\nconst reco = __webpack_require__(/*! ./reco-render */ \"./node_modules/geekdom/src/reco-render.js\")\n\nclass Component {\n    constructor(props){\n      this.props = props\n      this.state = this.state || {}\n    }\n  \n    setState (update) {\n      this.state = Object.assign({}, this.state, update)\n      this.updateInstance(this._internalInstance)\n    }\n  \n    updateInstance (internalInstance) {\n      const parentDOM = internalInstance.dom.parentNode\n      const element = internalInstance.element\n      reco (parentDOM, element, internalInstance)\n    }\n  }\n  \n  \n  function componentInstance (element, internalInstance) {\n    const {type, props} = element\n    const publicInstance = new type(props)\n    publicInstance._internalInstance = internalInstance\n    return publicInstance\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ2Vla2RvbS9zcmMvY29tcG9uZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlZWtkb20vc3JjL2NvbXBvbmVudC5qcz8yZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlY28gPSByZXF1aXJlKCcuL3JlY28tcmVuZGVyJylcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fVxuICAgIH1cbiAgXG4gICAgc2V0U3RhdGUgKHVwZGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHVwZGF0ZSlcbiAgICAgIHRoaXMudXBkYXRlSW5zdGFuY2UodGhpcy5faW50ZXJuYWxJbnN0YW5jZSlcbiAgICB9XG4gIFxuICAgIHVwZGF0ZUluc3RhbmNlIChpbnRlcm5hbEluc3RhbmNlKSB7XG4gICAgICBjb25zdCBwYXJlbnRET00gPSBpbnRlcm5hbEluc3RhbmNlLmRvbS5wYXJlbnROb2RlXG4gICAgICBjb25zdCBlbGVtZW50ID0gaW50ZXJuYWxJbnN0YW5jZS5lbGVtZW50XG4gICAgICByZWNvIChwYXJlbnRET00sIGVsZW1lbnQsIGludGVybmFsSW5zdGFuY2UpXG4gICAgfVxuICB9XG4gIFxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudEluc3RhbmNlIChlbGVtZW50LCBpbnRlcm5hbEluc3RhbmNlKSB7XG4gICAgY29uc3Qge3R5cGUsIHByb3BzfSA9IGVsZW1lbnRcbiAgICBjb25zdCBwdWJsaWNJbnN0YW5jZSA9IG5ldyB0eXBlKHByb3BzKVxuICAgIHB1YmxpY0luc3RhbmNlLl9pbnRlcm5hbEluc3RhbmNlID0gaW50ZXJuYWxJbnN0YW5jZVxuICAgIHJldHVybiBwdWJsaWNJbnN0YW5jZVxuICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/geekdom/src/component.js\n");

/***/ }),

/***/ "./node_modules/geekdom/src/dom-utilities.js":
/*!***************************************************!*\
  !*** ./node_modules/geekdom/src/dom-utilities.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return updateDOMProperties; });\nfunction updateDOMProperties (dom, newProps, prevProps={}, newElement=true) {\n    const isListener = listener => listener.startsWith('on')\n    const tempObject = Object.assign({}, prevProps, newProps)\n    let keys = Object.keys(tempObject).filter(x => x !== 'children')\n    for (let x of keys) {\n      if (x in newProps) {\n        if (newProps[x] === prevProps[x] && !newElement){\n          continue\n        }\n        if (x === 'nodeValue') {\n          dom.textContent = newProps[x]\n          continue\n        }\n        if (!isListener(x)) {\n          dom.setAttribute(x, newProps[x])\n          continue\n        }\n        dom.addEventListener(x.slice(2).toLowerCase(), newProps[x])\n        continue\n      }\n      if (x === 'nodeValue') {\n        dom.textContent = ''\n        continue\n      }\n      if (!isListener(x)) {\n        dom.removeAttribute(x, prevProps[x])\n        continue\n      }\n      dom.removeEventLister(x.slice(2).toLowerCase(), prevProps[x])\n    }\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ2Vla2RvbS9zcmMvZG9tLXV0aWxpdGllcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZWVrZG9tL3NyYy9kb20tdXRpbGl0aWVzLmpzP2FkM2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlRE9NUHJvcGVydGllcyAoZG9tLCBuZXdQcm9wcywgcHJldlByb3BzPXt9LCBuZXdFbGVtZW50PXRydWUpIHtcbiAgICBjb25zdCBpc0xpc3RlbmVyID0gbGlzdGVuZXIgPT4gbGlzdGVuZXIuc3RhcnRzV2l0aCgnb24nKVxuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2UHJvcHMsIG5ld1Byb3BzKVxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGVtcE9iamVjdCkuZmlsdGVyKHggPT4geCAhPT0gJ2NoaWxkcmVuJylcbiAgICBmb3IgKGxldCB4IG9mIGtleXMpIHtcbiAgICAgIGlmICh4IGluIG5ld1Byb3BzKSB7XG4gICAgICAgIGlmIChuZXdQcm9wc1t4XSA9PT0gcHJldlByb3BzW3hdICYmICFuZXdFbGVtZW50KXtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh4ID09PSAnbm9kZVZhbHVlJykge1xuICAgICAgICAgIGRvbS50ZXh0Q29udGVudCA9IG5ld1Byb3BzW3hdXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTGlzdGVuZXIoeCkpIHtcbiAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKHgsIG5ld1Byb3BzW3hdKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoeC5zbGljZSgyKS50b0xvd2VyQ2FzZSgpLCBuZXdQcm9wc1t4XSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmICh4ID09PSAnbm9kZVZhbHVlJykge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKCFpc0xpc3RlbmVyKHgpKSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoeCwgcHJldlByb3BzW3hdKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVyKHguc2xpY2UoMikudG9Mb3dlckNhc2UoKSwgcHJldlByb3BzW3hdKVxuICAgIH1cbiAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/geekdom/src/dom-utilities.js\n");

/***/ }),

/***/ "./node_modules/geekdom/src/hyperscript.js":
/*!*************************************************!*\
  !*** ./node_modules/geekdom/src/hyperscript.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return h; });\nfunction h (element, props, ...args) {\n  let vdom = {type: element}\n  props !== null ? vdom.props = props : vdom.props = {}\n  vdom.props.children=[]\n  if (args.length == 0) {\n    return vdom\n  }\n  args.forEach(child => {\n    if (isTextNode(child)) {\n      return vdom.props.children.push(createTextNode(child))\n    }\n    return vdom.props.children.push(child)\n  })\n  return vdom\n}\n\nfunction isTextNode (node){\n  return !(node instanceof Object)\n}\n\nfunction createTextNode (value) {\n  return {type: 'TEXT', props: {nodeValue: value, children:[]}}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ2Vla2RvbS9zcmMvaHlwZXJzY3JpcHQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2Vla2RvbS9zcmMvaHlwZXJzY3JpcHQuanM/YTMzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoIChlbGVtZW50LCBwcm9wcywgLi4uYXJncykge1xuICBsZXQgdmRvbSA9IHt0eXBlOiBlbGVtZW50fVxuICBwcm9wcyAhPT0gbnVsbCA/IHZkb20ucHJvcHMgPSBwcm9wcyA6IHZkb20ucHJvcHMgPSB7fVxuICB2ZG9tLnByb3BzLmNoaWxkcmVuPVtdXG4gIGlmIChhcmdzLmxlbmd0aCA9PSAwKSB7XG4gICAgcmV0dXJuIHZkb21cbiAgfVxuICBhcmdzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGlmIChpc1RleHROb2RlKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHZkb20ucHJvcHMuY2hpbGRyZW4ucHVzaChjcmVhdGVUZXh0Tm9kZShjaGlsZCkpXG4gICAgfVxuICAgIHJldHVybiB2ZG9tLnByb3BzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gIH0pXG4gIHJldHVybiB2ZG9tXG59XG5cbmZ1bmN0aW9uIGlzVGV4dE5vZGUgKG5vZGUpe1xuICByZXR1cm4gIShub2RlIGluc3RhbmNlb2YgT2JqZWN0KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSAodmFsdWUpIHtcbiAgcmV0dXJuIHt0eXBlOiAnVEVYVCcsIHByb3BzOiB7bm9kZVZhbHVlOiB2YWx1ZSwgY2hpbGRyZW46W119fVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/geekdom/src/hyperscript.js\n");

/***/ }),

/***/ "./node_modules/geekdom/src/reco-render.js":
/*!*************************************************!*\
  !*** ./node_modules/geekdom/src/reco-render.js ***!
  \*************************************************/
/*! exports provided: render, reco */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reco\", function() { return reco; });\nconst updateDOMProperties = __webpack_require__(/*! ./dom-utilities */ \"./node_modules/geekdom/src/dom-utilities.js\").default\nconst componentInstance = __webpack_require__(/*! ./component */ \"./node_modules/geekdom/src/component.js\")\n\nlet rootInstance = null\n\nfunction render (element, container) {\n  const prevInst = rootInstance\n  const nextInst = reco(container, element, prevInst)\n  rootInstance = nextInst\n}\n\nfunction reco (parentDOM, element, prevInst) {\n  if (prevInst === null) {\n    const newInstance = instantiate(element)\n    parentDOM.appendChild(newInstance.dom)\n    return newInstance\n  }\n  if (!element) {\n    parentDOM.removeChild(prevInst.dom)\n    return null\n  }\n  if (prevInst.element.type !== element.type) {\n    const newInstance = instantiate(element)\n    parentDOM.replaceChild(newInstance.dom, prevInstdom)\n    return newInstance\n  }\n  if (typeof element.type === 'string') {\n    updateDOMProperties(prevInst.dom, element.props, prevInst.props, false)\n    prevInst.childInstances = recoChildren (element, prevInst)\n    prevInst.element = element\n    return prevInst\n  }\n  prevInst.publicInstance.props = element.props\n  const childElement = prevInst.publicInstance.render()\n  const oldChildInstance = prevInst.childInstance\n  const childInstance = reco(parentDOM, childElement,oldChildInstance)\n  prevInst.dom = childInstance.dom\n  prevInst.childInstance= childInstance\n  prevInst.element = element\n  return prevInst\n}\n\nfunction instantiate (element) {\n  if (typeof element.type === 'string') {\n    var dom = element.type === 'TEXT' \n    ? dom = document.createTextNode(element.props.nodeValue)\n    : dom = document.createElement(element.type)\n    updateDOMProperties(dom, element.props, {}, false)\n    const childInstances = element.props.children.map(instantiate)\n    const childDOMS = childInstances.map(child => child.dom)\n    childDOMS.forEach(child => dom.appendChild(child))\n    return {dom, element, childInstances}\n  }\n  const instance = {}\n  const publicInstance = componentInstance(element, instance)\n  const childElement = publicInstance.type ? publicInstance : publicInstance.render()\n  const childInstance = instantiate(childElement)\n  var dom = childInstance.dom\n  Object.assign(instance, {dom, element, childInstance, publicInstance})\n  return instance\n}\n\nfunction recoChildren(element, previousInstance) {\n  const dom = previousInstance.dom\n  const previousChildInstances = previousInstance.childInstances\n  const newChildren = element.props.children\n  let newChildInstances =[]\n  for (let i=0, j = Math.max(newChildren.length, previousChildInstances.length); i < j; i++){\n    newChildInstances.push(reco(dom, newChildren[i], previousChildInstances[i]))\n  }\n  return newChildInstances.filter(child => child !== null)\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ2Vla2RvbS9zcmMvcmVjby1yZW5kZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2Vla2RvbS9zcmMvcmVjby1yZW5kZXIuanM/OTIzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1cGRhdGVET01Qcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi9kb20tdXRpbGl0aWVzJykuZGVmYXVsdFxuY29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSByZXF1aXJlKCcuL2NvbXBvbmVudCcpXG5cbmxldCByb290SW5zdGFuY2UgPSBudWxsXG5cbmZ1bmN0aW9uIHJlbmRlciAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gIGNvbnN0IHByZXZJbnN0ID0gcm9vdEluc3RhbmNlXG4gIGNvbnN0IG5leHRJbnN0ID0gcmVjbyhjb250YWluZXIsIGVsZW1lbnQsIHByZXZJbnN0KVxuICByb290SW5zdGFuY2UgPSBuZXh0SW5zdFxufVxuXG5mdW5jdGlvbiByZWNvIChwYXJlbnRET00sIGVsZW1lbnQsIHByZXZJbnN0KSB7XG4gIGlmIChwcmV2SW5zdCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IG5ld0luc3RhbmNlID0gaW5zdGFudGlhdGUoZWxlbWVudClcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQobmV3SW5zdGFuY2UuZG9tKVxuICAgIHJldHVybiBuZXdJbnN0YW5jZVxuICB9XG4gIGlmICghZWxlbWVudCkge1xuICAgIHBhcmVudERPTS5yZW1vdmVDaGlsZChwcmV2SW5zdC5kb20pXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBpZiAocHJldkluc3QuZWxlbWVudC50eXBlICE9PSBlbGVtZW50LnR5cGUpIHtcbiAgICBjb25zdCBuZXdJbnN0YW5jZSA9IGluc3RhbnRpYXRlKGVsZW1lbnQpXG4gICAgcGFyZW50RE9NLnJlcGxhY2VDaGlsZChuZXdJbnN0YW5jZS5kb20sIHByZXZJbnN0ZG9tKVxuICAgIHJldHVybiBuZXdJbnN0YW5jZVxuICB9XG4gIGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgIHVwZGF0ZURPTVByb3BlcnRpZXMocHJldkluc3QuZG9tLCBlbGVtZW50LnByb3BzLCBwcmV2SW5zdC5wcm9wcywgZmFsc2UpXG4gICAgcHJldkluc3QuY2hpbGRJbnN0YW5jZXMgPSByZWNvQ2hpbGRyZW4gKGVsZW1lbnQsIHByZXZJbnN0KVxuICAgIHByZXZJbnN0LmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcmV0dXJuIHByZXZJbnN0XG4gIH1cbiAgcHJldkluc3QucHVibGljSW5zdGFuY2UucHJvcHMgPSBlbGVtZW50LnByb3BzXG4gIGNvbnN0IGNoaWxkRWxlbWVudCA9IHByZXZJbnN0LnB1YmxpY0luc3RhbmNlLnJlbmRlcigpXG4gIGNvbnN0IG9sZENoaWxkSW5zdGFuY2UgPSBwcmV2SW5zdC5jaGlsZEluc3RhbmNlXG4gIGNvbnN0IGNoaWxkSW5zdGFuY2UgPSByZWNvKHBhcmVudERPTSwgY2hpbGRFbGVtZW50LG9sZENoaWxkSW5zdGFuY2UpXG4gIHByZXZJbnN0LmRvbSA9IGNoaWxkSW5zdGFuY2UuZG9tXG4gIHByZXZJbnN0LmNoaWxkSW5zdGFuY2U9IGNoaWxkSW5zdGFuY2VcbiAgcHJldkluc3QuZWxlbWVudCA9IGVsZW1lbnRcbiAgcmV0dXJuIHByZXZJbnN0XG59XG5cbmZ1bmN0aW9uIGluc3RhbnRpYXRlIChlbGVtZW50KSB7XG4gIGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgIHZhciBkb20gPSBlbGVtZW50LnR5cGUgPT09ICdURVhUJyBcbiAgICA/IGRvbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnQucHJvcHMubm9kZVZhbHVlKVxuICAgIDogZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LnR5cGUpXG4gICAgdXBkYXRlRE9NUHJvcGVydGllcyhkb20sIGVsZW1lbnQucHJvcHMsIHt9LCBmYWxzZSlcbiAgICBjb25zdCBjaGlsZEluc3RhbmNlcyA9IGVsZW1lbnQucHJvcHMuY2hpbGRyZW4ubWFwKGluc3RhbnRpYXRlKVxuICAgIGNvbnN0IGNoaWxkRE9NUyA9IGNoaWxkSW5zdGFuY2VzLm1hcChjaGlsZCA9PiBjaGlsZC5kb20pXG4gICAgY2hpbGRET01TLmZvckVhY2goY2hpbGQgPT4gZG9tLmFwcGVuZENoaWxkKGNoaWxkKSlcbiAgICByZXR1cm4ge2RvbSwgZWxlbWVudCwgY2hpbGRJbnN0YW5jZXN9XG4gIH1cbiAgY29uc3QgaW5zdGFuY2UgPSB7fVxuICBjb25zdCBwdWJsaWNJbnN0YW5jZSA9IGNvbXBvbmVudEluc3RhbmNlKGVsZW1lbnQsIGluc3RhbmNlKVxuICBjb25zdCBjaGlsZEVsZW1lbnQgPSBwdWJsaWNJbnN0YW5jZS50eXBlID8gcHVibGljSW5zdGFuY2UgOiBwdWJsaWNJbnN0YW5jZS5yZW5kZXIoKVxuICBjb25zdCBjaGlsZEluc3RhbmNlID0gaW5zdGFudGlhdGUoY2hpbGRFbGVtZW50KVxuICB2YXIgZG9tID0gY2hpbGRJbnN0YW5jZS5kb21cbiAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge2RvbSwgZWxlbWVudCwgY2hpbGRJbnN0YW5jZSwgcHVibGljSW5zdGFuY2V9KVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cblxuZnVuY3Rpb24gcmVjb0NoaWxkcmVuKGVsZW1lbnQsIHByZXZpb3VzSW5zdGFuY2UpIHtcbiAgY29uc3QgZG9tID0gcHJldmlvdXNJbnN0YW5jZS5kb21cbiAgY29uc3QgcHJldmlvdXNDaGlsZEluc3RhbmNlcyA9IHByZXZpb3VzSW5zdGFuY2UuY2hpbGRJbnN0YW5jZXNcbiAgY29uc3QgbmV3Q2hpbGRyZW4gPSBlbGVtZW50LnByb3BzLmNoaWxkcmVuXG4gIGxldCBuZXdDaGlsZEluc3RhbmNlcyA9W11cbiAgZm9yIChsZXQgaT0wLCBqID0gTWF0aC5tYXgobmV3Q2hpbGRyZW4ubGVuZ3RoLCBwcmV2aW91c0NoaWxkSW5zdGFuY2VzLmxlbmd0aCk7IGkgPCBqOyBpKyspe1xuICAgIG5ld0NoaWxkSW5zdGFuY2VzLnB1c2gocmVjbyhkb20sIG5ld0NoaWxkcmVuW2ldLCBwcmV2aW91c0NoaWxkSW5zdGFuY2VzW2ldKSlcbiAgfVxuICByZXR1cm4gbmV3Q2hpbGRJbnN0YW5jZXMuZmlsdGVyKGNoaWxkID0+IGNoaWxkICE9PSBudWxsKVxufVxuXG5leHBvcnQge3JlbmRlciwgcmVjb30iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/geekdom/src/reco-render.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var geekdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! geekdom */ \"./node_modules/geekdom/index.js\");\n// @jsx h\n\n\nvar App = function App() {\n  return Object(geekdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"h1\", null, \"Hellow orld\");\n};\n\nconsole.log(geekdom__WEBPACK_IMPORTED_MODULE_0__[\"render\"]);\nObject(geekdom__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(App(), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YmY0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAanN4IGhcbmltcG9ydCB7IHJlbmRlciwgaCB9IGZyb20gJ2dlZWtkb20nO1xuXG52YXIgQXBwID0gZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gaChcImgxXCIsIG51bGwsIFwiSGVsbG93IG9ybGRcIik7XG59O1xuXG5jb25zb2xlLmxvZyhyZW5kZXIpO1xucmVuZGVyKEFwcCgpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });