module.exports = function(grunt) {

  // Tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-px-to-rem');


  // Project Configuration
  grunt.initConfig({

    // Grunt sass
    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
          imagePath: 'assets/images',
          precision: 5,
          includePaths: [
            'components',
            'components/bourbon/dist',
            'components/include-media/dist'

          ]
        },
        files: {
          'public/assets/css/screen.css': 'assets/sass/screen.scss'
        }
      }
    },

    // Grunt imagemin
    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: 'assets/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/assets/images/'
        }]
      }
    },

    // Grunt uglify - Minify all JS
    uglify: {
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false
        },
        files: {
          'public/assets/js/script.min.js': [
            // Include:
            'components/jquery/dist/jquery.js',
            'assets/js/01-libraries/*.js',
            'assets/js/02-plugins/*.js',
            'assets/js/03-modules/*.js',
            'assets/js/script.js',
          ]
        }
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {
            expand: true,
            cwd: 'assets/fonts/',
            src: ['**'],
            dest: 'public/assets/fonts'
          },
        ],
      },
    },
    // Will Automatically insert the correct prefixes for CSS properties. Just write plain CSS.
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      dev: {
        src: 'public/assets/**/*.css'
      },
    },
    px_to_rem: {
      dist: {
        options: {
          base: 16,
          fallback: false,
          fallback_existing_rem: false,
          ignore: [],
          map: false
        },
        files: {
          'public/assets/css/screen.css': [
            'public/assets/css/screen.css'
          ]
        }
      }
    },

    svgmin: { //minimize SVG files
      options: {
        plugins: [{
          removeViewBox: false
        }, {
          removeUselessStrokeAndFill: false
        }]
      },
      dist: {
        expand: true,
        cwd: 'assets/svg/',
        src: ['**/*.svg'],
        dest: 'tmp/svg/'
          //ext: '.colors-pale-dark-greyDark-gold-blue-facebookBg-googleplusBg-twitterBg.svg'
      }
    },


    // Copy database updates down to local
    shell: {
      options: {
        execOptions: {
          maxBuffer: 1024 * 1000
        }
      },
      dbsync: {
        command: 'ssh drexelba@drexelbaseball.com "mysqldump -pu5PTqUUZwvGl -u drexelba_user  drexelba_db" |  /Applications/MAMP/Library/bin/mysql -u root -proot drexelbaseball_cms '
      },
      uploadsync: {
        command: 'rsync -avz /home2/drexelba/public/DrexelBaseball-CMS/public/assets/uploads public/temp/assets/uploads'
      },
      cleanup: {
        command: 'rm -r tmp'
      },
      prepareCleanUp: {
        command: 'rm -r public/assets/images/svg/'
      }
    },
    // Grunt watch
    watch: {
      styles: {
        files: ['assets/sass/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:dev']
      },
      scripts: {
        files: ['assets/js/**/*.js'],
        tasks: ['uglify:dev']
      },
      images: {
        files: ['assets/images'],
        tasks: ['imagemin:all']
      }
    }
  });

  // Task configuration
  grunt.registerTask('default', ['sass:dev', 'copy', 'imagemin:all',
    'uglify:dev', 'autoprefixer:dev', 'px_to_rem', 'watch'
  ]);
  grunt.registerTask('sync', ['shell:sync']);


};
