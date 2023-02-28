import { Auth } from "@features/auth";
import { Button, Modal } from "@ui";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import linkStyles from "@styles/modules/abstracts/link.module.scss";
import styles from "./profile.module.scss";
import { $profileStore } from "@store/profile";
import { joinFullName } from "@utils/helpers/strings.helper";
import { clearAuthStorage, getAuthEmail } from "@services/auth";
import { resetRegisteredStates } from "@store/helpers";

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

  return profile ? (
    <div className={styles.info}>
      {profile?.firstName ?? profile?.lastName ? (
        <div className={linkStyles["link-base"]}>
          {joinFullName(
            profile.firstName,
            profile.middleName,
            profile.lastName,
          )}
        </div>
      ) : (
        <div className={linkStyles["link-base"]}>{getAuthEmail()}</div>
      )}
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
