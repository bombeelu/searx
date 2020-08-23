import React from "react";
import { Route, Routes } from "react-router-dom";
import { SearchPage } from "pages";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
    </Routes>
  );
};
