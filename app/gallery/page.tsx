export default function GalleryPage() {
  const gallery = [
    { title: "होली मिलन कार्यक्रम", img: "/holi-milan-1.jpg" },
    { title: "होली मिलन कार्यक्रम", img: "/holi-milan-2.jpg" },
    { title: "होली मिलन कार्यक्रम", img: "/holi-milan-3.jpg" },
    { title: "होली मिलन कार्यक्रम", img: "/holi-milan-4.jpg" },
    { title: "होली मिलन कार्यक्रम", img: "/holi-milan-5.jpg" },
    { title: "होली मिलन कार्यक्रम", img: "/holi-milan-6.jpg" },
    { title: "ज्ञापन प्रेषण", img: "/memor-1.jpg" },
    { title: "ज्ञापन प्रेषण", img: "/memor-2.jpg" },
    { title: "वार्ड जनसमस्या बैठक", img: "/ward-meeting.jpg" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
            Media & Public Moments
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Gallery & Campaign Highlights
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            जनसंपर्क, सामाजिक कार्यक्रम, ज्ञापन, बैठकों और क्षेत्रीय गतिविधियों की
            प्रमुख झलकियाँ।
          </p>

          <div className="mt-8">
            <a
              href="/"
              className="inline-flex rounded-2xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="overflow-hidden rounded-[28px] bg-white shadow-xl ring-1 ring-slate-200 transition hover:-translate-y-1"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-black">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  क्षेत्रीय गतिविधियों, जनसम्पर्क और सार्वजनिक सहभागिता की दृश्य
                  झलक।
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}