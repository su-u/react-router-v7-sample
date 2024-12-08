import type { Route } from "./+types/product";
import { data, redirect } from "react-router";

export const meta: Route.MetaFunction = ({ params }) => {
  const product = products.find((p) => p.id === params.id);
  return [
    {
      title: product
        ? `${product.title} | Amazon-like Store`
        : "商品が見つかりません",
    },
    {
      name: "description",
      content: product ? `${product.title}の詳細` : "商品が見つかりません",
    },
  ];
};

type Product = {
  id: string;
  title: string;
  brand: string;
  imageUrl: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
};

const products: Product[] = [
  {
    id: "1",
    brand: "Nazibw",
    title: "Basic Tee",
    imageUrl:
      "https://kzmk13cv4m9dhgij3kop.lite.vusercontent.net//placeholder.svg?height=600&width=600",
    description: "A comfortable and versatile tee for everyday wear.",
    price: 6990,
    rating: 4.5,
    reviews: 2,
  },
];

export const loader = async ({ params }: Route.LoaderArgs) => {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    throw data("見つかりません", { status: 404 });
  }
  return product;
};

export const action = async ({ request, params }: Route.ActionArgs) => {
  const formData = await request.formData();
  const productId = params.id;
  console.log(`商品 ${productId} をカートに追加しました`);
  return redirect(`/product/${productId}`);
};

export default function ProductPage({ loaderData }: Route.ComponentProps) {
  const product = loaderData;
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* 商品画像 */}
          <div className="flex flex-col-reverse">
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6" aria-hidden="true">
                {[...Array(4)].map((_, i) => (
                  <button
                    key={i}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    <span className="absolute inset-0 rounded-md overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full aspect-w-1 aspect-h-1">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>
          </div>

          {/* 商品情報 */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.title}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">商品情報</h2>
              <p className="text-3xl text-gray-900">
                ￥{product.price.toLocaleString()}
              </p>
            </div>

            <div className="mt-3">
              <h3 className="sr-only">レビュー</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-5 w-5 flex-shrink-0 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {product.reviews} レビュー
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">説明</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            <div className="mt-10">
              <form method="post">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {"カートに追加"}
                </button>
              </form>
            </div>

            <div className="mt-6 flex justify-center items-center">
              <button
                type="button"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                <div className="h-5 w-5 inline-block mr-1" />
                共有
              </button>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                追加詳細
              </h2>
              <div className="border-t divide-y divide-gray-200">
                <div>
                  <h3>
                    <button
                      type="button"
                      className="group relative w-full py-6 flex justify-between items-center text-left"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      <span className="text-gray-900 font-medium">特徴</span>
                      <span className="ml-6 flex items-center">
                        {/* プラスアイコン */}
                        <svg
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        {/* マイナスアイコン */}
                        <svg
                          className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18 12H6"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    className="pb-6 prose prose-sm text-gray-900"
                    id="disclosure-1"
                  >
                    <ul role="list">
                      <li>手触りが柔らかい</li>
                      <li>高品質な縫製</li>
                      <li>環境に優しい素材</li>
                      <li>20cmサイズ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
