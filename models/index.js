var mongoose = require('mongoose');
var Schema = mongoose.Schema;


require("fs").readdirSync("./models").forEach(function(file) {
  if (file != 'index.js') {
    name = file.charAt(0).toUpperCase() + file.slice(1);
    exports[name.replace('.js', '')] = require("./" + file);
  }
});
