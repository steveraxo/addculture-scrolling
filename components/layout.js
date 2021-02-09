import PropTypes from "prop-types";
import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";

const Layout = ({ children }) => {
  const isBrowser = typeof window !== `undefined`;

  if (isBrowser) {
    const analytics = Analytics({
      app: "humanified-next",
      plugins: [
        googleTagManager({
          containerId: "GTM-PGW75S8",
        }),
      ],
    });
    analytics.page();
  }
  return <>{children}</>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
