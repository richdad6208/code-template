import { createBrowserRouter, type RouteObject } from "react-router";
import { LoadComponent } from "./load-component";
import App from "@/src/App";
import { portalRoutes } from "@/src/router/portal-routes";
import { adminRoutes } from "@/src/router/admin-routes";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/portal",
        lazy: async () =>
          LoadComponent({
            importComponent: () =>
              import("@/src/components/layout/portal-layout"),
          }),
        children: [...portalRoutes],
      },
      {
        path: "/login",
        lazy: async () =>
          LoadComponent({
            importComponent: () => import("@/src/domain/login/login"),
          }),
      },
      {
        path: "/admin",
        lazy: async () =>
          LoadComponent({
            importComponent: () =>
              import("@/src/components/layout/admin-layout"),
          }),
        children: [...adminRoutes],
      },
    ],
  },
];

const Router = createBrowserRouter(routes);
export { Router };
