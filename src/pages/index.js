import Head from "next/head";
import { Inter } from "next/font/google";
import HomePage from "../../components/Home";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewProduct } from "@/storesrc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const product_list = useSelector((state) => state.product.products);
  // const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Legacy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* {product_list.map((product) => (
          <div>{product.name}</div>
        ))} */}
        {/* <button
          onClick={() =>
            dispatch(
              addNewProduct([{ name: "product_2" }, { name: "product_3" }])
            )
          }
        >
          Add Product
        </button> */}
        <HomePage />
      </div>
    </>
  );
}
