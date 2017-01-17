var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
	return(
		<div>
		    <Nav/>
			<div className="row">
			 <div className="large-4 medium-6 small-centered columns">
			 <p>Main.jsx rendered</p>
			 </div>
		    </div>
		</div>
	);
}

module.exports = Main;