var tape = require('tape')
var parser = require('./')
var fs = require('fs')


tape('process the test file', function(t){
	var content = fs.readFileSync(__dirname + '/testpage.md', 'utf8')	

	parser(content, function(err, result){
		if(err){
			t.fail(err, 'process result')
			t.end()
			return
		}

		t.equal(result.attributes.apples, 'hello', 'apples')
		t.deepEqual(result.attributes.list, [5, 10], 'list')
		t.deepEqual(result.attributes.map, {apple:1,orange:2}, 'map')

		t.end()
	})


	
})