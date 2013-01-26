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
			toDebug: {
				files: {
					"debug/": "dev/src/*",	// includes files in dir
					"debug/images/": "dev/images/*.png",
					"debug/enchant.js": "engine/enchant.js",
					"debug/nineleap.enchant.js": "engine/plugins/nineleap.enchant.js",
					"debug/end.png": "dev/images/end.png",
					"debug/start.png": "dev/images/start.png"
				}
			},
			toRelease: {
				files: {
					"images/": "dev/images/*.png",
					"end.png": "dev/images/end.png",
					"start.png": "dev/images/start.png"
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
			debug: [
					'debug/*.js',
					'debug/*.png',
					'debug/images/*.*'
				],
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

	grunt.registerTask('default', 'clean:debug copy:toDebug');
	grunt.registerTask('debug', 'default');
	grunt.registerTask('release', 'clean:release concat min copy:toRelease zip');
}
;
