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
_$jscoverage_init(_$jscoverage, "lib/elastic-client.js",[13,14,17,18,19,22,30,48]);
_$jscoverage_init(_$jscoverage_cond, "lib/elastic-client.js",[13]);
_$jscoverage["lib/elastic-client.js"].source = ["/**"," * ElasticClient"," *"," * http://github.com/UsabilityDynamics/node-elastic-client"," *"," * @class ElasticClient"," * @constructor"," * @version 0.1.0"," */","function ElasticClient() {","","  // Force new instance.","  if( !( this instanceof ElasticClient ) ) {","    return new ElasticClient( arguments[0], arguments[1] );","  }","","  var settings  = 'object' === typeof arguments[0] ? arguments[0] : {};","  var callback  = 'function' === typeof arguments[1] ? arguments[1] : ElasticClient.utility.noop;","  var self      = this;","","  // @chainable","  return this;","","}","","/**"," * Instance Properties"," *"," */","Object.defineProperties( ElasticClient.prototype, {","  some_action: {","    /**","     * Some Actions","     *","     * @for ElasticClient","     */","    value: function some_action() {},","    enumerable: true,","    configurable: true,","    writable: true","  }","});","","/**"," * Constructor Properties"," *"," */","Object.defineProperties( ElasticClient.exports = ElasticClient, {","  utility: {","    value: require( './utility' ),","    enumerable: false,","    writable: false","  },","  create: {","    /**","     * Create Instance","     *","     * @for ElasticClient","     */","    value: function create() {},","    enumerable: true,","    configurable: true,","    writable: true","  }","});"];
function ElasticClient() {
    _$jscoverage_done("lib/elastic-client.js", 13);
    if (_$jscoverage_done("lib/elastic-client.js", 13, !(this instanceof ElasticClient))) {
        _$jscoverage_done("lib/elastic-client.js", 14);
        return new ElasticClient(arguments[0], arguments[1]);
    }
    _$jscoverage_done("lib/elastic-client.js", 17);
    var settings = "object" === typeof arguments[0] ? arguments[0] : {};
    _$jscoverage_done("lib/elastic-client.js", 18);
    var callback = "function" === typeof arguments[1] ? arguments[1] : ElasticClient.utility.noop;
    _$jscoverage_done("lib/elastic-client.js", 19);
    var self = this;
    _$jscoverage_done("lib/elastic-client.js", 22);
    return this;
}

_$jscoverage_done("lib/elastic-client.js", 30);
Object.defineProperties(ElasticClient.prototype, {
    some_action: {
        value: function some_action() {},
        enumerable: true,
        configurable: true,
        writable: true
    }
});

_$jscoverage_done("lib/elastic-client.js", 48);
Object.defineProperties(ElasticClient.exports = ElasticClient, {
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