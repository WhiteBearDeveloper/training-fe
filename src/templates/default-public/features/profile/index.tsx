import { Auth } from "@features/auth";
import { Button, Modal, SvgIcon } from "@ui";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import linkStyles from "@styles/modules/abstracts/link.module.scss";
import styles from "./profile.module.scss";
import { $profileStore } from "@store/profile";
import { joinFullName } from "@utils/helpers/strings.helper";
import { clearAuthStorage, getAuthEmail } from "@services/auth";
import { resetRegisteredStates } from "@store/helpers";
import classNames from "classnames";

export const Profile = observer((): JSX.Element => {
  const [isAuthModalOpen, setAuthModalStatus] = useState<boolean>(false);
  const { profile } = $profileStore;

  const onCloseHandler = (): void => {
    setAuthModalStatus(false);
  };

  const onLogoutHandler = (): void => {
    resetRegisteredStates();
    clearAuthStorage();
  };

  const blockClass = classNames(styles.block, linkStyles["link-base"]);

  return profile ? (
    <div className={styles.info}>
      <div className={blockClass}>
        <div className={styles.avatar}>
          <SvgIcon name="profile" />
        </div>
        <div>
          {profile?.firstName ?? profile?.lastName
            ? joinFullName(
                profile.firstName,
                profile.middleName,
                profile.lastName,
              )
            : getAuthEmail()}
        </div>
      </div>
      <Button
        text="Выйти"
        className={styles.logout}
        onClick={onLogoutHandler}
      />
    </div>
  ) : (
    <>
      <button
        className={linkStyles["link-base"]}
        onClick={() => setAuthModalStatus((prev) => !prev)}
      >
        Войти
      </button>
      {isAuthModalOpen && (
        <Modal
          isOpen={isAuthModalOpen}
          onClose={onCloseHandler}
          className={styles.modal}
        >
          <Auth closeModal={() => setAuthModalStatus(false)} />
        </Modal>
      )}
    </>
  );
});
