import { StateClassCommon } from "@store/types";
import { makeAutoObservable } from "mobx";
import { Notification, NotificationStore } from "./types";

export class Notifications implements StateClassCommon {
  notifications: NotificationStore[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  addNotification(notification: Notification) {
    this.notifications === null
      ? (this.notifications = [{ id: 1, ...notification }])
      : this.notifications.push({
          id: this.notifications.length + 1,
          ...notification,
        });
  }

  reset() {
    this.notifications = null;
  }
}

export const $notificationsStore = new Notifications();
