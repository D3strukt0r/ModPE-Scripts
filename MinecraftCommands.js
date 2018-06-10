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
	'version': '1.2.0',
	'author': 'Manuele Vaccari (OrbitronDev)'
};

// Values
var AppData = {
    'helpPages' : [
		{ '/achievement (x)', '/clear', '/debug <start|stop> (x)', '/defaultgamemode <mode> (x)' },
		{ '/difficulty <new difficulty>', '/effect <effect> [seconds] [amplifier] (x)', '/enchant <enchantmentID> [level] (x)', "/gamemode <mode>", "/gamerule <rule name> [value] (x)" },
		{ '/give <item> [amount]', '/kill', '/me <action...> (x)', '/playsound <sound> [x] [y] [z]', '/publish (x)' },
		{ '/say <message...> (x)', '/scoreboard ... (x)', '/seed', '/setblock', '/setworldspawn' },
		{ '/spawnpoint (x)', '/spreadplayers', '/summon', '/tell <message...> (x)', '/tellraw <message...> (x)' },
		{ '/testfor', '/testforblocks', '/time <set|add|query> <value>', '/toggledownfall', '/tp <x> <y> <z>' },
		{ '/weather', '/xp <amount>' }
	],
	'giveItems': {
		'AIR': 0,
		'STONE': 1,
		'GRASS': 2,
		'DIRT': 3,
		'COBBLESTONE': 4,
		'COBBLE': 4,
		'PLANK': 5,
		'PLANKS': 5,
		'WOODEN_PLANK': 5,
		'WOODEN_PLANKS': 5,
		'SAPLING': 6,
		'SAPLINGS': 6,
		'BEDROCK': 7,
		'WATER': 8,
		'STILL_WATER': 9,
		'LAVA': 10,
		'STILL_LAVA': 11,
		'SAND': 12,
		'GRAVEL': 13,
		'GOLD_ORE': 14,
		'IRON_ORE': 15,
		'COAL_ORE': 16,
		'WOOD': 17,
		'TRUNK': 17,
		'LEAVES': 18,
		'LEAVE': 18,
		'SPONGE': 19,
		'GLASS': 20,
		'LAPIS_ORE': 21,
		'LAPIS_BLOCK': 22,
		'SANDSTONE': 24,
		'BED_BLOCK': 26,
		'POWERED_RAIL': 27,
		'COBWEB': 30,
		'TALL_GRASS': 31,
		'BUSH': 32,
		'DEAD_BUSH': 32,
		'WOOL': 35,
		'DANDELION': 37,
		'YELLOW_FLOWER': 37,
		'ROSE': 38,
		'CYAN_FLOWER': 38,
		'BROWN_MUSHROOM': 39,
		'RED_MUSHROOM': 40,
		'GOLD_BLOCK': 41,
		'IRON_BLOCK': 42,
		'DOUBLE_SLAB': 43,
		'DOUBLE_SLABS': 43,
		'SLAB': 44,
		'SLABS': 44,
		'BRICK': 45,
		'BRICK_BLOCK': 45,
		'TNT': 46,
		'BOOKSHELF': 47,
		'MOSS_STONE': 48,
		'MOSSY_STONE': 48,
		'OBSIDIAN': 49,
		'TORCH': 50,
		'FIRE': 51,
		'WOOD_STAIRS': 53,
		'WOODEN_STAIRS': 53,
		'OAK_WOOD_STAIRS': 53,
		'OAK_WOODEN_STAIRS': 53,
		'CHEST': 54,
		'DIAMOND_ORE': 56,
		'DIAMOND_BLOCK': 57,
		'CRAFTING_TABLE': 58,
		'WORKBENCH': 58,
		'WHEAT_BLOCK': 59,
		'SEED_BLOCK': 59,
		'FARMLAND': 60,
		'FURNACE': 61,
		'BURNING_FURNACE': 62,
		'LIT_FURNACE': 62,
		'SIGN_POST': 63,
		'SIGN_BLOCK': 63,
		'DOOR_BLOCK': 64,
		'DOOR': 64,
		'WOODEN_DOOR_BLOCK': 64,
		'WOOD_DOOR_BLOCK': 64,
		'LADDER': 65,
		'COBBLE_STAIRS': 67,
		'COBBLESTONE_STAIRS': 67,
		'WALL_SIGN': 68,
		'IRON_DOOR_BLOCK': 71,
		'REDSTONE_ORE': 73,
		'GLOWING_REDSTONE_ORE': 74,
		'LIT_REDSTONE_ORE': 74,
		'SNOW': 78,
		'SNOW_LAYER': 78,
		'ICE': 79,
		'SNOW_BLOCK': 80,
		'CACTUS': 81,
		'CLAY_BLOCK': 82,
		'REEDS': 83,
		'SUGARCANE_BLOCK': 83,
		'FENCE': 85,
		'PUMPKIN': 86,
		'NETHERRACK': 87,
		'GLOWSTONE': 89,
		'GLOWSTONE_BLOCK': 89,
		'LIT_PUMPKIN': 91,
		'JACK_O_LANTERN': 91,
		'GLOWING_PUMPKIN': 91,
		'CAKE_BLOCK': 92,
		'INVISIBLE_BEDROCK': 95,
		'TRAPDOOR': 96,
		'STONE_BRICKS': 98,
		'STONE_BRICK': 98,
		'IRON_BAR': 101,
		'IRON_BARS': 101,
		'GLASS_PANE': 102,
		'GLASS_PANEL': 102,
		'MELON_BLOCK': 103,
		'PUMPKIN_STEM': 104,
		'MELON_STEM': 105,
		'FENCE_GATE': 107,
		'BRICK_STAIRS': 108,
		'STONE_BRICK_STAIRS': 109,
		'NETHER_BRICKS': 112,
		'NETHER_BRICK_BLOCK': 112,
		'NETHER_BRICKS_STAIRS': 114,
		'SANDSTONE_STAIRS': 128,
		'SPRUCE_WOOD_STAIRS': 134,
		'SPRUCE_WOODEN_STAIRS': 134,
		'BIRCH_WOOD_STAIRS': 135,
		'BIRCH_WOODEN_STAIRS': 135,
		'JUNGLE_WOOD_STAIRS': 136,
		'JUNGLE_WOODEN_STAIRS': 136,
		'COBBLE_WALL': 139,
		'STONE_WALL': 139,
		'COBBLESTONE_WALL': 139,
		'CARROT_BLOCK': 141,
		'POTATO_BLOCK': 141,
		'QUARTZ_BLOCK': 155,
		'QUARTZ_STAIRS': 156,
		'DOUBLE_WOOD_SLAB': 157,
		'DOUBLE_WOODEN_SLAB': 157,
		'DOUBLE_WOOD_SLABS': 157,
		'DOUBLE_WOODEN_SLABS': 157,
		'WOOD_SLAB': 158,
		'WOODEN_SLAB': 158,
		'WOOD_SLABS': 158,
		'WOODEN_SLABS': 158,
		'HAY_BALE': 170,
		'HAY_BLOCK': 170,
		'CARPET': 171,
		'COAL_BLOCK': 173,
		'BEETROOT_BLOCK': 244,
		'STONECUTTER': 245,
		'GLOWING_OBSIDIAN': 246,
		'NETHER_REACTOR': 247,
		'NETHER_REACTOR_CORE': 247,
		'UPDATE_BLOCK': 248,
		'UPDATE_BLOCK_ATE': 249,
		'NONAME': 255,
		
		// TOOLS
		'IRON_SHOVEL': 256,
		'IRON_PICKAXE': 257,
		'IRON_AXE': 258,
		'FLINT_STEEL': 259,
		'FLINT_AND_STEEL': 259,
		'APPLE': 260,
		'BOW': 261,
		'ARROW': 262,
		'COAL': 263,
		'DIAMOND': 264,
		'IRON_INGOT': 265,
		'GOLD_INGOT': 266,
		'IRON_SWORD': 267,
		'WOODEN_SWORD': 268,
		'WOODEN_SHOVEL': 269,
		'WOODEN_PICKAXE': 270,
		'WOODEN_AXE': 271,
		'STONE_SWORD': 272,
		'STONE_SHOVEL': 273,
		'STONE_PICKAXE': 274,
		'STONE_AXE': 275,
		'DIAMOND_SWORD': 276,
		'DIAMOND_SHOVEL': 277,
		'DIAMOND_PICKAXE': 278,
		'DIAMOND_AXE': 279,
		'STICK': 280,
		'STICKS': 280,
		'BOWL': 281,
		'MUSHROOM_STEW': 282,
		'GOLD_SWORD': 283,
		'GOLDEN_SWORD': 283,
		'GOLD_SHOVEL': 284,
		'GOLDEN_SHOVEL': 284,
		'GOLD_PICKAXE': 285,
		'GOLDEN_PICKAXE': 285,
		'GOLD_AXE': 286,
		'GOLDEN_AXE': 286,
		'STRING': 287,
		'FEATHER': 288,
		'GUNPOWDER': 289,
		'WOODEN_HOE': 290,
		'STONE_HOE': 291,
		'IRON_HOE': 292,
		'DIAMOND_HOE': 293,
		'GOLD_HOE': 294,
		'GOLDEN_HOE': 294,
		'SEEDS': 295,
		'WHEAT_SEEDS': 295,
		'WHEAT': 296,
		'BREAD': 297,
		'LEATHER_CAP': 298,
		'LEATHER_TUNIC': 299,
		'LEATHER_PANTS': 300,
		'LEATHER_BOOTS': 301,
		'CHAIN_HELMET': 302,
		'CHAIN_CHESTPLATE': 303,
		'CHAIN_LEGGINGS': 304,
		'CHAIN_BOOTS': 305,
		'IRON_HELMET': 306,
		'IRON_CHESTPLATE': 307,
		'IRON_LEGGINGS': 308,
		'IRON_BOOTS': 309,
		'DIAMOND_HELMET': 310,
		'DIAMOND_CHESTPLATE': 311,
		'DIAMOND_LEGGINGS': 312,
		'DIAMOND_BOOTS': 313,
		'GOLD_HELMET': 314,
		'GOLD_CHESTPLATE': 315,
		'GOLD_LEGGINGS': 316,
		'GOLD_BOOTS': 317,
		'FLINT': 318,
		'RAW_PORKCHOP': 319,
		'COOKED_PORKCHOP': 320,
		'PAINTING': 321,
		'GOLDEN_APPLE': 322,
		'SIGN': 323,
		'WOODEN_DOOR': 324,
		'BUCKET': 325,
		'MINECART': 328,
		'SADDLE': 329,
		'IRON_DOOR': 330,
		'REDSTONE': 331,
		'REDSTONE_DUST': 331,
		'SNOWBALL': 332,
		'BOAT': 333,
		'LEATHER': 334,
		'BRICK': 336,
		'CLAY': 337,
		'SUGARCANE': 338,
		'SUGAR_CANE': 338,
		'SUGAR_CANES': 338,
		'PAPER': 339,
		'BOOK': 340,
		'SLIMEBALL': 341,
		'EGG': 344,
		'COMPASS': 345,
		'CLOCK': 347,
		'GLOWSTONE_DUST': 348,
		'DYE': 351,
		'BONE': 352,
		'SUGAR': 353,
		'CAKE': 354,
		'BED': 355,
		'SHEARS': 359,
		'MELON': 360,
		'MELON_SLICE': 360,
		'PUMPKIN_SEEDS': 361,
		'MELON_SEEDS': 362,
		'RAW_BEEF': 363,
		'STEAK': 364,
		'COOKED_BEEF': 364,
		'RAW_CHICKEN': 365,
		'COOKED_CHICKEN': 366,
		'SPAWN_EGG': 383,
		'CARROT': 391,
		'CARROTS': 391,
		'POTATO': 392,
		'POTATOES': 392,
		'BAKED_POTATO': 393,
		'BAKED_POTATOES': 393,
		'NETHER_BRICK': 405,
		'QUARTZ': 406,
		'NETHER_QUARTZ': 406,
		'CAMERA': 456,
		'BEETROOT': 457,
		'BEETROOT_SEEDS': 458,
		'BEETROOT_SEED': 458,
		'BEETROOT_SOUP': 459
	}
};

