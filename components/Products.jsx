import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const image_list = useSelector((state) => state.image.images);
  useEffect(() => {
    // console.log(image_list);
  }, [image_list]);
  return (
    <div className="felx flex-col">
      {/* <div className="relative flex flex-col w-[630px] rounded-[30px] h-[300px] bg-white justify-center mb-[10px]  border-solid border-[1px] border-teal-200 ">
        <div className="flex justify-between mx-[30px]">
          <div className="flex flex-col justify-center">
            <h2 className="font-semibold uppercase text-[#999999]">
              Boggest Summar Offer
            </h2>
            <h1 className="font-bold uppercase text-[28px] text-[#333333]">
              More Details Up To Inside 50% Off
            </h1>
            <a
              href="/"
              className=" flex items-center text-teal-500 text-[16px] w-[120px] pt-6"
            >
              Wishlist Now
              <BiChevronsRight className="text-[20px] pl-[5px]" />
            </a>
          </div>
          <img
            src="../img/chair.jpeg"
            alt="image"
            className="h-[200px] w-[200px]"
          />
        </div>
      </div> */}
      <h1 className="text-[#999999] font-semibold">All Categories</h1>
      <div className="relative grid gap-4 grid-cols-4 grid-rows-3 mt-[20px] mb-4 w-[970px] justify-between">
        {image_list.map((image) => (
          <div
            key={image.id}
            className="bg-white w-[230px] h-[200px] mr-2 rounded-[20px] justify-center flex-col border-solid border-[1px] border-teal-200 "
          >
            <img
              src={image.img}
              alt="img"
              className="w-full h-[120px] object-contain object-contain p-2"
            />

            <div className="bg-teal-300 rounded-b-[20px] p-2">
              <div className="text-[18px] flex justify-between ">
                {image.head}
                <div className="text-[14px] bg-white h-[25px] cursor-pointer rounded px-2">
                  Buy now
                </div>
              </div>
              <h1 className="text-[25px] font-semibold text-[#444]">
                {image.price}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
