var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	   render: function () {
   	  return(
		<div className="top-bar">
		 <div className="top-bar-left">
		   <ul className="menu">
		   <li className="menu-text">React Time App</li>
		    <li>
               <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
               <Link to="/Timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</Link>
            </li>
            <li>
               <Link to="/Countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
		   </ul>
         </div>
		  <div className="top-bar-right">
             <ul>
              <li className="menu-text">
              Michael Wiss
              </li>
             </ul>
              </div>
	   </div>
    );
   }
});


module.exports = Nav;