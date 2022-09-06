import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IGlobalContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  event: IEvent;
  events: IEvent[];
  setEvent: Dispatch<SetStateAction<IEvent>>;
  registerUser(data: IUser): void;
  loginUser(data: IUserLogin): void;
  listUsers(): void;
  listEvents(): void;
  createEvent(data: IEvent): void;
  editEvent(data: IEditEvent): void;
  editUser(data: IEditUser): void;
  deleteEvent(): void;
  deleteUser(): void;
  addEvent: boolean;
  setAddEvent: React.Dispatch<React.SetStateAction<boolean>>;
  editEventModal: boolean;
  setEditEventModal: React.Dispatch<React.SetStateAction<boolean>>;
  editUserModal: boolean;
  setEditUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IEditUser {
  email: string;
  name: string;
  city: string;
  players?: string;
  url_image: string;
}

export interface IUser {
  id: string;
  name: string;
  password?: string;
  confirm_password?: string;
  email: string;
  city: string;
  players?: string;
  url_image?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IEditEvent {
  image?: string;
  subscription: string;
  awards: string;
  quantity: number;
  address: string;
  teams?: IUserEvent[];
}

export interface IEvent {
  category: string;
  userId?: string;
  name: string;
  localization: string;
  dateStart: string;
  dateEnd: string;
  image?: string;
  subscription?: string;
  awards?: string;
  quantity?: number;
  address?: string;
  teams?: IUserEvent[];
  id?: number;
}

interface IUserEvent {
  city: string;
  url_image: string;
  userId: string;
}
