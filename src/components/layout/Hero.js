import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Mọi thứ
          <br />
          sẽ tốt hơn
          <br />
          với một ly&nbsp;
          <span className="text-primary">Nước</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Đồ uống là mảnh ghép còn thiếu khiến mỗi ngày trở nên trọn vẹn, một
          niềm vui giản dị mà ngon lành trong cuộc sống
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Mua ngay
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Tìm hiểu thêm
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={"/1.jpg"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
