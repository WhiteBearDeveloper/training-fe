import React, { useState } from "react";
import styles from "./modal.module.scss";
import overlayStyles from "@styles/modules/abstracts/overlay.module.scss";
import ReactModal from "react-modal";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import classNames from "classnames";
import { CloseIcon } from "@ui";

interface Props extends ReactModal.Props {
  className?: string;
  onClose: () => void;
  isNotClosed?: boolean;
}

export const Modal: React.FC<Props> = ({
  children,
  onClose,
  className,
  isNotClosed = false,
  ...props
}): JSX.Element => {
  const [overlayClassName, setOverlayCLassName] = useState<string>(
    overlayStyles.overlay,
  );
  const [overlayRef, setOverlayRef] = useState<HTMLDivElement>();

  const afterOpen = (): void => {
    disablePageScroll();
    setOverlayCLassName(
      classNames(overlayStyles.overlay, overlayStyles["overlay-show"]),
    );
  };

  const afterClose = (): void => {
    enablePageScroll();
    overlayRef?.removeEventListener("transitionend", onClose, false);
  };

  const onCloseHandler = (): void => {
    setOverlayCLassName(overlayStyles.overlay);
    overlayRef?.addEventListener("transitionend", onClose, false);
  };
  return (
    <ReactModal
      ariaHideApp={false}
      overlayClassName={overlayClassName}
      onAfterOpen={afterOpen}
      onAfterClose={afterClose}
      className={classNames(styles.empty, styles.wrapper, className)}
      portalClassName={styles.empty}
      onRequestClose={onCloseHandler}
      overlayRef={(node) => setOverlayRef(node)}
      {...(isNotClosed && {
        shouldCloseOnEsc: false,
        shouldCloseOnOverlayClick: false,
      })}
      {...props}
    >
      <div className={styles.modal}>
        {!isNotClosed && (
          <CloseIcon
            className={styles["close-icon"]}
            onClick={onCloseHandler}
          />
        )}
        {children}
      </div>
    </ReactModal>
  );
};
