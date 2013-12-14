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
_$jscoverage_init(_$jscoverage, "lib/common/utility.js",[8,15]);
_$jscoverage_init(_$jscoverage_cond, "lib/common/utility.js",[]);
_$jscoverage["lib/common/utility.js"].source = ["/**"," * Utility Methods"," *"," * @class Utility"," * @constructor"," */","function Utility() {","  return Object.keys( arguments ) ? require( 'lodash' ).pick.apply( null, [ Utility, Array.prototype.slice.call( arguments ) ] ) : Utility;","}","","/**"," * Utility Properties."," *"," */","Object.defineProperties( module.exports = Utility, {","  format: {","    /**","     * Prototype Extender.","     *","     * @for Utility","     * @method inherits","     */","    value: require( 'util' ).format,","    enumerable: true,","    configurable: true,","    writable: true","  },","  inherits: {","    /**","     * Prototype Extender.","     *","     * @for Utility","     * @method inherits","     */","    value: require( 'util' ).inherits,","    enumerable: true,","    configurable: true,","    writable: true","  },","  objectEmitter: {","    /**","     * Emitter Mixin.","     *","     * @for Utility","     * @method mixin","     */","    value: require( 'object-emitter' ),","    enumerable: true,","    configurable: true,","    writable: true","  },","  objectSettings: {","    /**","     * Settings Mixin.","     *","     * @for Utility","     * @method mixin","     */","    value: require( 'object-settings' ),","    enumerable: true,","    configurable: true,","    writable: true","  },","  adapter: {","    /**","     * Waterline ElasticSearch Adapter.","     *","     * @for Utility","     * @method adapter","     */","    value: require( 'waterline-elasticsearch' ).create,","    enumerable: true,","    configurable: true,","    writable: true","  },","  parse_url: {","    /**","     * Waterline ElasticSearch Adapter.","     *","     * @for Utility","     * @method adapter","     */","    value: require( 'url' ).parse,","    enumerable: true,","    configurable: true,","    writable: true","  },","  pluralize: {","    /**","     * pluralize","     *","     * @for Utility","     * @method pluralize","     */","    value: require( 'inflection' ).pluralize,","    enumerable: true,","    configurable: true,","    writable: true","  },","  dasherize: {","    /**","     * pluralize","     *","     * @for Utility","     * @method pluralize","     */","    value: require( 'inflection' ).dasherize,","    enumerable: true,","    configurable: true,","    writable: true","  },","  singularize: {","    /**","     * pluralize","     *","     * @for Utility","     * @method pluralize","     */","    value: require( 'inflection' ).singularize,","    enumerable: true,","    configurable: true,","    writable: true","  },","  camelize: {","    /**","     * pluralize","     *","     * @for Utility","     * @method pluralize","     */","    value: require( 'inflection' ).camelize,","    enumerable: true,","    configurable: true,","    writable: true","  },","  request: {","    /**","     * Waterline ElasticSearch Adapter.","     *","     * @for Utility","     * @method adapter","     */","    value: require( 'request' ).defaults({","      json: true","    }),","    enumerable: true,","    configurable: true,","    writable: true","  },","  apply: {","    /**","     * @for Utility","     * @method apply","     */","    value: require( 'async' ).apply,","    enumerable: true,","    configurable: true,","    writable: true","  },","  createBatch: {","    /**","     * @for Utility","     * @method apply","     */","    value: require( 'auto' ).createBatch,","    enumerable: true,","    configurable: true,","    writable: true","  },","  Waterline: {","    /**","     * @for Utility","     * @method noop","     */","    value: require( 'waterline' ),","    enumerable: true,","    configurable: true,","    writable: true","  },","  deep_extend: {","    /**","     * Placeholder Method","     *","     * @for Utility","     * @method noop","     */","    value: require( 'deep-extend' ),","    enumerable: true,","    configurable: true,","    writable: true","  },","  noop: {","    /**","     * Placeholder Method","     *","     * @for Utility","     * @method noop","     */","    value: function noop() {},","    enumerable: true,","    configurable: true,","    writable: true","  }","});"];
function Utility() {
    _$jscoverage_done("lib/common/utility.js", 8);
    return Object.keys(arguments) ? require("lodash").pick.apply(null, [ Utility, Array.prototype.slice.call(arguments) ]) : Utility;
}

_$jscoverage_done("lib/common/utility.js", 15);
Object.defineProperties(module.exports = Utility, {
    format: {
        value: require("util").format,
        enumerable: true,
        configurable: true,
        writable: true
    },
    inherits: {
        value: require("util").inherits,
        enumerable: true,
        configurable: true,
        writable: true
    },
    objectEmitter: {
        value: require("object-emitter"),
        enumerable: true,
        configurable: true,
        writable: true
    },
    objectSettings: {
        value: require("object-settings"),
        enumerable: true,
        configurable: true,
        writable: true
    },
    adapter: {
        value: require("waterline-elasticsearch").create,
        enumerable: true,
        configurable: true,
        writable: true
    },
    parse_url: {
        value: require("url").parse,
        enumerable: true,
        configurable: true,
        writable: true
    },
    pluralize: {
        value: require("inflection").pluralize,
        enumerable: true,
        configurable: true,
        writable: true
    },
    dasherize: {
        value: require("inflection").dasherize,
        enumerable: true,
        configurable: true,
        writable: true
    },
    singularize: {
        value: require("inflection").singularize,
        enumerable: true,
        configurable: true,
        writable: true
    },
    camelize: {
        value: require("inflection").camelize,
        enumerable: true,
        configurable: true,
        writable: true
    },
    request: {
        value: require("request").defaults({
            json: true
        }),
        enumerable: true,
        configurable: true,
        writable: true
    },
    apply: {
        value: require("async").apply,
        enumerable: true,
        configurable: true,
        writable: true
    },
    createBatch: {
        value: require("auto").createBatch,
        enumerable: true,
        configurable: true,
        writable: true
    },
    Waterline: {
        value: require("waterline"),
        enumerable: true,
        configurable: true,
        writable: true
    },
    deep_extend: {
        value: require("deep-extend"),
        enumerable: true,
        configurable: true,
        writable: true
    },
    noop: {
        value: function noop() {},
        enumerable: true,
        configurable: true,
        writable: true
    }
});