export interface Message {
  id: number;
  sender: 'user' | 'bot';
  message: string;
  timestamp: Date;
}