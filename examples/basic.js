/**
 * Basic ElasticClient Example
 *
 * @author potanin@ud
 */
require( 'elastic-client' ).create( function configure() {

  // Set Port
  this.set( 'port', 9200 );

  this.on( 'connected', function connected() {
    console.log( 'Client Connected.' );
  });

  this.on( 'disconnected', function disconnected() {
    console.log( 'Client Disconnected.' );
  });

  // Export
  module.exports = this;

});
