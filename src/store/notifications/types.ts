import { WithIntegerId } from "types/common";

export interface Notification {
  text: string;
}

export interface NotificationStore extends WithIntegerId, Notification {}
