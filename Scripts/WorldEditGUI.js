/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @project:	WorldEditGUI
 * @version:	v1.0.0
 * @website:	https://raw.githubusercontent.com/OfficialOrbitron/ModPE/master/Scripts/WorldEditGUI.js
 *
 * Testet with:
 * MCPE: v0.9.5
 * BlockLauncher: v1.7.9
 *
 */

// Project info
var project = "WorldEdit GUI";
var sname = "[WE]";
var version = "v1.0.1";
var author = "Orbitron";
 
var selection1 = [0, 0, 0];
var selection2 = [0, 0, 0];
var select_first = false;
var select_second = false;
var clipboard = new Array();

var addToInventory = [false, 0, 0, 0];

var openWindow = null;
var mainWindow = null;
var optionWindow = null;
var setWindow = null;
var replaceWindow = null;
var spawnWindow = null;
var xyzWindow = null;

var option_mode = 0;
var option_xyz = false;

var T_X = null;
var T_Y = null;
var T_Z = null;

function dip2px(ctx, dips) {
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel() { // WorldEdit button (right bottom)
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_we = new android.widget.Button(ctx);
				B_we.setText("WorldEdit");
				B_we.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
						menu_Main();
					}
				});
				layout.addView(B_we);
				
				openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 85), dip2px(ctx, 35));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 0);
			} catch(err) {
				print("Error!\n" + err);
			}
		}
	}));
}

function leaveGame() {
	option_xyz = false;
	option_mode = 0;
	T_X = null;
	T_Y = null;
	T_Z = null;
	
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			if(openWindow != null) {
				openWindow.dismiss();
				openWindow = null;
			}
			if(mainWindow != null) {
				mainWindow.dismiss();
				mainWindow = null;
			}
			if(optionWindow != null) {
				optionWindow.dismiss();
				optionWindow = null;
			}
			if(setWindow != null) {
				setWindow.dismiss();
				setWindow = null;
			}
			if(replaceWindow != null) {
				replaceWindow.dismiss();
				replaceWindow = null;
			}
			if(spawnWindow != null) {
				spawnWindow.dismiss();
				spawnWindow = null;
			}
			if(xyzWindow != null) {
				xyzWindow.dismiss();
				xyzWindow = null;
			}
		}
	}));
}

function modTick() { // Coordinates (left top)
	if(option_xyz) {
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				T_B.setText(" ");
				T_T.setText("Coordinates");
				T_X.setText("X: "+Math.round(getPlayerX()*100)/100);
				T_Y.setText("Y: "+((Math.round(getPlayerY()*100)/100) - 1)+" (feet pos, "+Math.round(getPlayerY()*100)/100+" eyes pos)");
				T_Z.setText("Z: "+Math.round(getPlayerZ()*100)/100);
			}
		}));
	}
	if(addToInventory[0]){
		addToInventory[0] = false;
		addItemInventory(addToInventory[1], addToInventory[2], addToInventory[3]);
	}
}

function show_XYZ(show){
	if(show){
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		try{
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(1);
			
			T_B = new android.widget.TextView(ctx);
			T_B.setTextSize(20);
			T_B.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_B);
			
			T_T = new android.widget.TextView(ctx);
			T_T.setTextSize(20);
			T_T.setTextColor(android.graphics.Color.WHITE);
			layout.addView(T_T);
			
			T_X = new android.widget.TextView(ctx);
			T_X.setTextSize(20);
			T_X.setTextColor(android.graphics.Color.WHITE);
			layout.addView(T_X);
			
			T_Y = new android.widget.TextView(ctx);
			T_Y.setTextSize(20);
			T_Y.setTextColor(android.graphics.Color.WHITE);
			layout.addView(T_Y);
			
			T_Z = new android.widget.TextView(ctx);
			T_Z.setTextSize(20);
			T_Z.setTextColor(android.graphics.Color.WHITE);
			layout.addView(T_Z);
			
			xyzWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth(), dip2px(ctx, 100));
			xyzWindow.setTouchable(false);
			xyzWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.LEFT, 0, 0);
		} catch(err) {
			print("Error!\n" + err); 
		}
	} else if(xyzWindow != null) {
		xyzWindow.dismiss();
		xyzWindow = null;
	}
}

