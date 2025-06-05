import { LoadComponent } from "@/src/router/load-component";
import { RouteObject } from "react-router";

export const portalRoutes: RouteObject[] = [
  {
    path: "",
    index: true,
    lazy: async () =>
      LoadComponent({
        importComponent: () => import("@/src/domain/portal/main/main"),
      }),
  },
  {
    path: "free",
    lazy: async () =>
      LoadComponent({
        importComponent: () => import("@/src/domain/board/free/free-main"),
      }),
  },
];
