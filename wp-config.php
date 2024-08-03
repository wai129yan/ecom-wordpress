<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecomproject' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'OxH^z&w3I_@UbEs z.KA7Hm$c)[Ll7&Wvc[deBa(*h3{l5=yv3OiaCNxdNOb!2/?' );
define( 'SECURE_AUTH_KEY',  ':4%M@B$/y:cm6>`u#pik3BbLN!gtaT9WIs36FGL]oCH/W3Fp{XugGRt^P7~wX%8o' );
define( 'LOGGED_IN_KEY',    'bs9;1.kd9L#CV]m*^xu,xE2(>CUHR)O/)]A*w,2l#/+;uDMX;H{xmxV_.&X2-J&t' );
define( 'NONCE_KEY',        'P#3K~B]18};;$^EM6~n#D}qpx T3G;V:X?]?2h^Wu8H7UeVRhl)BKs1$[Lnmh<7l' );
define( 'AUTH_SALT',        'VLflKYtH|8m:`Yu{L&GiO~,4y^o9gup147G|#;2&94?JZ|z1G|IJ;gGw~*PDyz?.' );
define( 'SECURE_AUTH_SALT', '&kZdX4KV]hFbIzld$9w,&{?N})TgvWCt.n|TZX~Q_0| |Ddtt=TT edVu9,S{tdJ' );
define( 'LOGGED_IN_SALT',   'd<wd>1?9sttsb{J}e8np2Y,?V4e30lT- N^7v7 XS}&~VbFK[(*PXj{Yl)3o>{T&' );
define( 'NONCE_SALT',       'ty<(Lu(#`Ml~P)lPwIIrc;8UZ257=4N8|a&h%+9+<I]4C=]H7z_CQ>GXmdyY8!Xk' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
