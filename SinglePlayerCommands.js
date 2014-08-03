/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @version:	v1.0.0
 * @website:	http://store.team-orbitron.com/1000000
 *
 * Testet with:
 * MCPE: v0.9.2
 * BlockLauncher: v1.7
 *
 */

// Project info
var project = "SinglePlayerCommands";
var sname = "[SPC]";
var version = "1.0.0";
var author = "Orbitron";

// Modes
var modeBomb = false;
var modeCoords = false;
var modeEnderpearl = false;
var modeF3 = false;

// Values
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var cmdBack_x = null;
var cmdBack_y = null;
var cmdBack_z = null;
/*var bindCommand = [];
var bindLft = false;
var bindBtn = null;*/
var cmdBomb_set = false;
var cmdBomb_x = null;
var cmdBomb_y = null;
var cmdBomb_z = null;
var cmdCoords_show = false;
var cmdEval_msg = "";
/*var cmdEntity_entities = [];
var cmdEntity_count = 0;*/
var cmdHelp_pages = new Array(
	new Array(
		"/ascend",
		"/back",
		//"/bind <command> [parameters]",
		"/bounce <strenght>",
		"/bomb <on|off|detonate>"),
	new Array(
		"/cannon",
		"/clear",
		"/coords",
		"/delete",
		"/delhome"),
	new Array(
		"/descend",
		//"/enderpearl",
		//"/entity",
		"/eval",
		"/explode"),
	new Array(
		"/f3",
		"/give",
		"/gamemode",
		"/gms",
		"/gmc"),
	new Array(
		"/heal",
		"/health",
		"/home",
		"/hole",
		"/ignite")
);
var mobIDs = {
	"chicken": 10,
	"cow": 11,
	"pig": 12,
	"sheep": 13,
	"wolf": 14,
	"villager": 15,
	"mooshroom": 16,
	"zombie": 32,
	"creeper": 33,
	"skeleton": 34,
	"spider": 35,
	"zombiepigman": 36,
	"zombie_pigman": 36,
	"pigzombie": 36,
	"pigman": 36,
	"slime": 37,
	"enderman": 38,
	"silverfish": 39
};
var nameIDs = {
	// BLOCKS
	"AIR": 0,
	"STONE": 1,
	"GRASS": 2,
	"DIRT": 3,
	"COBBLESTONE": 4,
	"COBBLE": 4,
	"PLANK": 5,
	"PLANKS": 5,
	"WOODEN_PLANK": 5,
	"WOODEN_PLANKS": 5,
	"SAPLING": 6,
	"SAPLINGS": 6,
	"BEDROCK": 7,
	"WATER": 8,
	"STILL_WATER": 9,
	"LAVA": 10,
	"STILL_LAVA": 11,
	"SAND": 12,
	"GRAVEL": 13,
	"GOLD_ORE": 14,
	"IRON_ORE": 15,
	"COAL_ORE": 16,
	"WOOD": 17,
	"TRUNK": 17,
	"LEAVES": 18,
	"LEAVE": 18,
	"SPONGE": 19,
	"GLASS": 20,
	"LAPIS_ORE": 21,
	"LAPIS_BLOCK": 22,
	"SANDSTONE": 24,
	"BED_BLOCK": 26,
	"POWERED_RAIL": 27,
	"COBWEB": 30,
	"TALL_GRASS": 31,
	"BUSH": 32,
	"DEAD_BUSH": 32,
	"WOOL": 35,
	"DANDELION": 37,
	"YELLOW_FLOWER": 37,
	"ROSE": 38,
	"CYAN_FLOWER": 38,
	"BROWN_MUSHROOM": 39,
	"RED_MUSHROOM": 40,
	"GOLD_BLOCK": 41,
	"IRON_BLOCK": 42,
	"DOUBLE_SLAB": 43,
	"DOUBLE_SLABS": 43,
	"SLAB": 44,
	"SLABS": 44,
	"BRICK": 45,
	"BRICK_BLOCK": 45,
	"TNT": 46,
	"BOOKSHELF": 47,
	"MOSS_STONE": 48,
	"MOSSY_STONE": 48,
	"OBSIDIAN": 49,
	"TORCH": 50,
	"FIRE": 51,
	"WOOD_STAIRS": 53,
	"WOODEN_STAIRS": 53,
	"OAK_WOOD_STAIRS": 53,
	"OAK_WOODEN_STAIRS": 53,
	"CHEST": 54,
	"DIAMOND_ORE": 56,
	"DIAMOND_BLOCK": 57,
	"CRAFTING_TABLE": 58,
	"WORKBENCH": 58,
	"WHEAT_BLOCK": 59,
	"SEED_BLOCK": 59,
	"FARMLAND": 60,
	"FURNACE": 61,
	"BURNING_FURNACE": 62,
	"LIT_FURNACE": 62,
	"SIGN_POST": 63,
	"SIGN_BLOCK": 63,
	"DOOR_BLOCK": 64,
	"DOOR": 64,
	"WOODEN_DOOR_BLOCK": 64,
	"WOOD_DOOR_BLOCK": 64,
	"LADDER": 65,
	"COBBLE_STAIRS": 67,
	"COBBLESTONE_STAIRS": 67,
	"WALL_SIGN": 68,
	"IRON_DOOR_BLOCK": 71,
	"REDSTONE_ORE": 73,
	"GLOWING_REDSTONE_ORE": 74,
	"LIT_REDSTONE_ORE": 74,
	"SNOW": 78,
	"SNOW_LAYER": 78,
	"ICE": 79,
	"SNOW_BLOCK": 80,
	"CACTUS": 81,
	"CLAY_BLOCK": 82,
	"REEDS": 83,
	"SUGARCANE_BLOCK": 83,
	"FENCE": 85,
	"PUMPKIN": 86,
	"NETHERRACK": 87,
	"GLOWSTONE": 89,
	"GLOWSTONE_BLOCK": 89,
	"LIT_PUMPKIN": 91,
	"JACK_O_LANTERN": 91,
	"GLOWING_PUMPKIN": 91,
	"CAKE_BLOCK": 92,
	"INVISIBLE_BEDROCK": 95,
	"TRAPDOOR": 96,
	"STONE_BRICKS": 98,
	"STONE_BRICK": 98,
	"IRON_BAR": 101,
	"IRON_BARS": 101,
	"GLASS_PANE": 102,
	"GLASS_PANEL": 102,
	"MELON_BLOCK": 103,
	"PUMPKIN_STEM": 104,
	"MELON_STEM": 105,
	"FENCE_GATE": 107,
	"BRICK_STAIRS": 108,
	"STONE_BRICK_STAIRS": 109,
	"NETHER_BRICKS": 112,
	"NETHER_BRICK_BLOCK": 112,
	"NETHER_BRICKS_STAIRS": 114,
	"SANDSTONE_STAIRS": 128,
	"SPRUCE_WOOD_STAIRS": 134,
	"SPRUCE_WOODEN_STAIRS": 134,
	"BIRCH_WOOD_STAIRS": 135,
	"BIRCH_WOODEN_STAIRS": 135,
	"JUNGLE_WOOD_STAIRS": 136,
	"JUNGLE_WOODEN_STAIRS": 136,
	"COBBLE_WALL": 139,
	"STONE_WALL": 139,
	"COBBLESTONE_WALL": 139,
	"CARROT_BLOCK": 141,
	"POTATO_BLOCK": 141,
	"QUARTZ_BLOCK": 155,
	"QUARTZ_STAIRS": 156,
	"DOUBLE_WOOD_SLAB": 157,
	"DOUBLE_WOODEN_SLAB": 157,
	"DOUBLE_WOOD_SLABS": 157,
	"DOUBLE_WOODEN_SLABS": 157,
	"WOOD_SLAB": 158,
	"WOODEN_SLAB": 158,
	"WOOD_SLABS": 158,
	"WOODEN_SLABS": 158,
	"HAY_BALE": 170,
	"HAY_BLOCK": 170,
	"CARPET": 171,
	"COAL_BLOCK": 173,
	"BEETROOT_BLOCK": 244,
	"STONECUTTER": 245,
	"GLOWING_OBSIDIAN": 246,
	"NETHER_REACTOR": 247,
	"NETHER_REACTOR_CORE": 247,
	"UPDATE_BLOCK": 248,
	"UPDATE_BLOCK_ATE": 249,
	"NONAME": 255,
	
	// TOOLS
	"IRON_SHOVEL": 256,
	"IRON_PICKAXE": 257,
	"IRON_AXE": 258,
	"FLINT_STEEL": 259,
	"FLINT_AND_STEEL": 259,
	"APPLE": 260,
	"BOW": 261,
	"ARROW": 262,
	"COAL": 263,
	"DIAMOND": 264,
	"IRON_INGOT": 265,
	"GOLD_INGOT": 266,
	"IRON_SWORD": 267,
	"WOODEN_SWORD": 268,
	"WOODEN_SHOVEL": 269,
	"WOODEN_PICKAXE": 270,
	"WOODEN_AXE": 271,
	"STONE_SWORD": 272,
	"STONE_SHOVEL": 273,
	"STONE_PICKAXE": 274,
	"STONE_AXE": 275,
	"DIAMOND_SWORD": 276,
	"DIAMOND_SHOVEL": 277,
	"DIAMOND_PICKAXE": 278,
	"DIAMOND_AXE": 279,
	"STICK": 280,
	"STICKS": 280,
	"BOWL": 281,
	"MUSHROOM_STEW": 282,
	"GOLD_SWORD": 283,
	"GOLDEN_SWORD": 283,
	"GOLD_SHOVEL": 284,
	"GOLDEN_SHOVEL": 284,
	"GOLD_PICKAXE": 285,
	"GOLDEN_PICKAXE": 285,
	"GOLD_AXE": 286,
	"GOLDEN_AXE": 286,
	"STRING": 287,
	"FEATHER": 288,
	"GUNPOWDER": 289,
	"WOODEN_HOE": 290,
	"STONE_HOE": 291,
	"IRON_HOE": 292,
	"DIAMOND_HOE": 293,
	"GOLD_HOE": 294,
	"GOLDEN_HOE": 294,
	"SEEDS": 295,
	"WHEAT_SEEDS": 295,
	"WHEAT": 296,
	"BREAD": 297,
	"LEATHER_CAP": 298,
	"LEATHER_TUNIC": 299,
	"LEATHER_PANTS": 300,
	"LEATHER_BOOTS": 301,
	"CHAIN_HELMET": 302,
	"CHAIN_CHESTPLATE": 303,
	"CHAIN_LEGGINGS": 304,
	"CHAIN_BOOTS": 305,
	"IRON_HELMET": 306,
	"IRON_CHESTPLATE": 307,
	"IRON_LEGGINGS": 308,
	"IRON_BOOTS": 309,
	"DIAMOND_HELMET": 310,
	"DIAMOND_CHESTPLATE": 311,
	"DIAMOND_LEGGINGS": 312,
	"DIAMOND_BOOTS": 313,
	"GOLD_HELMET": 314,
	"GOLD_CHESTPLATE": 315,
	"GOLD_LEGGINGS": 316,
	"GOLD_BOOTS": 317,
	"FLINT": 318,
	"RAW_PORKCHOP": 319,
	"COOKED_PORKCHOP": 320,
	"PAINTING": 321,
	"GOLDEN_APPLE": 322,
	"SIGN": 323,
	"WOODEN_DOOR": 324,
	"BUCKET": 325,
	"MINECART": 328,
	"SADDLE": 329,
	"IRON_DOOR": 330,
	"REDSTONE": 331,
	"REDSTONE_DUST": 331,
	"SNOWBALL": 332,
	"BOAT": 333,
	"LEATHER": 334,
	"BRICK": 336,
	"CLAY": 337,
	"SUGARCANE": 338,
	"SUGAR_CANE": 338,
	"SUGAR_CANES": 338,
	"PAPER": 339,
	"BOOK": 340,
	"SLIMEBALL": 341,
	"EGG": 344,
	"COMPASS": 345,
	"CLOCK": 347,
	"GLOWSTONE_DUST": 348,
	"DYE": 351,
	"BONE": 352,
	"SUGAR": 353,
	"CAKE": 354,
	"BED": 355,
	"SHEARS": 359,
	"MELON": 360,
	"MELON_SLICE": 360,
	"PUMPKIN_SEEDS": 361,
	"MELON_SEEDS": 362,
	"RAW_BEEF": 363,
	"STEAK": 364,
	"COOKED_BEEF": 364,
	"RAW_CHICKEN": 365,
	"COOKED_CHICKEN": 366,
	"SPAWN_EGG": 383,
	"CARROT": 391,
	"CARROTS": 391,
	"POTATO": 392,
	"POTATOES": 392,
	"BAKED_POTATO": 393,
	"BAKED_POTATOES": 393,
	"NETHER_BRICK": 405,
	"QUARTZ": 406,
	"NETHER_QUARTZ": 406,
	"CAMERA": 456,
	"BEETROOT": 457,
	"BEETROOT_SEEDS": 458,
	"BEETROOT_SEED": 458,
	"BEETROOT_SOUP": 459
}

