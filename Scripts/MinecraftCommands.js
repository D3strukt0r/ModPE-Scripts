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
		case "achievement":
		
			break;
		
		case "clear":
		
			break;
		
		case "debug":
		
			break;
		
		case "defaultgamemode":
		
			break;
		
		case "difficulty":
		
			break;
		
		case "effect":
		
			break;
		
		case "enchant":
		
			break;
		
		case "gamemode":
		
			break;
		
		case "gamerule":
		
			break;
		
		case "give":
		
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
function newLevel()
{
	clientMessage("§7[INFO] §f" + project + " loaded");
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