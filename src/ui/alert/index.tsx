import React from "react";
import { Button, Modal, ModalProps } from "@ui";
import styles from "./alert.module.scss";

interface Props extends Omit<ReactModal.Props, "className">, ModalProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export const Alert = ({
  children,
  onSubmit,
  onCancel,
  ...props
}: Props): React.ReactElement => {
  return (
    <Modal size="base" {...props}>
      {children}
      <div className={styles.toolbar}>
        <Button
          text="Продолжить"
          theme="indianred"
          className={styles.button}
          onClick={onSubmit}
        />
        <Button
          text="Отменить"
          buttonStyle="outline"
          className={styles.button}
          onClick={onCancel}
        />
      </div>
    </Modal>
  );
};
