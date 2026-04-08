"use client";

import { useRef, useState } from "react";
import { translations, Lang } from "@/lib/translations";
import { motion, useInView } from "framer-motion";

interface RegistrationSectionProps {
  lang: Lang;
}

const GOOGLE_SCRIPT_URL = "https://script.google.com/PLACEHOLDER";
const CONTACT_EMAIL = "info@bouwplaatsautomatisering.nl";

const TSHIRT_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  tshirt: string;
  remarks: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function RegistrationSection({ lang }: RegistrationSectionProps) {
  const t = translations[lang].registration;
  const f = t.form;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    tshirt: "",
    remarks: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName.trim()) newErrors.firstName = f.required;
    if (!formData.lastName.trim()) newErrors.lastName = f.required;
    if (!formData.company.trim()) newErrors.company = f.required;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = f.required;
    }
    if (!formData.phone.trim()) newErrors.phone = f.required;
    if (!formData.tshirt) newErrors.tshirt = f.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const body = `Naam: ${formData.firstName} ${formData.lastName}
Bedrijf: ${formData.company}
E-mail: ${formData.email}
Telefoon: ${formData.phone}
T-shirt maat: ${formData.tshirt}
Opmerkingen: ${formData.remarks}`;

    // Open mailto in background
    const subject = encodeURIComponent("Aanmelding BPA Bluebeam Day 2026");
    const bodyEncoded = encodeURIComponent(body);
    window.open(
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${bodyEncoded}`,
      "_blank"
    );

    // Also try to send to Google Sheets
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }),
      });
    } catch {
      // Google Sheets is best-effort; mailto is primary
    }

    setStatus("success");
  };

  const inputClass = (field: keyof FormData) =>
    `form-input w-full px-4 py-3 rounded-xl border text-sm font-medium text-gray-900 placeholder-gray-400 transition-all duration-200 bg-white ${
      errors[field]
        ? "border-red-300 bg-red-50"
        : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
    }`;

  return (
    <section
      id="aanmelden"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #faf5ff 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-white px-4 py-1.5 rounded-full mb-4 border border-blue-100 shadow-sm">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl shadow-blue-900/10 border border-white/80 p-6 sm:p-10"
        >
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{f.successTitle}</h3>
              <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">{f.successMessage}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 px-6 py-3 text-sm font-semibold text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors"
              >
                ← Terug
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {f.firstName} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jan"
                    className={inputClass("firstName")}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {f.lastName} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="de Vries"
                    className={inputClass("lastName")}
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {f.company} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Uw bedrijfsnaam"
                  className={inputClass("company")}
                />
                {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
              </div>

              {/* Email + Phone row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {f.email} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jan@bedrijf.nl"
                    className={inputClass("email")}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {f.phone} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+31 6 12345678"
                    className={inputClass("phone")}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              {/* T-shirt size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {f.tshirt} <span className="text-red-400">*</span>
                </label>
                <select
                  name="tshirt"
                  value={formData.tshirt}
                  onChange={handleChange}
                  className={`${inputClass("tshirt")} appearance-none cursor-pointer`}
                >
                  <option value="">{f.tshirtPlaceholder}</option>
                  {TSHIRT_SIZES.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                {errors.tshirt && <p className="mt-1 text-xs text-red-500">{errors.tshirt}</p>}
              </div>

              {/* Remarks */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {f.remarks}
                </label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  rows={3}
                  placeholder={f.remarksPlaceholder}
                  className={`${inputClass("remarks")} resize-none`}
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                  {f.errorMessage}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {f.submitting}
                  </>
                ) : (
                  <>
                    {f.submit}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400 mt-2">
                Door u aan te melden gaat u akkoord met de verwerking van uw gegevens door BPA Bouwplaatsautomatisering.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
