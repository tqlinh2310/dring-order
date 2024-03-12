import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={""} mainHeader={"Giới thiệu"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Cửa hàng đồ uống nước là điểm đến lý tưởng cho những người yêu thích
            thưởng thức và khám phá các loại đồ uống độc đáo và ngon miệng. Tại
            đây, khách hàng có thể tìm thấy một loạt các lựa chọn đa dạng, từ cà
            phê thơm ngon đến trà mát lạnh, từ sinh tố tươi mát đến nước ép trái
            cây tự nhiên.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders subHeader={""} mainHeader={"Thông tin liên lạc"} />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +03 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
