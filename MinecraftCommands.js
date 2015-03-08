/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.orbitrondev.com
 * === ABOUT PROJECT ===
 * @author:		Manuele Vaccari
 * @project:	Disguise
 * @version:	v1.2.0
 * @website:	https://raw.githubusercontent.com/OrbitronDev/ModPE/master/MinecraftCommands.js
 *
 * Testet with:
 * MCPE: v0.10.5
 * BlockLauncher: v1.8.6
 *
 */
 
// Project info
var AppInfo = {
	'projectName': 'MinecraftCommands',
	'shortName': 'MCC',
	'version': '1.2.0'
	'author': 'Manuele Vaccari (OrbitronDev)'
};

// Values
var AppData = {
    helpPages : [
		{ '/achievement (x)', '/clear', '/debug <start|stop> (x)', '/defaultgamemode <mode> (x)' },
		{ '/difficulty <new difficulty>', '/effect <effect> [seconds] [amplifier] (x)', '/enchant <enchantmentID> [level] (x)', "/gamemode <mode>", "/gamerule <rule name> [value] (x)" },
		{ '/give <item> [amount]', '/kill', '/me <action...> (x)', '/playsound <sound> [x] [y] [z]', '/publish (x)' },
		{ '/say <message...> (x)', '/scoreboard ... (x)', '/seed', '/setblock', '/setworldspawn' },
		{ '/spawnpoint (x)', '/spreadplayers', '/summon', '/tell <message...> (x)', '/tellraw <message...> (x)' },
		{ '/testfor', '/testforblocks', '/time <set|add|query> <value>', '/toggledownfall', '/tp <x> <y> <z>' },
		{ '/weather', '/xp <amount>' }
	]
};

var values		= {
	helpPages : [
		{ "/achievement (x)", "/clear", "/debug <start|stop> (x)", "/defaultgamemode <mode> (x)" },
		{ "/difficulty <new difficulty>", "/effect <effect> [seconds] [amplifier] (x)", "/enchant <enchantmentID> [level] (x)", "/gamemode <mode>", "/gamerule <rule name> [value] (x)" },
		{ "/give <item> [amount]", "/kill", "/me <action...> (x)", "/playsound <sound> [x] [y] [z]", "/publish (x)" },
		{ "/say <message...> (x)", "/scoreboard ... (x)", "/seed", "/setblock", "/setworldspawn" },
		{ "/spawnpoint (x)", "/spreadplayers", "/summon", "/tell <message...> (x)", "/tellraw <message...> (x)" },
		{ "/testfor", "/testforblocks", "/time <set|add|query> <value>", "/toggledownfall", "/tp <x> <y> <z>" },
		{ "/weather", "/xp <amount>" }
	]
};

