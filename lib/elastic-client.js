/**
 * Clastic Client
 *
 * ### Events
 * - connect( error, instance )
 * - disconnect( error, instance )
 *
 *
 * @param handler {Function|Object}
 * @returns {elasticClient}
 * @constructor
 *
 * @class elasticClient
 * @constructor
 * @version 0.1.0
 */
function elasticClient() {

  // Ensure Valid Instance.
  if( !( this instanceof elasticClient ) ) {
    return new elasticClient( arguments[0] );
  }

  // Establish Handle Method.
  var handler =  'function' === typeof arguments[0]  ? arguments[0] : this.utility.noop;

  // Extend handler's prototype with elastClient, Object Emitter and Object Settings.
  this.utility.inherits( handler, elasticClient );

  // Extend Instance-Prototype.
  Object.defineProperties( handler.prototype, {
    event: {
      /**
       * Current Event.
       *
       * @property event
       */
      value: null,
      enumerable: false,
      writable: true,
      configurable: true
    },
    options: {
      /**
       * Instance Options.
       *
       * @property options
       */
      value: this.utility.objectSettings.create().set( elasticClient.defaults ).set( 'object' === typeof arguments[0] ? arguments[0] : {} ),
      enumerable: false,
      writable: true,
      configurable: true
    },
    emitter: {
      /**
       * Instance Options.
       *
       * @property options
       */
      value: this.utility.objectEmitter.create(),
      enumerable: false,
      writable: true,
      configurable: true
    },
    _cache: {
      /**
       * Object Cache.
       *
       * @property _cache
       */
      value: {},
      enumerable: false,
      writable: true,
      configurable: true
    },
    _events: {
      /**
       * Instance Event Pool.
       *
       * @property _events
       */
      value: {},
      enumerable: false,
      writable: true,
      configurable: true
    },
    _models: {
      /**
       * Instance Models.
       *
       * @property _models
       */
      value: {},
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  handler.prototype.on( 'document.get', function( path, callback ) {
    instance.request( 'get', path, null, callback );
  });

  handler.prototype.on( 'document.index', function( path, data, callback ) {
    instance.request( 'post', path, data, callback );
  });

  // Once Mapping Loaded, we consider connectionv alid.
  handler.prototype.once( '_mapping', function have_mapping( error, data ) {
    instance.emit( 'connect', null, handler.prototype );
  });

  // Instantiate.
  var instance = new handler( null, handler.prototype );

  // Get Global Mapping.
  instance.request( 'get', '_mapping' );

  // Get Root Settings.
  instance.request( 'get', '_settings' );

  // Get Cluster Nodes.
  instance.request( 'get', '_cluster/nodes' );

  // @chainable
  return instance;

}

/**
 * elasticClient Instance Properties
 *
 */
Object.defineProperties( elasticClient.prototype, {
  on: {
    /**
     * Subscribe to Event.
     *
     * @example
     *
     *    client.on( 'connect', function connected( error, client ) {
     *        console.log( 'Client connected to [index: %s].', client.get( 'index' ) );
     *    });
     *
     * @param tag
     * @param data
     * @param callback
     * @returns {*}
     */
    value: function on( tag, callback ) {

      this.emitter.on( tag, callback );

      // @chainable
      return this;

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  emit: {
    /**
     * Publish to Event Type.
     *
     * @param tag
     * @param data
     * @param callback
     * @returns {*}
     */
    value: function emit( tag, data, callback ) {

      this.emitter.emit( tag, data, callback );

      // @chainable
      return this;

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  once: {
    /**
     * Publish to Event Type.
     *
     * @param tag
     * @param data
     * @param callback
     * @returns {*}
     */
    value: function once( tag, callback ) {

      this.emitter.once( tag, callback );

      // @chainable
      return this;

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  get: {
    /**
     * Get Option or Document.
     *
     * @param path
     * @param callback
     * @returns {*|Array|get|exports|*|get|get}
     */
    value: function get( path, callback ) {
      // console.log( 'get', path );

      // Get All Options.
      if( arguments.length === 0 ) {
        return this.options.get();
      }

      // Get Specific Option.
      return this.options.get( path );

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  set: {
    /**
     * Set Option or Document.
     *
     * @param path
     * @param data
     * @param callback
     * @returns {*}
     */
    value: function set( path, data, callback ) {
      console.log( 'set', path );

      // Set Custom Cache Object.
      if( path === 'cache' ) {
        this._cache = data;
      }

      // Extract URL parts if plain URL is set.
      if( path === 'url' ) {
        this.options.set( this.utility.parse_url( data ) );
      }

      this.options.set( path, data );

      // @chainable
      return this;

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  destroy: {
    /**
     * Destroy Document.
     *
     * @param path
     */
    value: function destroy( path, callback ) {
      console.log( 'destroy', path );


      callback();

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  defineModel: {
    /**
     * Define Model & Create "Collection"
     *
     * @method defineModel
     * @for elasticClient
     */
    value: function defineModel() {
      elasticClient.debug( 'defineModel: [%s].', type );
      // type = this.utility.dasherize( type ).toLowerCase();

      var client = this;
      var type = arguments[0].toLowerCase();
      var schema = arguments[1] || {};
      var callback = arguments[2];

      Object.defineProperties( schema, {
        _id: {
          /**
           * Document ID.
           *
           * @returns {string}
           */
          value: {
            type: 'string',
            index: true
          },
          enumerable: true,
          configurable: true,
          writable: true
        },
        _type: {
          /**
           * Document Type.
           *
           */
          value: {
            type: 'string',
            default: type
          },
          enumerable: true,
          configurable: true,
          writable: false
        },
        _index: {
          /**
           * Document Index.
           *
           * @returns {string}
           */
          value: {
            type: 'string',
            default: schema._index,
            value: function compute_index() {
              console.log( 'doing _index' );
              return '';
            }
          },
          enumerable: true,
          configurable: true
        },
        _version: {
          /**
           * Document Version.
           *
           * @property _version {number}
           */
          value: {
            type: 'string'
          },
          enumerable: true,
          configurable: true,
          writable: false
        },
        _parent: {
          /**
           * Document Parent.
           *
           * @property _parent {string}
           */
          value: {
            type: 'string'
          },
          enumerable: true,
          configurable: true,
          writable: false
        },
        _source: {
          /**
           * Document Source.
           *
           * @property _source {object}
           */
          value: {
            type: 'json',
            properties: {}
          },
          enumerable: true,
          configurable: true,
          writable: false
        }
      });

      // Create Waterline Model.
      var _collection = this.utility.Waterline.Collection.extend({
        adapter: 'elasticsearch',
        attributes: schema,
        autoPK: false,
        autoCreatedAt: false,
        autoUpdatedAt: false,
        hasSchema: true
      });

      var _model = new _collection({
        tableName: this.utility.dasherize( type.toLowerCase() ),
        adapters: { elasticsearch: this.utility.adapter({ client: this }) }
      }, function model_ready( error, model ) {

        // console.log( 'Created Waterline Model [%s].', type, !!error );
        // console.log( 'model.emit', model.emit );
        // console.log( 'model.on', model.on);

      });

      // @chainable Model Instance
      return Object.defineProperties( this._models[ type ] = _model, {
        get: {
          /**
           * Get Model Document.
           *
           * @param id {String} Unique Identifier to get document by.
           * @param get_result {Function} Callback function for result, if found.
           * @method get
           * @returns {*}
           */
          value: function get( id, get_result ) {

            _model.findOne({
              _id: id,
              _index: schema._index.default,
              _type: schema._type.default
            }, get_result );

            // @chainable
            return this;

          },
          enumerable: true,
          configurable: true,
          writable: false
        },
        set: {
          get: function set() {
            return client.set;
          },
          configurable: true,
          enumerable: true
        },
        on: {
          get: function on() {
            return client.on;
          },
          configurable: true,
          enumerable: true
        },
        emit: {
          get: function emit() {
            return client.emit;
          },
          configurable: true,
          enumerable: true
        }
      })

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  getModel: {
    /**
     * Load Model / Collection Instance.
     *
     * @method getModel
     * @for elasticClient
     */
    value: function getModel( type ) {
      elasticClient.debug( 'getModel: [%s].', type );
      return this._models[ type ] || {};
    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  search: {
    /**
     * General Search
     *
     * @method getModel
     * @for elasticClient
     */
    value: function search( options, callback ) {
      //return this.emit( 'document.index', path, data, callback );

      switch( true ) {

        // Specific Type & ID Set.
        case ( options._type && options._id ? true : false ): {
          // console.log( "Search: Known ID and Type" );

          this.request( 'post', this.utility.format( '%s/%s/_search', options._index, options._type ), {
            from: 0,
            size: 1,
            version: true,
            filter: {
              ids: {
                type : options._type,
                values: [ options._id ]
              }
            }
          }, callback );

        break; }

        // Search Failure.
        default: {
          callback( new Error( 'Search query not understood.' ) );
        break; }

      }

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  request: {
    /**
     * Request Handler.
     *
     * @param method
     * @param path
     * @param data
     * @returns {*}
     */
    value: function restRequest( method, path, data ) {

      var self = this;
      var args = Array.prototype.slice.call( arguments );
      var callback = 'function' === typeof args[ args.length -1 ] ? args[ args.length -1 ] : this.utility.noop

      // @todo Implement request pooling with nextTick execution in batches.

      this.utility.request({
        url: [ 'http://', this.options.get( 'host', 'localhost' ), ':', this.options.get( 'port', 9200 ), '/', path ].join( '' ),
        json: true,
        body: method == 'post' ? data : null,
        qs: method == 'get' ? data : null,
        method: method.toUpperCase()
      }, function( error, res, body ) {
        // console.log( 'Request [%s] to [%s].', method, res.request.uri.href, error || body );

        callback( error, body );


        if( !error ) {
          self.emitter.emit( path, null, body );
        }

      });

      return this;

    },
    enumerable: false,
    configurable: false,
    writable: true
  },
  utility: {
    value: require( './common/utility' ),
    enumerable: false,
    writable: false
  }
});

/**
 * elasticClient Constructor Properties.
 *
 */
Object.defineProperties( module.exports = elasticClient, {
  create: {
    /**
     * Create Instance
     *
     * @for elasticClient
     */
    value: function create() {
      return new elasticClient( arguments[0] || {} );
    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  debug: {
    value: require( 'debug' )( 'elastic-client' ),
    configurable: true,
    enumerable: true,
    writable: true
  },
  defaults: {
    value: {
      url: 'http://localhost:9200',
      defaultModel: null,
      proxy: false
    },
    enumerable: true,
    writable: false,
    configurable: true
  }
});