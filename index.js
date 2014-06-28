var fm = require('front-matter');
var marked = require('marked');

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  langPrefix: ''
})

module.exports = function(string, done){
	var frontmatter = fm(string);
	var matterdata = frontmatter.attributes;

	marked(frontmatter.body, function (err, html){
		if(err) return done(err)

		frontmatter.html = html
		done(null, frontmatter)
	})	
}