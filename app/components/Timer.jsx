var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
     return {
         count: 0,
         timerStatus: 'stopped'
     };
  };
  render: function () {
    return <p>Timer.jsx</p>;
  }
});

module.exports = Timer;
