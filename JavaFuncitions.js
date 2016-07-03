/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.orbitrondev.com
 * === ABOUT PROJECT ===
 * @author:		Manuele Vaccari
 * @project:	JavaFunction
 * @version:	v1.2.0
 * @website:	https://raw.githubusercontent.com/OrbitronDev/ModPE/master/JavaFunction.js
 *
 * Testet with:
 * MCPE: v0.10.5
 * BlockLauncher: v1.8.6
 *
 */

// Project info
var AppInfo = {
	'projectName': 'JavaFunctions',
	'shortName': 'Java',
	'version': '1.2.1'
	'author': 'Manuele Vaccari (OrbitronDev)'
};

// Values
var AppData = {
    'java': true, // Does this phone support Java? (or asked in an other way, is it Android?)
    'external': true // Is this code an own script (true), or is it included in other scripts? (false)
};

// calls "onUseItem(...)"
function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage)
{
	if(typeof onUseItem() != 'undefined') onUseItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onUseItem', x, y, z, itemid, blockid, side, itemDamage, blockDamage);
}
// calls "onDestroyedBlock(...)"
function destroyBlock(x, y, z, side)
{
	if(typeof onDestroyedBlock() != 'undefined') onDestroyedBlock(x, y, z, side);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onDestroyedBlock', x, y, z, side);
}
// calls "onStartDestroyBlock(...)"
function startDestroyBlock(x, y, z, side)
{
	if(typeof onStartDestroyBlock() != 'undefined') onStartDestroyingBlock(x, y, z, side);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onStartDestroyingBlock', x, y, z, side);
}
// calls "onStartNewWorld(...)"
function newLevel(hasLevel)
{
	if(typeof onStartNewWorld() != 'undefined') onStartNewWorld(x, y, z, side);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onStartNewWorld', hasLevel);
}
// calls "onWorldSelected(...)"
function selectLevelHook()
{
	if(typeof onWorldSelected() != 'undefined') onWorldSelected(x, y, z, side);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onWorldSelected');
}
// calls "onLeavingWorld(...)"
function leaveGame()
{
	if(typeof onLeavingWorld() != 'undefined') onLeavingWorld(x, y, z, side);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onLeavingWorld');
}
// calls "onAttacking(...)"
function attackHook(attacker, victim)
{
	if(typeof onAttacking() != 'undefined') onAttacking(attacker, victim);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onAttacking', attacker, victim);
}
// calls "onTick(...)"
function modTick()
{
	if(typeof onTick() != 'undefined') onTick();
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onTick');
}
// calls "onChat(...)"
¨/*function chatHook(message)
{
	if(typeof onChat() != 'undefined') onChat(message);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onChat', message);
}*/
// calls "onSendCommand(...)"
function procCmd(command)
{
	if(typeof onSendCommand() != 'undefined') onSendCommand(command);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onSendCommand', command);
}
// calls "onMobDied(...)"
function deathHook(attacker, victim)
{
	if(typeof onMobDied() != 'undefined') onMobDied(attacker, victim);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onMobDied', attacker, victim);
}
// calls "onEntityRemoved(...)"
function entityRemovedHook(entity)
{
	if(typeof onEntityRemoved() != 'undefined') onEntityRemoved(entity);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onEntityRemoved', entity);
}
// calls "onEntityAdded(...)"
function entityAddedHook(entity)
{
	if(typeof onEntityAdded() != 'undefined') onEntityAdded(entity);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onEntityAdded', entity);
}
// calls "onMobEvent(...)"
function levelEventHook(entity, eventType, x, y, z, data)
{
	if(typeof onMobEvent() != 'undefined') onMobEvent(entity, eventType, x, y, z, data);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onMobEvent', entity, eventType, x, y, z, data);
}
// calls "onBlockEvent(...)"
function blockEventHook(x, y, z, type, data)
{
	if(typeof onBlockEvent() != 'undefined') onBlockEvent(x, y, z, type, data);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onBlockEvent', x, y, z, type, data);
}
// calls "onServerMessage(...)"
function serverMessageReceiveHook(message)
{
	if(typeof onServerMessage() != 'undefined') onServerMessage(message);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onServerMessage', message);
}
// calls "onServerPlayerMessage(...)"
function chatReceiveHook(message, sender)
{
	if(typeof onServerPlayerMessage() != 'undefined') onServerPlayerMessage(message, sender);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onServerPlayerMessage', message, sender);
}

// Main functions
function newLevel(hasLevel)
{
	clientMessage(ChatColor.GRAY + '[INFO] ' + ChatColor.WHITE + AppInfo.projectName + ' loaded');
}
