import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Placeholder images with titles
const carouselData = [
  { title: "الطاقة الكهرومائية", url: "https://i.imgur.com/I8IYSv6.png" },
  { title: "طاقة باطن الارض", url: "https://i.imgur.com/3889E74.png" },
  { title: "الطاقة الشمسية", url: "https://i.imgur.com/MUGqqzG.png" },
  { title: "طاقة المد", url: "https://i.imgur.com/SL6wxJl.png" },
  { title: "طاقة الرياح", url: "https://i.imgur.com/xao3DYH.png" },
];

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="max-w-full min-h-[40svh] mb-10 text-white font-['Noto_Kufi_Arabic']">
      {carouselData.map((item, index) => (
        <div key={index} className="p-2 h-full">
          <div
            className="relative h-[35svh] w-full rounded overflow-hidden"
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Green bottom stripe */}
            <div className="absolute bottom-0 w-full h-[20%] bg-green-700  flex items-center justify-center">
              <p className="text-lg font-semibold text-white text-center px-2">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MyCarousel;
