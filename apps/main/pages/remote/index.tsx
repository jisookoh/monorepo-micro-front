import React, { lazy } from "react";
const RemoteApp = lazy(() => import("remote/App"));

export default function Remote() {
  return <RemoteApp />;
}
