
export enum GameDivision {
  VALORANT = 'Valorant',
  MOBILE_LEGENDS = 'Mobile Legends',
  PUBG_MOBILE = 'PUBG Mobile',
  FREE_FIRE = 'Free Fire'
}

export interface Player {
  id: string;
  name: string;
  ign: string;
  division: GameDivision;
  role: string;
  image: string;
  stats: {
    kda: string;
    winrate: string;
    matches: number;
  };
  achievements: string[];
}

export interface Match {
  id: string;
  game: string;
  opponent: string;
  opponentLogo: string;
  tournament: string;
  date: string;
  time: string;
  status: 'Upcoming' | 'Live' | 'Finished';
  result?: {
    ourScore: number;
    theirScore: number;
    won: boolean;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  type: 'Talent' | 'Staff' | 'Volunteer';
  division: string;
  description: string;
  requirements: string[];
}
