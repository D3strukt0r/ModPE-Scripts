/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @project:	JavaFunction
 * @version:	v1.0.1
 * @website:	https://raw.githubusercontent.com/OfficialOrbitron/ModPE/master/Scripts/JavaFunction.js
 *
 * Testet with:
 * MCPE: v0.9.5
 * BlockLauncher: v1.7.9
 *
 */

// calls "onUseItem(...)"
function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage)
{
	if(onUseItem() typeof != "undefined")
	{
		onUseItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage);
	}
}
// calls "onDestroyBlock(...)"
function destroyBlock(x, y, z, side)
{
	if(onDestroyBlock() typeof != "undefined")
	{
		onDestroyBlock(x, y, z, side);
	}
}
function startDestroyBlock(x, y, z, side) {} //startDestroyBlockCallback *
function newLevel(hasLevel) {} //setLevelCallback * isRemote (boolean) **
function selectLevelHook() {} //selectLevelCallback * wName (String) ** wDir (String) **
function leaveGame() {} //leaveGameCallback * thatboolean (boolean) **
function attackHook(attacker, victim) {} //attackCallback *
function modTick() {} //tickCallback *
function chatHook(message) {}
function procCmd(command) {} //chatCallback *
function deathHook(attacker, victim) {} //mobDieCallback *
function entityRemovedHook(entity) {} //entityRemovedCallback *
function entityAddedHook(entity) {} //entityAddedCallback *
function levelEventHook(player, eventType, x, y, z, data) {} //levelEventCallback *
function blockEventHook(x, y, z, type, data) {} //blockEventCallback *
function serverMessageReceiveHook(message) {} //handleChatPacketCallback *
function chatReceiveHook(message, sender) {} //handleMessagePacketCallback *