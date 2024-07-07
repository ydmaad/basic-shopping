import React from "react";
import { supabase } from "../../utils/supabase/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  const { data, error } = await supabase.from("products").select("*");
  console.log(data);
  if (error) {
    notFound;
  }

  return (
    <>
      <div>
        {/* 데이터 타입 새로 설정?? */}
        {data.map((item) => {
          return (
            <div>
              <Link href={`/product/${item.id}`} key={item.id}>
                <Image
                  src={item.image_url}
                  alt="상품이미지"
                  width={300}
                  height={300}
                />
                <div>상품명 : {item.name}</div>
                <div>가격 : {item.price}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
