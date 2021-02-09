import React from "react";
import PropTypes from "prop-types";
import Navbar from "../navbar";

export default function DirectoryLayout({ children }) {
  const isBrowser = typeof window !== `undefined`;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

DirectoryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
