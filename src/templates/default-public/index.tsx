import { Notifications } from "@ui";
import "./default-public.scss";

interface Props {
  children?: React.ReactNode;
}

export const DefaultPublicTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className="default-public-template">
      <Notifications />
      <>{children}</>
    </div>
  );
};
