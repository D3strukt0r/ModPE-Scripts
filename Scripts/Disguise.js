/*
 * IMAGE COMING SOON
 *
 * === ABOUT US ===
 * @name:		Disguise by Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @version:	v1.0.0
 * @website:	http://store.team-orbitron.com/mcpe-scripts/Disguise.js
 *
 * Testet with:
 * MCPE: v0.8.1
 * BlockLauncher: v1.6.10
 *
 */

/* Variables
 ***********************************************/

/* Main functions
 ***********************************************/
function procCmd(command)
{
	var p = command.split(" ");
	var command = p[0];
	switch(command.toLowerCase())
	{
		case "disguise":
		
			switch (command[0].toLowerCase())
			{
				case "steve":
				
					Entity.setRenderType(Player.getEntity(), 3);
					Entity.setMobSkin(Player.getEntity(), "mob/char.png");
					break;
				
				case "chicken":
				
					Entity.setRenderType(Player.getEntity(), 6);
					Entity.setMobSkin(Player.getEntity(), "mob/chicken.png");
					break;
				
				case "cow":
				
					Entity.setRenderType(Player.getEntity(), 7);
					Entity.setMobSkin(Player.getEntity(), "mob/cow.png");
					break;
				
				case "pig":
				
					Entity.setRenderType(Player.getEntity(), 8);
					Entity.setMobSkin(Player.getEntity(), "mob/pig.png");
					break;
				
				case "sheep":
				
					Entity.setRenderType(Player.getEntity(), 9);
					Entity.setMobSkin(Player.getEntity(), "mob/sheep_0.png");
					break;
				
				case "zombie":
				
					Entity.setRenderType(Player.getEntity(), 11);
					Entity.setMobSkin(Player.getEntity(), "mob/zombie.png");
					break;
				
				case "zombiepigman":
				
					Entity.setRenderType(Player.getEntity(), 11);
					Entity.setMobSkin(Player.getEntity(), "mob/pigzombie.png");
					break;
				
				case "skeleton":
				
					Entity.setRenderType(Player.getEntity(), 12);
					Entity.setMobSkin(Player.getEntity(), "mob/skeleton.png");
					break;
				
				case "spider":
				
					Entity.setRenderType(Player.getEntity(), 13);
					Entity.setMobSkin(Player.getEntity(), "mob/spider.png");
					break;
				
				case "creeper":
				
					Entity.setRenderType(Player.getEntity(), 14);
					Entity.setMobSkin(Player.getEntity(), "mob/creeper.png");
					break;
			}
		
		default:
		
			clientMessage("");
	}
}
function newLevel()
{
	clientMessage("§7[INFO] §fDisguise loaded");
}