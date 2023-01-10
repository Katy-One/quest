import { TeamData } from './team.model';

export interface GameData extends GameEditData {
	id: string;
	gameName: string;
	finalMessage: string;
	isActive: boolean;
	author: string;
	teams: TeamData[];
}

export interface GameEditData {
	gameName: string;
	finalMessage: string;
	author: string;
}
