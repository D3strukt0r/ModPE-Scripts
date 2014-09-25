/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @project:	Disguise
 * @version:	v1.0.2
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
var version		= "1.0.2";
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
				case "steve":
				
					Entity.setRenderType(Player.getEntity(), 3);
					Entity.setMobSkin(Player.getEntity(), "mob/char.png");
					addonColourMessage("You are Steve");
					break;
				
				case "chicken":
				
					Entity.setRenderType(Player.getEntity(), 6);
					Entity.setMobSkin(Player.getEntity(), "mob/chicken.png");
					addonColourMessage("You are a chicken");
					break;
				
				case "cow":
				
					Entity.setRenderType(Player.getEntity(), 7);
					Entity.setMobSkin(Player.getEntity(), "mob/cow.png");
					addonColourMessage("You are a cow");
					break;
				
				case "pig":
				
					Entity.setRenderType(Player.getEntity(), 8);
					Entity.setMobSkin(Player.getEntity(), "mob/pig.png");
					addonColourMessage("You are a pig");
					break;
				
				case "sheep":
				
					Entity.setRenderType(Player.getEntity(), 9);
					Entity.setMobSkin(Player.getEntity(), "mob/sheep_0.png");
					addonColourMessage("You are a sheep");
					break;
				
				case "zombie":
				
					Entity.setRenderType(Player.getEntity(), 11);
					Entity.setMobSkin(Player.getEntity(), "mob/zombie.png");
					addonColourMessage("You are a zombie");
					break;
				
				case "zombiepigman":
				
					Entity.setRenderType(Player.getEntity(), 11);
					Entity.setMobSkin(Player.getEntity(), "mob/pigzombie.png");
					addonColourMessage("You are a zombie pigman");
					break;
				
				case "skeleton":
				
					Entity.setRenderType(Player.getEntity(), 12);
					Entity.setMobSkin(Player.getEntity(), "mob/skeleton.png");
					addonColourMessage("You are a skeleton");
					break;
				
				case "spider":
				
					Entity.setRenderType(Player.getEntity(), 13);
					Entity.setMobSkin(Player.getEntity(), "mob/spider.png");
					addonColourMessage("You are a spider");
					break;
				
				case "creeper":
				
					Entity.setRenderType(Player.getEntity(), 14);
					Entity.setMobSkin(Player.getEntity(), "mob/creeper.png");
					addonColourMessage("You are a creeper");
					break;
			}
			break;
		
		default:
		
			break;
	}
}
function newLevel()
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