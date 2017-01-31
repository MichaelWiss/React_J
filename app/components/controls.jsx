var React = require('react');

var Controls = React.creaClass({
    propTypes: {
    	countDownStatus: React.PropTypes.string.isRequired
    },
    render: function () {
    	var {countdownStatus} = this.props;
    	var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
            	return <button className="button secondary"></button>
            } else if (countdownStatus === 'paused') {
            	return <button className="button primary">Start</button>
            }
    	};

    	return (
    		<button className="button alert hollow">Clear</button>
      )
    }
});

module.exports = Controls;