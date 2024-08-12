import { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center justify-end">{children}</div>;
};

export default Header;
