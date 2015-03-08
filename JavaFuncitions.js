/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.orbitrondev.com
 * === ABOUT PROJECT ===
 * @author:		Manuele Vaccari
 * @project:	JavaFunction
 * @version:	v1.0.1
 * @website:	https://raw.githubusercontent.com/OrbitronDev/ModPE/master/JavaFunction.js
 *
 * Testet with:
 * MCPE: v0.9.5
 * BlockLauncher: v1.7.9
 *
 */

// Project info
var AppInfo = {
	'projectName': 'JavaFunctions',
	'shortName': 'Java',
	'version': '1.0.1'
	'author': 'Manuele Vaccari (OrbitronDev)'
};

// Values
var AppData = {
    'java': true,
    'external': true
};

// calls "onUseItem(...)"
function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage)
{
	if(onUseItem() typeof != 'undefined') onUseItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onUseItem', x, y, z, itemid, blockid, side, itemDamage, blockDamage);
}
// calls "onDestroyedBlock(...)"
function destroyBlock(x, y, z, side)
{
	if(onDestroyedBlock() typeof != 'undefined') onDestroyedBlock(x, y, z, side);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onDestroyedBlock', x, y, z, side);
}
// calls "onStartDestroyBlock(...)"
function startDestroyBlock(x, y, z, side)
{
	if(onStartDestroyingBlock() typeof != 'undefined') onStartDestroyingBlock(x, y, z, side);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onStartDestroyingBlock', x, y, z, side);
}
// calls "onStartNewWorld(...)"
function newLevel(hasLevel)
{
	if(onStartNewWorld() typeof != 'undefined') onStartNewWorld(x, y, z, side);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onStartNewWorld', hasLevel);
}
// calls "onWorldSelected(...)"
function selectLevelHook()
{
	if(onWorldSelected() typeof != 'undefined') onWorldSelected(x, y, z, side);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onWorldSelected');
}
// calls "onLeavingWorld(...)"
function leaveGame()
{
	if(onLeavingWorld() typeof != 'undefined') onLeavingWorld(x, y, z, side);
	if(AppData.java && AppData.external) net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod('onLeavingWorld');
}
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

// Main functions
function newLevel(hasLevel)
{
	clientMessage(ChatColor.GRAY + '[INFO] ' + ChatColor.WHITE + AppInfo.projectName + ' loaded');
}
