export interface GameData extends GameEditData {
	id: string;
	gameName: string;
	finalMessage: string;
	isActive: boolean;
	author: string;
}

export interface GameEditData {
	gameName: string;
	finalMessage: string;
	author: string;
}