// Additional functions
var AppFunctions = {
	'printColourMessage': function(sString) {
		clientMessage(ChatColor.GRAY + '[' + ChatColor.RED + AppInfo.shortName + ChatColor.GRAY + '] ' + ChatColor.WHITE + sString);
	},
	'printErrorMessage': function(sString) {
		clientMessage(ChatColor.GRAY + '[' + ChatColor.RED + AppInfo.shortName + ChatColor.GRAY + '] ' + ChatColor.RED + sString);
	},
	'showHelp': function(sCommand, sDescription, sUsage, sExample) {
		AppFunctions.printColourMessage('Help for the ' + ChatColor.AQUA + sCommand + ChatColor.WHITE + ' command.');
		AppFunctions.printColourMessage('Description: ' + sDescription + '.');
		AppFunctions.printColourMessage('Syntax: ' + ChatColor.AQUA + '/' + sCommand + ' ' + sUsage);
		AppFunctions.printColourMessage('Example: ' + ChatColor.AQUA + '/' + sCommand + ' ' + sExample);
	}
	'showHelpPage': function(iPage) {
		if(iPage % 1 === 0)
		{
			if(iPage < 1)
				AppFunctions.printErrorMessage('The page number must be above 0!');
			else if(iPage > AppData.helpPages.length)
				AppFunctions.printErrorMessage('The page number must be below ' + (AppData.helpPages.length + 1) + '!');
			else
			{
				AppFunctions.printColourMessage('Showing help page ' + iPage + '/' + AppData.helpPages.length)
				for(var i = 0; i <= 4; i++)
					if(typeof AppData.helpPages[iPage - 1][i] !== 'undefined')
						AppFunctions.printColourMessage(AppData.helpPages[iPage - 1][i]);
			}
		}
		else
			AppFunctions.printErrorMessage('The page number must be a whole number!');
	}
};

