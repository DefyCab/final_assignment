export type User = {
  id: string;
  name: string;
  email: string;
  representative: boolean;
};

export type Votes = {
  id: string;
  votes: number;
  user_id: string;
};

export type ElectionChoice = {
  choice: number;
  election_id: string;
};