/* Menu container
**********************************************************************/
function menu_Main() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	try {
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		var T_title = new android.widget.TextView(ctx);
		T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText(project + " " + version + "\n" + author); // Title of menu
		T_title.setTextSize(20);
		layout.addView(T_title);
		
		var tlayout = new android.widget.LinearLayout(ctx);
		var params = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		
		var B_set = new android.widget.Button(ctx);
		B_set.setText("Set");
		B_set.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v) {
				menu_Set();
			}
		});
		tlayout.addView(B_set);
		
		var B_replace = new android.widget.Button(ctx);
		B_replace.setLayoutParams(params);
		B_replace.setText("Replace");
		B_replace.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v) {
				menu_Replace();
			}
		});
		tlayout.addView(B_replace);
		layout.addView(tlayout);
		
		var B_get = new android.widget.Button(ctx);
		B_get.setText("Get tool");
		B_get.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				clientMessage(sname + " You got the selection tool.");
				addToInventory = [true, 267, 1, 0];
			}
		});
		layout.addView(B_get);
		
		var B_spawn = new android.widget.Button(ctx);
		B_spawn.setText("Spawn");
		B_spawn.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				menu_Spawn();
			}
		});
		layout.addView(B_spawn);
		
		var B_setting = new android.widget.Button(ctx);
		B_setting.setText("Option");
		B_setting.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				menu_Setting();
			}
		});
		layout.addView(B_setting);
		
		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				mainWindow.dismiss();
				mainWindow = null;
			}
		});
		layout.addView(B_exit);
		
		mainWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
		mainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
		mainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 0);
	}catch(err){
		print("Error!\n" + err);
	}
}

