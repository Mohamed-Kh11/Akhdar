import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  { title: "الطاقة الكهرومائية", slug: "hydro", url: "https://i.imgur.com/I8IYSv6.png" },
  { title: "طاقة باطن الأرض", slug: "geothermal", url: "https://i.imgur.com/3889E74.png" },
  { title: "الطاقة الشمسية", slug: "solar", url: "https://i.imgur.com/MUGqqzG.png" },
  { title: "طاقة المد والجزر", slug: "tidal", url: "https://i.imgur.com/SL6wxJl.png" },
  { title: "طاقة الرياح", slug: "wind", url: "https://i.imgur.com/xao3DYH.png" },
];

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 }},
      { breakpoint: 640, settings: { slidesToShow: 1 }},
    ],
  };

  return (
    <Slider {...settings} className="max-w-full min-h-[40svh] mb-10 text-white font-['Noto_Kufi_Arabic']">
      {carouselData.map((item, index) => (
        <div key={index} className="p-2 h-full">
          <Link href={`/clean-energy/${item.slug}`}>
            <div
              className="relative h-[35svh] w-full rounded-xl overflow-hidden cursor-pointer transition hover:scale-[1.02] hover:shadow-lg"
              style={{
                backgroundImage: `url(${item.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 w-full h-[20%] bg-green-700/85 backdrop-blur-sm flex items-center justify-center">
                <p className="text-lg font-semibold text-white text-center px-3">
                  {item.title}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default MyCarousel;
