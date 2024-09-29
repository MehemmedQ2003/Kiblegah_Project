export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 my-20">
        <div  style={{backgroundColor: "#C3922A"}}
          className="relative overflow-hidden rounded-2xl text-center shadow-xl"
          data-aos="zoom-y-out"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 text-3xl font-bold text-gray-200 md:mb-12 md:text-4xl">
              Kıblegah uygulaması tanıtım sitesi
            </h2>
            <p className="text-gray-200">
              Kıblegah uygulaması, Müslümanların namaz kılarken kıble yönünü kolayca bulmalarını sağlayan dijital bir araçtır. Günümüzde teknolojinin gelişmesiyle birlikte, bu tür uygulamalar, konum tabanlı hizmetler sunarak büyük kolaylık sağlamaktadır. Kıblegah, kullanıcıların GPS verilerini kullanarak doğru kıble yönünü belirlemektedir. Ayrıca, pusula yardımıyla gerçek zamanlı yönlendirme de sunmaktadır. Uygulama, kullanıcının coğrafi konumunu dikkate alarak kıbleyi her an ve her yerde bulmayı mümkün kılar. İnternete erişim gerektirmeden de çalışabilen bu uygulama, seyahat edenler için oldukça kullanışlıdır. Namaz vakitleri ve ezan uyarıları gibi ek özellikler de içermektedir. Kullanıcı dostu arayüzü sayesinde, her yaştan insan kolayca kullanabilir. Kıblegah, günümüz modern dünyasında Müslümanların ibadetlerini aksatmadan yerine getirmelerine yardımcı olmaktadır. Bu sayede, teknoloji ve dinin uyum içinde kullanılabileceği bir örnek teşkil eder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}