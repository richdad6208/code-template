import { MantineProvider } from "@mantine/core";
import { Outlet } from "react-router";
import "@mantine/core/styles.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ConfirmModal from "@/src/components/modal/confirm-modal";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Display Hub</title>
      </Helmet>
      <MantineProvider>
        <main className="font-gothic">
          <Outlet />
        </main>
        <ToastContainer />
        <ConfirmModal />
      </MantineProvider>
    </HelmetProvider>
  );
}
