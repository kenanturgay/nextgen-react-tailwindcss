import { Redirect, useLocation } from "react-router-dom/";

export const PrivatePage = ({ userName, PageComponent }) => {
  const location = useLocation();

  return userName ? (
    <PageComponent />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { referrer: location.pathname },
      }}
    />
  );
};