// Main functions
function procCmd(command)
{
	var cmd = command.toLowerCase().split(' ');
	switch(cmd[0])
	{
		// /achievement give <stat_name>
		case 'achievement': 
		
			break;
		
		// /clear [item] [data]
		case 'clear':
		
			if(Level.getGameMode() === 1)
				clientMessage(ChatColor.RED + 'Cannot clear the creative inventory');
			else if(Level.getGameMode() === 0)
			{
				var iAmountCleared = 0;
				for(var i = 9; i <= 44; i++)
				{
					if(Player.getInventorySlot(i) !== 0)
					{
						for(var j = 1; j <= Player.getInventorySlotCount(i); j++)
							iAmountCleared++;
						Player.clearInventorySlot(i);
					}
				}
				clientMessage('Cleared the inventory, removing ' + iAmountCleared + (iAmountCleared === 1 ? ' item' : ' items'));
			}
			break;
		
		// Not working on MCPE, or just on android to tell other scripts the debug is enabled with "function onDebug() {}"
		// /debug <start|stop>
		case 'debu'":
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// Not working on MCPE, use "/gamemode" instead, or just on android with editing the config
		// /defaultgamemode <mode>
		case 'defaultgamemode':
		
			print(ChatColor.RED + 'Not working on MCPE! Use "/gamemode [mode]"');
			break;
		
		// Not working on MCPE, or just on android, I'm not sure
		// /difficulty <new difficulty>
		case 'difficulty':
		
			print(ChatColor.RED + 'Not working on MCPE! Change in settings of MCPE!);
			break;
		
		// Not working on MCPE
		// /effect <effect> [seconds] [amplifier]
		case 'effect':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// Not working on MCPE
		// /enchant <enchantmentID> [level]
		case 'enchant':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// /gamemode <mode>
		case 'gamemode':
		
			if(typeof cmd[1] === 'undefined')
			{
				Level.setGameMode(Level.getGameMode() === 0 ? 1 : 0);
				clientMessage('Your game mode has been updated');
			}
			else if(typeof cmd[1] !== 'undefined')
			{
				switch(cmd[1])
				{
					case '0':
					case 's':
					case 'survival':
					
						Level.setGameMode(0);
						clientMessage('Your game mode has been updated');
						break;
					
					case '1':
					case 'c':
					case 'creative':
					
						Level.setGameMode(1);
						clientMessage('Your game mode has been updated');
						break;
				}
			}
			break;
		
		// Not working on MCPE
		// /gamerule <rule name> [value]
		case 'gamerule':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// /give <item> [amount] [data] [dataTag]
		case 'give':
		
			if(Level.getGameMode() === 1)
				clientMessage(ChatColor.RED + 'Cannot use give in creative! Use: "/gamemode 0"');
			else if(Level.getGameMode() === 0)
			{
				if(typeof cmd[1] === 'undefined')
					clientMessage(ChatColor.RED + 'Usage: /give <item> [amount]');
				else if(typeof cmd[1] !== 'undefined')
				{
					if(!parseInt(cmd[1]))
					{
						var iItemID = AppData.giveItems[cmd[1].toUpperCase()];
						var sItemName = cmd[1].toLowerCase();
						
						if(typeof iItemID === 'undefined')
							clientMessage(ChatColor.RED + 'There is no such item with name ' + cmd[1]);
						else
						{
							if(typeof cmd[2] === 'undefined')
							{
								Player.addItemInventory(iItemID, 1);
								clientMessage('Given [' + sItemName + '(ID: ' + iItemID + ')] * 1');
							}
							else if(typeof cmd[2] !== 'undefined' && !parseInt(cmd[2]))
							{
								clientMessage(ChatColor.RED + "'" + cmd[2] + "'" + " is not a valid number");
							}
							else if(typeof cmd[2] !== 'undefined' && parseInt(cmd[2]))
							{
								Player.addItemInventory(iItemID, cmd[2]);
								clientMessage('Given [' + sItemName + '(ID: ' + iItemID + ')] * ' + cmd[2]);
							}
						}
					}
					else if(parseInt(cmd[1]))
					{
						if(typeof cmd[2] === 'undefined')
						{
							Player.addItemInventory(cmd[1], 1);
							clientMessage('Given [' + cmd[1] + '(ID: ' + cmd[1] + ')] * 1');
						}
						else if(typeof cmd[2] !== 'undefined' && !parseInt(cmd[2]))
						{
							clientMessage(ChatColor.RED + '"' + cmd[2] + '"' + ' is not a valid number');
						}
						if(typeof cmd[2] !== 'undefined' && parseInt(cmd[2]))
						{
							Player.addItemInventory(cmd[1], cmd[2]);
							clientMessage('Given [' + cmd[1] + '(ID: ' + cmd[1] + ')] * ' + cmd[2]);
						}
					}
				}
			}
			break;
		
		case '?':
		case 'help':
		
			switch(cmd[1])
			{
				case "asc":
				case "ascend":
				
					AppFunctions.showHelp("ascend", "Ascends the player to the platform above", "", "");
					break;
				
				case "back":
				
					AppFunctions.showHelp("back", "Teleports you to last death point", "", "");
					break;
				/*
				case "bind":
				
					AppFunctions.showHelp("bind", "Binds a command to a GUI button", "<command> [parameters]", "jump");
					break;
				*/
				case "bomb":
				
					AppFunctions.showHelp("bomb", "Explodes a specified location", "<on|off|detonate>", "");
					break;
				
				case "bounce":
				
					AppFunctions.showHelp("bounce", "Launches the player into the air", "[strength]", "3");
					break;
				
				case "cannon":
				
					AppFunctions.showHelp("cannon", "Launches ignited TNT in the direction the player is facing", "", "");
					break;
				
				case "clear":
				case "clearinventory":
				
					AppFunctions.showHelp("clear", "Clears the player's survival inventory", "", "");
					break;
				
				case "commands":
				
					AppFunctions.showHelp("commands", "Lists all avaiable commands", "", "");
					break;
				
				case "coords":
				case "coordinates":
				
					AppFunctions.showHelp("coords", "Shows the player's current coordinates", "[on|off|info]", "");
					break;
				
				case "del":
				case "delete":
				
					AppFunctions.showHelp("delete", "Removes the holding item", "", "");
					break;
				
				case "delhome":
				
					AppFunctions.showHelp("delhome", "Removes the saved home", "", "");
					break;
				
				case "desc":
				case "descend":
				
					AppFunctions.showHelp("descend", "Descends the player to the platform below", "", "");
					break;
				/*
				case "enderpearl":
				
					addonShowHelp("enderpearl", "Teleports you with a 'enderpearl'", "[on|off]", "");
					break;
				*//*
				case "entity":
				
					addonShowHelp("entity", "Do something with the entities in the world", "<kill|burn|explode> <all|type>", "kill pig");
					break;
				*/
				case "eval":
				case "exec":
				
					AppFunctions.showHelp("eval", "Execute own code", "<code>", "clientMessage(\"Hi wazzuuup\");");
					break;
				
				case "explode":
				
					AppFunctions.showHelp("explode", "Sets off an explosion at your location", "[radius]", "10");
					break;
				
				case "f3":
				
					AppFunctions.showHelp("F3", "Shows world and player information", "[on|off]", "");
					break;
				
				case "give":
				
					AppFunctions.showHelp("give", "Gives the player the specified item", "<id|itemname> <quantity>", "diamond 64");
					break;
				
				case "gm":
				case "gamemode":
				
					AppFunctions.showHelp("gamemode", "Changes your gamemode", "[0|s|survival|1|c|creative]", "");
					break;
				
				case "gms":
				
					AppFunctions.showHelp("gms", "Changes your gamemode to survival", "", "");
					break;
				
				case "gms":
				
					AppFunctions.showHelp("gms", "Changes your gamemode to creative", "", "");
					break;
				
				case "heal":
				
					AppFunctions.showHelp("heal", "Heals the player by the specified points", "[quantity]", "20");
					break;
				
				case "health":
				
					AppFunctions.showHelp("health", "Sets the health of the player to pre-defiined figures", "<min|max|infinite|get|set>", "set 100");
					break;
				
				case "home":
				
					AppFunctions.showHelp("home", "Teleports you to your saved home", "", "");
					break;
				
				case "hole":
				
					AppFunctions.showHelp("hole", "Creates a hole underneath you", "", "");
					break;
				
				case "ignite":
				
					AppFunctions.showHelp("ignite", "Sets the player on fire", "[seconds]", "10");
					break;
				
				default:
				
					if(typeof cmd[1] !== "undefined")
					{
						if(parseInt(cmd[1]))
						{
							addonShowHelpPage(cmd[1]);
						}
						else
						{
							addonErrorMessage("Specified command name " + cmd[1] + " does not exist!");
						}
					}
					else
					{
						addonShowHelpPage(1);
					}
					break;
			}
			break;
		
		// /kill
		case 'kill':
		
			Player.setHealth(0);
			clientMessage('You died');
			break;
		
		// /me <action...>
		case 'me':
		
			if(typeof cmd[1] === 'undefined')
				clientMessage(ChatColor.RED + 'Usage: /me <action...[JSON]>');
			else if(typeof cmd[1] !== 'undefined')
				clientMessage('* I ' + cmd[2]);
			break;
		
		// /playsound <sound> [x] [y] [z] [volume] [pitch]
		case 'playsound':
		
			if(typeof cmd[1] === 'undefined')
				clientMessage(ChatColor.RED + 'Usage: /playsound <sound> [x] [y] [z] [volume] [pitch]');
			else if(typeof cmd[1] !== 'undefined')
				Level.playSound(cmd[3], cmd[4], cmd[5], cmd[2], 1, 1);
			break;
		
		// Not working on MCPE! Has to be set in MCPE settings
		// /publish
		case 'publish':
		
			print(ChatColor.RED + 'Not working on MCPE! Change in settings of MCPE!');
			break;
		
		// /say <message...>
		case 'say':
		
			if(typeof cmd[1] === 'undefined')
				clientMessage(ChatColor.RED + 'Usage: /say <message...[JSON]>');
			else if(typeof cmd[1] !== 'undefined')
				clientMessage('[Me] ' + cmd[2]);
			break;
		
		// Not working on MCPE! Or just on Android!
		// /scoreboard ....
		case 'scoreboard':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// Not working on MCPE!
		// /seed
		case 'seed':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// /setblock <x> <y> <z> <TileName> [dataValue] [oldBlockHandling] [dataTag]
		case 'setblock':
		
			print(ChatColor.BLUE + 'Code in development!');
			break;
		
		// /setworldspawn [<x> <y> <z>]
		case 'setworldspawn':
		
			print(ChatColor.BLUE + 'Code in development!');
			break;
		
		// Not working on MCPE!
		// /spawnpoint [player] [<x> <y> <z>]
		case 'spawnpoint':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// /spreadplayers <x> <z> <spreadDistance> <maxRange> <respectTeams true|false> <player ...>
		case 'spreadplayers':
		
			print(ChatColor.BLUE + 'Code in development!');
			break;
		
		// /summon <EntityName> [x] [y] [z] [dataTag]
		case 'summon':
		
			print(ChatColor.BLUE + 'Code in development!');
			break;
		
		// Not working on MCPE! This don't gives sense. Who the hell you want to send a message.
		// /tell <message...>
		case 'tell':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// Not working on MCPE! This don't gives sense. Who the hell you want to send a message.
		// /tellraw <message...>
		case 'tellraw':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// /testfor <player> [dataTag]
		case 'testfor':
		
			print(ChatColor.BLUE + 'Code in development!');
			break;
		
		// /testforblocks <x1> <y1> <z1> <x2> <y2> <z2> <x> <y> <z> [mode]
		case 'testforblocks':
		
			print(ChatColor.BLUE + 'Code in development!');
			break;
		
		// /time <set|add|query> <value>
		case 'time':
		
			print(ChatColor.BLUE + 'Code in development!');
			break;
		
		// Not working on MCPE! Unfortunately ModPE don't support this at the moment
		// /toggledownfall
		case 'toggledownfall':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// /tp <x> <y> <z> [<y-rot> <x-rot>]
		case 'tp':
		
			print(ChatColor.BLUE + 'Code in development!');
			break;
		
		// Not working on MCPE! Unfortunately ModPE don't support this at the moment
		// /weather <clear|rain|thunder> [duration in seconds]
		case 'weather':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		// Not working on MCPE! MCPE isn't using XP at the moment.
		// /xp <amount>
		case 'xp':
		
			print(ChatColor.RED + 'Not working on MCPE!');
			break;
		
		default:
		
			break;
	}
}
function newLevel(hasLevel)
{
	clientMessage(ChatColor.GRAY + '[INFO] ' + ChatColor.WHITE + project + ' loaded');
}
