var render = require('../lib/render')
var fs = require('fs')

render('Canon.mp3', function (err, buffer) {
  if (err) return err
  fs.writeFileSync('out.png', buffer)
})

var height = 256;
render('Canon.mp3', {
		barWidth: 1,
		baselineWidth: 0,
		baseline: height / 2,
		padding: 2,
		width: height * 4,
		height: height,

		normalizedValuesCallback: function(normalizedVals) {
			console.log(normalizedVals)
		}
	},
	function(err, buffer) {
	  if (err) return err
	}
)