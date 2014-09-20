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

/* Main functions
 ***********************************************/
function useItem(x, y, z, itemId, blockId, side)
{
	if (a6 == 1 && itemId == 58)
	{
		a6 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac6);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
	if (a7 == 1 && itemId == 61)
	{
		a7 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac7);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function(){
					anim.setFillAfter(true);
					ac.startAnimation(anim);
					anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
	if (a8 == 1 && itemId == 270)
	{
		a8 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac8);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
	if (a9 == 1 && itemId == 265)
	{
		a9 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac9);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
	if (a10 == 1 && itemId == 290)
	{
		a10 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac10);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
	if (a11 == 1 && itemId == 297)
	{
		a11 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac11);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
	if (a12 == 1 && itemId == 354)
	{
		a12 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac12);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
	if (a13 == 1)
	{
		if (itemId == 274 || itemId == 257 || itemId == 285 || itemId == 278)
		{
			a13 = 2;
			ctx.runOnUiThread(new java.lang.Runnable()
			{
				run: function()
				{
					try
					{
						var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
						var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
						GUI = new android.widget.PopupWindow();
						var layout = new android.widget.LinearLayout(ctx);
						var ac = new android.widget.ImageView(ctx);

						ac.setImageDrawable(ac13);
						layout.setOrientation(android.widget.LinearLayout.VERTICAL);
						layout.addView(ac);
						GUI.setContentView(layout);
						GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
						GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
						GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
						ac.startAnimation(animstart);
						animstart.setDuration(2000);

						ac.postDelayed(new java.lang.Runnable({run:function()
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}}), 10000)

						/*
						ac.setOnClickListener(new android.view.View.OnClickListener()
						{
							onClick: function(view)
							{
								anim.setFillAfter(true);
								ac.startAnimation(anim);
								anim.setDuration(2000);
							}
						});
						*/
					} catch (e) {
						print ("Error: "+e)
					}
				}
			});
		}
	}
	if (a14 == 1 && itemId == 268)
	{
		a14 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac14);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
	if (a15 == 1 && itemId == 47)
	{
		a15 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{ 
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac15);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
}
function attackHook(attacker, victim)
{
	if(a1 == 1)
	{
		if(Entity.getEntityTypeId(victim) == 32 || Entity.getEntityTypeId(victim) == 33 || Entity.getEntityTypeId(victim) == 34 || Entity.getEntityTypeId(victim) == 35 || Entity.getEntityTypeId(victim) == 36)
		{
			a1 = 2;
			ctx.runOnUiThread(new java.lang.Runnable()
			{
				run: function()
				{
					try
					{
						var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
						var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
						GUI = new android.widget.PopupWindow();
						var layout = new android.widget.LinearLayout(ctx);
						var ac = new android.widget.ImageView(ctx);

						ac.setImageDrawable(ac1);
						layout.setOrientation(android.widget.LinearLayout.VERTICAL);
						layout.addView(ac);
						GUI.setContentView(layout);
						GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
						GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
						GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
						ac.startAnimation(animstart);
						animstart.setDuration(2000);

						ac.postDelayed(new java.lang.Runnable({run:function()
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}}), 10000)

						/*
						ac.setOnClickListener(new android.view.View.OnClickListener()
						{
							onClick: function(view)
							{
								anim.setFillAfter(true);
								ac.startAnimation(anim);
								anim.setDuration(2000);
							}
						});
						*/
					} catch (e) {
						print ("Error: "+e)
					}
				}
			});
		}
	}
	if(a2 == 1 && Entity.getEntityTypeId(victim) == 11)
	{
		a2 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac2);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
	if(a3 == 1 && Entity.getEntityTypeId(victim) == 34 && getCarriedItem() == 261)
	{
		a3 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac3);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener()
					{
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
}
function procCmd(command)
{
	var p = command.split(" ");
	var command = p[0];
	switch(command.toLowerCase())
	{
		case "ach":
		
			switch(p[1])
			{
				case "save":
				
					ModPE.saveData("a1", a1);
					ModPE.saveData("a2", a2);
					ModPE.saveData("a3", a3);
					ModPE.saveData("a4", a4);
					ModPE.saveData("a5", a5);
					ModPE.saveData("a6", a6);
					ModPE.saveData("a7", a7);
					ModPE.saveData("a8", a8);
					ModPE.saveData("a9", a9);
					ModPE.saveData("a10", a10);
					ModPE.saveData("a11", a11);
					ModPE.saveData("a12", a12);
					ModPE.saveData("a13", a13);
					ModPE.saveData("a14", a14);
					ModPE.saveData("a15", a15);
					clientMessage("§9[ACH] §fSaved achievements!");
					break;
				
				case "load":
				
					a1 = ModPE.readData("a1");
					a2 = ModPE.readData("a2");
					a3 = ModPE.readData("a3");
					a4 = ModPE.readData("a4");
					a5 = ModPE.readData("a5");
					a6 = ModPE.readData("a6");
					a7 = ModPE.readData("a7");
					a8 = ModPE.readData("a8");
					a9 = ModPE.readData("a9");
					a10 = ModPE.readData("a10");
					a11 = ModPE.readData("a11");
					a12 = ModPE.readData("a12");
					a13 = ModPE.readData("a13");
					a14 = ModPE.readData("a14");
					a15 = ModPE.readData("a15");
					clientMessage("§9[ACH] §fLoaded achievements!");
					break;
				
				case "reset":
				
					a1 = 1;
					a2 = 1;
					a3 = 1;
					a4 = 1;
					a5 = 1;
					a6 = 1;
					a7 = 1;
					a8 = 1;
					a9 = 1;
					a10 = 1;
					a11 = 1;
					a12 = 1;
					a13 = 1;
					a14 = 1;
					a15 = 1;
					ModPE.saveData("a1", a1);
					ModPE.saveData("a2", a2);
					ModPE.saveData("a3", a3);
					ModPE.saveData("a4", a4);
					ModPE.saveData("a5", a5);
					ModPE.saveData("a6", a6);
					ModPE.saveData("a7", a7);
					ModPE.saveData("a8", a8);
					ModPE.saveData("a9", a9);
					ModPE.saveData("a10", a10);
					ModPE.saveData("a11", a11);
					ModPE.saveData("a12", a12);
					ModPE.saveData("a13", a13);
					ModPE.saveData("a14", a14);
					ModPE.saveData("a15", a15);
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
	clientMessage("§7[INFO] §fAchievements loaded");
	a1 = ModPE.readData("a1");
	a2 = ModPE.readData("a2");
	a3 = ModPE.readData("a3");
	a4 = ModPE.readData("a4");
	a5 = ModPE.readData("a5");
	a6 = ModPE.readData("a6");
	a7 = ModPE.readData("a7");
	a8 = ModPE.readData("a8");
	a9 = ModPE.readData("a9");
	a10 = ModPE.readData("a10");
	a11 = ModPE.readData("a11");
	a12 = ModPE.readData("a12");
	a13 = ModPE.readData("a13");
	a14 = ModPE.readData("a14");
	a15 = ModPE.readData("a15");
}
function leaveGame()
{
	ModPE.saveData("a1", a1);
	ModPE.saveData("a2", a2);
	ModPE.saveData("a3", a3);
	ModPE.saveData("a4", a4);
	ModPE.saveData("a5", a5);
	ModPE.saveData("a6", a6);
	ModPE.saveData("a7", a7);
	ModPE.saveData("a8", a8);
	ModPE.saveData("a9", a9);
	ModPE.saveData("a10", a10);
	ModPE.saveData("a11", a11);
	ModPE.saveData("a12", a12);
	ModPE.saveData("a13", a13);
	ModPE.saveData("a14", a14);
	ModPE.saveData("a15", a15);
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

/* Special functions
 ***********************************************/
function destroyBlock(x, y, z, side)
{
	if (a4 == 1 && getTile(x, y, z) == 17)
	{
		a4 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac4);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
	if (a5 == 1 && getTile(x, y, z) == 56 && getCarriedItem() == 257)
	{
		a5 = 2;
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				try
				{
					var anim = new  android.view.animation.AlphaAnimation(1.0 , 0.0);
					var animstart = new  android.view.animation.AlphaAnimation(0.0, 1.0);
					GUI = new android.widget.PopupWindow();
					var layout = new android.widget.LinearLayout(ctx);
					var ac = new android.widget.ImageView(ctx);
					
					ac.setImageDrawable(ac5);
					layout.setOrientation(android.widget.LinearLayout.VERTICAL);
					layout.addView(ac);
					GUI.setContentView(layout);
					GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
					ac.startAnimation(animstart);
					animstart.setDuration(2000);
					
					ac.postDelayed(new java.lang.Runnable({run:function()
					{
						anim.setFillAfter(true);
						ac.startAnimation(anim);
						anim.setDuration(2000);
					}}), 10000)
					
					/*
					ac.setOnClickListener(new android.view.View.OnClickListener(){
						onClick: function(view)
						{
							anim.setFillAfter(true);
							ac.startAnimation(anim);
							anim.setDuration(2000);
						}
					});
					*/
				} catch (e) {
					print ("Error: "+e)
				}
			}
		});
	}
}