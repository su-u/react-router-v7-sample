import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("product-list", "./routes/product-list.tsx"),
] satisfies RouteConfig;