/* Set menu
**********************************************************************/
function menu_Set(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	try{
		var params = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		var T_title = new android.widget.TextView(ctx);
		T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("- Set -");
		T_title.setTextSize(20);
		layout.addView(T_title);
		
		if(option_mode == 1){
			var x1tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_1x = new android.widget.TextView(ctx);
			T_desc_1x.setText("X:");
			T_desc_1x.setTextSize(15);
			x1tlayout.addView(T_desc_1x);
			
			var E_x1 = new android.widget.EditText(ctx);
			E_x1.setLayoutParams(params);
			E_x1.setHint("X");
			E_x1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			x1tlayout.addView(E_x1);
			
			layout.addView(x1tlayout);
			
			var y1tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_1y = new android.widget.TextView(ctx);
			T_desc_1y.setText("Y:");
			T_desc_1y.setTextSize(15);
			y1tlayout.addView(T_desc_1y);
			
			var E_y1 = new android.widget.EditText(ctx);
			E_y1.setLayoutParams(params);
			E_y1.setHint("Y");
			E_y1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			y1tlayout.addView(E_y1);
			
			layout.addView(y1tlayout);
			
			var z1tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_1z = new android.widget.TextView(ctx);
			T_desc_1z.setText("Z:");
			T_desc_1z.setTextSize(15);
			z1tlayout.addView(T_desc_1z);
			
			var E_z1 = new android.widget.EditText(ctx);
			E_z1.setLayoutParams(params);
			E_z1.setHint("Z");
			E_z1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			z1tlayout.addView(E_z1);
			
			layout.addView(z1tlayout);
			
			////
			
			var x2tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_2x = new android.widget.TextView(ctx);
			T_desc_2x.setText("Width (X):");
			T_desc_2x.setTextSize(15);
			x2tlayout.addView(T_desc_2x);
			
			var E_x2 = new android.widget.EditText(ctx);
			E_x2.setLayoutParams(params);
			E_x2.setHint("X");
			E_x2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			x2tlayout.addView(E_x2);
			
			layout.addView(x2tlayout);
			
			var y2tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_2y = new android.widget.TextView(ctx);
			T_desc_2y.setText("Height (Y):");
			T_desc_2y.setTextSize(15);
			y2tlayout.addView(T_desc_2y);
			
			var E_y2 = new android.widget.EditText(ctx);
			E_y2.setLayoutParams(params);
			E_y2.setHint("Y");
			E_y2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			y2tlayout.addView(E_y2);
			
			layout.addView(y2tlayout);
			
			var z2tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_3z = new android.widget.TextView(ctx);
			T_desc_3z.setText("Length (Z):");
			T_desc_3z.setTextSize(15);
			z2tlayout.addView(T_desc_3z);
			
			var E_z2 = new android.widget.EditText(ctx);
			E_z2.setLayoutParams(params);
			E_z2.setHint("Z");
			E_z2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			z2tlayout.addView(E_z2);
			
			layout.addView(z2tlayout);
		}
		
		var T_desc_id = new android.widget.TextView(ctx);
		T_desc_id.setText("Block id / damage:");
		T_desc_id.setTextSize(15);
		layout.addView(T_desc_id);
		
		var tlayout = new android.widget.LinearLayout(ctx);
		
		var E_id = new android.widget.EditText(ctx);
		E_id.setHint("Block ID");
		E_id.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		tlayout.addView(E_id);
		
		var E_damage = new android.widget.EditText(ctx);
		E_damage.setLayoutParams(params);
		E_damage.setHint("Damage");
		E_damage.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		tlayout.addView(E_damage);
		
		layout.addView(tlayout);
		
		var B_set = new android.widget.Button(ctx);
		B_set.setText("Set!");
		B_set.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				if((option_mode == 0 && (!select_first || !select_second)) || (option_mode == 1 && (E_x1.getText().toString() == "" || E_y1.getText().toString() == "" || E_z1.getText().toString() == "" || E_x2.getText().toString() == "" || E_y2.getText().toString() == "" || E_z2.getText().toString() == ""))){
					clientMessage(sname + " Select first an area.");
				}else if(E_id.getText().toString() == "" || E_damage.getText().toString() == ""){
					clientMessage(sname + " Enter an ID and damage.");
				}else{
					if(option_mode == 1){
						selection1 = [parseInt(E_x1.getText()), parseInt(E_y1.getText()), parseInt(E_z1.getText())];
						selection2 = [parseInt(E_x2.getText()), parseInt(E_y2.getText()), parseInt(E_z2.getText())];
					}
					clientMessage(sname + W_set(parseInt(E_id.getText()), parseInt(E_damage.getText())) + " blocks has been modified.");
				}
			}
		});
		layout.addView(B_set);
		
		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Back");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				setWindow.dismiss();
				setWindow = null;
			}
		});
		layout.addView(B_exit);
		
		var mlayout = new android.widget.RelativeLayout(ctx);
		var scrollview = new android.widget.ScrollView(ctx);
		var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.MATCH_PARENT);
		
		scrollview.setLayoutParams(svParams);
		scrollview.addView(layout);
		mlayout.addView(scrollview);
		
		setWindow = new android.widget.PopupWindow(mlayout, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
		setWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
		setWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 0);
	}catch(err){
		print("Error!\n" + err);
	}
}

