import { Auth } from "@features/auth";
import { Modal } from "@ui";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import styles from "./profile.module.scss";

export const Profile = observer((): JSX.Element => {
  const [isAuthModalOpen, setAuthModalStatus] = useState<boolean>(false);

  const onCloseHandler = (): void => {
    setAuthModalStatus(false);
  };

  return (
    <>
      <button
        className={styles.enter}
        onClick={() => setAuthModalStatus((prev) => !prev)}
      >
        Войти
      </button>
      {isAuthModalOpen && (
        <Modal isOpen={isAuthModalOpen} onClose={onCloseHandler}>
          <Auth closeModal={() => setAuthModalStatus(false)} />
        </Modal>
      )}
    </>
  );
});
