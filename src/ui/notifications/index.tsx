import styles from "./notifications.module.scss";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { GlobalStore } from "@store/global";
import { NotificationStore } from "@store/notifications/types";
import classNames from "classnames";

export const Notifications = observer((): JSX.Element => {
  const { $notificationsStore } = useContext(GlobalStore);
  const notifications: null | NotificationStore[] =
    $notificationsStore.notifications;
  return (
    <div className={styles.wrapper}>
      {!(notifications == null) &&
        !(notifications.length === 0) &&
        notifications.map((item: NotificationStore) => {
          const className = classNames(
            styles.item,
            styles[`item-${item.type}`],
          );
          return (
            <React.Fragment key={`notification-${item.id}`}>
              <div className={className}>
                {item.text}
                <div
                  className={styles["item-close"]}
                  onClick={() => $notificationsStore.closeNotification(item.id)}
                />
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
});
