export interface IUser{
  id: string;
  avatar: string;
  name: string;
}
export interface ITasks{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}