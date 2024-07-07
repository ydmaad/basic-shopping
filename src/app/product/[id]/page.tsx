import React from "react";
import { supabase } from "../../../../utils/supabase/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import AddCart from "@/app/_components/AddCart";

interface ProductProps {
  params: { id: string };
}

const ProductPage = async ({ params }: ProductProps) => {
  const { id } = params;
  console.log("id => ", id);
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error) {
    notFound();
  }
  return (
    <>
      <div>
        <Image src={data.image_url} alt="상품이미지" width={200} height={200} />
        <div>상품명 : {data.name}</div>
        <div>상품 설명 : {data.description}</div>
        <div>상품 가격 : {data.price} 원</div>
        <AddCart product={data} />
      </div>
    </>
  );
};

export default ProductPage;
