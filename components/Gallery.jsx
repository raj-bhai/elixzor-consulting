import Image from "next/image";
import CTAButton from "./CTAButton";

const Gallery = ({scrollToBookYourCall}) => {
    const imageSlides = [
        {
          id: 1,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999951/elixzor-consulting/testimonials/4_pzneyo.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284455/elixzor-consulting/testimonials-edited/edited13_eesdak.png"
        },
        {
          id: 2,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999950/elixzor-consulting/testimonials/1_euefxw.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284455/elixzor-consulting/testimonials-edited/edited10_kw1ip6.png"
        },
        {
          id: 5,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999950/elixzor-consulting/testimonials/5_siwzzn.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284455/elixzor-consulting/testimonials-edited/edited14_zvlsfv.png"
        },
        {
          id: 6,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999950/elixzor-consulting/testimonials/3_j6ph2a.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284455/elixzor-consulting/testimonials-edited/edited11_cn6qaj.png"
        },
        {
          id: 7,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999950/elixzor-consulting/testimonials/9_2_bl3miu.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284455/elixzor-consulting/testimonials-edited/edited9_td4ydu.png"
        },
        {
          id: 8,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/13_1_lglz69.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284455/elixzor-consulting/testimonials-edited/edited3_ff9v8c.png"
        },
        {
          id: 9,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/10_1_nkmsff.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284455/elixzor-consulting/testimonials-edited/edited12_rslaza.png"
        },
        {
          id: 10,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/11_1_afl7db.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284454/elixzor-consulting/testimonials-edited/edited7_igscsr.png"
        },
        {
          id: 11,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/15_1_ymamgk.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284453/elixzor-consulting/testimonials-edited/edited15_rdl2uq.png"
        },
        {
          id: 12,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/6_uh1tdv.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284454/elixzor-consulting/testimonials-edited/edited5_je9wx2.png"
        },
        {
          id: 13,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999949/elixzor-consulting/testimonials/7_e9hz84.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284454/elixzor-consulting/testimonials-edited/edited8_wyindz.png"
        },
        {
          id: 14,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999948/elixzor-consulting/testimonials/8_gxak40.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284454/elixzor-consulting/testimonials-edited/edited6_dxceja.png"
        },
        {
          id: 15,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999948/elixzor-consulting/testimonials/14_1_lgohqy.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284454/elixzor-consulting/testimonials-edited/edited4_zuo0fu.png"
        },
        {
          id: 16,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999948/elixzor-consulting/testimonials/16_1_xds9vc.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284453/elixzor-consulting/testimonials-edited/edited16_bt2yrv.png"
        },
        {
          id: 17,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999948/elixzor-consulting/testimonials/16_1_xds9vc.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284453/elixzor-consulting/testimonials-edited/edited2_tc55cu.png"
        },
        {
          id: 18,
          image: "https://res.cloudinary.com/dm9iuudyc/image/upload/v1731999948/elixzor-consulting/testimonials/16_1_xds9vc.png",
          imageCropped : "https://res.cloudinary.com/dm9iuudyc/image/upload/v1732284453/elixzor-consulting/testimonials-edited/edited1_jvnhmi.png"
        },
      ]

  return (
    <div className="container mx-auto p-6 font-sans text-white ">
      <div className="flex flex-col gap-8 sm:gap-16">
        {imageSlides.map((slide) => (
          <div key={slide.id} className="overflow-hidden rounded-lg shadow-lg w-full">
            {slide.image.endsWith(".mp4") ? (
              <video controls className="w-full h-auto object-cover rounded-lg">
                <source src={slide.imageCropped} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={slide.imageCropped}
                alt={`Slide ${slide.id}`}
                width={1920} // Ensure full-width scaling
                height={0} // Automatically adjust height based on aspect ratio
                layout="intrinsic" // Preserves the natural dimensions of the image
                className="rounded-lg"
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
