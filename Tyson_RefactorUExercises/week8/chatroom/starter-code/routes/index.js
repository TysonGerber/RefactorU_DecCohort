
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.sendFile('home.html', { root: './public/html' });
};