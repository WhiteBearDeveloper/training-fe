import { Auth } from "@features/auth";
import { Modal } from "@ui";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import linkStyles from "@styles/modules/abstracts/link.module.scss";
import styles from "./profile.module.scss";
import { $profileStore } from "@store/profile";
import { joinFullName } from "@utils/helpers/strings.helper";
import { getAuthEmail } from "@services/auth";

export const Profile = observer((): JSX.Element => {
  const [isAuthModalOpen, setAuthModalStatus] = useState<boolean>(false);
  const { profile } = $profileStore;

  const onCloseHandler = (): void => {
    setAuthModalStatus(false);
  };
  return profile ? (
    profile?.firstName ?? profile?.lastName ? (
      <div className={linkStyles.linkBase}>
        {joinFullName(profile.firstName, profile.middleName, profile.lastName)}
      </div>
    ) : (
      <div className={linkStyles.linkBase}>{getAuthEmail()}</div>
    )
  ) : (
    <>
      <button
        className={linkStyles.linkBase}
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
