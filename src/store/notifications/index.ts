import { StateClassCommon } from "@store/types";
import { makeAutoObservable } from "mobx";
import { Notification, NotificationStore, NotificationTimeouts } from "./types";

export class Notifications implements StateClassCommon {
  notifications: NotificationStore[] | null = null;
  private notificationsTimeoutsList: NotificationTimeouts | null = null;
  private readonly notificationTimeoutLimit: number = 5000;

  constructor() {
    makeAutoObservable(this);
  }

  addNotification({ withTimeout = true, ...notification }: Notification): void {
    const id = this.notifications === null ? 1 : this.notifications.length + 1;
    const newNotification = { id, withTimeout, ...notification };

    withTimeout && this.addNotificationTimer(id);

    this.notifications === null
      ? (this.notifications = [newNotification])
      : this.notifications.push(newNotification);
  }

  closeNotification(id: number): void {
    if (this.notifications != null) {
      this.notifications = this.notifications?.filter((item) => item.id !== id);
      this.removeNotificationTimer(id);
    }
  }

  addNotificationTimer(id: number): void {
    const timer: NodeJS.Timeout = setTimeout(() => {
      this.closeNotification(id);
      this.removeNotificationTimer(id);
    }, this.notificationTimeoutLimit);
    this.notificationsTimeoutsList === null
      ? (this.notificationsTimeoutsList = { [id]: timer })
      : (this.notificationsTimeoutsList[id] = timer);
  }

  removeNotificationTimer(id: number): void {
    if (this.notificationsTimeoutsList?.[id] != null) {
      delete this.notificationsTimeoutsList?.[id];
    }
  }

  reset(): void {
    this.notifications = null;
  }
}

export const $notificationsStore = new Notifications();
