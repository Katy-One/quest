export interface EditTeamData {
	email: string | undefined;
	username: string;
	motto: string | null;
}
export interface TeamData extends EditTeamData {
	id: string;
	isActive: boolean;
}
