import React, { FormHTMLAttributes } from "react";

interface Props extends FormHTMLAttributes<HTMLFormElement> {}

export const FormWrapper: React.FC<Props> = ({
  children,
  ...props
}: Props): JSX.Element => {
  return <form {...props}>{children}</form>;
};
