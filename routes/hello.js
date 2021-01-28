
/*
 * GET home page.
 */

exports.view = function(req, res){
  //user input
  var nameToShow = req.params.userName;
  res.render('hello', {
  	'name': nameToShow,
  });
};
