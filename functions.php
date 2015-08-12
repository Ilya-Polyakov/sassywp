<?php
/**
 * Sassy Underscores functions and definitions.
 *
 * @link https://codex.wordpress.org/Functions_File_Explained
 *
 * @package Sassy Underscores
 */

if ( ! function_exists( 'underscoresass_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function underscoresass_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Sassy Underscores, use a find and replace
	 * to change 'underscoresass' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'underscoresass', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary Menu', 'underscoresass' ),
                                    'social' => __('Social Menu', 'underscoresass'),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
                //	add_theme_support( 'custom-background', apply_filters( 'underscoresass_custom_background_args', array(
                //		'default-color' => 'ffffff',
                //		'default-image' => '',
                //	) ) );
}
endif; // underscoresass_setup
add_action( 'after_setup_theme', 'underscoresass_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function underscoresass_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'underscoresass_content_width', 600 );
}
add_action( 'after_setup_theme', 'underscoresass_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function underscoresass_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'underscoresass' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'underscoresass_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function underscoresass_scripts() {
	wp_enqueue_style( 'underscoresass-style', get_stylesheet_uri() );
        
                  //wp_enqueue_style('underscoresass-content-sidebar', get_template_directory_uri() . 'style.css');

	wp_enqueue_style('underscoresass-google-fonts', 'http://fonts.googleapis.com/css?family=Lato:400,100,400italic,700,900italic,900|PT+Serif:400,400italic,700,700italic');
            
                  wp_enqueue_style('underscoresass-font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css');
                          
                  wp_enqueue_script( 'underscoresass-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20120206', true );

	wp_enqueue_script( 'underscoresass-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

//                 wp_enqueue_script( 'underscoresass-scripts', get_template_directory_uri() . '/script.js', array('jquery'), '20150811', true );

                  wp_enqueue_script('underscoresass-livereload', 'http://localhost:35729/livereload.js');
        
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'underscoresass_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
