export interface User {
  id: number;
  username: string;
  profile?: {
    avatarUrl: string;
    location: string;
  };
}