/* Replace menu
**********************************************************************/
function menu_Replace(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	try{
		var params = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		var T_title = new android.widget.TextView(ctx);
		T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("- Replace -");
		T_title.setTextSize(20);
		layout.addView(T_title);
		
		if(option_mode == 1){
			var x1tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_1x = new android.widget.TextView(ctx);
			T_desc_1x.setText("X:");
			T_desc_1x.setTextSize(15);
			x1tlayout.addView(T_desc_1x);
			
			var E_x1 = new android.widget.EditText(ctx);
			E_x1.setLayoutParams(params);
			E_x1.setHint("X");
			E_x1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			x1tlayout.addView(E_x1);
			
			layout.addView(x1tlayout);
			
			var y1tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_1y = new android.widget.TextView(ctx);
			T_desc_1y.setText("Y:");
			T_desc_1y.setTextSize(15);
			y1tlayout.addView(T_desc_1y);
			
			var E_y1 = new android.widget.EditText(ctx);
			E_y1.setLayoutParams(params);
			E_y1.setHint("Y");
			E_y1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			y1tlayout.addView(E_y1);
			
			layout.addView(y1tlayout);
			
			var z1tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_1z = new android.widget.TextView(ctx);
			T_desc_1z.setText("Z:");
			T_desc_1z.setTextSize(15);
			z1tlayout.addView(T_desc_1z);
			
			var E_z1 = new android.widget.EditText(ctx);
			E_z1.setLayoutParams(params);
			E_z1.setHint("Z");
			E_z1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			z1tlayout.addView(E_z1);
			
			layout.addView(z1tlayout);
			
			////
			
			var x2tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_2x = new android.widget.TextView(ctx);
			T_desc_2x.setText("Width (X):");
			T_desc_2x.setTextSize(15);
			x2tlayout.addView(T_desc_2x);
			
			var E_x2 = new android.widget.EditText(ctx);
			E_x2.setLayoutParams(params);
			E_x2.setHint("X");
			E_x2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			x2tlayout.addView(E_x2);
			
			layout.addView(x2tlayout);
			
			var y2tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_2y = new android.widget.TextView(ctx);
			T_desc_2y.setText("Height (Y):");
			T_desc_2y.setTextSize(15);
			y2tlayout.addView(T_desc_2y);
			
			var E_y2 = new android.widget.EditText(ctx);
			E_y2.setLayoutParams(params);
			E_y2.setHint("Y");
			E_y2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			y2tlayout.addView(E_y2);
			
			layout.addView(y2tlayout);
			
			var z2tlayout = new android.widget.LinearLayout(ctx);
			
			var T_desc_3z = new android.widget.TextView(ctx);
			T_desc_3z.setText("Length (Z):");
			T_desc_3z.setTextSize(15);
			z2tlayout.addView(T_desc_3z);
			
			var E_z2 = new android.widget.EditText(ctx);
			E_z2.setLayoutParams(params);
			E_z2.setHint("Z");
			E_z2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			z2tlayout.addView(E_z2);
			
			layout.addView(z2tlayout);
		}
		
		var T_desc_id = new android.widget.TextView(ctx);
		T_desc_id.setText("Block id / damage:");
		T_desc_id.setTextSize(15);
		layout.addView(T_desc_id);
		
		var tlayout = new android.widget.LinearLayout(ctx);
		
		var E_id = new android.widget.EditText(ctx);
		E_id.setHint("Block ID");
		E_id.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		tlayout.addView(E_id);
		
		var E_damage = new android.widget.EditText(ctx);
		E_damage.setLayoutParams(params);
		E_damage.setHint("Damage");
		E_damage.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		tlayout.addView(E_damage);
		
		layout.addView(tlayout);
		
		var T_desc_replace = new android.widget.TextView(ctx);
		T_desc_replace.setText("Replace with:");
		T_desc_replace.setTextSize(15);
		layout.addView(T_desc_replace);
		
		var rtlayout = new android.widget.LinearLayout(ctx);
		
		var E_replaceId = new android.widget.EditText(ctx);
		E_replaceId.setHint("Block ID");
		E_replaceId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		rtlayout.addView(E_replaceId);
		
		var E_replaceDamage = new android.widget.EditText(ctx);
		E_replaceDamage.setLayoutParams(params);
		E_replaceDamage.setHint("Damage");
		E_replaceDamage.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		rtlayout.addView(E_replaceDamage);
		
		layout.addView(rtlayout);
		
		var B_set = new android.widget.Button(ctx);
		B_set.setText("Replace!");
		B_set.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				if((option_mode == 0 && (!select_first || !select_second)) || (option_mode == 1 && (E_x1.getText().toString() == "" || E_y1.getText().toString() == "" || E_z1.getText().toString() == "" || E_x2.getText().toString() == "" || E_y2.getText().toString() == "" || E_z2.getText().toString() == ""))){
					clientMessage(sname + " Select first an area.");
				}else if(E_id.getText().toString() == "" || E_damage.getText().toString() == "" || E_replaceId.getText().toString() == "" || E_replaceDamage.getText().toString() == ""){
					clientMessage(sname + " Enter an ID and damage.");
				}else{
					if(option_mode == 1){
						selection1 = [parseInt(E_x1.getText()), parseInt(E_y1.getText()), parseInt(E_z1.getText())];
						selection2 = [parseInt(E_x2.getText()), parseInt(E_y2.getText()), parseInt(E_z2.getText())];
					}
					clientMessage(sname + W_replace(parseInt(E_id.getText()), parseInt(E_damage.getText()), parseInt(E_replaceId.getText()), parseInt(E_replaceDamage.getText())) + " blocks has been modified.");
				}
			}
		});
		layout.addView(B_set);
		
		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Back");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				replaceWindow.dismiss();
				replaceWindow = null;
			}
		});
		layout.addView(B_exit);
		
		var mlayout = new android.widget.RelativeLayout(ctx);
		var scrollview = new android.widget.ScrollView(ctx);
		var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.MATCH_PARENT);
		
		scrollview.setLayoutParams(svParams);
		scrollview.addView(layout);
		mlayout.addView(scrollview);
		
		replaceWindow = new android.widget.PopupWindow(mlayout, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
		replaceWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
		replaceWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 0);
	}catch(err){
		print("Error!\n" + err);
	}
}

