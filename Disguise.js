/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.orbitrondev.com
 * === ABOUT PROJECT ===
 * @author:		Manuele Vaccari
 * @project:	Disguise
 * @version:	v1.2.0
 * @website:	https://raw.githubusercontent.com/OrbitronDev/ModPE/master/Disguise.js
 *
 * Testet with:
 * MCPE: v0.10.5
 * BlockLauncher: v1.8.6
 *
 */

// Project info
var AppInfo = {
	'projectName': 'Disguise',
	'shortName': 'DIS',
	'version': '1.2.0'
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
function procCmd(command)
{
	var cmd = command.toLowerCase().split(' ');
	switch(cmd[0])
	{
		case 'disguise':
		
			switch(cmd[1])
			{
				case "chicken":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.chicken);
					Entity.setMobSkin(Player.getEntity(), "mob/chicken.png");
					AppFunctions.printColourMessage('You are a chicken');
					break;
				
				case "cow":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.cow);
					Entity.setMobSkin(Player.getEntity(), "mob/cow.png");
					AppFunctions.printColourMessage('You are a cow');
					break;
				
				case "pig":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.pig);
					Entity.setMobSkin(Player.getEntity(), "mob/pig.png");
					AppFunctions.printColourMessage('You are a pig');
					break;
				
				case "sheep":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.sheep);
					Entity.setMobSkin(Player.getEntity(), "mob/sheep_0.png");
					AppFunctions.printColourMessage('You are a sheep');
					break;
				
				case "wolf":
				
					addonErrorMessage("Not available yet");
				//	Entity.setRenderType(Player.getEntity(), 1);
				//	Entity.setMobSkin(Player.getEntity(), "mob/wolf.png");
				//	addonColourMessage("You are a wolf");
					break;
				
				case "villager":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.villager);
					Entity.setMobSkin(Player.getEntity(), "mob/villager/villager.png");
					AppFunctions.printColourMessage('You are a villager');
					break;
				
				case "mushroom":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.mushroomCow);
					Entity.setMobSkin(Player.getEntity(), "mob/mushroom.png");
					AppFunctions.printColourMessage('You are a mushroom cow');
					break;
				
				case "zombie":
				
					addonErrorMessage("Not available yet");
				//	Entity.setRenderType(Player.getEntity(), 1);
				//	Entity.setMobSkin(Player.getEntity(), "mob/zombie.png");
				//	addonColourMessage("You are a zombie");
					break;
				
				case "creeper":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.creeper);
					Entity.setMobSkin(Player.getEntity(), "mob/creeper.png");
					AppFunctions.printColourMessage('You are a creeper');
					break;
				
				case "skeleton":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.skeleton);
					Entity.setMobSkin(Player.getEntity(), "mob/skeleton.png");
					AppFunctions.printColourMessage('You are a skeleton');
					break;
				
				case "spider":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.spider);
					Entity.setMobSkin(Player.getEntity(), "mob/spider.png");
					AppFunctions.printColourMessage('You are a spider');
					break;
				
				case "zombiepigman":
				
					addonErrorMessage("Not available yet");
				//	Entity.setRenderType(Player.getEntity(), 1);
				//	Entity.setMobSkin(Player.getEntity(), "mob/pigzombie.png");
				//	addonColourMessage("You are a zombie pigman");
					break;
				
				case "slime":
				
					addonErrorMessage("Not available yet");
				//	Entity.setRenderType(Player.getEntity(), 1);
				//	Entity.setMobSkin(Player.getEntity(), "mob/slime.png");
				//	addonColourMessage("You are a slime");
					break;
				
				case "magmacube":
				
					addonErrorMessage("Not available yet");
				//	Entity.setRenderType(Player.getEntity(), 1);
				//	Entity.setMobSkin(Player.getEntity(), "mob/magmacube.png");
				//	addonColourMessage("You are a magma cube");
					break;
				
				case "enderman":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.enderman);
					Entity.setMobSkin(Player.getEntity(), "mob/enderman.png");
					AppFunctions.printColourMessage('You are a enderman');
					break;
				
				case "silverfish":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.silverfish);
					Entity.setMobSkin(Player.getEntity(), "mob/silverfish.png");
					AppFunctions.printColourMessage('You are a silverfish');
					break;
				
				case "steve":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
					Entity.setMobSkin(Player.getEntity(), "mob/char.png");
					AppFunctions.printColourMessage('You are Steve');
					break;
				
				case "tnt":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.tnt);
					AppFunctions.printColourMessage('You are a TNT block');
					break;
				
				case "arrow":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.arrow);
					AppFunctions.printColourMessage('You are an arrow');
					break;
				
				case "egg":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.egg);
					AppFunctions.printColourMessage('You are an egg');
					break;
				
				case "snowball":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.snowball);
					AppFunctions.printColourMessage('You are a snowball');
					break;
				
				case "minecart":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.minecart);
					AppFunctions.printColourMessage('You are a minecart');
					break;
				
				default:
				
					AppFunctions.printErrorMessage('Usage: /disguise <mob>');
					break;
			}
			break;
	}
}
function newLevel(hasLevel)
{
	clientMessage(ChatColor.GRAY + '[INFO] ' + ChatColor.WHITE + AppInfo.projectName + ' loaded');
}
