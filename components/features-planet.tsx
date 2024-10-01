import Image from "next/image";
import React from "react";
import Image1 from "@/public/images/1.jpg";
import Image2 from "@/public/images/2.jpg";
import Image3 from "@/public/images/3.jpg";
import Image4 from "@/public/images/4.jpg";
import Image5 from "@/public/images/5.jpg";
import Image6 from "@/public/images/6.jpg";

const imageInfo = [
  {
    id: 1,
    image: Image1,
    image_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto perspiciatis modi quidem ipsum reprehenderit labore laudantium officia voluptates. Animi suscipit, voluptatum libero quam dolorem modi adipisci dignissimos amet deserunt. Repudiandae velit at quia quisquam, deleniti voluptatibus recusandae quidem in ut voluptatem quos temporibus architecto consequuntur maiores qui, adipisci aperiam. Nam doloribus, atque ut aliquid quia quam laudantium deserunt inventore voluptatem ad, quidem optio voluptas pariatur, ipsum nemo eum sunt vel doloremque. Eaque temporibus blanditiis eligendi autem tenetur ut architecto quidem. Nihil voluptas ea laboriosam reiciendis nisi nam repellat amet nesciunt doloribus aut quidem illum quam dolorum necessitatibus eveniet, asperiores beatae, corrupti atque aspernatur debitis error."
  },
  {
    id: 2,
    image: Image2,
    image_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto perspiciatis modi quidem ipsum reprehenderit labore laudantium officia voluptates. Animi suscipit, voluptatum libero quam dolorem modi adipisci dignissimos amet deserunt. Repudiandae velit at quia quisquam, deleniti voluptatibus recusandae quidem in ut voluptatem quos temporibus architecto consequuntur maiores qui, adipisci aperiam. Nam doloribus, atque ut aliquid quia quam laudantium deserunt inventore voluptatem ad, quidem optio voluptas pariatur, ipsum nemo eum sunt vel doloremque. Eaque temporibus blanditiis eligendi autem tenetur ut architecto quidem. Nihil voluptas ea laboriosam reiciendis nisi nam repellat amet nesciunt doloribus aut quidem illum quam dolorum necessitatibus eveniet, asperiores beatae, corrupti atque aspernatur debitis error."
  },
  {
    id: 3,
    image: Image3,
    image_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto perspiciatis modi quidem ipsum reprehenderit labore laudantium officia voluptates. Animi suscipit, voluptatum libero quam dolorem modi adipisci dignissimos amet deserunt. Repudiandae velit at quia quisquam, deleniti voluptatibus recusandae quidem in ut voluptatem quos temporibus architecto consequuntur maiores qui, adipisci aperiam. Nam doloribus, atque ut aliquid quia quam laudantium deserunt inventore voluptatem ad, quidem optio voluptas pariatur, ipsum nemo eum sunt vel doloremque. Eaque temporibus blanditiis eligendi autem tenetur ut architecto quidem. Nihil voluptas ea laboriosam reiciendis nisi nam repellat amet nesciunt doloribus aut quidem illum quam dolorum necessitatibus eveniet, asperiores beatae, corrupti atque aspernatur debitis error."
  },
  {
    id: 4,
    image: Image4,
    image_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto perspiciatis modi quidem ipsum reprehenderit labore laudantium officia voluptates. Animi suscipit, voluptatum libero quam dolorem modi adipisci dignissimos amet deserunt. Repudiandae velit at quia quisquam, deleniti voluptatibus recusandae quidem in ut voluptatem quos temporibus architecto consequuntur maiores qui, adipisci aperiam. Nam doloribus, atque ut aliquid quia quam laudantium deserunt inventore voluptatem ad, quidem optio voluptas pariatur, ipsum nemo eum sunt vel doloremque. Eaque temporibus blanditiis eligendi autem tenetur ut architecto quidem. Nihil voluptas ea laboriosam reiciendis nisi nam repellat amet nesciunt doloribus aut quidem illum quam dolorum necessitatibus eveniet, asperiores beatae, corrupti atque aspernatur debitis error."
  },
  {
    id: 5,
    image: Image5,
    image_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto perspiciatis modi quidem ipsum reprehenderit labore laudantium officia voluptates. Animi suscipit, voluptatum libero quam dolorem modi adipisci dignissimos amet deserunt. Repudiandae velit at quia quisquam, deleniti voluptatibus recusandae quidem in ut voluptatem quos temporibus architecto consequuntur maiores qui, adipisci aperiam. Nam doloribus, atque ut aliquid quia quam laudantium deserunt inventore voluptatem ad, quidem optio voluptas pariatur, ipsum nemo eum sunt vel doloremque. Eaque temporibus blanditiis eligendi autem tenetur ut architecto quidem. Nihil voluptas ea laboriosam reiciendis nisi nam repellat amet nesciunt doloribus aut quidem illum quam dolorum necessitatibus eveniet, asperiores beatae, corrupti atque aspernatur debitis error."
  },
  {
    id: 6,
    image: Image6,
    image_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto perspiciatis modi quidem ipsum reprehenderit labore laudantium officia voluptates. Animi suscipit, voluptatum libero quam dolorem modi adipisci dignissimos amet deserunt. Repudiandae velit at quia quisquam, deleniti voluptatibus recusandae quidem in ut voluptatem quos temporibus architecto consequuntur maiores qui, adipisci aperiam. Nam doloribus, atque ut aliquid quia quam laudantium deserunt inventore voluptatem ad, quidem optio voluptas pariatur, ipsum nemo eum sunt vel doloremque. Eaque temporibus blanditiis eligendi autem tenetur ut architecto quidem. Nihil voluptas ea laboriosam reiciendis nisi nam repellat amet nesciunt doloribus aut quidem illum quam dolorum necessitatibus eveniet, asperiores beatae, corrupti atque aspernatur debitis error."
  }
];

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20" data-aos-delay={150} data-aos="zoom-y-out" style={{backgroundColor: "#F3F3F3"}}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto pb-16 text-center md:pb-20">
            <h1 className="text-5xl font-bold bg-inherit p-3 rounded-lg text-olive md:text-6xl">
              Kıblegah uygulama resimleri
            </h1>
          </div>
          {
            imageInfo.map((images, index) => (
              <div data-aos-delay={150} data-aos="zoom-y-out" key={index}>
                <div
                  className={`grid overflow-hidden sm:grid-cols-2 lg:grid-cols-2 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10 ${
                    index % 2 === 1 ? 'sm:grid-cols-[2fr_1fr]' : 'sm:grid-cols-[1fr_2fr]'
                  }`}
                >
                  {index % 2 === 1 ? (
                    <>
                      <article className="flex justify-center items-center transform hover:scale-105 transition duration-300">
                        <h5 className="text-lg font-bold text-gray-900 bg-yellow text-center mb-4 shadow-2xl p-5 rounded-3xl border">
                          {images.image_description}
                        </h5>
                      </article>
                      <article className="flex justify-center items-center">
                        <Image
                          src={images.image}
                          className="rounded-3xl"
                          alt="..."
                        />
                      </article>
                    </>
                  ) : (
                    <>
                      <article className="flex justify-center items-center">
                        <Image
                          src={images.image}
                          className="rounded-3xl"
                          alt="..."
                        />
                      </article>
                      <article className="flex justify-center items-center transform hover:scale-105 transition duration-300">
                        <h5 className="text-lg font-bold text-gray-200 bg-vampireBlack text-center mb-4 shadow-2xl p-5 rounded-3xl border">
                          {images.image_description}
                        </h5>
                      </article>
                    </>
                  )}
                </div>
                <hr style={{ width: "100%" }} />
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
}
