/**
 * Basic ElasticClient Example
 *
 * @author potanin@ud
 */
require( 'elastic-client' ).create( function myClient() {

  // Configure.
  this.set({
    host: 'localhost',
    port: 9200,
    index: 'test-index'
  });

  // Export Instance.
  module.exports = this;

});
