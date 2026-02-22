import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const BRANDS = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/ea/Puma_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/76/Reebok_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Under_Armour_logo.svg"
];

export default function BrandCarousel() {
    return (
        <section className="py-20 border-y border-white/5 bg-[#080808]">
            <div className="container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={50}
                    slidesPerView={2}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="brand-swiper"
                >
                    {BRANDS.map((logo, i) => (
                        <SwiperSlide key={i} className="flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <img src={logo} alt="Brand" className="h-12 w-auto object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