/* Spawn menu
**********************************************************************/
function menu_Spawn(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	try{
		var spawnLocation = 0;
		var name = "";
		var skin = "";
		var entityId = 0;
		
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		var T_title = new android.widget.TextView(ctx);
		T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("- Spawn -");
		T_title.setTextSize(20);
		layout.addView(T_title);
		
		var T_desc_location = new android.widget.TextView(ctx);
		T_desc_location.setText("Location:");
		T_desc_location.setTextSize(15);
		layout.addView(T_desc_location);
				
		var B_location = new android.widget.Button(ctx);
		B_location.setText(spawnLocation == 0 ? "Player" : "Target");
		B_location.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				if(spawnLocation == 1){
					B_location.setText("Player");
					clientMessage(sname + " Spawn on current location.");
					spawnLocation = 0;
				}else{
					B_location.setText("Target");
					clientMessage(sname + " Spawn on cursor point.");
					spawnLocation = 1;
				}
			}
		});
		layout.addView(B_location);
		
		var RB_spawn1 = new android.widget.RadioButton(ctx);
		var RB_spawn2 = new android.widget.RadioButton(ctx);
		var RB_spawn3 = new android.widget.RadioButton(ctx);
		var RB_spawn4 = new android.widget.RadioButton(ctx);
		var RB_spawn5 = new android.widget.RadioButton(ctx);
		var RB_spawn6 = new android.widget.RadioButton(ctx);
		var RB_spawn7 = new android.widget.RadioButton(ctx);
		var RB_spawn8 = new android.widget.RadioButton(ctx);
		var RB_spawn9 = new android.widget.RadioButton(ctx);
		var RB_spawn10 = new android.widget.RadioButton(ctx);
		
		RB_spawn1.setId(100);
		RB_spawn2.setId(101);
		RB_spawn3.setId(102);
		RB_spawn4.setId(103);
		RB_spawn5.setId(104);
		RB_spawn6.setId(105);
		RB_spawn7.setId(106);
		RB_spawn8.setId(107);
		RB_spawn9.setId(108);
		RB_spawn10.setId(109);
		
		RB_spawn1.setText("Chicken");
		RB_spawn2.setText("Cow");
		RB_spawn3.setText("Pig");
		RB_spawn4.setText("Sheep");
		RB_spawn5.setText("Zombie");
		RB_spawn6.setText("Creeper");
		RB_spawn7.setText("Skeleton");
		RB_spawn8.setText("Spider");
		RB_spawn9.setText("Zombie Pigman");
		RB_spawn10.setText("Primed TNT");
		
		var RG_select = new android.widget.RadioGroup(ctx);
		RG_select.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener() {
			onCheckedChanged: function(group, checkedId){
				switch(checkedId){
					case 100:
						B_spawn.setText("Spawn Chicken!");
						skin = "";
						entityId = 10;
						break;
					case 101:
						B_spawn.setText("Spawn Cow!");
						skin = "";
						entityId = 11;
						break;
					case 102:
						B_spawn.setText("Spawn Pig!");
						skin = "mob/pig.png";
						entityId = 12;
						break;
					case 103:
						B_spawn.setText("Spawn Sheep!");
						skin = "mob/sheep.png";
						entityId = 13;
						break;
					case 104:
						B_spawn.setText("Spawn Zombie!");
						skin = "mob/zombie.png";
						entityId = 32;
						break;
					case 105:
						B_spawn.setText("Spawn Creeper!");
						skin = "mob/creeper.png";
						entityId = 33;
						break;
					case 106:
						B_spawn.setText("Spawn Skeleton!");
						skin = "mob/skeleton.png";
						entityId = 34;
						break;
					case 107:
						B_spawn.setText("Spawn Spider!");
						skin = "mob/spider.png";
						entityId = 35;
						break;
					case 108:
						B_spawn.setText("Spawn Zombie Pigman!");
						skin = "";
						entityId = 36;
						break;
					case 109:
						B_spawn.setText("Spawn Primed TNT!");
						skin = "";
						entityId = 65;
						break;
				}
			}
		});
		layout.addView(RG_select);
		
		RG_select.addView(RB_spawn1);
		RG_select.addView(RB_spawn2);
		RG_select.addView(RB_spawn3);
		RG_select.addView(RB_spawn4);
		RG_select.addView(RB_spawn5);
		RG_select.addView(RB_spawn6);
		RG_select.addView(RB_spawn7);
		RG_select.addView(RB_spawn8);
		RG_select.addView(RB_spawn9);
		RG_select.addView(RB_spawn10);
		
		var B_spawn = new android.widget.Button(ctx);
		B_spawn.setText("Spawn!");
		B_spawn.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				if(RG_select.getCheckedRadioButtonId() != -1){
					if(spawnLocation == 0){
						var x = getPlayerX();
						var y = getPlayerY();
						var z = getPlayerZ();
					}else{
						var pos = getPlayerTarget();
						
						if(pos === false){
							clientMessage(sname + " Distance too far.");
							return;
						}
						var x = pos[0];
						var y = pos[1];
						var z = pos[2];
					}
					
					if(entityId == 10) spawnChicken(x, y + 1, z, null);
					else if(entityId == 11) spawnCow(x, y + 1, z, null);
					else if(entityId == 36) spawnPigZombie(x, y + 1, z, 283, null);
					else bl_spawnMob(x, y + 1, z, entityId, "");
				}else{
					clientMessage(sname + " Select an entity.");
				}
			}
		});
		layout.addView(B_spawn);
		
		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Back");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				spawnWindow.dismiss();
				spawnWindow = null;
			}
		});
		layout.addView(B_exit);
		
		var mlayout = new android.widget.RelativeLayout(ctx);
		var scrollview = new android.widget.ScrollView(ctx);
		var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.MATCH_PARENT);
		
		scrollview.setLayoutParams(svParams);
		scrollview.addView(layout);
		mlayout.addView(scrollview);
		
		spawnWindow = new android.widget.PopupWindow(mlayout, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
		spawnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
		spawnWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 0);
	}catch(err){
		print("Error!\n" + err);
	}
}

