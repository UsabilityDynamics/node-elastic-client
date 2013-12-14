var Waterline     = require( 'waterline' );
var elasticsearch = require( 'waterline-elasticsearch' );
var Collection    = Waterline.Collection;
var Model         = Waterline.Model;

// Extend Collection Object, return method.
module.exports = Collection.extend({
  adapter: 'elasticsearch',
  tableName: 'organization',
  version: '1.0.0',
  attributes: {
    id: {
      type: 'string',
      minLength: 5,
      required: false
    },
    name: {
      type: 'string',
      minLength: 5,
      required: false
    },
    phone: {
      type: 'string',
      defaultsTo: '555-555-555'
    }
  }
});
