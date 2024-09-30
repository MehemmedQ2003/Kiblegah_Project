import Image from 'next/image';
import MainImage from "../public/images/kiblegah-app-store.jpeg";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl bg-white p-3 rounded-lg text-olive"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Kıblegah uygulaması tanıtım sitesi
            </h1>
          </div>
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <video
              src='/media/kıblegah_video.mp4'
              width='1440'
              height='680'
              controls
            />

          </div>
        </div>
      </div>
    </section>
  );
}