/* Settings menu
**********************************************************************/
function menu_Setting(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	try{
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		var T_title = new android.widget.TextView(ctx);
		T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("- Option -");
		T_title.setTextSize(20);
		layout.addView(T_title);
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("View coords");
		C_xyz.setChecked(option_xyz);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
				option_xyz = isChecked;
				show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
		
		var T_desc = new android.widget.TextView(ctx);
		T_desc.setText("Mode:");
		T_desc.setTextSize(15);
		layout.addView(T_desc);
		
		var B_mode = new android.widget.Button(ctx);
		B_mode.setText(option_mode == 0 ? "Select" : "Coords");
		B_mode.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				if(option_mode == 1){
					B_mode.setText("Select");
					clientMessage(sname + " Changed to select mode.");
					option_mode = 0;
				}else{
					B_mode.setText("Coords");
					clientMessage(sname + " Changed to coords mode.");
					option_mode = 1;
				}
			}
		});
		layout.addView(B_mode);
		
		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Back");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				optionWindow.dismiss();
				optionWindow = null;
			}
		});
		layout.addView(B_exit);
		
		optionWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
		optionWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
		optionWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 0);
	}catch(err){
		print("Error!\n" + err);
	}
}

function useItem(x, y, z, item, block, side, itemdata, blockdata){
	if(item == 267){
		clientMessage(sname + " Block info : " + block + ":" + blockdata);
		if(!select_first){
			select_first = true;
			selection1[0] = Math.round(x);
			selection1[1] = Math.round(y);
			selection1[2] = Math.round(z);
			
			clientMessage(sname + " Selected first point (X : " + selection1[0] + " Y : " + selection1[1] + " Z : " + selection1[2] + ")");
		}else if(!select_second){
			select_second = true;
			selection2[0] = Math.round(x);
			selection2[1] = Math.round(y);
			selection2[2] = Math.round(z);
			
			clientMessage(sname + " Selected second point (X : " + selection2[0] + " Y : " + selection2[1] + " Z : " + selection2[2] + ")");
		}else{
			select_first = false;
			select_second = false;
			
			clientMessage(sname + " Choose action with set or replace.");
		}
	}
}

