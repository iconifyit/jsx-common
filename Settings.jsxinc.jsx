/**
 * Global settings for all JSX scripts. To use this file, include it in top of your 
 * script with:
 * `#include "~/jsx/settings.jsx";`
 */

#target illustrator
 
/**
 * Base settings object
 */
var SETTINGS = {};

/**
 * Determine the HOME location for setting up the default configuration.
 */
SETTINGS.HOME = (new Folder($.getenv("HOME"))).absoluteURI + "/";

/**
 * Determine the current operating system.
 */
SETTINGS.SYSTEM = $.os.search(/windows/i) != -1 ? "WINDOWS" : "MAC"


