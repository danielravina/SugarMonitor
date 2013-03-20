
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'theAvengers : The Super Heroes Framwork' });
};