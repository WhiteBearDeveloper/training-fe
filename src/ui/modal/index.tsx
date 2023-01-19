import React from "react";
import styles from "./modal.module.scss";
import ReactModal from "react-modal";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import classNames from "classnames";
import { CloseIcon } from "@ui";

interface Props extends ReactModal.Props {
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({
  children,
  onClose,
  ...props
}): JSX.Element => {
  const afterOpen = (): void => {
    disablePageScroll();
  };

  const afterClose = (): void => {
    enablePageScroll();
  };

  return (
    <ReactModal
      ariaHideApp={false}
      overlayClassName={styles.overlay}
      onAfterOpen={afterOpen}
      onAfterClose={afterClose}
      className={classNames(styles.empty, styles.wrapper)}
      portalClassName={styles.empty}
      onRequestClose={onClose}
      {...props}
    >
      <div className={styles.modal}>
        <CloseIcon className={styles.closeIcon} onClick={onClose} />
        {children}
      </div>
    </ReactModal>
  );
};
