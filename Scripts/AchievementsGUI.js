/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @project:	AchievementsGUI
 * @version:	v1.0.6
 * @website:	https://raw.githubusercontent.com/OfficialOrbitron/ModPE/master/Scripts/AchievementsGUI.js
 *
 * Testet with:
 * MCPE: v0.9.5
 * BlockLauncher: v1.7.9
 *
 */

// Project info
var project		= "Achievements";
var sname		= "ACH";
var version		= "1.0.6";
var author		= "Orbitron";

// Values
var ctx			= com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var GUI;
var directory	= android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftResources/" + project;
var achievement	= [{
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
}];

// Main functions
function useItem(x, y, z, itemid, blockid, side)
{
	if(achievement[6] === false && itemid == 58)
	{
		addonShowAchievement(6);
	}
	if(achievement[7] === false && itemid == 61)
	{
		addonShowAchievement(7);
	}
	if(achievement[8] === false && itemid == 270)
	{
		addonShowAchievement(8);
	}
	if(achievement[9] === false && itemid == 265)
	{
		addonShowAchievement(9);
	}
	if(achievement[10] === false && itemid == 290)
	{
		addonShowAchievement(10);
	}
	if(achievement[11] === false && itemid == 297)
	{
		addonShowAchievement(11);
	}
	if(achievement[12] === false && itemid == 354)
	{
		addonShowAchievement(12);
	}
	if(achievement[13] === false)
	{
		if (itemid == 274 || itemid == 257 || itemid == 285 || itemid == 278)
		{
			addonShowAchievement(13);
		}
	}
	if(achievement[14] === false && itemid == 268)
	{
		addonShowAchievement(14);
	}
	if(achievement[15] === false && itemid == 47)
	{
		addonShowAchievement(15);
	}
}
function attackHook(attacker, victim)
{
	if(achievement[1] === false)
	{
		if(Entity.getEntityTypeId(victim) == 32 || Entity.getEntityTypeId(victim) == 33 || Entity.getEntityTypeId(victim) == 34 || Entity.getEntityTypeId(victim) == 35 || Entity.getEntityTypeId(victim) == 36)
		{
			addonShowAchievement(1);
		}
	}
	if(achievement[2] === false && Entity.getEntityTypeId(victim) == 11)
	{
		addonShowAchievement(2);
	}
	if(achievement[3] === false && Entity.getEntityTypeId(victim) == 34 && Player.getCarriedItem() == 261)
	{
		addonShowAchievement(3);
	}
}
function procCmd(command)
{
	var cmd = command.toLowerCase().split(" ");
	switch(cmd[0])
	{
		case "ach":
		case "achievements":
		
			switch(cmd[1])
			{
				case "save":
				
					for(i = 0; i < achievement.lenght; i++)
					{
						ModPE.saveData(i, achievement[i]);
					}
					addonColourMessage("Saved achievements!");
					break;
				
				case "load":
				
					for(i = 0; i < achievement.lenght; i++)
					{
						achievement[i] = ModPE.readData(i);
					}
					addonColourMessage("Loaded achievements!");
					break;
				
				case "reset":
				
					for(i = 0; i < achievement.lenght; i++)
					{
						achievement[i] = false;
						ModPE.saveData(i, achievement[i]);
					}
					addonColourMessage("Resetted achievements!");
					break;
				
				default:
				
					addonErrorMessage("Usage: /achievements <save|load|reset>");
					break;
			}
		
		default:
		
			break;
	}
}
function newLevel(hasLevel)
{
	for(i = 0; i < achievement.lenght; i++)
	{
		achievement[i] = ModPE.readData(i);
	}
	clientMessage(ChatColor.GRAY + "[INFO] " + ChatColor.WHITE + project + " loaded");
}
function leaveGame()
{
	for(i = 0; i < achievement.lenght; i++)
	{
		achievement[i] = false;
		ModPE.saveData(i, achievement[i]);
	}
	if(GUI != null)
	{
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				GUI.dismiss();
			}
		});
	}
}
function destroyBlock(x, y, z, side)
{
	if (achievement[4] === false && Level.getTile(x, y, z) == 17)
	{
		addonShowAchievement(4);
	}
	if (achievement[5] === false && Level.getTile(x, y, z) == 56 && getCarriedItem() == 257)
	{
		addonShowAchievement(5);
	}
}

// Additional functions
function addonColourMessage(string)
{
	clientMessage(ChatColor.GRAY + "["+ ChatColor.RED + sname + ChatColor.GRAY +"] " + ChatColor.WHITE + string);
}
function addonErrorMessage(string)
{
	clientMessage(ChatColor.GRAY + "["+ ChatColor.RED + sname + ChatColor.GRAY +"] " + ChatColor.RED + string);
}
function addonShowAchievement(achievementID)
{
	achievement[achievementID] = true;
	ctx.runOnUiThread(new java.lang.Runnable()
	{
		run: function()
		{
			try
			{
				var anim = new android.view.animation.AlphaAnimation(1.0 , 0.0);
				var animstart = new android.view.animation.AlphaAnimation(0.0, 1.0);
				GUI = new android.widget.PopupWindow();
				var layout = new android.widget.LinearLayout(ctx);
				var ac = new android.widget.ImageView(ctx);
				
				ac.setImageDrawable(new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac" + achievementID + ".png")));
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				layout.addView(ac);
				GUI.setContentView(layout);
				GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
				ac.startAnimation(animstart);
				animstart.setDuration(2000);
				
				ac.postDelayed(new java.lang.Runnable({
					run: function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
						GUI.dismiss();
					}
				}), 10000)
				
				ac.setOnClickListener(new android.view.View.OnClickListener(){
					onClick: function(view)
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
						GUI.dismiss();
					}
				});
				
			} catch (e) {
				print ("Error: "+e)
			}
		}
	});
}