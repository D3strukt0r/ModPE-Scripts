/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.orbitrondev.com
 * === ABOUT PROJECT ===
 * @author:		Manuele Vaccari (OrbitronDev)
 * @project:	Achievements
 * @version:	v1.2.0
 * @website:	https://raw.githubusercontent.com/OrbitronDev/ModPE/master/Achievements.js
 *
 * Testet with:
 * MCPE: v0.10.5
 * BlockLauncher: v1.8.6
 *
 */

// Project info
var AppInfo = {
	'projectName' : 'Achievements',
	'shortName' : 'ACH',
	'version' : '1.2.0'
	'author' : 'Manuele Vaccari (OrbitronDev)'
};

// Values
var AppData = {
	'achievements' : [
		{ 'id': 1, 'reached': false, 'message': 'Monster Hunter!' },
		{ 'id': 2, 'reached': false, 'message': 'Cow Tipper' },
		{ 'id': 3, 'reached': false, 'message': 'Sniper Duel' },
		{ 'id': 4, 'reached': false, 'message': 'Getting Wood' },
		{ 'id': 5, 'reached': false, 'message': 'DIAMONDS!' },
		{ 'id': 6, 'reached': false, 'message': 'Benchmarking' },
		{ 'id': 7, 'reached': false, 'message': 'Hot Topic' },
		{ 'id': 8, 'reached': false, 'message': 'Time to Mine!' },
		{ 'id': 9, 'reached': false, 'message': 'Acquire Hardware' },
		{ 'id': 10, 'reached': false, 'message': 'Time to Farm!' },
		{ 'id': 11, 'reached': false, 'message': 'Bake Bread' },
		{ 'id': 12, 'reached': false, 'message': 'The Lie' },
		{ 'id': 13, 'reached': false, 'message': 'Getting an Upgrade' },
		{ 'id': 14, 'reached': false, 'message': 'Time to Strike!' 	},
		{ 'id': 15, 'reached': false, 'message': 'Librarian' }
	]
};

// Additional functions
var AppFunctions = {
	'printColourMessage': function(sString) {
		clientMessage(ChatColor.GRAY + '[' + ChatColor.RED + AppInfo.shortName + ChatColor.GRAY + '] ' + ChatColor.WHITE + sString);
	},
	'printErrorMessage': function(sString) {
		clientMessage(ChatColor.GRAY + '[' + ChatColor.RED + AppInfo.shortName + ChatColor.GRAY + '] ' + ChatColor.RED + sString);
	},
	'showAchievement': function(iID) {
		AppData.achievements[iID]['reached'] = true;
		clientMessage('Achievement get! ' + AppData.achievements[iID]['message']);
	},
	'achieved': function(iID) {
		if(AppData.achievements[iID]['reached'] === true)
			return true;
		return false;
	},
	'saveAchievementData': function() {
		for(var i = 0; i < AppData.achievements.length; i++)
			ModPE.saveData(i, AppData.achievements[i]['reached']);
	},
	'loadAchievementData': function() {
		for(var i = 0; i < AppData.achievements.length; i++)
			AppData.achievements[i]['reached'] = ModPE.readData(i);
	},
	'resetAchievementData': function() {
		for(var i = 0; i < AppData.achievements.length; i++)
		{
			AppData.achievements[i]['reached'] = false;
			ModPE.saveData(i, AppData.achievements[i]);
		}
	}
};

// Main functions
function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage)
{
	if(!AppFunctions.achieved(5) && itemid === 58)
		AppFunctions.showAchievement(5);
	if(!AppFunctions.achieved(6) && itemid === 61)
		AppFunctions.showAchievement(6);
	if(!AppFunctions.achieved(7) && itemid === 270)
		AppFunctions.showAchievement(7);
	if(!AppFunctions.achieved(8) && itemid === 265)
		AppFunctions.showAchievement(8);
	if(!AppFunctions.achieved(9) && itemid === 290)
		AppFunctions.showAchievement(9);
	if(!AppFunctions.achieved(10) && itemid === 297)
		AppFunctions.showAchievement(10);
	if(!AppFunctions.achieved(11) && itemid === 354)
		AppFunctions.showAchievement(11);
	if(!AppFunctions.achieved(12) && (itemid == 274 || itemid === 257 || itemid === 285 || itemid === 278))
		AppFunctions.showAchievement(12);
	if(!AppFunctions.achieved(13) && itemid === 268)
		AppFunctions.showAchievement(13);
	if(!AppFunctions.achieved(14) && itemid === 47)
		AppFunctions.showAchievement(14);
}

function attackHook(attacker, victim)
{
	if(!AppFunctions.achieved(0) && (Entity.getEntityTypeId(victim) === 32 || Entity.getEntityTypeId(victim) === 33 || Entity.getEntityTypeId(victim) === 34 || Entity.getEntityTypeId(victim) === 35 || Entity.getEntityTypeId(victim) === 36))
		AppFunctions.showAchievement(0);
	if(!AppFunctions.achieved(1) && Entity.getEntityTypeId(victim) === 11)
		AppFunctions.showAchievement(1);
	if(!AppFunctions.achieved(2) && Entity.getEntityTypeId(victim) === 34 && Player.getCarriedItem() === 261)
		AppFunctions.showAchievement(2);
}

function destroyBlock(x, y, z, side)
{
	if (!AppFunctions.achieved(3) && Level.getTile(x, y, z) === 17)
		AppFunctions.showAchievement(3);
	if (!AppFunctions.achieved(4) && Level.getTile(x, y, z) === 56 && Player.getCarriedItem() === 257)
		AppFunctions.showAchievement(4);
}

function procCmd(command)
{
	var cmd = command.toLowerCase().split(' ');
	switch(cmd[0])
	{
		case 'ach':
		case 'achievements':
		
			switch(cmd[1])
			{
				case 'save':
				
					AppFunctions.saveAchievementData();
					AppFunctions.printColourMessage("Saved achievements!");
					break;
				
				case 'load':
				
					AppFunctions.loadAchievementData();
					AppFunctions.printColourMessage("Loaded achievements!");
					break;
				
				case 'reset':
				
					AppFunctions.resetAchievementData();
					AppFunctions.printColourMessage("Resetted achievements!");
					break;
				
				default:
				
					AppFunctions.printErrorMessage("Command " + p[1] + " does not exist!");
					break;
			}
			break;
	}
}

function newLevel(hasLevel)
{
	AppFunctions.loadAchievementData();
	clientMessage(ChatColor.GRAY + "[INFO] " + ChatColor.WHITE + AppInfo.projectName + " loaded");
}
function leaveGame()
{
	AppFunctions.saveAchievementData();
}
