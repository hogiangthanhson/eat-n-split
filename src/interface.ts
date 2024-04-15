export interface IFriend {
  id: number;
  name: string;
  image: string;
  balance: number;
}

export interface IButton {
  onClick?: () => void;
  children: React.ReactNode;
}
