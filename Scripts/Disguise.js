/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @project:	Disguise
 * @version:	v1.1.0
 * @website:	https://raw.githubusercontent.com/OfficialOrbitron/ModPE/master/Scripts/Disguise.js
 *
 * Testet with:
 * MCPE: v0.9.5
 * BlockLauncher: v1.7.9
 *
 */

// Project info
var project		= "Disguise";
var sname		= "DIS";
var version		= "1.1.0";
var author		= "Orbitron";

// Values

// Main functions
function procCmd(command)
{
	var cmd = command.toLowerCase().split(" ");
	switch(cmd[0])
	{
		case "disguise":
		
			switch(cmd[1])
			{
				case "chicken":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.chicken);
					Entity.setMobSkin(Player.getEntity(), "mob/chicken.png");
					addonColourMessage("You are a chicken");
					break;
				
				case "cow":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.cow);
					Entity.setMobSkin(Player.getEntity(), "mob/cow.png");
					addonColourMessage("You are a cow");
					break;
				
				case "pig":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.pig);
					Entity.setMobSkin(Player.getEntity(), "mob/pig.png");
					addonColourMessage("You are a pig");
					break;
				
				case "sheep":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.sheep);
					Entity.setMobSkin(Player.getEntity(), "mob/sheep_0.png");
					addonColourMessage("You are a sheep");
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
					addonColourMessage("You are a villager");
					break;
				
				case "mushroom":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.mushroomCow);
					Entity.setMobSkin(Player.getEntity(), "mob/mushroom.png");
					addonColourMessage("You are a mushroom cow");
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
					addonColourMessage("You are a creeper");
					break;
				
				case "skeleton":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.skeleton);
					Entity.setMobSkin(Player.getEntity(), "mob/skeleton.png");
					addonColourMessage("You are a skeleton");
					break;
				
				case "spider":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.spider);
					Entity.setMobSkin(Player.getEntity(), "mob/spider.png");
					addonColourMessage("You are a spider");
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
					addonColourMessage("You are a ENDERMAN");
					break;
				
				case "silverfish":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.silverfish);
					Entity.setMobSkin(Player.getEntity(), "mob/silverfish.png");
					addonColourMessage("You are a silverfish");
					break;
				
				case "steve":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
					Entity.setMobSkin(Player.getEntity(), "mob/char.png");
					addonColourMessage("You are Steve");
					break;
				
				case "tnt":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.tnt);
					addonColourMessage("You are a TNT block");
					break;
				
				case "arrow":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.arrow);
					addonColourMessage("You are an arrow");
					break;
				
				case "egg":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.egg);
					addonColourMessage("You are an egg");
					break;
				
				case "snowball":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.snowball);
					addonColourMessage("You are a snowball");
					break;
				
				case "minecart":
				
					Entity.setRenderType(Player.getEntity(), EntityRenderType.minecart);
					addonColourMessage("You are a minecart");
					break;
				
				default:
				
					addonErrorMessage("Usage: /disguise <mob>");
					break;
			}
			break;
		
		default:
		
			break;
	}
}
function newLevel(hasLevel)
{
	clientMessage(ChatColor.GRAY + "[INFO] " + ChatColor.WHITE + project + " loaded");
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