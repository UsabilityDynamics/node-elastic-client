/**
 * elasticClient
 *
 * http://github.com/UsabilityDynamics/node-elastic-client
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

  var handler = this.utility.noop;
  var options = {};

  if( 'function' === typeof arguments[0] ) {
    handler = arguments[0];
  } else if( 'object' === typeof arguments[0] ) {
    options = typeof arguments[0];
  }

  // Extend handler's prototype with elastClient.
  require( 'util' ).inherits( handler, elasticClient );

  // Extend handler with EventEmitter and Settings.
  require( 'object-emitter' ).mixin( handler.prototype );
  require( 'object-settings' ).mixin( handler.prototype );

  // Instance Settings, extend defaults.
  handler.prototype.set( this.utility.deep_extend( options, elasticClient.defaults ) );

  // Instantiate.
  var instance = new handler( null, handler.prototype );

  instance.set( 'request', {
    json: true
  });

  if( instance.get( 'auth' ) ) {
    instance.set( 'request.auth', instance.get( 'auth' ) );
  }

  // Modify Instance.
  Object.defineProperties( instance, {
    event: {
      value: null,
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

  instance.on( 'document.get', function( path, callback ) {
    instance.request( 'get', path, null, callback );
  });

  instance.on( 'document.index', function( path, data, callback ) {
    instance.request( 'post', path, data, callback );
  });

  return instance;

}

/**
 * elasticClient Instance Properties
 *
 */
Object.defineProperties( elasticClient.prototype, {
  defineModel: {
    /**
     *
     *
     * @method defineModel
     * @for elasticClient
     */
    value: function defineModel( type, schema, callback ) {

      // type = this.utility.dasherize( type ).toLowerCase();

      Object.defineProperties( schema, {
        _id: {
          value: schema._id || function _id() {
            console.log( 'doing _id' );
            return '';
          },
          enumerable: true,
          configurable: true,
          writable: true
        },
        _type: {
          value: schema._type || function _type() {
            console.log( 'doing type' );
            return '';
          },
          enumerable: true,
          configurable: true,
          writable: true
        },
        _index: {
          value: schema._index || function _index() {
            console.log( 'doing _index' );
            return '';
          },
          enumerable: true,
          configurable: true,
          writable: true
        }
      });

      this._models[ type ] = this.utility.Waterline.Collection.extend({
        adapter: 'elasticsearch',
        tableName: this.utility.dasherize( type.toLowerCase() ),
        attributes: schema,
        autoPK: false,
        autoCreatedAt: false,
        autoUpdatedAt: false,
        hasSchema: true
      });

      if( 'function' === typeof this._models[ type ] ) {
        this._models[ type ] = new this._models[ type ]({
          adapters: { elasticsearch: this.utility.adapter({ client: this }) }
        }, callback )
      }

      return this._models[ type.toLowerCase() ];

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  getDocument: {
    /**
     *
     *
     * @method getDocument
     * @for elasticClient
     */
    value: function getDocument( path, callback ) {
      return this.emit( 'document.get', path, callback );
    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  indexDocument: {
    /**
     *
     *
     * @method getDocument
     * @for elasticClient
     */
    value: function indexDocument( path, data, callback ) {
      return this.emit( 'document.index', path, data, callback );
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
     * @param callback
     * @returns {*}
     */
    value: function request( method, path, data ) {

      var args = Array.prototype.slice.call( arguments );
      var callback = 'function' === typeof args[ args.length -1 ] ? args[ args.length -1 ] : this.utility.noop

      this.utility.request({
        url: [ 'http://', this.get( 'host' ), ':', this.get( 'port' ), '/', path ].join( '' ),
        json: true,
        body: data,
        qs: data,
        method: method.toUpperCase()
      }, function( error, res, body ) {
        // console.log( 'Request [%s] to [%s].', method, path, error || body );

        callback( error, body );

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
  defaults: {
    value: {
      host: 'localhost',
      port: 9200
    },
    enumerable: true,
    writable: false,
    configurable: true
  },
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
  }
});