import Image from 'next/image';
import MainImage from "../public/images/kiblegah-app-store.jpeg";


export default function LargeTestimonial() {
  return (
    <section data-aos="zoom-y-out" data-aos-delay={150}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 my-8">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <Image src={MainImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
