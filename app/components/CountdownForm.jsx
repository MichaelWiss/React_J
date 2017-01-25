var React = require('react');

var CountdownForm = React.createClass({
     render: function () {
     	return (
           <div>
              <form ref="form" onSubmit={this.onSubmit} className="countdown-form">

              </form>
           </div>
     		);
     }
});


module.exports = CountdownForm;