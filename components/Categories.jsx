import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiChevronRight } from "react-icons/fi";

const Categories = () => {
  const image_list = useSelector((state) => state.image.images);
  const dispatch = useDispatch();

  const filterItems = (catItems) => {
    const updateCategory = image_list.filter((curElem) => {
      return curElem.category === catItems;
    });
  };

  return (
    <div className="bg-white w-[300px] p-2 h-[600px] rounded-[20px] border-solid border-[1px] border-teal-200 ">
      <div>
        <h1 className="flex justify-center uppercase font-bold text-[#666666] text-xl m-2">
          Categories
        </h1>
      </div>
      <hr className="mx-[20px]" />
      <div className="flex flex-col justify-center mx-[20px]">
        {image_list.map((categories) =>
          categories ? (
            <div key={categories.id}>
              <a
                href="/"
                className="flex justify-between px-[20px] py-2 hover:bg-teal-100 "
                onClick={() => filterItems("Bed")}
              >
                <span>{categories.category} </span>
                <span>
                  <FiChevronRight className="text-[#999999]" />
                </span>
              </a>
              <hr />
            </div>
          ) : (
            "No Categories Found"
          )
        )}
      </div>
    </div>
  );
};

export default Categories;
