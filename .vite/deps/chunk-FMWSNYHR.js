import {
  require_jsx_runtime
} from "./chunk-6H6IX42F.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/react-bootstrap/esm/ThemeProvider.js
var React = __toESM(require_react());
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DEFAULT_BREAKPOINTS = ["xxl", "xl", "lg", "md", "sm", "xs"];
var DEFAULT_MIN_BREAKPOINT = "xs";
var ThemeContext = React.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
var {
  Consumer,
  Provider
} = ThemeContext;
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0, import_react.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

export {
  require_classnames,
  useBootstrapPrefix
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=chunk-FMWSNYHR.js.map