// Main functions
function useItem(x, y, z, itemId, blockId, side)
{
	if(modeBomb === true)
	{
		if(itemId === 280) // stick
		{
			cmdBomb_x = x;
			cmdBomb_y = y;
			cmdBomb_z = z;
			cmdBomb_set = true;
			addonColourMessage("Set bomb at x: " + cmdBomb_x + " y: " + cmdBomb_y + " z: " + cmdBomb_z);
		}
	}
	/*if(modeEnderpearl === true)
	{
		if(itemId == 332) // snowball
		{
			Entity.setPosition(Player.getEntity(), x ,y + 3, z);
			Player.addItemInventory(322, 1);
		}
	}*/
}
function modTick()
{
	if(modeCoords === true)
	{
		addonCoords();
	}
	if(modeF3 === true)
	{
		var x = Math.round(Player.getX() * 1000) / 1000;
		var y = Math.round(Player.getY() * 1000) / 1000;
		var z = Math.round(Player.getZ() * 1000) / 1000;
		var xx = Math.floor(x + 1);
		var yy = Math.round((Math.round(y * 1000) / 1000 + 0.620) * 1000) / 1000;
		var zz = Math.floor(z + 1);
		clientMessage("--World Info--");
		clientMessage("WorldName: " + Level.getWorldName());
		clientMessage("WorldDir: " + Level.getWorldDir());
		clientMessage("GameMode: " + (Level.getGameMode() === 0 ? "Survival" : "Creative"));
		clientMessage(" ");
		clientMessage("--Player Info--");
		clientMessage("x: " + x + " (" + xx + ")");
		clientMessage("y: " + y + " (feet pos, " + yy + " eyes pos)");
		clientMessage("z: " + z + " (" + zz + ")");
		clientMessage("CarriedItem: " + Player.getCarriedItem() + " Count: " + Player.getCarriedItemCount() + " Damage: " + Player.getCarriedItemData());
	}
}
function procCmd(command)
{
	var cmd = command.toLowerCase().split(" ");
	switch(cmd[0])
	{
		case "help":
		case "?":
		
			switch(cmd[1])
			{
				case "asc":
				case "ascend":
				
					addonShowHelp("ascend", "Ascends the player to the platform above", "", "");
					break;
				
				case "back":
				
					addonShowHelp("back", "Teleports you to last death point", "", "");
					break;
				/*
				case "bind":
				
					addonShowHelp("bind", "Binds a command to a GUI button", "<command> [parameters]", "jump");
					break;
				*/
				case "bomb":
				
					addonShowHelp("bomb", "Explodes a specified location", "<on|off|detonate>", "");
					break;
				
				case "bounce":
				
					addonShowHelp("bounce", "Launches the player into the air", "[strength]", "3");
					break;
				
				case "cannon":
				
					addonShowHelp("cannon", "Launches ignited TNT in the direction the player is facing", "", "");
					break;
				
				case "clear":
				case "clearinventory":
				
					addonShowHelp("clear", "Clears the player's survival inventory", "", "");
					break;
				
				case "commands":
				
					addonShowHelp("commands", "Lists all avaiable commands", "", "");
					break;
				
				case "coords":
				case "coordinates":
				
					addonShowHelp("coords", "Shows the player's current coordinates", "[on|off|info]", "");
					break;
				
				case "del":
				case "delete":
				
					addonShowHelp("delete", "Removes the holding item", "", "");
					break;
				
				case "delhome":
				
					addonShowHelp("delhome", "Removes the saved home", "", "");
					break;
				
				case "desc":
				case "descend":
				
					addonShowHelp("descend", "Descends the player to the platform below", "", "");
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
				
					addonShowHelp("eval", "Execute own code", "<code>", "clientMessage(\"Hi wazzuuup\");");
					break;
				
				case "explode":
				
					addonShowHelp("explode", "Sets off an explosion at your location", "[radius]", "10");
					break;
				
				case "f3":
				
					addonShowHelp("F3", "Shows world and player information", "[on|off]", "");
					break;
				
				case "give":
				
					addonShowHelp("give", "Gives the player the specified item", "<id|itemname> <quantity>", "diamond 64");
					break;
				
				case "gm":
				case "gamemode":
				
					addonShowHelp("gamemode", "Changes your gamemode", "[0|s|survival|1|c|creative]", "");
					break;
				
				case "gms":
				
					addonShowHelp("gms", "Changes your gamemode to survival", "", "");
					break;
				
				case "gms":
				
					addonShowHelp("gms", "Changes your gamemode to creative", "", "");
					break;
				
				case "heal":
				
					addonShowHelp("heal", "Heals the player by the specified points", "[quantity]", "20");
					break;
				
				case "health":
				
					addonShowHelp("health", "Sets the health of the player to pre-defiined figures", "<min|max|infinite|get|set>", "set 100");
					break;
				
				case "home":
				
					addonShowHelp("home", "Teleports you to your saved home", "", "");
					break;
				
				case "hole":
				
					addonShowHelp("hole", "Creates a hole underneath you", "", "");
					break;
				
				case "ignite":
				
					addonShowHelp("ignite", "Sets the player on fire", "[seconds]", "10");
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
		
		case "asc":
		case "ascend":
		
			var x = Player.getX();
			var y = Math.floor(Player.getY());
			var z = Player.getZ();
			for(i = 1; i <= 128; i++)
			{
				var floor = (Math.floor(Player.getY()) - 2) + i;
				if(Level.getTile(x, floor, z) !== 0 && Level.getTile(x, floor + 1, z) === 0 && Level.getTile(x, floor + 2, z) === 0)
				{
					Entity.setPosition(Player.getEntity(), x, floor + 3, z);
				}
			}
			var difference = Math.floor(Player.getY()) - y;
			addonColourMessage("You ascended " + ChatColor.AQUA + difference + ChatColor.WHITE + " blocks");
			break;
		
		case "back":
		
			if(cmdBack_x === null || cmdBack_y === null || !cmdBack_z === null)
			{
				addonErrorMessage("No death point set");
			}
			else if(cmdBack_x !== null || cmdBack_y !== null || !cmdBack_z !== null)
			{
				Entity.setPosition(Player.getEntity, cmdBack_x, cmdBack_y, cmdBack_z);
				addonColourMessage("Teleported to death point");
			}
			break;
		/*
		case "bind":
		
			bindLft = false;
			if(typeof cmd[1] === "undefined")
			{
				addonErrorMessage("Not enough parameters");
			}
			else if(cmd[1] === "bind" || cmd[1] === "lbind")
			{
				addonErrorMessage("Cannot bind itself");
			}
			else if(cmd[1] !== "bind" || cmd[1] !== "lbind")
			{
				dismissBind();
				bindCommand = [];
				for(i = 1; i <= cmd.length; i++)
				{
					bindCommand.push(cmd[i]);
				}
				showBind();
				clientMessage("Binded §b" + cmd[1] + "§f.");
			}
			break;
		*/
		case "bomb":
		
			if(typeof cmd[1] === "undefined")
			{
				modeBomb = !modeBomb;
				addonColourMessage("Bomb detonation mode is now "+ ChatColor.AQUA + (modeBomb ? "on" : "off"));
			}
			if(typeof cmd[1] !== "undefined")
			{
				switch(cmd[1])
				{
					case "on":
					
						if(modeBomb === true)
						{
							addonErrorMessage("Bomb detonation mode is already on");
						}
						if(modeBomb === false)
						{
							modeBomb = true;
							Player.addItemInventory(280, 1);
							addonColourMessage("Bomb detonation mode has been turned on");
						}
						break;
					
					case "off":
					
						if(modeBomb === false)
						{
							addonErrorMessage("Bomb detonation mode is already off");
						}
						if(modeBomb === true)
						{
							modeBomb = false;
							Player.addItemInventory(280, -1);
							addonColourMessage("Bomb detonation mode has been turned off");
						}
						break;
					
					case "detonate":
					
						if(modeBomb === false)
						{
							addonErrorMessage("Bomb detonation mode is off");
						}

						if(modeBomb === true)
						{
							if(cmdBomb_set == false)
							{
								addonErrorMessage("Set a bomb first");
							}
							if(cmdBomb_set == true)
							{
								Level.explode(cmdBomb_x, cmdBomb_y, cmdBomb_z, 5);
								cmdBomb_set = false;
								addonColourMessage("Bomb detonated;");
							}
						}
						break;
				}
			}
			break;
		
		case "bounce":
		
			if(typeof cmd[1] === "undefined")
			{
				Entity.setVelY(Player.getEntity(), 5 / 3);
			}
			else if(!parseInt(cmd[1]))
			{
				addonErrorMessage("The strength must be a number");
			}
			else if(parseInt(cmd[1]))
			{
				Entity.setVelY(Player.getEntity(), cmd[1] / 3);
			}
			break;
		
		case "cannon":
		
			var yaw = Entity.getYaw(Player.getEntity());
			var pitch = Entity.getPitch(Player.getEntity());
			var velY = Math.sin((pitch - 180) / 180 * Math.PI);
			var velX = Math.sin(yaw / 180 * Math.PI) * Math.cos((pitch - 180) / 180 * Math.PI);
			var velZ = -1 * Math.cos(yaw / 180 * Math.PI) * Math.cos((pitch - 180) / 180 * Math.PI);
			var entity = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 65);
			Entity.setVelX(entity, velX);
			Entity.setVelY(entity, velY);
			Entity.setVelZ(entity, velZ);
			break;
		
		case "clear":
		case "clearinventory":
		
			if(Level.getGameMode() === 1)
			{
				addonErrorMessage("Cannot clear the creative inventory");
			}
			else if(Level.getGameMode() === 0)
			{
				var amount = 0;
				for(i = 9; i <= 44; i++)
				{
					if(Player.getInventorySlot(i) !== 0)
					{
						for(j = 1; j <= Player.getInventorySlotCount(i); j++)
						{
							amount++;
						}
						Player.clearInventorySlot(i);
					}
				}
				addonColourMessage("Cleared " + ChatColor.AQUA + amount + ChatColor.WHITE + (amount === 1 ? " item" : " items"));
			}
			break;
		
		case "commands":
		
			addonCommands();
			break;
		
		case "coords":
		case "coordinates":
		
			if(typeof cmd[1] === "undefined")
			{
				modeCoords = !modeCoords;
				addonColourMessage("Showing coordinates is now " + ChatColor.AQUA + (modeCoords ? "on" : "off"));
				if(modeCoords === false)
				{
					addonDismissCoords();
				}
			}
			if(typeof cmd[1] !== "undefined")
			{
				switch(cmd[1])
				{
					case "on":
					
						if(modeCoords === true)
						{
							addonErrorMessage("Showing coordinates mode is already on");
						}
						if(modeCoords === false)
						{
							modeCoords = true;
							addonColourMessage("Showing coordinates mode has been turned on");
						}
						break;
					
					case "off":
					
						if(modeCoords === false)
						{
							addonErrorMessage("Showing coordinates mode is already off");
						}
						if(modeCoords === true)
						{
							modeCoords = false;
							addonDismissCoords();
							addonColourMessage("Showing coordinates mode has been turned off");
						}
						break;
					
					case "info":
					
						addonColourMessage("Current coordinates are:");
						addonColourMessage("x: " + Math.floor(Player.getX()));
						addonColourMessage("y: " + Math.floor(Player.getY() - 1));
						addonColourMessage("z: " + Math.floor(Player.getZ()));
						break;
				}
			}
			break;
		
		case "del":
		case "delete":
		
			Player.clearInventorySlot(Player.getSelectedSlotId());
			addonColourMessage("Deleted holding item");
			break;
		
		case "delhome":
		
			if(typeof ModPE.readData("cmdHome_data") === "undefined")
			{
				addonErrorMessage("No home is set");
			}
			if(typeof ModPE.readData("cmdHome_data") !== "undefined")
			{
				ModPE.removeData("cmdHome_data");
				addonColourMessage("Home successfully deleted");
			}
			break;
		
		case "desc":
		case "descend":
		
			var x = Player.getX();
			var y = Math.floor(Player.getY());
			var z = Player.getZ();
			for(i = -1; i <= -128; i++)
			{
				var floor = (Math.floor(Player.getY()) - 2) + i;
				if(Level.getTile(x, floor, z) !== 0 && Level.getTile(x, floor + 1, z) === 0 && Level.getTile(x, floor + 2, z) === 0)
				{
					Entity.setPosition(Player.getEntity(), x, floor + 3, z);
				}
			}
			var difference = Math.floor(Player.getY()) - y;
			addonColourMessage("You descended " + ChatColor.AQUA + difference + ChatColor.WHITE + " blocks");
			break;
		/*
		case "enderpearl":
		
			if(typeof cmd[1] === "undefined")
			{
				modeEnderpearl = !modeEnderpearl;
				addonColourMessage("Ender pearl mode is now "+ ChatColor.AQUA + (modeEnderpearl ? "on" : "off"));
				if(modeEnderpearl === true)
				{
					Player.addItemInventory(332, 1);
				}
				if(modeEnderpearl === false)
				{
					Player.addItemInventory(332, -1);
				}
			}
			if(typeof cmd[1] !== "undefined")
			{
				switch(cmd[1])
				{
					case "on":
					
						if(modeEnderpearl === true)
						{
							addonErrorMessage("Ender pearl mode is already on");
						}
						if(modeEnderpearl === false)
						{
							modeEnderpearl = true;
							Player.addItemInventory(332, 1);
							addonColourMessage("Ender pearl mode has been turned on");
						}
						break;
					
					case "off":
					
						if(modeEnderpearl === false)
						{
							addonErrorMessage("Ender pearl mode is already off");
						}
						if(modeEnderpearl === true)
						{
							modeEnderpearl = false;
							Player.addItemInventory(332, -1);
							addonColourMessage("Ender pearl mode has been turned off");
						}
						break;
				}
			}
			break;
		*//*
		case "entity": // I have to get all entities in "cmdEntity_entities[]"
		
			if(typeof cmd[1] === "undefined" || typeof cmd[2] === "undefined")
			{
				addonErrorMessage("Not enough parameters");
			}
			else if(typeof cmd[1] !== "undefined" || typeof cmd[2] !== "undefined")
			{
				if(cmd[2].toLowerCase() != "all")
				{
					var entityMobID = mobIDs[cmd[2].toLowerCase()];
				}
				switch(cmd[1])
				{
					case "kill":
					case "remove":
					
						if(cmd[2] == "all")
						{
							for(i = 0; i < cmdEntity_entities.lenght; i++)
							{
								Entity.remove(cmdEntity_entities[i]);
								cmdEntity_count++;
							}
						}
						else
						{
							for(i = 0; i < cmdEntity_entities.lenght; i++)
							{
								if(Entity.getEntityTypeId(cmdEntity_entities[i]) == entityMobID)
								{
									Entity.remove(cmdEntity_entities[i]);
									cmdEntity_count++;
								}
							}
						}
						addonColourMessage("Removed " + cmdEntity_count + " cmdEntity_entities");
						break;
					
					case "burn":
					
						if(cmd[2] == "all")
						{
							for(i = 0; i < cmdEntity_entities.lenght; i++)
							{
								Entity.setFireTicks(cmdEntity_entities[i], 10);
								cmdEntity_count++;
							}
						}
						else
						{
							for(i = 0; i < cmdEntity_entities.lenght; i++)
							{
								if(Entity.getEntityTypeId(cmdEntity_entities[i]) == entityMobID)
								{
									Entity.setFireTicks(cmdEntity_entities[i], 10);
									cmdEntity_count++;
								}
							}
						}
						addonColourMessage("Cooked " + cmdEntity_count + " entities");
						break;
					
					case "explode":
					
						if(cmd[2] == "all")
						{
							for(i = 0; i < cmdEntity_entities.lenght; i++)
							{
								Level.explode(Entity.getX(cmdEntity_entities[i]), Entity.getY(cmdEntity_entities[i]), Entity.getZ(cmdEntity_entities[i]), 3);
								cmdEntity_count++;
							}
						}
						else
						{
							for(i = 0; i < cmdEntity_entities.lenght; i++)
							{
								if(Entity.getEntityTypeId(cmdEntity_entities[i]) == entityMobID)
								{
									Level.explode(Entity.getX(cmdEntity_entities[i]), Entity.getY(cmdEntity_entities[i]), Entity.getZ(cmdEntity_entities[i]), 3);
									cmdEntity_count++;
								}
							}
						}
						addonColourMessage("Exploded " + cmdEntity_count + " entities");
						break;
				}
				cmdEntity_entities = [];
				cmdEntity_count = 0;
			}
			break;
		*/
		case "eval":
		case "exec":
		
			cmdEval_msg = "";
			for(i = 1; i <= cmd.length; i++)
			{
				cmdEval_msg += cmd[i] + " ";
			}
			eval(cmdEval_msg);
			break;
		
		case "explode":
		
			if(typeof cmd[1] === "undefined")
			{
				Level.explode(Player.getX(), Player.getY(), Player.getZ(), 5);
			}
			else if(typeof cmd[1] !== "undefined" && !parseInt(cmd[1]))
			{
				addonErrorMessage("The radius must be a number");
			}
			else if(typeof cmd[1] !== "undefined" && parseInt(cmd[1]))
			{
				Level.explode(Player.getX(), Player.getY(), Player.getZ(), cmd[1]);
			}
			break;
		
		case "f3":
		
			if(typeof cmd[1] === "undefined")
			{
				modeF3 = !modeF3;
				addonColourMessage("F3 mode is now " + ChatColor.AQUA + (modeF3 ? "on" : "off"));
			}
			if(typeof cmd[1] !== "undefined")
			{
				switch(cmd[1])
				{
					case "on":
					
						if(modeF3 === true)
						{
							addonErrorMessage("F3 mode is already on");
						}
						if(modeF3 === false)
						{
							modeF3 = true;
							addonColourMessage("F3 mode has been turned on");
						}
						break;
					
					case "off":
					
						if(modeF3 === false)
						{
							addonErrorMessage("F3 mode is already off");
						}
						if(modeF3 === true)
						{
							modeF3 = false;
							addonColourMessage("F3 mode has been turned off");
						}
						break;
				}
			}
			break;
		
		case "give":
		
			if(Level.getGameMode() === 1)
			{
				addonErrorMessage("You must be in survival (/gm 0)");
			}
			if(Level.getGameMode() === 0)
			{
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
		
		case "gm":
		case "gamemode":
		
			if(typeof cmd[1] === "undefined")
			{
				Level.setGameMode(Level.getGameMode() === 0 ? 1 : 0);
				addonColourMessage("Gamemode changed to " + ChatColor.AQUA + (Level.getGameMode() === 0 ? "survival" : "creative"));
			}
			if(typeof cmd[1] !== "undefined")
			{
				switch(cmd[1])
				{
					case 0:
					case "0":
					case "s":
					case "survival":
					
						Level.setGameMode(0);
						addonColourMessage("Gamemode changed to survival");
						break;
					
					case 1:
					case "1":
					case "c":
					case "creative":
					
						Level.setGameMode(1);
						addonColourMessage("Gamemode changed to creative");
						break;
				}
			}
			break;
		
		case "gms":
		
			Level.setGameMode(0);
			addonColourMessage("Gamemode changed to survival");
			break;
		
		case "gmc":
		
			Level.setGameMode(1);
			addonColourMessage("Gamemode changed to creative");
			break;
		
		case "heal":
		
			if(typeof cmd[1] === "undefined")
			{
				addonColourMessage("Healed you by " + ChatColor.AQUA + (20 - Entity.getHealth(Player.getEntity())) + ChatColor.WHITE + " half-hearts");
				Player.setHealth(20);
			}
			if(typeof cmd[1] !== "undefined" && !parseInt(cmd[1]))
			{
				addonErrorMessage("The quantity must be a number");
			}
			if(typeof cmd[1] !== "undefined" && parseInt(cmd[1]))
			{
				Player.setHealth(Entity.getHealth(Player.getEntity()) + cmd[1]);
				addonColourMessage("Healed you by " + ChatColor.AQUA + cmd[1] + ChatColor.WHITE + " half-hearts");
			}
			break;
		
		case "health":
		
			if(typeof cmd[1] === "undefined")
			{
				addonErrorMessage("Not enough parameters");
			}
			if(typeof cmd[1] !== "undefined")
			{
				switch(cmd[1])
				{
					case "min":
					
						Player.setHealth(1);
						addonColourMessage("You health is now " + ChatColor.AQUA + "1" + ChatColor.WHITE + " half-heart");
						break;
					
					case "max":
					
						Player.setHealth(20);
						addonColourMessage("You health is now " + ChatColor.AQUA + "20" + ChatColor.WHITE + " half-hearts");
						break;
					
					case "infinite":
					
						Player.setHealth(32767);
						addonColourMessage("You health is now " + ChatColor.AQUA + "32767" + ChatColor.WHITE + " half-hearts");
						break;
					
					case "set":
					
						if(typeof cmd[2] === "undefined")
						{
							addonErrorMessage("You must specify the amount of half-hearts");
						}
						if(typeof cmd[2] !== "undefined" && !parseInt(cmd[2]))
						{
							addonErrorMessage("Your specified health must be a number");
						}
						if(typeof cmd[2] !== "undefined" && parseInt(cmd[2]))
						{
							Player.setHealth(cmd[2]);
							addonColourMessage("Health set to " + ChatColor.AQUA + cmd[2] + ChatColor.WHITE + " half-hearts");
						}
						break;
					
					case "get":
					
						addonColourMessage("Your health is " + ChatColor.AQUA + Entity.getHealth(Player.getEntity()) + ChatColor.WHITE + " half-hearts");
						break;
				}
			}
			break;
		
		case "home":
		
			if(typeof ModPE.readData("cmdHome_data") === "undefined")
			{
				addonErrorMessage("No home has been set");
			}
			if(typeof ModPE.readData("cmdHome_data") !== "undefined")
			{
				Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("cmdHome_x")) + 0.5, parseInt(ModPE.readData("cmdHome_y")) + 3, parseInt(ModPE.readData("cmdHome_z")) + 0.5);
				addonColourMessage("Teleported to home");
			}
			break;
		
		case "hole":
		
			for(y = 0; y <= 128; y++)
			{
				for(x = -1; x <= 1; x++)
				{
					for(z = -1; z <= 1; z++)
					{
						Level.setTile(Math.floor(Player.getX()) + x, y, Math.floor(Player.getZ()) + z, 0);
					}
				}
			}
			clientMessage("Goodbye world :(");
			break;
		
		case "ignite":
		
			if(typeof cmd[1] === "undefined")
			{
				Entity.setFireTicks(Player.getEntity(), 5);
				addonColourMessage("Cooking you for " + ChatColor.AQUA + "5" + ChatColor.WHITE + " seconds");
			}
			if(typeof cmd[1] !== "undefined" && !parseInt(cmd[1]))
			{
				addonErrorMessage("The quantity must be a number");
			}
			if(typeof cmd[1] !== "undefined" && parseInt(cmd[1]))
			{
				Entity.setFireTicks(Player.getEntity(), cmd[1]);
				addonColourMessage("Cooking you for " + ChatColor.AQUA + cmd[1] + ChatColor.WHITE + " seconds");
			}
			break;
		
		case "spc":
		
			if(typeof cmd[1] === "undefined")
			{
				addonColourMessage("Available sub commands:");
				addonColourMessage(ChatColor.AQUA + "/spc about");
			}
			if(typeof cmd[1] !== "undefined")
			{
				switch(cmd[1])
				{
					case "about":
					
						addonAbout();
						break;
				}
			}
			break;
		
	}
}
function newLevel()
{
	addonColourMessage("SinglePlayerCommands loaded");
}
function leaveGame()
{
	if(modeBomb === true)
	{
		modeBomb = false;
	}
	if(modeCoords === true)
	{
		modeCoords = false;
		cmdCoords_show = false;
	}
	if(modeEnderpearl === true)
	{
		modeEnderpearl = false;
	}
	if(modeF3 === true)
	{
		modeF3 = false;
	}
}

