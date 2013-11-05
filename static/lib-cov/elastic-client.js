// instrument by jscoverage, do not modifly this file
(function () {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (!BASE._$jscoverage) {
    BASE._$jscoverage = {};
    BASE._$jscoverage_cond = {};
    BASE._$jscoverage_done = function (file, line, express) {
      if (arguments.length === 2) {
        BASE._$jscoverage[file][line] ++;
      } else {
        BASE._$jscoverage_cond[file][line] ++;
        return express;
      }
    };
    BASE._$jscoverage_init = function (base, file, lines) {
      var tmp = [];
      for (var i = 0; i < lines.length; i ++) {
        tmp[lines[i]] = 0;
      }
      base[file] = tmp;
    };
  }
})();
_$jscoverage_init(_$jscoverage, "lib/elastic-client.js",[12,13,16,17,18,21,29,47]);
_$jscoverage_init(_$jscoverage_cond, "lib/elastic-client.js",[12]);
_$jscoverage["lib/elastic-client.js"].source = ["/*"," * elastic-client"," * http://github.com/UsabilityDynamics/node-elastic-client"," *"," * @class elastic-client"," * @constructor"," * @version 0.1.0"," */","function Module() {","","  // Force new instance.","  if( !( this instanceof Module ) ) {","    return new Module( arguments[0], arguments[1] );","  }","","  var settings  = 'object' === typeof arguments[0] ? arguments[0] : {};","  var callback  = 'function' === typeof arguments[1] ? arguments[1] : Module.utility.noop;","  var self      = this;","","  // @chainable","  return this;","","}","","/**"," * Instance Properties"," *"," */","Object.defineProperties( Module.prototype, {","  some_action: {","    /**","     * Some Actions","     *","     * @for elastic-client","     */","    value: function some_action() {},","    enumerable: true,","    configurable: true,","    writable: true","  }","});","","/**"," * Constructor Properties"," *"," */","Object.defineProperties( module.exports = Module, {","  utility: {","    value: require( './utility' ),","    enumerable: false,","    writable: false","  },","  create: {","    /**","     * Create Instance","     *","     * @for elastic-client","     */","    value: function create() {},","    enumerable: true,","    configurable: true,","    writable: true","  }","});"];
function Module() {
    _$jscoverage_done("lib/elastic-client.js", 12);
    if (_$jscoverage_done("lib/elastic-client.js", 12, !(this instanceof Module))) {
        _$jscoverage_done("lib/elastic-client.js", 13);
        return new Module(arguments[0], arguments[1]);
    }
    _$jscoverage_done("lib/elastic-client.js", 16);
    var settings = "object" === typeof arguments[0] ? arguments[0] : {};
    _$jscoverage_done("lib/elastic-client.js", 17);
    var callback = "function" === typeof arguments[1] ? arguments[1] : Module.utility.noop;
    _$jscoverage_done("lib/elastic-client.js", 18);
    var self = this;
    _$jscoverage_done("lib/elastic-client.js", 21);
    return this;
}

_$jscoverage_done("lib/elastic-client.js", 29);
Object.defineProperties(Module.prototype, {
    some_action: {
        value: function some_action() {},
        enumerable: true,
        configurable: true,
        writable: true
    }
});

_$jscoverage_done("lib/elastic-client.js", 47);
Object.defineProperties(module.exports = Module, {
    utility: {
        value: require("./utility"),
        enumerable: false,
        writable: false
    },
    create: {
        value: function create() {},
        enumerable: true,
        configurable: true,
        writable: true
    }
});