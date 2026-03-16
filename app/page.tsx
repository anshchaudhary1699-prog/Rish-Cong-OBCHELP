"use client";

import { useState } from "react";

export default function RishikeshOBCCongressWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    ward: "",
    category: "",
    description: "",
    photo: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [complaintId, setComplaintId] = useState("");

  const [volunteerData, setVolunteerData] = useState({
    name: "",
    mobile: "",
    age: "",
    area: "",
    skills: "",
    reason: "",
  });

  const [volunteerLoading, setVolunteerLoading] = useState(false);
  const [volunteerMessage, setVolunteerMessage] = useState("");
  const [volunteerId, setVolunteerId] = useState("");

  const stats = [
    { label: "Public Issues Received", value: "2,500+" },
    { label: "Community Visits", value: "180+" },
    { label: "Volunteer Network", value: "500+" },
    { label: "Citizen Support Cases", value: "1,200+" },
  ];

  const focusAreas = [
    "Youth Employment & Opportunities – युवाओं को रोजगार के अवसर, मार्गदर्शन और कौशल विकास से जोड़ने के लिए निरंतर प्रयास।",
    "Public Grievance Resolution – आम जनता की समस्याओं को सुनकर प्रशासन तक मजबूती से उठाना और उनका समाधान करवाने के लिए प्रयासरत रहना।",
    "Ward-Level Problem Solving – अपने वार्ड में सड़क, सफाई, पानी, बिजली और अन्य स्थानीय समस्याओं के समाधान के लिए सक्रिय पहल।",
    "Local Development in Rishikesh – ऋषिकेश क्षेत्र में विकास कार्यों और बुनियादी सुविधाओं को मजबूत करने के लिए लगातार प्रयास।",
    "Social Service Programs – सामाजिक सेवा, जनकल्याण और जरूरतमंद लोगों की सहायता के लिए विभिन्न कार्यक्रमों का संचालन।",
  ];

  const workHighlights = [
    {
      title: "जनसुनवाई एवं शिकायत निवारण",
      text: "स्थानीय नागरिकों की समस्याओं को सुनना, संबंधित विभागों तक पहुँचाना और समाधान की निगरानी करना।",
    },
    {
      title: "युवा एवं सामाजिक अभियान",
      text: "रक्तदान शिविर, सफाई अभियान, पौधारोपण, शिक्षा सहायता और युवाओं के लिए जागरूकता कार्यक्रम।",
    },
    {
      title: "क्षेत्रीय विकास मुद्दे",
      text: "सड़क, जलापूर्ति, स्वच्छता, विद्युत, वार्ड समस्याएँ और स्थानीय प्रशासन से समन्वय।",
    },
    {
      title: "OBC समाज प्रतिनिधित्व",
      text: "OBC समाज की आवाज़ को संगठन और जनमंच तक मज़बूती से पहुँचाना।",
    },
  ];

  const updates = [
    {
      date: "08 March 2026",
      title: "मालवीय नगर क्षेत्र में होली मिलन कार्यक्रम",
      desc: "मालवीय नगर क्षेत्र के निवासियों और साथियों के साथ होली के पावन पर्व को हर्षोल्लास के साथ मनाया तथा क्षेत्र के लोगों से मुलाकात कर उनकी समस्याओं और सुझावों पर चर्चा की।",
    },
    {
      date: "26 February 2026",
      title: "कानून व्यवस्था को लेकर ज्ञापन प्रेषित",
      desc: "राज्य में बिगड़ती कानून व्यवस्था के विरोध में कांग्रेस कार्यकर्ताओं के साथ उपजिलाधिकारी के माध्यम से माननीय राज्यपाल महोदय को ज्ञापन प्रेषित किया।",
    },
    {
      date: "20 February 2026",
      title: "वार्ड जनसमस्या बैठक",
      desc: "वार्ड के निवासियों से मुलाकात कर सड़क, सफाई, पानी और नाली जैसी स्थानीय समस्याओं पर चर्चा की तथा उनके समाधान के लिए संबंधित अधिकारियों से बात की।",
    },
    {
      date: "10 February 2026",
      title: "ओबीसी विभाग बैठक",
      desc: "ओबीसी समाज के साथ बैठक कर उनके मुद्दों और अधिकारों पर चर्चा की तथा संगठन को मजबूत करने के लिए कार्यकर्ताओं के साथ विचार-विमर्श किया।",
    },
    {
      date: "02 February 2026",
      title: "सामाजिक सेवा कार्यक्रम",
      desc: "क्षेत्र में सामाजिक सेवा गतिविधियों में भाग लिया और जरूरतमंद लोगों की सहायता कर जनकल्याण के कार्यों को आगे बढ़ाया।",
    },
  ];

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

  const wards = Array.from(
    { length: 40 },
    (_, i) => `Ward ${i + 1} (वार्ड ${i + 1})`
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleVolunteerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVolunteerData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setComplaintId("");

    try {
      const response = await fetch("/api/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setComplaintId(result.complaintId || "");
        setMessage(
          "Complaint submitted successfully. (शिकायत सफलतापूर्वक दर्ज हो गई है।)"
        );
        setFormData({
          name: "",
          mobile: "",
          ward: "",
          category: "",
          description: "",
          photo: "",
        });
      } else {
        setMessage(
          "Something went wrong. Please try again. (कुछ गलत हो गया, कृपया पुनः प्रयास करें।)"
        );
      }
    } catch {
      setMessage(
        "Server error. Please try again later. (सर्वर त्रुटि, कृपया बाद में पुनः प्रयास करें।)"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerLoading(true);
    setVolunteerMessage("");
    setVolunteerId("");

    try {
      const response = await fetch("/api/volunteers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(volunteerData),
      });

      const result = await response.json();

      if (result.success) {
        setVolunteerId(result.volunteerId || "");
        setVolunteerMessage(
          "Volunteer registration submitted successfully. (स्वयंसेवक पंजीकरण सफलतापूर्वक दर्ज हो गया है।)"
        );
        setVolunteerData({
          name: "",
          mobile: "",
          age: "",
          area: "",
          skills: "",
          reason: "",
        });
      } else {
        setVolunteerMessage(
          "Something went wrong. Please try again. (कुछ गलत हो गया, कृपया पुनः प्रयास करें।)"
        );
      }
    } catch {
      setVolunteerMessage(
        "Server error. Please try again later. (सर्वर त्रुटि, कृपया बाद में पुनः प्रयास करें।)"
      );
    } finally {
      setVolunteerLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,153,51,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(19,136,8,0.15),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
                Official Public Connect Platform
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Mahanagar Adhyaksh, OBC Vibhag Congress, Rishikesh
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                जनता से सीधा संवाद, जनसमस्याओं का समाधान, संगठन की मज़बूती और
                ऋषिकेश महानगर में जनसेवा को डिजिटल रूप से जोड़ने वाला एक आधुनिक
                प्लेटफ़ॉर्म।
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById("complaint-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Submit Issue (शिकायत दर्ज करें)
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("volunteer-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5"
              >
                Join Volunteer Team
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] bg-white/90 p-7 shadow-xl ring-1 ring-slate-200 backdrop-blur">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-full shadow-inner">
                  <img
                    src="/sumit-chaudhary.jpg"
                    alt="Sumit Chauhan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                    Har Ghar Tak Nyay, Har Dil Tak Vishwas.
                  </p>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                    Sumit Chauhan (Chaudhary)
                  </h2>
                  <p className="mt-2 text-slate-600">
                    ऋषिकेश महानगर में OBC समाज, युवाओं और आम नागरिकों की आवाज़ को
                    संगठन और प्रशासन तक प्रभावी ढंग से पहुँचाने हेतु समर्पित।
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                      Rishikesh
                    </span>
                    <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                      OBC Vibhag
                    </span>
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                      Congress Organization
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] bg-white p-6 shadow-lg ring-1 ring-slate-200"
                >
                  <div className="text-3xl font-bold">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "जनसमस्या दर्ज करें",
              desc: "पानी, सड़क, बिजली, सफाई, पेंशन, सरकारी योजना या किसी भी स्थानीय समस्या को सीधे दर्ज करें।",
              cta: "Issue Submit",
            },
            {
              title: "स्वयंसेवक बनें",
              desc: "युवा, सामाजिक कार्यकर्ता और स्थानीय नागरिक संगठन से जुड़कर जनसेवा अभियान का हिस्सा बन सकते हैं।",
              cta: "Join Team",
            },
            {
              title: "मुलाकात / संपर्क",
              desc: "जनसुनवाई, कार्यालय समय, फोन, ईमेल और व्हाट्सऐप के माध्यम से सीधे जुड़ें।",
              cta: "Contact Now",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-[28px] bg-white p-7 shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {card.desc}
              </p>
              <button className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold">
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="rounded-[30px] bg-slate-900 p-8 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
            About
          </p>
          <h3 className="mt-3 text-3xl font-bold">
            A trusted digital face for public leadership
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            यह वेबसाइट केवल परिचय के लिए नहीं है। इसका उद्देश्य जनता, कार्यकर्ताओं
            और समर्थकों को एक ही मंच पर जोड़ना है, जहाँ से जनसमस्या दर्ज हो सके,
            कार्यों की जानकारी मिले, सामाजिक कार्यक्रम दिखें और सीधे संपर्क का
            माध्यम उपलब्ध हो।
          </p>
          <div className="mt-7 grid gap-3">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl bg-white/10 px-4 py-3 text-sm"
              >
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {workHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[26px] bg-white p-6 shadow-lg ring-1 ring-slate-200"
            >
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="complaint-form"
        className="mx-auto max-w-7xl px-6 py-14 lg:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[30px] bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-green-700">
                  Citizen Connect
                </p>
                <h3 className="mt-2 text-3xl font-bold">
                  Public Issue Submission Form
                </h3>
              </div>
              <div className="hidden rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 md:block">
                Quick Response Workflow
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-7">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Full Name (पूरा नाम)"
                  required
                />

                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Mobile Number (मोबाइल नंबर)"
                  required
                />

                <select
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
                  required
                >
                  <option value="">Ward (वार्ड)</option>
                  {wards.map((ward) => (
                    <option key={ward} value={ward}>
                      {ward}
                    </option>
                  ))}
                </select>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
                  required
                >
                  <option value="">Issue Category (समस्या का प्रकार)</option>
                  <option value="Water Supply">
                    Water Supply (पानी की समस्या)
                  </option>
                  <option value="Road Problem">
                    Road Problem (सड़क की समस्या)
                  </option>
                  <option value="Drainage Issue">
                    Drainage Issue (नाली की समस्या)
                  </option>
                  <option value="Electricity Issue">
                    Electricity Issue (बिजली की समस्या)
                  </option>
                  <option value="Sanitation / Cleanliness">
                    Sanitation / Cleanliness (सफाई की समस्या)
                  </option>
                  <option value="Government Scheme Issue">
                    Government Scheme Issue (सरकारी योजना की समस्या)
                  </option>
                  <option value="Other">Other (अन्य)</option>
                </select>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="md:col-span-2 min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Describe the Problem (समस्या का विवरण)"
                  required
                />

                <input
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  className="md:col-span-2 rounded-2xl border border-dashed border-slate-300 px-4 py-3"
                  placeholder="Photo Link (फोटो लिंक)"
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-slate-500">
                  By submitting this form, your details may be used only for
                  grievance follow-up and public service assistance.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-2xl bg-gradient-to-r from-orange-500 to-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg disabled:opacity-60"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Complaint (शिकायत दर्ज करें)"}
                </button>
              </div>

              {message && (
                <div className="mt-4 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                  <p>{message}</p>
                  {complaintId && (
                    <p className="mt-2 font-semibold text-slate-900">
                      Complaint ID: {complaintId}
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>

          <div className="rounded-[30px] bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
              Recent Activities
            </p>
            <h3 className="mt-2 text-3xl font-bold">Updates & Ground Work</h3>
            <div className="mt-6 space-y-4">
              {updates.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
                    {item.date}
                  </div>
                  <h4 className="mt-2 text-lg font-bold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
        <div className="rounded-[30px] bg-white p-8 shadow-xl ring-1 ring-slate-200">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-orange-600">
                Visual Presence
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                Gallery & Campaign Moments
              </h3>
            </div>
            <button className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold">
              View Full Gallery
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="group rounded-[26px] border border-slate-200 bg-gradient-to-br from-orange-50 via-white to-green-50 p-6 shadow-sm transition hover:-translate-y-1"
              >
                <div className="h-36 overflow-hidden rounded-[22px] border border-slate-200 bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 text-base font-bold">{item.title}</div>
                <div className="mt-1 text-sm text-slate-600">
                  Public moments, outreach highlights and event documentation.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="volunteer-form"
        className="mx-auto max-w-7xl px-6 py-14 lg:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <p className="text-sm uppercase tracking-[0.25em] text-green-700">
              Join the Movement
            </p>
            <h3 className="mt-2 text-3xl font-bold">Volunteer Registration</h3>

            <form onSubmit={handleVolunteerSubmit} className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="name"
                  value={volunteerData.name}
                  onChange={handleVolunteerChange}
                  className="rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Full Name (पूरा नाम)"
                  required
                />
                <input
                  name="mobile"
                  value={volunteerData.mobile}
                  onChange={handleVolunteerChange}
                  className="rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Phone (मोबाइल नंबर)"
                  required
                />
                <input
                  name="age"
                  value={volunteerData.age}
                  onChange={handleVolunteerChange}
                  className="rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Age (आयु)"
                  required
                />
                <input
                  name="area"
                  value={volunteerData.area}
                  onChange={handleVolunteerChange}
                  className="rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Area / Ward (क्षेत्र / वार्ड)"
                  required
                />
                <input
                  name="skills"
                  value={volunteerData.skills}
                  onChange={handleVolunteerChange}
                  className="md:col-span-2 rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Skills (social media, events, field work, youth outreach)"
                  required
                />
                <textarea
                  name="reason"
                  value={volunteerData.reason}
                  onChange={handleVolunteerChange}
                  className="md:col-span-2 min-h-[120px] rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Why do you want to join? (आप क्यों जुड़ना चाहते हैं?)"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={volunteerLoading}
                className="mt-5 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg disabled:opacity-60"
              >
                {volunteerLoading
                  ? "Registering..."
                  : "Register Now (रजिस्टर करें)"}
              </button>

              {volunteerMessage && (
                <div className="mt-4 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                  <p>{volunteerMessage}</p>
                  {volunteerId && (
                    <p className="mt-2 font-semibold text-slate-900">
                      Volunteer ID: {volunteerId}
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>

          <div className="rounded-[30px] bg-gradient-to-br from-orange-500 via-white to-green-500 p-[1px] shadow-2xl">
            <div className="h-full rounded-[30px] bg-white p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-orange-600">
                Direct Contact
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                Office & Public Communication
              </h3>
              <div className="mt-6 grid gap-4">
                {[
                  [
                    "Office Address",
                    "Malviya Nagar, Veerbhadra, Rishikesh, Uttarakhand",
                  ],
                  ["Phone", "+91 9719339666"],
                  ["WhatsApp", "Click to chat support"],
                  ["Email", "chaudharysumit168@gmail.com"],
                  ["Public Meeting Hours", "Mon - Sat | 10:00 AM - 2:00 PM"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-slate-50 px-5 py-4"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {label}
                    </div>
                    <div className="mt-1 text-base font-semibold text-slate-900">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919719339666"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-green-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  WhatsApp Connect
                </a>

                <a
                  href="https://chat.whatsapp.com/ET8PlxTaOxcHXSTsBX86Kq?mode=gi_t"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
                >
                  Join Ward WhatsApp Group
                </a>

                <a
                  href="https://www.facebook.com/share/1Gctan27Ep/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/__sumit_chaudhary161?igsh=MTF0d291Yzdha3ZoMw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold"
                >
                  Instagram
                </a>

                <span className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-400">
                  YouTube
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/919719339666"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-5 py-4 text-sm font-bold text-white shadow-2xl"
      >
        WhatsApp
      </a>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="font-semibold text-slate-900">
              Official Public Website
            </div>
            <div>Mahanagar Adhyaksh, OBC Vibhag Congress, Rishikesh</div>
          </div>
          <div className="max-w-2xl">
            This website is intended for public communication, grievance
            collection, volunteer coordination and sharing updates related to
            local public service activities.
          </div>
        </div>
      </footer>
    </div>
  );
}