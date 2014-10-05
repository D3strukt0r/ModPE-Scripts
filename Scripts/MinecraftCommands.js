/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @project:	Disguise
 * @version:	v1.0.1
 * @website:	https://raw.githubusercontent.com/OfficialOrbitron/ModPE/master/Scripts/MinecraftCommands.js
 *
 * Testet with:
 * MCPE: v0.9.5
 * BlockLauncher: v1.7.9
 *
 */
 
// Project info
var project		= "MinecraftCommands";
var sname		= "MCC";
var version		= "1.0.0";
var author		= "Orbitron";

// Values

// Main functions
function procCmd(command)
{
	var cmd = command.toLowerCase().split(" ");
	switch(cmd[0])
	{
		// /achievement give <stat_name> [player]
		case "achievement": 
		
			break;
		
		// /clear <player> [item] [data]
		case "clear":
		
			break;
		
		// Not working on MCPE, or just on android to tell other scripts the debug is enabled with "function onDebug() {}"
		// /debug <start|stop>
		case "debug":
		
			break;
		
		// Not working on MCPE, use "/gamemode" instead, or just on android with editing the config
		// /defaultgamemode <mode>
		case "defaultgamemode":
		
			break;
		
		// Not working on MCPE, or just on android, I'm not sure
		// /difficulty <new difficulty>
		case "difficulty":
		
			break;
		
		// Not working on MCPE
		// /effect <player> <effect> [seconds] [amplifier]
		case "effect":
		
			break;
		
		// Not working on MCPE
		// /enchant <player> <enchantmentID> [level]
		case "enchant":
		
			break;
		
		// /gamemode <mode> <player>
		case "gamemode":
		
			if(typeof cmd[1] === "undefined")
			{
				Level.setGameMode(Level.getGameMode() === 0 ? 1 : 0);
				clientMessage("Your game mode has been updated");
			}
			if(typeof cmd[1] !== "undefined")
			{
				switch(cmd[1])
				{
					case "0":
					case "s":
					case "survival":
					
						Level.setGameMode(0);
						clientMessage("Your game mode has been updated");
						break;
					
					case "1":
					case "c":
					case "creative":
					
						Level.setGameMode(1);
						clientMessage("Your game mode has been updated");
						break;
				}
			}
			break;
		
		// Not working on MCPE
		// /gamerule <rule name> [value]
		case "gamerule":
		
			break;
		
		// /give <player> <item> [amount] [data] [dataTag]
		case "give":
		
				if(typeof cmd[1] === "undefined")
				{
					addonErrorMessage("Not enough parameters");
				}
				if(typeof cmd[1] !== "undefined")
				{
					if(!parseInt(cmd[1]))
					{
						var cmdGive_item = nameIDs[cmd[1].toUpperCase()];
						if(typeof cmdGive_item === "undefined")
						{
							addonErrorMessage("Item/Block doesn't exist");
						}
						else
						{
							if(typeof cmd[2] === "undefined")
							{
								Player.addItemInventory(cmdGive_item, 1);
								addonColourMessage("Gave you " + ChatColor.AQUA + "1" + ChatColor.WHITE + " of " + ChatColor.AQUA + cmd[1].toLowerCase() + ChatColor.WHITE + " (ID: " + cmdGive_item + ")");
							}
							if(typeof cmd[2] !== "undefined" && !parseInt(cmd[2]))
							{
								addonErrorMessage("Quantity must be a number");
							}
							if(typeof cmd[2] !== "undefined" && parseInt(cmd[2]))
							{
								Player.addItemInventory(cmdGive_item, cmd[2]);
								addonColourMessage("Gave you " + ChatColor.AQUA + cmd[2] + ChatColor.WHITE + " of " + ChatColor.AQUA + cmd[1].toLowerCase() + ChatColor.WHITE + " (ID: " + cmdGive_item + ")");
							}
						}
					}
					if(parseInt(cmd[1]))
					{
						if(typeof cmd[2] === "undefined")
						{
							Player.addItemInventory(cmd[1], 1);
							addonColourMessage("Gave you " + ChatColor.AQUA + "1" + ChatColor.WHITE + " of " + ChatColor.AQUA + cmd[1].toLowerCase() + ChatColor.WHITE + " (ID: " + cmd[1] + ")");
						}
						if(typeof cmd[2] !== "undefined" && !parseInt(cmd[2]))
						{
							addonErrorMessage("Quantity must be a number");
						}
						if(typeof cmd[2] !== "undefined" && parseInt(cmd[2]))
						{
							Player.addItemInventory(cmd[1], cmd[2]);
							addonColourMessage("Gave you " + ChatColor.AQUA + cmd[2] + ChatColor.WHITE + " of " + ChatColor.AQUA + cmd[1].toLowerCase() + ChatColor.WHITE + " (ID: " + cmd[1] + ")");
						}
					}
				}
			}
			break;
		
		case "help":
		
			break;
		
		case "kill":
		
			break;
		
		case "me":
		
			break;
		
		case "playsound":
		
			break;
		
		case "publish":
		
			break;
		
		case "say":
		
			break;
		
		case "scoreboard":
		
			break;
		
		case "seed":
		
			break;
		
		case "setblock":
		
			break;
		
		case "setworldspawn":
		
			break;
		
		case "spawnpoint":
		
			break;
		
		case "spreadplayers":
		
			break;
		
		case "summon":
		
			break;
		
		case "tell":
		
			break;
		
		case "tellraw":
		
			break;
		
		case "testfor":
		
			break;
		
		case "testforblock":
		
			break;
		
		case "time":
		
			break;
		
		case "toggledownfall":
		
			break;
		
		case "tp":
		
			break;
		
		case "weather":
		
			break;
		
		case "xp":
		
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