import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-coregames-api-test" is now active!');
	setExternalLibrary("EmmyLua", true)
}

export function setExternalLibrary(folder: string, enable: boolean) {
	const config = vscode.workspace.getConfiguration("Lua")
	const library: string[] | undefined = config.get("workspace.library")
	if (library) {
		const index = library.indexOf(folder)
		if (enable) {
			if (index == -1) {
				library.push(folder)
			}
		}
		else {
			if (index > -1) {
				library.splice(index, 1)
			}
		}
		config.update("workspace.library", library, true)
	}
}
