/*global suite, bench */
'use strict';

suite('datef@0.0.5', function() {
  var formatter = require('datef');

  bench('dd.MM', function() {
    formatter('dd.MM');
  });

  bench('dd MMMM YYYY', function() {
    formatter('dd MMMM YYYY');
  });

  bench('dd.MM.YY', function() {
    formatter('dd.MM.YY');
  });

  bench('DD, MMMM dd, YYYY, h:MM:ss TT', function() {
    formatter('DD, MMMM dd, YYYY, h:mm:ss A');
  });

});


suite('dateformat@1.0.11', function() {
  var formatter = require('datef');

  bench('dd.mm', function() {
    formatter('dd.mm');
  });

  bench('dd mmmm yyyy', function() {
    formatter('dd mmmm yyyy');
  });

  bench('dd.mm.yy', function() {
    formatter('dd.mm.yy');
  });

  bench('dddd, mmmm dd, yyyy, h:MM:ss TT', function() {
    formatter('dddd, mmmm dd, yyyy, h:MM:ss TT');
  });

});
