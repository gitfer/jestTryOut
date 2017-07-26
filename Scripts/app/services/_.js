/* eslint-disable  no-undef */

angular.module('test').factory('_', ['$window', function($window) {
  _.mixin({
    'isNilOrEmpty': (value) => _.isNil(value) || value === ''
  });
  return $window._;
}]);
/* eslint-enable no-undef */
