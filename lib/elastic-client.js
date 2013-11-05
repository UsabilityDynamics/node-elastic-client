/**
 * ElasticClient
 *
 * http://github.com/UsabilityDynamics/node-elastic-client
 *
 * @param callback {Function}
 * @returns {ElasticClient}
 * @constructor
 *
 * @class ElasticClient
 * @constructor
 * @version 0.1.0
 */
function ElasticClient( callback ) {

  // Force new instance.
  if( !( this instanceof ElasticClient ) ) {
    return new ElasticClient( arguments[0], arguments[1] );
  }

  // Private Properties.
  var callback    = 'function' === typeof arguments[0] ? arguments[0] : ElasticClient.utility.noop;
  var util        = require( 'util' );
  var Waterline   = require( 'waterline' );
  var adapter     = require( 'waterline-elasticsearch' );
  var self        = this;

  // adapter.database = 'waterline_test';
  // adapter.user = 'root';
  // adapter.password = '';
  // adapter.set( 'settings', this.get( 'settings' ) );

  // Build A Model
  var User = Waterline.Collection.extend({
    adapter: 'elasticsearch',
    tableName: 'users',
    attributes: {
      first_name: 'string',
      last_name: 'string'
    }
  });

  // Load Models passing adapters in
  new User({ adapters: { elasticsearch: adapter }}, function( error, collection ) {

    console.log( require( 'util' ).inspect( error || collection, { showHidden: true, colors: true, depth: 2 } ) )

  });

  self = new callback( self );

  // @chainable
  return self;

}

/**
 * Instance Properties
 *
 */
Object.defineProperties( ElasticClient.prototype, {
  some_action: {
    /**
     * Some Actions
     *
     * @for ElasticClient
     */
    value: function some_action() {},
    enumerable: true,
    configurable: true,
    writable: true
  }
});

/**
 * Constructor Properties
 *
 */
Object.defineProperties( ElasticClient.exports = ElasticClient, {
  utility: {
    value: require( './utility' ),
    enumerable: false,
    writable: false
  },
  create: {
    /**
     * Create Instance
     *
     * @for ElasticClient
     */
    value: function create() {},
    enumerable: true,
    configurable: true,
    writable: true
  }
});