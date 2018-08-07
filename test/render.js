var render = require('../lib/render')
var fs = require('fs')

function msg(s) {
	process.stdout.write(s || '');
}

function msgnl(s) {
	msg(`${(s || '')}\n`);
}

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
			const numLines = 20;
			const numSamples = Math.min(process.stdout.columns, normalizedVals.length);

			msgnl();
			for (let line = numLines; line >= 0; --line) {
				for (let idx = 0; idx < numSamples; ++idx) {
					const val = normalizedVals[idx];
					msg(val >= line/(numLines - 1) ? '|' : ' ');
				}
				msgnl();
			}
		}
	},
	function(err, buffer) {
	  if (err) return err
	}
)