/*global module:false*/

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-zip');

	var project = 'chess';

	var now = new Date();
	// 年
	version = now.getFullYear().toString();
	// 月
	var month = now.getMonth() + 1;
	if (month < 10) {
		version += '0';
	}
	version += month.toString();
	// 日
	if (now.getDate() < 10) {
		version += '0';
	}
	version += now.getDate().toString();
	// 時
	if (now.getHours() < 10) {
		version += '0';
	}
	version += now.getHours().toString();
	// 分
	if (now.getMinutes() < 10) {
		version += '0';
	}
	version += now.getMinutes().toString();

	// Project configuration.
	grunt.initConfig({
		lint: {
			all: ['grunt.js', 'dev/**/*.js']
		},
		copy: {
			toRelease: {
				files: {
					"images/": "dev/src/images/*.png",
					"end.png": "dev/src/images/end.png",
					"start.png": "dev/src/images/start.png"
				}
			}
		},
		concat: {
			dist: {
				// 結合元となるファイル
				src: [
					'engine/enchant.js',
					'engine/plugins/nineleap.enchant.js',
					'dev/src/gamedefs.js',
					'dev/src/gamemain.js',
					'dev/src/gameproc.js',
					'dev/src/gameconsole.js',
					'dev/src/updater.js',
					'dev/src/bottom.js',
					'dev/src/board.js',
					'dev/src/piece.js',
					'dev/src/squareeffector.js'
				],
				// 結合先のファイル名
				dest: 'app.js'
			}
		},
		min: {
			dist: {
				src: [
					'app.js'
				],
				dest: 'app.min.js'
			}
		},
		exec: {
			archive: {
				command: 'call archive.bat ' + project + ' ' + version,
				stdout: true
			}
		},
		archive: {
			dist: {
			}
		},
		clean: {
			release: [
					'app.js',
					'app.min.js',
					'end.png',
					'start.png',
					'images/*.*'
				]
		},
		zip: {
			// As well as standard grunt sytax
			release: {
				// Files to zip together
				src: [
					'index.html',
					'app.min.js',
					'end.png',
					'start.png',
					'images/*.*'
				],

				// Destination of zip file
				dest: project + '_' + version + '.zip'
			}
		}
	});

	grunt.registerTask('release', 'clean:release concat min copy:toRelease zip');
	grunt.registerTask('default', 'release');
}
;