// Main functions
function procCmd(command)
{
	var cmd = command.toLowerCase().split(" ");
	switch(cmd[0])
	{
		// /achievement give <stat_name>
		case "achievement": 
		
			break;
		
		// /clear [item] [data]
		case "clear":
		
			if(Level.getGameMode() === 1)
			{
				clientMessage(ChatColor.RED + "Cannot clear the creative inventory");
			}
			else if(Level.getGameMode() === 0)
			{
				var amount = 0;
				for(var i = 9; i <= 44; i++)
				{
					if(Player.getInventorySlot(i) !== 0)
					{
						for(var j = 1; j <= Player.getInventorySlotCount(i); j++)
						{
							amount++;
						}
						Player.clearInventorySlot(i);
					}
				}
				clientMessage("Cleared the inventory, removing " + amount + (amount === 1 ? " item" : " items"));
			}
			break;
		
		// Not working on MCPE, or just on android to tell other scripts the debug is enabled with "function onDebug() {}"
		// /debug <start|stop>
		case "debug":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// Not working on MCPE, use "/gamemode" instead, or just on android with editing the config
		// /defaultgamemode <mode>
		case "defaultgamemode":
		
			print(ChatColor.RED + "Not working on MCPE! Use \"/gamemode [mode]\"");
			break;
		
		// Not working on MCPE, or just on android, I'm not sure
		// /difficulty <new difficulty>
		case "difficulty":
		
			print(ChatColor.RED + "Not working on MCPE! Change in settings of MCPE!");
			break;
		
		// Not working on MCPE
		// /effect <effect> [seconds] [amplifier]
		case "effect":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// Not working on MCPE
		// /enchant <enchantmentID> [level]
		case "enchant":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// /gamemode <mode>
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
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// /give <item> [amount] [data] [dataTag]
		case "give":
		
			if(Level.getGameMode() === 1)
			{
				clientMessage(ChatColor.RED + "Cannot use give in creative! Use: \"/gamemode 0\"");
			}
			if(Level.getGameMode() === 0)
			{
				if(typeof cmd[1] === "undefined")
				{
					clientMessage(ChatColor.RED + "Usage: /give <item> [amount]");
				}
				if(typeof cmd[1] !== "undefined")
				{
					if(!parseInt(cmd[1]))
					{
						values["giveItem"] = nameIDs[cmd[1].toUpperCase()];
						if(typeof values["giveItem"] === "undefined")
						{
							clientMessage(ChatColor.RED + "There is no such item with name " + values["giveItem"]);
						}
						else
						{
							if(typeof cmd[2] === "undefined")
							{
								Player.addItemInventory(values["giveItem"], 1);
								clientMessage("Given [" + cmd[1].toLowerCase() + "(ID: " + values["giveItem"] + ")] * 1");
							}
							if(typeof cmd[2] !== "undefined" && !parseInt(cmd[2]))
							{
								clientMessage(ChatColor.RED + "'" + cmd[2] + "'" + " is not a valid number");
							}
							if(typeof cmd[2] !== "undefined" && parseInt(cmd[2]))
							{
								Player.addItemInventory(values["giveItem"], cmd[2]);
								clientMessage("Given [" + cmd[1].toLowerCase() + "(ID: " + values["giveItem"] + ")] * " + cmd[2]);
							}
						}
						values["giveItem"] = null;
					}
					if(parseInt(cmd[1]))
					{
						if(typeof cmd[2] === "undefined")
						{
							Player.addItemInventory(cmd[1], 1);
							clientMessage("Given [" + cmd[1] + "(ID: " + cmd[1] + ")] * 1");
						}
						if(typeof cmd[2] !== "undefined" && !parseInt(cmd[2]))
						{
							clientMessage(ChatColor.RED + "'" + cmd[2] + "'" + " is not a valid number");
						}
						if(typeof cmd[2] !== "undefined" && parseInt(cmd[2]))
						{
							Player.addItemInventory(cmd[1], cmd[2]);
							clientMessage("Given [" + cmd[1] + "(ID: " + cmd[1] + ")] * " + cmd[2]);
						}
					}
				}
			}
			break;
		
		case "help":
		
			break;
		
		// /kill
		case "kill":
		
			Player.setHealth(0);
			clientMessage("You died");
			break;
		
		// /me <action...>
		case "me":
		
			if(typeof cmd[1] === "undefined")
			{
				clientMessage(ChatColor.RED + "Usage: /me <action...[JSON]>");
			}
			if(typeof cmd[1] !== "undefined")
			{
				clientMessage("* I " + cmd[2]);
			}
			break;
		
		// /playsound <sound> [x] [y] [z] [volume] [pitch]
		case "playsound":
		
			if(typeof cmd[1] === "undefined")
			{
				clientMessage(ChatColor.RED + "Usage: /playsound <sound> [x] [y] [z] [volume] [pitch]");
			}
			if(typeof cmd[1] !== "undefined")
			{
				Level.playSound(cmd[3], cmd[4], cmd[5], cmd[2], 1, 1);
			}
			break;
		
		// Not working on MCPE! Has to be set in MCPE settings
		// /publish
		case "publish":
		
			print(ChatColor.RED + "Not working on MCPE! Change in settings of MCPE!");
			break;
		
		// /say <message...>
		case "say":
		
			if(typeof cmd[1] === "undefined")
			{
				clientMessage(ChatColor.RED + "Usage: /say <message...[JSON]>");
			}
			if(typeof cmd[1] !== "undefined")
			{
				clientMessage("[Me] " + cmd[2]);
			}
			break;
		
		// Not working on MCPE! Or just on Android!
		// /scoreboard ....
		case "scoreboard":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// Not working on MCPE!
		// /seed
		case "seed":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// /setblock <x> <y> <z> <TileName> [dataValue] [oldBlockHandling] [dataTag]
		case "setblock":
		
			print(ChatColor.BLUE + "Code in development!");
			break;
		
		// /setworldspawn [<x> <y> <z>]
		case "setworldspawn":
		
			print(ChatColor.BLUE + "Code in development!");
			break;
		
		// Not working on MCPE!
		// /spawnpoint [player] [<x> <y> <z>]
		case "spawnpoint":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// /spreadplayers <x> <z> <spreadDistance> <maxRange> <respectTeams true|false> <player ...>
		case "spreadplayers":
		
			print(ChatColor.BLUE + "Code in development!");
			break;
		
		// /summon <EntityName> [x] [y] [z] [dataTag]
		case "summon":
		
			print(ChatColor.BLUE + "Code in development!");
			break;
		
		// Not working on MCPE! This don't gives sense. Who the hell you want to send a message.
		// /tell <message...>
		case "tell":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// Not working on MCPE! This don't gives sense. Who the hell you want to send a message.
		// /tellraw <message...>
		case "tellraw":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// /testfor <player> [dataTag]
		case "testfor":
		
			print(ChatColor.BLUE + "Code in development!");
			break;
		
		// /testforblocks <x1> <y1> <z1> <x2> <y2> <z2> <x> <y> <z> [mode]
		case "testforblocks":
		
			print(ChatColor.BLUE + "Code in development!");
			break;
		
		// /time <set|add|query> <value>
		case "time":
		
			print(ChatColor.BLUE + "Code in development!");
			break;
		
		// Not working on MCPE! Unfortunately ModPE don't support this at the moment
		// /toggledownfall
		case "toggledownfall":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// /tp <x> <y> <z> [<y-rot> <x-rot>]
		case "tp":
		
			print(ChatColor.BLUE + "Code in development!");
			break;
		
		// Not working on MCPE! Unfortunately ModPE don't support this at the moment
		// /weather <clear|rain|thunder> [duration in seconds]
		case "weather":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		// Not working on MCPE! MCPE isn't using XP at the moment.
		// /xp <amount>
		case "xp":
		
			print(ChatColor.RED + "Not working on MCPE!");
			break;
		
		default:
		
			break;
	}
}
function newLevel(hasLevel)
{
	clientMessage(ChatColor.GRAY + "[INFO] " + ChatColor.WHITE + project + " loaded");
}
