import * as angular from './node_modules/angular/'
// require('./node_modules/angular/index.js')
// module.exports = angular;
// global.angular = angular;

require('./node_modules/sinon-as-promised/index.js')


var $ = require("./Scripts/libs/jquery/dist/jquery.min.js");
// import { $, jQuery } from './Scripts/libs/jquery/dist/jquery.min.js'

window.jQuery = $;
global.jQuery = $;
window.$ = $;
global.$ = $;

var glob = require('glob'),
    path = require('path');
const recursiveInclude = filePath => {
    glob.sync(filePath).forEach(function(file) {
        require(path.resolve(file));
    });
};


const sinon = require('./node_modules/sinon/lib/sinon.js');
global.sinon = sinon;

// require('./Scripts/app/modules/utils/_.js')

// recursiveInclude('./Scripts/app/controllers/**/*.js');
recursiveInclude('./Scripts/app/directives/**/*.js');
recursiveInclude('./Scripts/app/filters/**/*.js');
recursiveInclude('./Scripts/app/services/**/*.js');

import './Scripts/app/app.js';
