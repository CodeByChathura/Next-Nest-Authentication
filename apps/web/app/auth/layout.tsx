import React, { PropsWithChildren } from "react";

const AuthlLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-lime-400 to-cyan-400 h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthlLayout;
