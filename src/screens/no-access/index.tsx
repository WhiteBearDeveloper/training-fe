import { Modal } from "@ui";
import React, { useState } from "react";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import linkStyles from "@styles/modules/abstracts/link.module.scss";
import styles from "./no-access.module.scss";
import { Auth } from "@features/auth";
import classNames from "classnames";

type ModalTypes = "no-access" | "auth";

export const NoAccessScreen = (): JSX.Element => {
  const [isOpen, setModalStatus] = useState<boolean>(true);
  const [currentModalContent, setCurrentModalContent] =
    useState<ModalTypes>("no-access");

  const onModalClose = (): void => {
    setModalStatus(false);
  };

  const Component = (): JSX.Element => {
    const onAuthClickHandler = (): void => {
      setCurrentModalContent("auth");
    };
    const linkClassName = classNames(linkStyles["link-base"], styles.link);
    switch (currentModalContent) {
      case "no-access":
        return (
          <>
            <h1 className={titleStyles.lg}>Страница не доступна</h1>
            <span>
              Для просмотра текущей страницы Вам необходимо{" "}
              <span onClick={onAuthClickHandler} className={linkClassName}>
                авторизоваться
              </span>{" "}
              или{" "}
              <span onClick={onAuthClickHandler} className={linkClassName}>
                войти
              </span>
            </span>
          </>
        );
      default:
        return <Auth closeModal={onModalClose} />;
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => console.log()}
        className={styles.modal}
        isNotClosed={true}
      >
        <Component />
      </Modal>
    </>
  );
};
