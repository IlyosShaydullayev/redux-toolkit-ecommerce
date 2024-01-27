import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../redux/slice/productSlice";

function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);
  return (
    <div className="flex justify-around gap-20">
      <div className="flex flex-col gap-5">
        <img
          src={singleProduct.thumbnail}
          alt="image"
          className="border-2 p-2 w-[500px] h-[500px]"
        />
        <div className="flex gap-3">
          {singleProduct.images.map((item) => (
            <div className="border-2 p-1">
              <img src={item} alt="image" className="w-20 h-20 cursor-pointer"/>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>{singleProduct.title}</p>
      </div>
    </div>
  );
}

export default ProductInfo;
