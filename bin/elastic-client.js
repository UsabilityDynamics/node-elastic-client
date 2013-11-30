#!/usr/bin/env node

module.main       = require( '../' );
module.package    = require( '../package' );
module.commander  = require( 'commander' );

module.commander
  .version( module.package.version )
  .option( '-s, --server', 'Host and port of server.', 'localhost:9200' )
  .option( '-o, --output', 'Output format.', 'json' )
  .option( '-p, --prettyprint', 'Output nicely formatted JSON..', true )
  .parse( process.argv );

// Get Status
module.commander.command( 'status' ).description( 'Check status of server.' )
  .action( function( env, options ){
    console.log( 'status' );


  });

// Get Cluster
module.commander.command( 'cluster' ).description( 'Get cluster.' )
  .action( function( env, options ){
    console.log( 'cluster' );

  });
