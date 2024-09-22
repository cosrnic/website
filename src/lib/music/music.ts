export type Song = {
	id: string;
	name: string;
	artists: {
		id: string;
		name: string;
	}[];
	album: {
		id: string;
		name: string;
	};
	cover_url: string;
	plays: number[];
	last_played: number;
};
