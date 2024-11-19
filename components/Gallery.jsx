import Image from "next/image";
import CTAButton from "./CTAButton";

const Gallery = ({scrollToBookYourCall}) => {
    const imageSlides = [
        {
          id: 1,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999951/elixzor-consulting/testimonials/4_pzneyo.png",
        },
        {
          id: 2,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999950/elixzor-consulting/testimonials/1_euefxw.png",
        },
        {
          id: 5,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999950/elixzor-consulting/testimonials/5_siwzzn.png",
        },
        {
          id: 6,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999950/elixzor-consulting/testimonials/3_j6ph2a.png",
        },
        {
          id: 7,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999950/elixzor-consulting/testimonials/9_2_bl3miu.png",
        },
        {
          id: 8,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/13_1_lglz69.png",
        },
        {
          id: 9,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/10_1_nkmsff.png",
        },
        {
          id: 10,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/11_1_afl7db.png",
        },
        {
          id: 11,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/15_1_ymamgk.png",
        },
        {
          id: 12,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/6_uh1tdv.png",
        },
        {
          id: 13,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/7_e9hz84.png",
        },
        {
          id: 14,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999948/elixzor-consulting/testimonials/8_gxak40.png",
        },
        {
          id: 15,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999948/elixzor-consulting/testimonials/14_1_lgohqy.png",
        },
        {
          id: 16,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999948/elixzor-consulting/testimonials/16_1_xds9vc.png",
        },
      ]

  return (
    <div className="container mx-auto p-6 font-sans text-white ">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
      {imageSlides.map((slide) => (
        <div key={slide.id} className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
          {slide.image.endsWith(".mp4") ? (
            <video controls className="w-full h-full object-cover rounded-lg">
              <source src={slide.image} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg w-full "
            />
          )}
        </div>
                ))}
                </div>
                <CTAButton
            onClick={scrollToBookYourCall}
            text="YES! I WANT TO START"
            subtext="Limited seats available, so book your slot before they run out."
          />
              </div>
  );
};

export default Gallery;
