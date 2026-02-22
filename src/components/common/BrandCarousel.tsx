

const BRANDS = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
];

export default function BrandCarousel() {
    return (
        <section className="py-12 border-y border-white/5 bg-[#080808]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-16 md:gap-32">
                    {BRANDS.map((logo, i) => (
                        <div key={i} className="flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <img src={logo} alt="Brand" className="h-10 md:h-14 w-auto object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
