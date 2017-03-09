/**
 *	添加
 * @authors Your Name (you@example.org)
 * @date    2017-03-09 14:54:09
 * @version $Id$
 */
var addwe = function(event){
	console.log('ok');
	// var str =event.target.parentNode.parentNode;
	// console.log(str);
	ReactDOM.render(
	  <Hello/>,
	  document.getElementById('addadd')
);

}
 

 var Hello = React.createClass(
 		{
 			render: function(){
 				return <h1> hello</h1>;
 			}
 		}
 	);