// Additional functions
function addonColourMessage(string)
{
	clientMessage(ChatColor.GRAY + "["+ ChatColor.RED + "SPC" + ChatColor.GRAY +"] " + ChatColor.WHITE + string);
}
function addonErrorMessage(string)
{
	clientMessage(ChatColor.GRAY + "["+ ChatColor.RED + "SPC" + ChatColor.GRAY +"] " + ChatColor.RED + string);
}
function addonShowHelp(command, description, usage, example)
{
	addonColourMessage("Help for the " + ChatColor.AQUA + command + ChatColor.WHITE + " command.");
	addonColourMessage("Description: " + description + ".");
	addonColourMessage("Syntax: " + ChatColor.AQUA + "/" + command + " " + usage);
	addonColourMessage("Example: " + ChatColor.AQUA + "/" + command + " " + example);
}
function addonShowHelpPage(page)
{
	if(page % 1 === 0)
	{
		if(page < 1)
		{
			addonErrorMessage("The page number must be above 0!");
		}
		else if(page > cmdHelp_pages.length)
		{
			addonErrorMessage("The page number must be below " + (cmdHelp_pages.length + 1) + "!");
		}
		else
		{
			addonColourMessage("Showing help page " + page + "/" + cmdHelp_pages.length)
			for(i = 0; i <= 4; i++)
			{
				if(typeof cmdHelp_pages[page - 1][i] !== "undefined")
				{
					addonColourMessage(cmdHelp_pages[page - 1][i]);
				}
			}
		}
	}
	else
	{
		addonErrorMessage("The page number must be a whole number!")
	}
}
function dip2px(ctx, dips)
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
/*
function showBind()
{
	ctx.runOnUiThread(new java.lang.Runnable()
	{
		run: function ()
		{
			try
			{
				var btn = new android.widget.Button(ctx);
				btn.setText(bindCommand[0].toUpperCase());
				btn.setTextColor(android.graphics.Color.CYAN);
				btn.setOnClickListener(new android.view.View.OnClickListener()
				{
					onClick: function ()
					{
						try
						{
							procCmd(bindCommand);
						} catch(err) {
							print("\nCannot execute " + ChatColor.AQUA + bindCommand);
						}
						
					}
				});
				bindBtn = new android.widget.PopupWindow(btn, android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
				if(bindLft)
				{
					bindBtn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.LEFT, dip2px(ctx, 85), dip2px(ctx, 85));
				}
				else
				{
					bindBtn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, dip2px(ctx, 85), dip2px(ctx, 85));
				}
			} catch (e) {
				print(e);
			}
		}
	});
}
function dismissBind()
{
	ctx.runOnUiThread(new java.lang.Runnable()
	{
		run: function ()
		{
			if(bindBtn != null)
			{
				bindBtn.dismiss();
			}
		}
	});
	bindCommand = [];
}
*/
function addonCoords()
{
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try
		{
			if(cmdCoords_show)
			{
				coordsTextview.setText("x: " + Math.floor(Player.getX() - 1) + "\ny: " + Math.floor(Player.getY()) + "\nz: " + Math.floor(Player.getZ()));
			}
			else
			{
				coordsWindow = new android.widget.PopupWindow();
				var coordsLayout = new android.widget.RelativeLayout(ctx);
				coordsTextview = new android.widget.TextView(ctx);
				coordsTextview.setTextSize(25);
				coordsTextview.setTextColor(android.graphics.Color.WHITE);
				coordsLayout.addView(coordsTextview);
				coordsWindow.setContentView(coordsLayout);
				coordsWindow.setWidth(dip2px(ctx, 100));
				coordsWindow.setHeight(dip2px(ctx, 100));
				coordsWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				coordsWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 5), dip2px(ctx, 40));
				cmdCoords_show = true;
			}
		} catch(err) {
			print("Failed to show coordinates." + err);
		}
	}}));
}
function addonDismissCoords()
{
	showingCoords = false;
	coordsActive = false;
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			coordsWindow.dismiss();
		}
	}));
}
function addonCommands()
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				var commands = new android.app.AlertDialog.Builder(ctx);
				commands.setTitle("Commands List");
				var list = cmdHelp_pages[0];
				for(i = 1; i < cmdHelp_pages.length; i++)
				{
					list = list.concat(cmdHelp_pages[i]);
				}
				commands.setMessage(list.join("\n"));
				commands.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener() {
					onClick: function(par1){
						commands2.dismiss();
					}
				});
				var commands2 = commands.create();
				commands2.show();
			} catch (err) {
				print("Error while executing Java: " + err);
			}
		}
	}));
}
function addonAbout()
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				var info = new android.app.AlertDialog.Builder(ctx);
				info.setTitle("About");
				info.setMessage("SinglePlayerCommand (by " + author +")\nVersion v" + version + "\n\nBig thanks to:\nConnor4898\nCheesyFriedBacon\nKMCPE");
				info.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener() {
					onClick: function(par1){
						info2.dismiss();
					}
				});
				var info2 = info.create();
				info2.show();
			} catch (err) {
				print("Error while executing Java: " + err);
			}
		}
	}));
}
