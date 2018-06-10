/*
 * === ABOUT US ===
 * @name:		OrbitronDev
 * @website:	https://www.orbitrondev.org
 * === ABOUT PROJECT ===
 * @author:		Manuele Vaccari
 * @project:	AchievementsGUI
 * @version:	v1.2.0
 * @website:	https://raw.githubusercontent.com/OrbitronDev/ModPE/master/AchievementsGUI.js
 *
 * Testet with:
 * MCPE: v0.10.5
 * BlockLauncher: v1.8.6
 *
 */

// Project info
var AppInfo = {
	'projectName': 'Achievements',
	'shortName': 'ACH',
	'version': '1.2.0',
	'author': 'Manuele Vaccari (OrbitronDev)'
};

// Values
var AppData = {
	'achievements' : {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
    },
	'java': {
		'ctx': com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
		'gui': null,
		'dataDir': android.os.Environment.getExternalStorageDirectory().getPath() + '/games/com.mojang/minecraftResources/' + AppInfo.projectName
	}
};

// Additional functions
var AppFunctions = {
	'printColourMessage': function(sString) {
		clientMessage(ChatColor.GRAY + '[' + ChatColor.RED + AppInfo.shortName + ChatColor.GRAY + '] ' + ChatColor.WHITE + sString);
	},
	'printErrorMessage': function(sString) {
		clientMessage(ChatColor.GRAY + '[' + ChatColor.RED + AppInfo.shortName + ChatColor.GRAY + '] ' + ChatColor.RED + sString);
	},
	'showAchievement': function(iAchievementID) {
		AppData.achievements[iAchievementID] = true;
		AppData.java.ctx.runOnUiThread(new java.lang.Runnable() { run: function() {
			try
			{
				var anim = new android.view.animation.AlphaAnimation(1.0 , 0.0);
				var animstart = new android.view.animation.AlphaAnimation(0.0, 1.0);
				AppData.java.gui = new android.widget.PopupWindow();
				var layout = new android.widget.LinearLayout(AppData.java.ctx);
				var ac = new android.widget.ImageView(AppData.java.ctx);
				
				ac.setImageDrawable(new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(AppData.java.dataDir + '/ac' + iAchievementID + '.png')));
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				layout.addView(ac);
				AppData.java.gui.setContentView(layout);
				AppData.java.gui.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				AppData.java.gui.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				AppData.java.gui.showAtLocation(AppData.java.ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
				ac.startAnimation(animstart);
				animstart.setDuration(2000);
				
				ac.postDelayed(new java.lang.Runnable({
					run: function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
						AppData.java.gui.dismiss();
					}
				}), 10000)
				
				ac.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(view)
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
						AppData.java.gui.dismiss();
					}
				});
				
			} catch(error) {
				print('Error: ' + error);
			}
		}});
	},
	'achieved': function(iAchievementID) {
		if(AppData.achievements[iAchievementID] === true)
			return true;
		return false;
	},
	'saveAchievementData': function() {
		for(i = 0; i < AppData.achievements.lenght; i++)
			ModPE.saveData(i, AppData.achievements[i]);
	},
	'loadAchievementData': function() {
		for(i = 0; i < AppData.achievements.lenght; i++)
			AppData.achievements[i] = ModPE.readData(i);
	},
	'resetAchievementData': function() {
		for(i = 0; i < AppData.achievements.lenght; i++)
		{
			AppData.achievements[i] = false;
			ModPE.saveData(i, AppData.achievements[i]);
		}
	}
};

// Main functions
function useItem(x, y, z, itemid, blockid, side)
{
	if(!AppFunctions.achieved(6) && itemid === 58)
		AppFunctions.showAchievement(6);
	if(!AppFunctions.achieved(7) && itemid === 61)
		AppFunctions.showAchievement(7);
	if(!AppFunctions.achieved(8) && itemid === 270)
		AppFunctions.showAchievement(8);
	if(!AppFunctions.achieved(9) && itemid === 265)
		AppFunctions.showAchievement(9);
	if(!AppFunctions.achieved(10) && itemid === 290)
		AppFunctions.showAchievement(10);
	if(!AppFunctions.achieved(11) && itemid === 297)
		AppFunctions.showAchievement(11);
	if(!AppFunctions.achieved(12) && itemid === 354)
		AppFunctions.showAchievement(12);
	if(!AppFunctions.achieved(13) && (itemid === 274 || itemid === 257 || itemid === 285 || itemid === 278))
		AppFunctions.showAchievement(13);
	if(!AppFunctions.achieved(14) && itemid === 268)
		AppFunctions.showAchievement(14);
	if(!AppFunctions.achieved(15) && itemid === 47)
		AppFunctions.showAchievement(15);
}

function attackHook(attacker, victim)
{
	if(!AppFunctions.achieved(1) && (Entity.getEntityTypeId(victim) ===  32 || Entity.getEntityTypeId(victim) === 33 || Entity.getEntityTypeId(victim) === 34 || Entity.getEntityTypeId(victim) === 35 || Entity.getEntityTypeId(victim) === 36))
		AppFunctions.showAchievement(1);
	if(!AppFunctions.achieved(2) && Entity.getEntityTypeId(victim) === 11)
		AppFunctions.showAchievement(2);
	if(!AppFunctions.achieved(3) && Entity.getEntityTypeId(victim) === 34 && Player.getCarriedItem() === 261)
		AppFunctions.showAchievement(3);
}

function destroyBlock(x, y, z, side)
{
	if(!AppFunctions.achieved(4) && Level.getTile(x, y, z) === 17)
		AppFunctions.showAchievement(4);
	if(!AppFunctions.achieved(5) && Level.getTile(x, y, z) === 56 && getCarriedItem() === 257)
		AppFunctions.showAchievement(5);
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
					AppFunctions.printColourMessage('Saved achievements!');
					break;
				
				case 'load':
				
					AppFunctions.loadAchievementData();
					AppFunctions.printColourMessage('Loaded achievements!');
					break;
				
				case 'reset':
				
					AppFunctions.resetAchievementData();
					AppFunctions.printColourMessage('Resetted achievements!');
					break;
				
				default:
				
					AppFunctions.printErrorMessage('Usage: /achievements <save|load|reset>');
					break;
			}
			break;
	}
}
function newLevel(hasLevel)
{
	AppFunctions.loadAchievementData();
	clientMessage(ChatColor.GRAY + '[INFO] ' + ChatColor.WHITE + AppInfo.projectName + ' loaded');
}
function leaveGame()
{
	AppFunctions.saveAchievementData();
	if(AppData.java.gui != null)
	{
		AppData.java.ctx.runOnUiThread(new java.lang.Runnable() { run: function() {
			AppData.java.gui.dismiss();
		}});
	}
}
