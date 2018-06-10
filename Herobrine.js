/*
 * === ABOUT US ===
 * @name:		OrbitronDev
 * @website:	https://www.orbitrondev.org
 * === ABOUT PROJECT ===
 * @author:		Manuele Vaccari
 * @project:	Herobrine
 * @version:	v1.0.0
 * @website:	https://raw.githubusercontent.com/OrbitronDev/ModPE/master/Herobrine.js
 *
 * Testet with:
 * MCPE: v0.10.5
 * BlockLauncher: v1.8.6
 *
 */

// Project info
var AppInfo = {
	'projectName': 'Herobrine',
	'shortName': 'HB',
	'version': '1.0.0',
	'author': 'Manuele Vaccari (OrbitronDev)'
};

// Values
var AppData = {
    
};

// Additional functions
var AppFunctions = {
	'printColourMessage': function(sString) {
		clientMessage(ChatColor.GRAY + '[' + ChatColor.RED + AppInfo.shortName + ChatColor.GRAY + '] ' + ChatColor.WHITE + sString);
	},
	'printErrorMessage': function(sString) {
		clientMessage(ChatColor.GRAY + '[' + ChatColor.RED + AppInfo.shortName + ChatColor.GRAY + '] ' + ChatColor.RED + sString);
	}
};

// Main functions
function newLevel(hasLevel)
{
	clientMessage(ChatColor.GRAY + '[INFO] ' + ChatColor.WHITE + AppInfo.projectName + ' loaded');
}
