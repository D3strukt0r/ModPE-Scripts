/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @project:	Achievements
 * @version:	v1.0.0
 * @website:	https://raw.githubusercontent.com/OfficialOrbitron/ModPE/master/Scripts/Achievements.js
 *
 * Testet with:
 * MCPE: v0.9.5
 * BlockLauncher: v1.7.9
 *
 */

// Project info
var project = "Achievements";
var sname = "[ACH]";
var version = "1.0.0";
var author = "Orbitron";

// Values
var achievement = [
	{
		"id": 1,
		"reached": false,
		"message": "1"
	},
	{
		"id": 2,
		"reached": false,
		"message": "2"
	},
	{
		"id": 3,
		"reached": false,
		"message": "3"
	},
	{
		"id": 4,
		"reached": false,
		"message": "4"
	},
	{
		"id": 5,
		"reached": false,
		"message": "5"
	},
	{
		"id": 6,
		"reached": false,
		"message": "6"
	},
	{
		"id": 7,
		"reached": false,
		"message": "7"
	},
	{
		"id": 8,
		"reached": false,
		"message": "8"
	},
	{
		"id": 9,
		"reached": false,
		"message": "9"
	},
	{
		"id": 10,
		"reached": false,
		"message": "10"
	},
	{
		"id": 11,
		"reached": false,
		"message": "11"
	},
	{
		"id": 12,
		"reached": false,
		"message": "12"
	},
	{
		"id": 13,
		"reached": false,
		"message": "13"
	},
	{
		"id": 14,
		"reached": false,
		"message": "14"
	},
	{
		"id": 15,
		"reached": false,
		"message": "15"
	}
];

// Main functions
function useItem(x, y, z, itemId, blockId, side)
{
	if(a6 == 1 && itemId == 58)
	{
		addonShowAchievement(6);
	}
	if(a7 == 1 && itemId == 61)
	{
		addonShowAchievement(7);
	}
	if(a8 == 1 && itemId == 270)
	{
		addonShowAchievement(8);
	}
	if(a9 == 1 && itemId == 265)
	{
		addonShowAchievement(9);
	}
	if(a10 == 1 && itemId == 290)
	{
		addonShowAchievement(10);
	}
	if(a11 == 1 && itemId == 297)
	{
		addonShowAchievement(11);
	}
	if(a12 == 1 && itemId == 354)
	{
		addonShowAchievement(12);
	}
	if(a13 == 1)
	{
		if(itemId == 274 || itemId == 257 || itemId == 285 || itemId == 278)
		{
			addonShowAchievement(13);
		}
	}
	if(a14 == 1 && itemId == 268)
	{
		addonShowAchievement(14);
	}
	if(a15 == 1 && itemId == 47)
	{
		addonShowAchievement(15);
	}
}
function attackHook(attacker, victim)
{
	if(a1 == 1)
	{
		if(Entity.getEntityTypeId(victim) == 32 || Entity.getEntityTypeId(victim) == 33 || Entity.getEntityTypeId(victim) == 34 || Entity.getEntityTypeId(victim) == 35 || Entity.getEntityTypeId(victim) == 36)
		{
			addonShowAchievement(1);
		}
	}
	if(a2 == 1 && Entity.getEntityTypeId(victim) == 11)
	{
		addonShowAchievement(2);
	}
	if(a3 == 1 && Entity.getEntityTypeId(victim) == 34 && getCarriedItem() == 261)
	{
		addonShowAchievement(3);
	}
}
function procCmd(command)
{
	var cmd = command.toLowerCase().split(" ");
	switch(cmd[0])
	{
		case "ach":
		case "achievements":
		
			switch(cmd[1])
			{
				case "save":
				
					for(var i = 0; i < achievement.length; i++)
					{
						ModPE.saveData("a" + i, achievement[i]);
					}
					clientMessage("§9[ACH] §fSaved achievements!");
					break;
				
				case "load":
				
					for(var i = 0; i < achievement.length; i++)
					{
						achievement[i]["reached"] = ModPE.readData("a" + i);
					}
					clientMessage("§9[ACH] §fLoaded achievements!");
					break;
				
				case "reset":
				
					for(var i = 0; i < achievement.length; i++)
					{
						achievement[i]["reached"] = false;
						ModPE.saveData("a" + i, achievement[i]);
					}
					clientMessage("§9[ACH] §fResetted achievements!");
					break;
				
				default:
				
					clientMessage("§9[ACH] §fCommand " + p[1] + " does not exist!");
					break;
			}
		
		default:
		
			break;
	}
}
function destroyBlock(x, y, z, side)
{
	if (a4 == 1 && getTile(x, y, z) == 17)
	{
		addonShowAchievement(4);
	}
	if (a5 == 1 && getTile(x, y, z) == 56 && getCarriedItem() == 257)
	{
		addonShowAchievement(5);
	}
}
function newLevel()
{
	for(var i = 0; i < achievement.length; i++)
	{
		achievement[i]["reached"] = ModPE.readData("a" + i);
	}
	clientMessage("§7[INFO] §fAchievements loaded");
}
function leaveGame()
{
	for(var i = 0; i < achievement.length; i++)
	{
		ModPE.saveData("a" + i, achievement[i]);
	}
}

// Additional functions
function addonShowAchievement(achievementID)
{
	achievement[achievementID] = true;
	clientMessage("");
}