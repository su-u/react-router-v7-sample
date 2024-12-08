import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  ...prefix("products", [
    index("./routes/products.tsx"),
    route(":id", "./routes/product.tsx"),
  ]),
] satisfies RouteConfig;
