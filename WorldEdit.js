/*
 * === ABOUT US ===
 * @name:		OrbitronDev
 * @website:	https://www.orbitrondev.org
 * === ABOUT PROJECT ===
 * @author:		Manuele Vaccari
 * @project:	Disguise
 * @version:	v1.0.1
 * @website:	https://raw.githubusercontent.com/OfficialOrbitron/ModPE/master/Scripts/WorldEdit.js
 *
 * Testet with:
 * MCPE: v0.9.5
 * BlockLauncher: v1.7.9
 *
 */
 
// Project info
var project		= "WorldEdit";
var sname		= "WE";
var version		= "1.0.0";
var author		= "Orbitron";

// Values

// Main functions
function procCmd(command)
{
	var cmd = command.toLowerCase().split(" ");
	switch(cmd[0])
	{
		case "/limit":
		
			break;
		
		case "/undo":
		
			break;
		
		case "/undo":
		
			break;
		
		case "/redo":
		
			break;
		
		case "clearhistory":
		
			break;
		
		case "/wand":
		
			break;
		
		case "toggleeditwand":
		
			break;
		
		case "/sel":
		
			break;
		
		case "/desel":
		
			break;
		
		case "/pos1":
		
			break;
		
		case "/pos2":
		
			break;
		
		case "/hpos1":
		
			break;
		
		case "/hpos2":
		
			break;
		
		case "/chunk":
		
			break;
		
		case "/expand":
		
			break;
		
		case "/contract":
		
			break;
		
		case "/outset":
		
			break;
		
		case "/inset":
		
			break;
		
		case "/shift":
		
			break;
		
		case "/size":
		
			break;
		
		case "/count":
		
			break;
		
		case "/distr":
		
			break;
		
		case "/set":
		
			break;
		
		case "/replace":
		
			break;
		
		case "/overlay":
		
			break;
		
		case "/walls":
		
			break;
		
		case "/outline":
		
			break;
		
		case "/smooth":
		
			break;
		
		case "/deform":
		
			break;
		
		case "/hollow":
		
			break;
		
		case "/regen":
		
			break;
		
		case "/move":
		
			break;
		
		case "/stack":
		
			break;
		
		case "/naturalize":
		
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