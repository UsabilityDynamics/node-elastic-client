/**
 * Utility Methods
 *
 * @class Utility
 * @constructor
 */
function Utility() {
  return Object.keys( arguments ) ? require( 'lodash' ).pick.apply( null, [ Utility, Array.prototype.slice.call( arguments ) ] ) : Utility;
}

Object.defineProperties( module.exports = Utility, {
  adapter: {
    /**
     * Waterline ElasticSearch Adapter.
     *
     * @for Utility
     * @method adapter
     */
    value: require( 'waterline-elasticsearch' ).create,
    enumerable: true,
    configurable: true,
    writable: true
  },
  pluralize: {
    /**
     * pluralize
     *
     * @for Utility
     * @method pluralize
     */
    value: require( 'inflection' ).pluralize,
    enumerable: true,
    configurable: true,
    writable: true
  },
  dasherize: {
    /**
     * pluralize
     *
     * @for Utility
     * @method pluralize
     */
    value: require( 'inflection' ).dasherize,
    enumerable: true,
    configurable: true,
    writable: true
  },
  singularize: {
    /**
     * pluralize
     *
     * @for Utility
     * @method pluralize
     */
    value: require( 'inflection' ).singularize,
    enumerable: true,
    configurable: true,
    writable: true
  },
  camelize: {
    /**
     * pluralize
     *
     * @for Utility
     * @method pluralize
     */
    value: require( 'inflection' ).camelize,
    enumerable: true,
    configurable: true,
    writable: true
  },
  request: {
    /**
     * Waterline ElasticSearch Adapter.
     *
     * @for Utility
     * @method adapter
     */
    value: require( 'request' ),
    enumerable: true,
    configurable: true,
    writable: true
  },
  apply: {
    /**
     * @for Utility
     * @method apply
     */
    value: require( 'async' ).apply,
    enumerable: true,
    configurable: true,
    writable: true
  },
  createBatch: {
    /**
     * @for Utility
     * @method apply
     */
    value: require( 'auto' ).createBatch,
    enumerable: true,
    configurable: true,
    writable: true
  },
  Waterline: {
    /**
     * @for Utility
     * @method noop
     */
    value: require( 'waterline' ),
    enumerable: true,
    configurable: true,
    writable: true
  },
  deep_extend: {
    /**
     * Placeholder Method
     *
     * @for Utility
     * @method noop
     */
    value: require( 'deep-extend' ),
    enumerable: true,
    configurable: true,
    writable: true
  },
  noop: {
    /**
     * Placeholder Method
     *
     * @for Utility
     * @method noop
     */
    value: function noop() {},
    enumerable: true,
    configurable: true,
    writable: true
  }
});