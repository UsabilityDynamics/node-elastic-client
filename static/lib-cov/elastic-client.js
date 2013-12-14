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
_$jscoverage_init(_$jscoverage, "lib/elastic-client.js",[20,21,25,28,31,100,104,108,109,112,113,117,120,122,123,126,134,152,155,173,176,195,196,200,217,220,221,225,226,229,232,246,249,264,267,268,269,270,272,310,311,360,369,373,381,393,400,409,416,423,443,444,460,466,475,479,480,501,502,504,513,517,535,543]);
_$jscoverage_init(_$jscoverage_cond, "lib/elastic-client.js",[20,195,220,225]);
_$jscoverage["lib/elastic-client.js"].source = ["/**"," * Clastic Client"," *"," * ### Events"," * - connect( error, instance )"," * - disconnect( error, instance )"," *"," *"," * @param handler {Function|Object}"," * @returns {elasticClient}"," * @constructor"," *"," * @class elasticClient"," * @constructor"," * @version 0.1.0"," */","function elasticClient() {","","  // Ensure Valid Instance.","  if( !( this instanceof elasticClient ) ) {","    return new elasticClient( arguments[0] );","  }","","  // Establish Handle Method.","  var handler =  'function' === typeof arguments[0]  ? arguments[0] : this.utility.noop;","","  // Extend handler's prototype with elastClient, Object Emitter and Object Settings.","  this.utility.inherits( handler, elasticClient );","","  // Extend Instance-Prototype.","  Object.defineProperties( handler.prototype, {","    event: {","      /**","       * Current Event.","       *","       * @property event","       */","      value: null,","      enumerable: false,","      writable: true,","      configurable: true","    },","    options: {","      /**","       * Instance Options.","       *","       * @property options","       */","      value: this.utility.objectSettings.create().set( 'object' === typeof arguments[0] ? arguments[0] : {} ),","      enumerable: false,","      writable: true,","      configurable: true","    },","    emitter: {","      /**","       * Instance Options.","       *","       * @property options","       */","      value: this.utility.objectEmitter.create(),","      enumerable: false,","      writable: true,","      configurable: true","    },","    _cache: {","      /**","       * Object Cache.","       *","       * @property _cache","       */","      value: {},","      enumerable: false,","      writable: true,","      configurable: true","    },","    _events: {","      /**","       * Instance Event Pool.","       *","       * @property _events","       */","      value: {},","      enumerable: false,","      writable: true,","      configurable: true","    },","    _models: {","      /**","       * Instance Models.","       *","       * @property _models","       */","      value: {},","      enumerable: false,","      writable: true,","      configurable: true","    }","  });","","  handler.prototype.on( 'connect', function() {","    // console.log( 'connect' );","  });","","  handler.prototype.on( 'disconnect', function() {","    // console.log( 'disconnect' );","  });","","  handler.prototype.on( 'document.get', function( path, callback ) {","    instance.request( 'get', path, null, callback );","  });","","  handler.prototype.on( 'document.index', function( path, data, callback ) {","    instance.request( 'post', path, data, callback );","  });","","  // Instance Settings, extend defaults.","  handler.prototype.options.set( this.utility.deep_extend( handler.prototype.options, elasticClient.defaults ) );","","  // Instantiate.","  var instance = new handler( null, handler.prototype );","","  setTimeout( function() {","    instance.emit( 'connect', null, instance );","  }, 100 )","","  return instance;","","}","","/**"," * elasticClient Instance Properties"," *"," */","Object.defineProperties( elasticClient.prototype, {","  on: {","    /**","     * Subscribe to Event.","     *","     * @example","     *","     *    client.on( 'connect', function connected( error, client ) {","     *        console.log( 'Client connected to [index: %s].', client.get( 'index' ) );","     *    });","     *","     * @param tag","     * @param data","     * @param callback","     * @returns {*}","     */","    value: function on( tag, callback ) {","","      this.emitter.on( tag, callback );","","      // @chainable","      return this;","","    },","    enumerable: true,","    configurable: true,","    writable: true","  },","  emit: {","    /**","     * Publish to Event Type.","     *","     * @param tag","     * @param data","     * @param callback","     * @returns {*}","     */","    value: function emit( tag, data, callback ) {","","      this.emitter.emit( tag, data, callback );","","      // @chainable","      return this;","","    },","    enumerable: true,","    configurable: true,","    writable: true","  },","  get: {","    /**","     * Get Option or Document.","     *","     * @param path","     * @param callback","     * @returns {*|Array|get|exports|*|get|get}","     */","    value: function get( path, callback ) {","      // console.log( 'get', path );","","      // Get All Options.","      if( arguments.length === 0 ) {","        return this.options.get();","      }","","      // Get Specific Option.","      return this.options.get( path );","","    },","    enumerable: true,","    configurable: true,","    writable: true","  },","  set: {","    /**","     * Set Option or Document.","     *","     * @param path","     * @param data","     * @param callback","     * @returns {*}","     */","    value: function set( path, data, callback ) {","      console.log( 'set', path );","","      // Set Custom Cache Object.","      if( path === 'cache' ) {","        this._cache = data;","      }","","      // Extract URL parts if plain URL is set.","      if( path === 'url' ) {","        this.options.set( this.utility.parse_url( data ) );","      }","","      this.options.set( path, data );","","      // @chainable","      return this;","","    },","    enumerable: true,","    configurable: true,","    writable: true","  },","  destroy: {","    /**","     * Destroy Document.","     *","     * @param path","     */","    value: function destroy( path, callback ) {","      console.log( 'destroy', path );","","","      callback();","","    },","    enumerable: true,","    configurable: true,","    writable: true","  },","  defineModel: {","    /**","     * Define Model & Create \"Collection\"","     *","     * @method defineModel","     * @for elasticClient","     */","    value: function defineModel() {","      elasticClient.debug( 'defineModel: [%s].', type );","      // type = this.utility.dasherize( type ).toLowerCase();","","      var client = this;","      var type = arguments[0].toLowerCase();","      var schema = arguments[1] || {};","      var callback = arguments[2];","","      Object.defineProperties( schema, {","        _id: {","          /**","           * Document ID.","           *","           * @returns {string}","           */","          value: {","            type: 'string',","            index: true","          },","          enumerable: true,","          configurable: true,","          writable: true","        },","        _type: {","          /**","           * Document Type.","           *","           */","          value: {","            type: 'string',","            default: type","          },","          enumerable: true,","          configurable: true,","          writable: false","        },","        _index: {","          /**","           * Document Index.","           *","           * @returns {string}","           */","          value: {","            type: 'string',","            default: schema._index,","            value: function compute_index() {","              console.log( 'doing _index' );","              return '';","            }","          },","          enumerable: true,","          configurable: true","        },","        _version: {","          /**","           * Document Version.","           *","           * @property _version {number}","           */","          value: {","            type: 'string'","          },","          enumerable: true,","          configurable: true,","          writable: false","        },","        _parent: {","          /**","           * Document Parent.","           *","           * @property _parent {string}","           */","          value: {","            type: 'string'","          },","          enumerable: true,","          configurable: true,","          writable: false","        },","        _source: {","          /**","           * Document Source.","           *","           * @property _source {object}","           */","          value: {","            type: 'json',","            properties: {}","          },","          enumerable: true,","          configurable: true,","          writable: false","        }","      });","","      // Create Waterline Model.","      var _collection = this.utility.Waterline.Collection.extend({","        adapter: 'elasticsearch',","        attributes: schema,","        autoPK: false,","        autoCreatedAt: false,","        autoUpdatedAt: false,","        hasSchema: true","      });","","      var _model = new _collection({","        tableName: this.utility.dasherize( type.toLowerCase() ),","        adapters: { elasticsearch: this.utility.adapter({ client: this }) }","      }, function model_ready( error, model ) {","        console.log( 'Created Waterline Model [%s].', type, !!error );","","        // console.log( 'model.emit', model.emit );","        // console.log( 'model.on', model.on);","","      });","","      // @chainable Model Instance","      return Object.defineProperties( this._models[ type ] = _model, {","        get: {","          /**","           * Get Model Document.","           *","           * @param id {String} Unique Identifier to get document by.","           * @param get_result {Function} Callback function for result, if found.","           * @method get","           * @returns {*}","           */","          value: function get( id, get_result ) {","","            _model.findOne({","              _index: schema._index.default,","              _type: schema._type.default,","              _id: id","            }, get_result.bind( null, null ));","","            // @chainable","            return this;","","          },","          enumerable: true,","          configurable: true,","          writable: false","        },","        set: {","          get: function set() {","            return client.set;","          },","          configurable: true,","          enumerable: true","        },","        on: {","          get: function on() {","            return client.on;","          },","          configurable: true,","          enumerable: true","        },","        emit: {","          get: function emit() {","            return client.emit;","          },","          configurable: true,","          enumerable: true","        }","      })","","    },","    enumerable: true,","    configurable: true,","    writable: true","  },","  getModel: {","    /**","     * Load Model / Collection Instance.","     *","     * @method getModel","     * @for elasticClient","     */","    value: function getModel( type ) {","      elasticClient.debug( 'getModel: [%s].', type );","      return this._models[ type ] || {};","    },","    enumerable: true,","    configurable: true,","    writable: true","  },","  search: {","    /**","     * General Search","     *","     * @method getModel","     * @for elasticClient","     */","    value: function search( options, callback ) {","      //return this.emit( 'document.index', path, data, callback );","","      switch( true ) {","","        // Specific Type & ID Set.","        case ( options._type && options._id ? true : false ): {","          // console.log( \"Search: Known ID and Type\" );","","          this.request( 'post', this.utility.format( '%s/%s/_search', options._index, options._type ), {","            filter: {","              ids: {","                type : options._type,","                values: [ options._id ]","              }","            }","          }, callback );","","        break; }","","        // Search Failure.","        default: {","          callback( new Error( 'Search query not understood.' ) );","        break; }","","      }","","    },","    enumerable: true,","    configurable: true,","    writable: true","  },","  request: {","    /**","     * Request Handler.","     *","     * @param method","     * @param path","     * @param data","     * @param callback","     * @returns {*}","     */","    value: function restRequest( method, path, data ) {","","      var args = Array.prototype.slice.call( arguments );","      var callback = 'function' === typeof args[ args.length -1 ] ? args[ args.length -1 ] : this.utility.noop","","      this.utility.request({","        url: [ 'http://', this.options.get( 'host', 'localhost' ), ':', this.options.get( 'port', 9200 ), '/', path ].join( '' ),","        json: true,","        body: method == 'post' ? data : null,","        qs: method == 'get' ? data : null,","        method: method.toUpperCase()","      }, function( error, res, body ) {","        // console.log( 'Request [%s] to [%s].', method, res.request.uri.href, error || body );","","        callback( error, body );","","      });","","      return this;","","    },","    enumerable: false,","    configurable: false,","    writable: true","  },","  utility: {","    value: require( './common/utility' ),","    enumerable: false,","    writable: false","  }","});","","/**"," * elasticClient Constructor Properties."," *"," */","Object.defineProperties( module.exports = elasticClient, {","  create: {","    /**","     * Create Instance","     *","     * @for elasticClient","     */","    value: function create() {","      return new elasticClient( arguments[0] || {} );","    },","    enumerable: true,","    configurable: true,","    writable: true","  },","  debug: {","    value: require( 'debug' )( 'elastic-client' ),","    configurable: true,","    enumerable: true,","    writable: true","  },","  defaults: {","    value: {","      url: 'http://localhost:9200',","      defaultModel: null,","      proxy: false","    },","    enumerable: true,","    writable: false,","    configurable: true","  }","});"];
function elasticClient() {
    _$jscoverage_done("lib/elastic-client.js", 20);
    if (_$jscoverage_done("lib/elastic-client.js", 20, !(this instanceof elasticClient))) {
        _$jscoverage_done("lib/elastic-client.js", 21);
        return new elasticClient(arguments[0]);
    }
    _$jscoverage_done("lib/elastic-client.js", 25);
    var handler = "function" === typeof arguments[0] ? arguments[0] : this.utility.noop;
    _$jscoverage_done("lib/elastic-client.js", 28);
    this.utility.inherits(handler, elasticClient);
    _$jscoverage_done("lib/elastic-client.js", 31);
    Object.defineProperties(handler.prototype, {
        event: {
            value: null,
            enumerable: false,
            writable: true,
            configurable: true
        },
        options: {
            value: this.utility.objectSettings.create().set("object" === typeof arguments[0] ? arguments[0] : {}),
            enumerable: false,
            writable: true,
            configurable: true
        },
        emitter: {
            value: this.utility.objectEmitter.create(),
            enumerable: false,
            writable: true,
            configurable: true
        },
        _cache: {
            value: {},
            enumerable: false,
            writable: true,
            configurable: true
        },
        _events: {
            value: {},
            enumerable: false,
            writable: true,
            configurable: true
        },
        _models: {
            value: {},
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    _$jscoverage_done("lib/elastic-client.js", 100);
    handler.prototype.on("connect", function() {});
    _$jscoverage_done("lib/elastic-client.js", 104);
    handler.prototype.on("disconnect", function() {});
    _$jscoverage_done("lib/elastic-client.js", 108);
    handler.prototype.on("document.get", function(path, callback) {
        _$jscoverage_done("lib/elastic-client.js", 109);
        instance.request("get", path, null, callback);
    });
    _$jscoverage_done("lib/elastic-client.js", 112);
    handler.prototype.on("document.index", function(path, data, callback) {
        _$jscoverage_done("lib/elastic-client.js", 113);
        instance.request("post", path, data, callback);
    });
    _$jscoverage_done("lib/elastic-client.js", 117);
    handler.prototype.options.set(this.utility.deep_extend(handler.prototype.options, elasticClient.defaults));
    _$jscoverage_done("lib/elastic-client.js", 120);
    var instance = new handler(null, handler.prototype);
    _$jscoverage_done("lib/elastic-client.js", 122);
    setTimeout(function() {
        _$jscoverage_done("lib/elastic-client.js", 123);
        instance.emit("connect", null, instance);
    }, 100);
    _$jscoverage_done("lib/elastic-client.js", 126);
    return instance;
}

_$jscoverage_done("lib/elastic-client.js", 134);
Object.defineProperties(elasticClient.prototype, {
    on: {
        value: function on(tag, callback) {
            _$jscoverage_done("lib/elastic-client.js", 152);
            this.emitter.on(tag, callback);
            _$jscoverage_done("lib/elastic-client.js", 155);
            return this;
        },
        enumerable: true,
        configurable: true,
        writable: true
    },
    emit: {
        value: function emit(tag, data, callback) {
            _$jscoverage_done("lib/elastic-client.js", 173);
            this.emitter.emit(tag, data, callback);
            _$jscoverage_done("lib/elastic-client.js", 176);
            return this;
        },
        enumerable: true,
        configurable: true,
        writable: true
    },
    get: {
        value: function get(path, callback) {
            _$jscoverage_done("lib/elastic-client.js", 195);
            if (_$jscoverage_done("lib/elastic-client.js", 195, arguments.length === 0)) {
                _$jscoverage_done("lib/elastic-client.js", 196);
                return this.options.get();
            }
            _$jscoverage_done("lib/elastic-client.js", 200);
            return this.options.get(path);
        },
        enumerable: true,
        configurable: true,
        writable: true
    },
    set: {
        value: function set(path, data, callback) {
            _$jscoverage_done("lib/elastic-client.js", 217);
            console.log("set", path);
            _$jscoverage_done("lib/elastic-client.js", 220);
            if (_$jscoverage_done("lib/elastic-client.js", 220, path === "cache")) {
                _$jscoverage_done("lib/elastic-client.js", 221);
                this._cache = data;
            }
            _$jscoverage_done("lib/elastic-client.js", 225);
            if (_$jscoverage_done("lib/elastic-client.js", 225, path === "url")) {
                _$jscoverage_done("lib/elastic-client.js", 226);
                this.options.set(this.utility.parse_url(data));
            }
            _$jscoverage_done("lib/elastic-client.js", 229);
            this.options.set(path, data);
            _$jscoverage_done("lib/elastic-client.js", 232);
            return this;
        },
        enumerable: true,
        configurable: true,
        writable: true
    },
    destroy: {
        value: function destroy(path, callback) {
            _$jscoverage_done("lib/elastic-client.js", 246);
            console.log("destroy", path);
            _$jscoverage_done("lib/elastic-client.js", 249);
            callback();
        },
        enumerable: true,
        configurable: true,
        writable: true
    },
    defineModel: {
        value: function defineModel() {
            _$jscoverage_done("lib/elastic-client.js", 264);
            elasticClient.debug("defineModel: [%s].", type);
            _$jscoverage_done("lib/elastic-client.js", 267);
            var client = this;
            _$jscoverage_done("lib/elastic-client.js", 268);
            var type = arguments[0].toLowerCase();
            _$jscoverage_done("lib/elastic-client.js", 269);
            var schema = arguments[1] || {};
            _$jscoverage_done("lib/elastic-client.js", 270);
            var callback = arguments[2];
            _$jscoverage_done("lib/elastic-client.js", 272);
            Object.defineProperties(schema, {
                _id: {
                    value: {
                        type: "string",
                        index: true
                    },
                    enumerable: true,
                    configurable: true,
                    writable: true
                },
                _type: {
                    value: {
                        type: "string",
                        "default": type
                    },
                    enumerable: true,
                    configurable: true,
                    writable: false
                },
                _index: {
                    value: {
                        type: "string",
                        "default": schema._index,
                        value: function compute_index() {
                            _$jscoverage_done("lib/elastic-client.js", 310);
                            console.log("doing _index");
                            _$jscoverage_done("lib/elastic-client.js", 311);
                            return "";
                        }
                    },
                    enumerable: true,
                    configurable: true
                },
                _version: {
                    value: {
                        type: "string"
                    },
                    enumerable: true,
                    configurable: true,
                    writable: false
                },
                _parent: {
                    value: {
                        type: "string"
                    },
                    enumerable: true,
                    configurable: true,
                    writable: false
                },
                _source: {
                    value: {
                        type: "json",
                        properties: {}
                    },
                    enumerable: true,
                    configurable: true,
                    writable: false
                }
            });
            _$jscoverage_done("lib/elastic-client.js", 360);
            var _collection = this.utility.Waterline.Collection.extend({
                adapter: "elasticsearch",
                attributes: schema,
                autoPK: false,
                autoCreatedAt: false,
                autoUpdatedAt: false,
                hasSchema: true
            });
            _$jscoverage_done("lib/elastic-client.js", 369);
            var _model = new _collection({
                tableName: this.utility.dasherize(type.toLowerCase()),
                adapters: {
                    elasticsearch: this.utility.adapter({
                        client: this
                    })
                }
            }, function model_ready(error, model) {
                _$jscoverage_done("lib/elastic-client.js", 373);
                console.log("Created Waterline Model [%s].", type, !!error);
            });
            _$jscoverage_done("lib/elastic-client.js", 381);
            return Object.defineProperties(this._models[type] = _model, {
                get: {
                    value: function get(id, get_result) {
                        _$jscoverage_done("lib/elastic-client.js", 393);
                        _model.findOne({
                            _index: schema._index.default,
                            _type: schema._type.default,
                            _id: id
                        }, get_result.bind(null, null));
                        _$jscoverage_done("lib/elastic-client.js", 400);
                        return this;
                    },
                    enumerable: true,
                    configurable: true,
                    writable: false
                },
                set: {
                    get: function set() {
                        _$jscoverage_done("lib/elastic-client.js", 409);
                        return client.set;
                    },
                    configurable: true,
                    enumerable: true
                },
                on: {
                    get: function on() {
                        _$jscoverage_done("lib/elastic-client.js", 416);
                        return client.on;
                    },
                    configurable: true,
                    enumerable: true
                },
                emit: {
                    get: function emit() {
                        _$jscoverage_done("lib/elastic-client.js", 423);
                        return client.emit;
                    },
                    configurable: true,
                    enumerable: true
                }
            });
        },
        enumerable: true,
        configurable: true,
        writable: true
    },
    getModel: {
        value: function getModel(type) {
            _$jscoverage_done("lib/elastic-client.js", 443);
            elasticClient.debug("getModel: [%s].", type);
            _$jscoverage_done("lib/elastic-client.js", 444);
            return this._models[type] || {};
        },
        enumerable: true,
        configurable: true,
        writable: true
    },
    search: {
        value: function search(options, callback) {
            _$jscoverage_done("lib/elastic-client.js", 460);
            switch (true) {
              case options._type && options._id ? true : false:
                {
                    _$jscoverage_done("lib/elastic-client.js", 466);
                    this.request("post", this.utility.format("%s/%s/_search", options._index, options._type), {
                        filter: {
                            ids: {
                                type: options._type,
                                values: [ options._id ]
                            }
                        }
                    }, callback);
                    _$jscoverage_done("lib/elastic-client.js", 475);
                    break;
                }
              default:
                {
                    _$jscoverage_done("lib/elastic-client.js", 479);
                    callback(new Error("Search query not understood."));
                    _$jscoverage_done("lib/elastic-client.js", 480);
                    break;
                }
            }
        },
        enumerable: true,
        configurable: true,
        writable: true
    },
    request: {
        value: function restRequest(method, path, data) {
            _$jscoverage_done("lib/elastic-client.js", 501);
            var args = Array.prototype.slice.call(arguments);
            _$jscoverage_done("lib/elastic-client.js", 502);
            var callback = "function" === typeof args[args.length - 1] ? args[args.length - 1] : this.utility.noop;
            _$jscoverage_done("lib/elastic-client.js", 504);
            this.utility.request({
                url: [ "http://", this.options.get("host", "localhost"), ":", this.options.get("port", 9200), "/", path ].join(""),
                json: true,
                body: method == "post" ? data : null,
                qs: method == "get" ? data : null,
                method: method.toUpperCase()
            }, function(error, res, body) {
                _$jscoverage_done("lib/elastic-client.js", 513);
                callback(error, body);
            });
            _$jscoverage_done("lib/elastic-client.js", 517);
            return this;
        },
        enumerable: false,
        configurable: false,
        writable: true
    },
    utility: {
        value: require("./common/utility"),
        enumerable: false,
        writable: false
    }
});

_$jscoverage_done("lib/elastic-client.js", 535);
Object.defineProperties(module.exports = elasticClient, {
    create: {
        value: function create() {
            _$jscoverage_done("lib/elastic-client.js", 543);
            return new elasticClient(arguments[0] || {});
        },
        enumerable: true,
        configurable: true,
        writable: true
    },
    debug: {
        value: require("debug")("elastic-client"),
        configurable: true,
        enumerable: true,
        writable: true
    },
    defaults: {
        value: {
            url: "http://localhost:9200",
            defaultModel: null,
            proxy: false
        },
        enumerable: true,
        writable: false,
        configurable: true
    }
});