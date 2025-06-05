import { LoadComponent } from "@/src/router/load-component";
import { RouteObject } from "react-router";

export const adminRoutes: RouteObject[] = [
  {
    path: "",
    index: true,
    lazy: async () =>
      LoadComponent({
        importComponent: () => import("@/src/domain/admin/main"),
      }),
  },
  //   {
  //     path: "free",
  //     lazy: async () =>
  //       LoadComponent({
  //         importComponent: () => import("@/src/domain/admin/free/free-main"),
  //       }),
  //   },
];
