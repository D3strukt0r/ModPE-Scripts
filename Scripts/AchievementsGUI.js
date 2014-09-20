/*
 *               _     _                                     _       
 *     /\       | |   (_)                                   | |      
 *    /  \   ___| |__  _  _____   _____ _ __ ___   ___ _ __ | |_ ___ 
 *   / /\ \ / __| '_ \| |/ _ \ \ / / _ \ '_ ` _ \ / _ \ '_ \| __/ __|
 *  / ____ \ (__| | | | |  __/\ V /  __/ | | | | |  __/ | | | |_\__ \
 * /_/    \_\___|_| |_|_|\___| \_/ \___|_| |_| |_|\___|_| |_|\__|___/
 *
 * === ABOUT US ===
 * @name:		Achievements by Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @version:	v1.0.0
 * @website:	http://store.team-orbitron.com/mcpe-scripts/Achievements.js
 *
 * Testet with:
 * MCPE: v0.8.1
 * BlockLauncher: v1.6.10
 *
 */

/* Project info
 ***********************************************/
var project = "Achievements";
var sname = "[ACH]";
var version = "v1.0.0";
var author = "Orbitron";

/* Variables
 ***********************************************/
var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var a1 = 1;
var a2 = 1;
var a3 = 1;
var a4 = 1;
var a5 = 1;
var a6 = 1;
var a7 = 1;
var a8 = 1;
var a9 = 1;
var a10 = 1;
var a11 = 1;
var a12 = 1;
var a13 = 1;
var a14 = 1;
var a15 = 1;
var folder1 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac1.png");
var folder2 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac2.png");
var folder3 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac3.png");
var folder4 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac4.png");
var folder5 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac5.png");
var folder6 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac6.png");
var folder7 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac7.png");
var folder8 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac8.png");
var folder9 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac9.png");
var folder10 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac10.png");
var folder11 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac11.png");
var folder12 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac12.png");
var folder13 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac13.png");
var folder14 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac14.png");
var folder15 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/minecraftRessources/Achievements/ac15.png");
var ac1 = new android.graphics.drawable.BitmapDrawable(folder1);
var ac2 = new android.graphics.drawable.BitmapDrawable(folder2);
var ac3 = new android.graphics.drawable.BitmapDrawable(folder3);
var ac4 = new android.graphics.drawable.BitmapDrawable(folder4);
var ac5 = new android.graphics.drawable.BitmapDrawable(folder5);
var ac6 = new android.graphics.drawable.BitmapDrawable(folder6);
var ac7 = new android.graphics.drawable.BitmapDrawable(folder7);
var ac8 = new android.graphics.drawable.BitmapDrawable(folder8);
var ac9 = new android.graphics.drawable.BitmapDrawable(folder9);
var ac10 = new android.graphics.drawable.BitmapDrawable(folder10);
var ac11 = new android.graphics.drawable.BitmapDrawable(folder11);
var ac12 = new android.graphics.drawable.BitmapDrawable(folder12);
var ac13 = new android.graphics.drawable.BitmapDrawable(folder13);
var ac14 = new android.graphics.drawable.BitmapDrawable(folder14);
var ac15 = new android.graphics.drawable.BitmapDrawable(folder15);

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