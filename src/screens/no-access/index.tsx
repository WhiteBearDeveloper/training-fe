import { Modal } from "@ui";
import React, { useState } from "react";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import linkStyles from "@styles/modules/abstracts/link.module.scss";
import styles from "./no-access.module.scss";
import { Auth } from "@features/auth";
import classNames from "classnames";
import { AuthTypes } from "@api/services/auth/types";

type ModalTypes = "no-access" | "auth";

export const NoAccessScreen: React.FC = () => {
  const [isOpen, setModalStatus] = useState<boolean>(true);
  const [currentModalContent, setCurrentModalContent] =
    useState<ModalTypes>("no-access");
  const [authType, setAuthType] = useState<AuthTypes>();

  const onModalClose = (): void => {
    setModalStatus(false);
  };

  const Component = (): JSX.Element => {
    const onAuthClickHandler = (type: AuthTypes): void => {
      setAuthType(type);
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
              <span
                onClick={() => onAuthClickHandler("registration")}
                className={linkClassName}
              >
                зарегистрироваться
              </span>{" "}
              или{" "}
              <span
                onClick={() => onAuthClickHandler("login")}
                className={linkClassName}
              >
                войти
              </span>
            </span>
          </>
        );
      default:
        return <Auth closeModal={onModalClose} type={authType} />;
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {}}
        className={styles.modal}
        isNotClosed={true}
      >
        <Component />
      </Modal>
    </>
  );
};
