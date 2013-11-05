/**
 * ElasticClient
 *
 * http://github.com/UsabilityDynamics/node-elastic-client
 *
 * @class ElasticClient
 * @constructor
 * @version 0.1.0
 */
function ElasticClient() {

  // Force new instance.
  if( !( this instanceof ElasticClient ) ) {
    return new ElasticClient( arguments[0], arguments[1] );
  }

  var settings  = 'object' === typeof arguments[0] ? arguments[0] : {};
  var callback  = 'function' === typeof arguments[1] ? arguments[1] : ElasticClient.utility.noop;
  var self      = this;

  // @chainable
  return this;

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