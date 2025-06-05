import { Header } from "@/src/components/layout/common/header";
import { Outlet } from "react-router";

export default function PortalLayout() {
  return (
    <>
      <Header />
      <div className="maxWidth">
        <Outlet />
      </div>
    </>
  );
}