function getPlayerTarget(){
	var sin = -Math.sin(getYaw() / 180 * Math.PI);
	var cos = Math.cos(getYaw() / 180 * Math.PI);
	var tan = -Math.sin(getPitch() / 180 * Math.PI);
	var pcos = Math.cos(getPitch() / 180 * Math.PI);

	var x, y, z, count = 0;

	while(true){
		if(count >= 80) return false;
		
		x = getPlayerX()+count*sin*pcos;
		y = getPlayerY()+count*tan;
		z = getPlayerZ()+count*cos*pcos;
		if(getTile(x, y, z) != 0){
			return [x, y, z];
		}
		count++;
	}
}

function W_set(block, damage){
	var startX = Math.min(selection1[0], selection2[0]);
	var endX = Math.max(selection1[0], selection2[0]);
	var startY = Math.min(selection1[1], selection2[1]);
	var endY = Math.max(selection1[1], selection2[1]);
	var startZ = Math.min(selection1[2], selection2[2]);
	var endZ = Math.max(selection1[2], selection2[2]);
	
	var count = 0;
	
	for(var x = startX; x <= endX; x++){
		for(var y = startY; y <= endY; y++){
			for(var z = startZ; z <= endZ; z++){
				setTile(x, y, z, block, damage);
				count++;
			}
		}
	}
	
	return count;
}

function W_replace(block1, damage1, block2, damage2){
	var startX = Math.min(selection1[0], selection2[0]);
	var endX = Math.max(selection1[0], selection2[0]);
	var startY = Math.min(selection1[1], selection2[1]);
	var endY = Math.max(selection1[1], selection2[1]);
	var startZ = Math.min(selection1[2], selection2[2]);
	var endZ = Math.max(selection1[2], selection2[2]);
	
	var count = 0;
	
	for(var x = startX; x <= endX; x++){
		for(var y = startY; y <= endY; y++){
			for(var z = startZ; z <= endZ; z++){
				var id = getTile(x, y, z);
				var damage = Level.getData(x, y, z);
				if(id == block1 && damage == damage1){
					setTile(x, y, z, block2, damage2);
					count++;
				}
			}
		}
	}
	
	return count;
}