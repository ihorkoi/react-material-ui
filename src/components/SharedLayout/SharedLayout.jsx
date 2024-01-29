import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <Suspense fallback={<CircularProgress />} />
      <Outlet />
    </div>
  );
};
