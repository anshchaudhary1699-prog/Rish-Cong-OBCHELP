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

  const [trackId, setTrackId] = useState("");
  const [trackingLoading, setTrackingLoading] = useState(false);
  const [trackingMessage, setTrackingMessage] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);

 const stats = [
  { label: "Total Complaints", value: "2500+", sub: "कुल शिकायतें" },
  { label: "Pending Cases", value: "420+", sub: "लंबित मामले" },
  { label: "Resolved Cases", value: "2080+", sub: "निस्तारित मामले" },
  { label: "Active Volunteers", value: "500+", sub: "सक्रिय स्वयंसेवक" },
];

  const focusAreas = [
    "Youth Employment & Opportunities – युवाओं को रोजगार, मार्गदर्शन और कौशल विकास से जोड़ने का निरंतर प्रयास।",
    "Public Grievance Resolution – आम जनता की समस्याओं को सुनकर प्रशासन तक मजबूती से उठाना।",
    "Ward-Level Problem Solving – सड़क, सफाई, पानी, बिजली और स्थानीय समस्याओं के समाधान के लिए सक्रिय पहल।",
    "Local Development in Rishikesh – ऋषिकेश क्षेत्र में विकास कार्यों और बुनियादी सुविधाओं को मजबूत करना।",
    "Social Service Programs – सामाजिक सेवा, जनकल्याण और जरूरतमंदों की सहायता के लिए निरंतर प्रयास।",
  ];

  const updates = [
    {
      date: "08 March 2026",
      title: "मालवीय नगर क्षेत्र में होली मिलन कार्यक्रम",
      desc: "क्षेत्रवासियों और साथियों के साथ होली पर्व मनाया तथा नागरिकों की समस्याओं और सुझावों पर चर्चा की।",
    },
    {
      date: "26 February 2026",
      title: "कानून व्यवस्था को लेकर ज्ञापन प्रेषित",
      desc: "कांग्रेस कार्यकर्ताओं के साथ कानून व्यवस्था के मुद्दे पर उपजिलाधिकारी के माध्यम से ज्ञापन प्रेषित किया।",
    },
    {
      date: "20 February 2026",
      title: "वार्ड जनसमस्या बैठक",
      desc: "वार्ड में सड़क, सफाई, पानी और नाली की समस्याओं पर नागरिकों से चर्चा और समाधान हेतु पहल।",
    },
    {
      date: "10 February 2026",
      title: "ओबीसी विभाग बैठक",
      desc: "ओबीसी समाज के मुद्दों, अधिकारों और संगठन सशक्तिकरण पर कार्यकर्ताओं के साथ बैठक।",
    },
  ];

  const testimonials = [
    {
      name: "स्थानीय निवासी",
      text: "समस्याएँ सुनने और अधिकारियों तक पहुँचाने में सक्रिय भूमिका दिखाई गई है।",
    },
    {
      name: "युवा कार्यकर्ता",
      text: "युवाओं को जोड़ने और सामाजिक भागीदारी बढ़ाने के लिए अच्छा नेतृत्व मिला है।",
    },
    {
      name: "क्षेत्रीय नागरिक",
      text: "जनसंपर्क और जनसुनवाई की वजह से लोगों का विश्वास मजबूत हुआ है।",
    },
  ];

  const gallery = [
    { title: "होली मिलन कार्यक्रम", img: "/holi-milan-1.jpg" },
    { title: "होली मिलन कार्यक्रम", img: "/holi-milan-2.jpg" },
    { title: "होली मिलन कार्यक्रम", img: "/holi-milan-3.jpg" },
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

  const handleTrackComplaint = async (e: React.FormEvent) => {
    e.preventDefault();
    setTrackingLoading(true);
    setTrackingMessage("");
    setTrackingResult(null);

    try {
      const response = await fetch("/api/track-complaint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ complaintId: trackId }),
      });

      const result = await response.json();

      if (result.success) {
        setTrackingResult(result.complaint);
        setTrackingMessage(
          "Complaint found successfully. (शिकायत सफलतापूर्वक मिल गई है।)"
        );
      } else {
        setTrackingMessage(
          result.message || "Complaint ID not found. (शिकायत आईडी नहीं मिली।)"
        );
      }
    } catch {
      setTrackingMessage(
        "Server error. Please try again later. (सर्वर त्रुटि, कृपया बाद में पुनः प्रयास करें।)"
      );
    } finally {
      setTrackingLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.28),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.22),transparent_28%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.06),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-14">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center rounded-full border border-orange-400/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              Official Public Connect Platform
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/919719339666"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg"
              >
                WhatsApp Connect
              </a>
              <a
                href="https://chat.whatsapp.com/ET8PlxTaOxcHXSTsBX86Kq?mode=gi_t"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                Join Ward Group
              </a>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                Har Ghar Tak Nyay, Har Dil Tak Vishwas.
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Sumit Chauhan
                <span className="block text-orange-400">(Chaudhary)</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Mahanagar Adhyaksh, OBC Vibhag Congress, Rishikesh. जनसंपर्क,
                जनसमस्या समाधान, युवा सशक्तिकरण और क्षेत्रीय विकास के लिए समर्पित
                एक आधुनिक सार्वजनिक मंच।
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("complaint-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-2xl bg-orange-500 px-6 py-4 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1"
                >
                  Submit Complaint (शिकायत दर्ज करें)
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("volunteer-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
                >
                  Become Volunteer (स्वयंसेवक बनें)
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {stats.map((item) => (
    <div
      key={item.label}
      className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur hover:scale-105 transition"
    >
      <div className="text-3xl font-black text-white">{item.value}</div>
      <div className="mt-2 text-sm font-semibold text-white">{item.label}</div>
      <div className="mt-1 text-xs text-slate-300">{item.sub}</div>
    </div>
  ))}
</div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-orange-500/30 via-transparent to-green-500/30 blur-2xl" />
              <div className="relative rounded-[36px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <div className="overflow-hidden rounded-[28px] bg-white">
                  <img
                    src="/sumit-chaudhary.jpg"
                    alt="Sumit Chauhan"
                    className="h-[420px] w-full object-cover"
                  />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-orange-500/15 p-4 text-center">
                    <div className="text-sm font-bold text-orange-300">Rishikesh</div>
                  </div>
                  <div className="rounded-2xl bg-green-500/15 p-4 text-center">
                    <div className="text-sm font-bold text-green-300">OBC Vibhag</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-sm font-bold text-white">Congress</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
              Leadership Priorities
            </p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Mission, Vision & Public Work
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {focusAreas.map((area) => (
            <div
              key={area}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm leading-7 text-slate-700">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Complaint Tracking
            </p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Track Complaint by ID
            </h2>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <form
              onSubmit={handleTrackComplaint}
              className="grid gap-4 md:grid-cols-[1fr_auto]"
            >
              <input
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
                className="rounded-2xl border border-slate-300 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter Complaint ID (शिकायत आईडी दर्ज करें)"
                required
              />
              <button
                type="submit"
                disabled={trackingLoading}
                className="rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg disabled:opacity-60"
              >
                {trackingLoading ? "Searching..." : "Track Now"}
              </button>
            </form>

            {trackingMessage && (
              <div className="mt-5 rounded-2xl bg-slate-100 px-4 py-4 text-sm text-slate-700">
                {trackingMessage}
              </div>
            )}

            {trackingResult && (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Complaint ID
                  </div>
                  <div className="mt-2 text-base font-bold">
                    {trackingResult.complaintId}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Status
                  </div>
                  <div className="mt-2 text-base font-bold">
                    {trackingResult.status}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Ward
                  </div>
                  <div className="mt-2 text-base font-bold">
                    {trackingResult.ward}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Category
                  </div>
                  <div className="mt-2 text-base font-bold">
                    {trackingResult.category}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:col-span-2">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Description
                  </div>
                  <div className="mt-2 text-base font-bold">
                    {trackingResult.description}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:col-span-2">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Notes
                  </div>
                  <div className="mt-2 text-base font-bold">
                    {trackingResult.notes || "No notes yet"}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              Public Action
            </p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Complaint & Volunteer Action Center
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div
              id="complaint-form"
              className="rounded-[32px] bg-white p-8 shadow-xl ring-1 ring-slate-200"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-black">
                  Public Issue Submission Form
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  अपनी समस्या सीधे दर्ज करें और Complaint ID प्राप्त करें।
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                </div>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="min-h-[140px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Describe the Problem (समस्या का विवरण)"
                  required
                />

                <input
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-dashed border-slate-300 px-4 py-3"
                  placeholder="Photo Link (फोटो लिंक)"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-green-600 px-5 py-4 text-sm font-bold text-white shadow-lg disabled:opacity-60"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Complaint (शिकायत दर्ज करें)"}
                </button>

                {message && (
                  <div className="rounded-2xl bg-slate-100 px-4 py-4 text-sm text-slate-700">
                    <p>{message}</p>
                    {complaintId && (
                      <p className="mt-2 font-bold text-slate-900">
                        Complaint ID: {complaintId}
                      </p>
                    )}
                  </div>
                )}
              </form>
            </div>

            <div
              id="volunteer-form"
              className="rounded-[32px] bg-slate-950 p-8 text-white shadow-xl"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-black">Volunteer Registration</h3>
                <p className="mt-2 text-sm text-slate-300">
                  जनसेवा अभियान से जुड़ें और क्षेत्रीय बदलाव का हिस्सा बनें।
                </p>
              </div>

              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="name"
                    value={volunteerData.name}
                    onChange={handleVolunteerChange}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300"
                    placeholder="Full Name (पूरा नाम)"
                    required
                  />
                  <input
                    name="mobile"
                    value={volunteerData.mobile}
                    onChange={handleVolunteerChange}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300"
                    placeholder="Phone (मोबाइल नंबर)"
                    required
                  />
                  <input
                    name="age"
                    value={volunteerData.age}
                    onChange={handleVolunteerChange}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300"
                    placeholder="Age (आयु)"
                    required
                  />
                  <input
                    name="area"
                    value={volunteerData.area}
                    onChange={handleVolunteerChange}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300"
                    placeholder="Area / Ward (क्षेत्र / वार्ड)"
                    required
                  />
                </div>

                <input
                  name="skills"
                  value={volunteerData.skills}
                  onChange={handleVolunteerChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300"
                  placeholder="Skills (social media, events, field work, youth outreach)"
                  required
                />

                <textarea
                  name="reason"
                  value={volunteerData.reason}
                  onChange={handleVolunteerChange}
                  className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300"
                  placeholder="Why do you want to join? (आप क्यों जुड़ना चाहते हैं?)"
                  required
                />

                <button
                  type="submit"
                  disabled={volunteerLoading}
                  className="w-full rounded-2xl bg-orange-500 px-5 py-4 text-sm font-bold text-white shadow-lg disabled:opacity-60"
                >
                  {volunteerLoading
                    ? "Registering..."
                    : "Register Now (रजिस्टर करें)"}
                </button>

                {volunteerMessage && (
                  <div className="rounded-2xl bg-white/10 px-4 py-4 text-sm text-white">
                    <p>{volunteerMessage}</p>
                    {volunteerId && (
                      <p className="mt-2 font-bold">Volunteer ID: {volunteerId}</p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
            Public Work Timeline
          </p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Recent Ground Activities
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {updates.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                {item.date}
              </div>
              <h3 className="mt-3 text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
                Media Preview
              </p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Gallery & Campaign Moments
              </h2>
            </div>

            <a
              href="/gallery"
              className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition"
            >
              View Full Gallery
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="overflow-hidden rounded-[28px] bg-white shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    जनसंपर्क, सामाजिक संवाद और क्षेत्रीय गतिविधियों की झलक।
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
            Public Voice
          </p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            What People Say
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-7 text-slate-600">“{item.text}”</p>
              <div className="mt-5 text-sm font-black text-slate-900">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
                Direct Contact
              </p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Office & Public Communication
              </h2>
              <div className="mt-8 grid gap-4">
                {[
                  [
                    "Office Address",
                    "Malviya Nagar, Veerbhadra, Rishikesh, Uttarakhand",
                  ],
                  ["Phone", "+91 9719339666"],
                  ["Email", "chaudharysumit168@gmail.com"],
                  ["Meeting Hours", "Mon - Sat | 10:00 AM - 2:00 PM"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      {label}
                    </div>
                    <div className="mt-1 text-base font-semibold text-white">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-black">Quick Connect</h3>
              <p className="mt-2 text-sm text-slate-300">
                वेबसाइट, सोशल मीडिया और व्हाट्सऐप के माध्यम से सीधे जुड़ें।
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919719339666"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-green-600 px-5 py-3 text-sm font-bold text-white"
                >
                  WhatsApp Connect
                </a>
                <a
                  href="https://chat.whatsapp.com/ET8PlxTaOxcHXSTsBX86Kq?mode=gi_t"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-bold text-white"
                >
                  Join Ward Group
                </a>
                <a
                  href="https://www.facebook.com/share/1Gctan27Ep/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/__sumit_chaudhary161?igsh=MTF0d291Yzdha3ZoMw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+919719339666"
          className="flex items-center justify-center rounded-full bg-blue-600 px-5 py-4 text-sm font-bold text-white shadow-2xl transition hover:scale-105"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/919719339666"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center rounded-full bg-green-600 px-5 py-4 text-sm font-bold text-white shadow-2xl transition hover:scale-105"
        >
          💬 WhatsApp
        </a>

        <button
          onClick={() =>
            document
              .getElementById("complaint-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center justify-center rounded-full bg-orange-500 px-5 py-4 text-sm font-bold text-white shadow-2xl transition hover:scale-105"
        >
          📝 Complaint
        </button>

        <button
          onClick={() =>
            document
              .getElementById("volunteer-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center justify-center rounded-full bg-purple-600 px-5 py-4 text-sm font-bold text-white shadow-2xl transition hover:scale-105"
        >
          🤝 Volunteer
        </button>
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="font-black text-slate-900">
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