/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @project:	AchievementsGUI
 * @version:	v1.0.0
 * @website:	https://raw.githubusercontent.com/OfficialOrbitron/ModPE/master/Scripts/AchievementsGUI.js
 *
 * Testet with:
 * MCPE: v0.9.5
 * BlockLauncher: v1.7
 *
 */

// Project info
var project = "Achievements";
var sname = "[ACH]";
var version = "1.0.0";
var author = "Orbitron";

// Values
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var GUI;
var directory = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftRessources/" + project;
var achievement = new Array(
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
);
var achievementImg = new Array(
	1: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac1.png")),
	2: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac2.png")),
	3: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac3.png")),
	4: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac4.png")),
	5: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac5.png")),
	6: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac6.png")),
	7: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac7.png")),
	8: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac8.png")),
	9: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac9.png")),
	10: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac10.png")),
	11: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac11.png")),
	12: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac12.png")),
	13: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac13.png")),
	14: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac14.png")),
	15: new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(directory + "/ac15.png"))
);

// Main functions
function useItem(x, y, z, itemId, blockId, side)
{
	if (a6 == 1 && itemId == 58)
	{
		addonShowAchievement(6);
	}
	if (a7 == 1 && itemId == 61)
	{
		addonShowAchievement(7);
	}
	if (a8 == 1 && itemId == 270)
	{
		addonShowAchievement(8);
	}
	if (a9 == 1 && itemId == 265)
	{
		addonShowAchievement(9);
	}
	if (a10 == 1 && itemId == 290)
	{
		addonShowAchievement(10);
	}
	if (a11 == 1 && itemId == 297)
	{
		addonShowAchievement(11);
	}
	if (a12 == 1 && itemId == 354)
	{
		addonShowAchievement(12);
	}
	if (a13 == 1)
	{
		if (itemId == 274 || itemId == 257 || itemId == 285 || itemId == 278)
		{
			addonShowAchievement(13);
		}
	}
	if (a14 == 1 && itemId == 268)
	{
		addonShowAchievement(14);
	}
	if (a15 == 1 && itemId == 47)
	{
		addonShowAchievement(15);
	}
}
function attackHook(attacker, victim)
{
	if(a1 == 1)
	{
		if(Entity.getEntityTypeId(victim) == 32 || Entity.getEntityTypeId(victim) == 33 || Entity.getEntityTypeId(victim) == 34 || Entity.getEntityTypeId(victim) == 35 || Entity.getEntityTypeId(victim) == 36)
		{
			addonShowAchievement(1);
		}
	}
	if(a2 == 1 && Entity.getEntityTypeId(victim) == 11)
	{
		addonShowAchievement(2);
	}
	if(a3 == 1 && Entity.getEntityTypeId(victim) == 34 && getCarriedItem() == 261)
	{
		addonShowAchievement(3);
	}
}
function procCmd(command)
{
v	ar cmd = command.toLowerCase().split(" ");
	switch(cmd[0])
	{
		case "ach":
		case "achievements":
		
			switch(cmd[1])
			{
				case "save":
				
					ModPE.saveData("a1", achievement[1]);
					ModPE.saveData("a2", achievement[2]);
					ModPE.saveData("a3", achievement[3]);
					ModPE.saveData("a4", achievement[4]);
					ModPE.saveData("a5", achievement[5]);
					ModPE.saveData("a6", achievement[6]);
					ModPE.saveData("a7", achievement[7]);
					ModPE.saveData("a8", achievement[8]);
					ModPE.saveData("a9", achievement[9]);
					ModPE.saveData("a10", achievement[10]);
					ModPE.saveData("a11", achievement[11]);
					ModPE.saveData("a12", achievement[12]);
					ModPE.saveData("a13", achievement[13]);
					ModPE.saveData("a14", achievement[14]);
					ModPE.saveData("a15", achievement[15]);
					clientMessage("§9[ACH] §fSaved achievements!");
					break;
				
				case "load":
				
					achievement[1] = ModPE.readData("a1");
					achievement[2] = ModPE.readData("a2");
					achievement[3] = ModPE.readData("a3");
					achievement[4] = ModPE.readData("a4");
					achievement[5] = ModPE.readData("a5");
					achievement[6] = ModPE.readData("a6");
					achievement[7] = ModPE.readData("a7");
					achievement[8] = ModPE.readData("a8");
					achievement[9] = ModPE.readData("a9");
					achievement[10] = ModPE.readData("a10");
					achievement[11] = ModPE.readData("a11");
					achievement[12] = ModPE.readData("a12");
					achievement[13] = ModPE.readData("a13");
					achievement[14] = ModPE.readData("a14");
					achievement[15] = ModPE.readData("a15");
					clientMessage("§9[ACH] §fLoaded achievements!");
					break;
				
				case "reset":
				
					for(i = 0; i < achievement.lenght; i++)
					{
						achievement[i] = false;
					}
					ModPE.saveData("a1", achievement[1]);
					ModPE.saveData("a2", achievement[2]);
					ModPE.saveData("a3", achievement[3]);
					ModPE.saveData("a4", achievement[4]);
					ModPE.saveData("a5", achievement[5]);
					ModPE.saveData("a6", achievement[6]);
					ModPE.saveData("a7", achievement[7]);
					ModPE.saveData("a8", achievement[8]);
					ModPE.saveData("a9", achievement[9]);
					ModPE.saveData("a10", achievement[10]);
					ModPE.saveData("a11", achievement[11]);
					ModPE.saveData("a12", achievement[12]);
					ModPE.saveData("a13", achievement[13]);
					ModPE.saveData("a14", achievement[14]);
					ModPE.saveData("a15", achievement[15]);
					clientMessage("§9[ACH] §fResetted achievements!");
					break;
				
				default:
				
					clientMessage("§9[ACH] §fCommand " + p[1] + " does not exist!");
					break;
			}
		
		default:
		
			clientMessage("");
			break;
	}
}
function newLevel()
{
	achievement[1] = ModPE.readData("a1");
	achievement[2] = ModPE.readData("a2");
	achievement[3] = ModPE.readData("a3");
	achievement[4] = ModPE.readData("a4");
	achievement[5] = ModPE.readData("a5");
	achievement[6] = ModPE.readData("a6");
	achievement[7] = ModPE.readData("a7");
	achievement[8] = ModPE.readData("a8");
	achievement[9] = ModPE.readData("a9");
	achievement[10] = ModPE.readData("a10");
	achievement[11] = ModPE.readData("a11");
	achievement[12] = ModPE.readData("a12");
	achievement[13] = ModPE.readData("a13");
	achievement[14] = ModPE.readData("a14");
	achievement[15] = ModPE.readData("a15");
	clientMessage("§7[INFO] §fAchievements loaded");
}
function leaveGame()
{
	ModPE.saveData("a1", achievement[1]);
	ModPE.saveData("a2", achievement[2]);
	ModPE.saveData("a3", achievement[3]);
	ModPE.saveData("a4", achievement[4]);
	ModPE.saveData("a5", achievement[5]);
	ModPE.saveData("a6", achievement[6]);
	ModPE.saveData("a7", achievement[7]);
	ModPE.saveData("a8", achievement[8]);
	ModPE.saveData("a9", achievement[9]);
	ModPE.saveData("a10", achievement[10]);
	ModPE.saveData("a11", achievement[11]);
	ModPE.saveData("a12", achievement[12]);
	ModPE.saveData("a13", achievement[13]);
	ModPE.saveData("a14", achievement[14]);
	ModPE.saveData("a15", achievement[15]);
	ctx.runOnUiThread(new java.lang.Runnable()
	{
		run: function()
		{
			if(GUI != null)
			{
				GUI.dismiss();
			}
		}
	});
}
function destroyBlock(x, y, z, side)
{
	if (a4 == 1 && getTile(x, y, z) == 17)
	{
		addonShowAchievement(4);
	}
	if (a5 == 1 && getTile(x, y, z) == 56 && getCarriedItem() == 257)
	{
		addonShowAchievement(5);
	}
}

// Additional functions
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
				
				ac.setImageDrawable(achievementImg[achievementID]);
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