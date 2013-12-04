/**
 * API Tests
 *
 *
 */
module.exports = {

  before: function() {

    // process.env.DEBUG = 'waterline:elasticsearch*';

    this.client = this.client || require( '../examples/basic' );

    this.createCard = function() {
      var _user = require( 'faker' ).Helpers.createCard();
      _user.id = this.client.utility.dasherize( _user.name ).toLowerCase();
      return _user;
    }.bind( this );

    this.async = require( 'async' );

  },

  "ElasticClient API": {

    "has expected structure.": function() {

      // Inherited Properties.
      this.client.should.have.properties(
        'on',
        'off',
        'emit',
        'set',
        'get',
        '_events'
      );

      // Instance Properties.
      this.client.should.have.properties(
        'getDocument',
        'indexDocument'
      );

    },

    "can get documents.": function( done ) {
      this.client.getDocument( 'icbl-mtaa-pqbp-hgdt-sgtu/user/100', done );
    },

    "can create documents.": function( done ) {

      this.client.indexDocument( 'icbl-mtaa-pqbp-hgdt-sgtu/user/10', this.createCard(), done );

    },

    "create multiple documents.": function( done ) {

      this.async.times( 3, function( n, next ){
        this.client.indexDocument( 'icbl-mtaa-pqbp-hgdt-sgtu/user/' + n, this.createCard(), next );
      }.bind( this ), done );

    },

    "can define and save models.": function( done ) {
      var self = this;

      var user_schema = {
        id: {
          type: 'string',
          index: true
        },
        type: {
          type: 'number'
        },
        name: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        address: {
          type: 'json'
        },
        website: {
          type: 'string'
        },
        age: {
          type: 'number'
        }
      };

      this.client.defineModel( 'User', user_schema, function( error, User ) {

        var test_user = self.createCard();

        User.findOrCreate( test_user.id, test_user, function( error, user ) {
          // console.log( 'user', error || user );

          user.should.have.properties( 'name', 'website', '_id' )

          done( error );

        });

      });

    }

  }

}