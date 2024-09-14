import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";

function Freebooks() {
  const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mt-10 mb-10 mx-auto dark:bg-slate-900 dark:text-white md:px-20 px-4 text-black">
        <div className="dark:bg-slate-900 dark:text-white">
          <h1 className="font-semibold text-2xl dark:bg-slate-900 dark:text-white">Free Books</h1>
          <p className="dark:bg-slate-900 dark:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fugit
            est, omnis dolores ea, in quasi quaerat ipsam aliquam, dignissimos
            libero corporis?
          </p>
        </div>
        <div className="dark:bg-slate-900 dark:text-white">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards  item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebooks;
