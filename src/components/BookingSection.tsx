'use client';

import React, { useMemo, useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { divePackages } from '@/lib/packages';
import { Calendar, Users, LifeBuoy, ClipboardList, Loader } from 'lucide-react';
import { showToast } from './Toast';

export const BookingSection: React.FC = () => {
  const [form, setForm] = useState({
    packageSlug: divePackages[0]?.slug ?? '',
    startDate: '',
    startTime: '09:00',
    divers: 2,
    experience: 'Open Water',
    gearRental: true,
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedPackage = useMemo(
    () => divePackages.find((pkg) => pkg.slug === form.packageSlug) ?? divePackages[0],
    [form.packageSlug]
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.startDate) {
      newErrors.startDate = 'Please select a date';
    }

    if (form.divers < 1 || form.divers > 8) {
      newErrors.divers = 'Divers must be between 1 and 8';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Booking submitted:', form);
    showToast('Booking request submitted! We\'ll confirm availability and send you a checklist.', 'success');

    // Reset form
    setForm({
      packageSlug: divePackages[0]?.slug ?? '',
      startDate: '',
      startTime: '09:00',
      divers: 2,
      experience: 'Open Water',
      gearRental: true,
      notes: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-primary-navy">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
          <div>
            <p className="text-accent-cyan uppercase tracking-[0.2em] text-xs mb-2">Template Booking System</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Try the booking form
            </h2>
            <p className="text-text-gray max-w-2xl">
              This is a fully functional booking form template with live validation. Try submitting to see form validation, loading states, and success notifications. Customize the packages and fields to match your business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {[
            { label: '1', text: 'Pick a package', accent: 'bg-accent-cyan/15 border-accent-cyan/40 text-accent-cyan' },
            { label: '2', text: 'Choose dates & group', accent: 'bg-primary-dark/60 border-border-cyan/40 text-white' },
            { label: '3', text: 'Confirm & get checklist', accent: 'bg-primary-dark/60 border-border-cyan/40 text-white' },
          ].map((step) => (
            <div
              key={step.label}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${step.accent}`}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-navy border border-border-cyan flex items-center justify-center text-xs font-bold">
                {step.label}
              </div>
              <p className="text-sm">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 rounded-2xl border-2 border-border-cyan bg-primary-dark/60 p-6 md:p-8 backdrop-blur-sm space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-text-gray mb-2">Select package</label>
                <select
                  name="packageSlug"
                  value={form.packageSlug}
                  onChange={handleChange}
                  className="w-full bg-primary-navy border-2 border-border-cyan rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none"
                >
                  {divePackages.map((pkg) => (
                    <option key={pkg.slug} value={pkg.slug}>
                      {pkg.title} — {pkg.price}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-text-gray mb-2">Cert level / experience</label>
                <select
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className="w-full bg-primary-navy border-2 border-border-cyan rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none"
                >
                  <option>Discover / First timer</option>
                  <option>Open Water</option>
                  <option>Advanced</option>
                  <option>Rescue / Pro track</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-text-gray mb-2">Preferred date</label>
                <div className="flex items-center gap-2 px-4 py-3 bg-primary-navy border-2 border-border-cyan rounded-lg">
                  <Calendar className="text-accent-cyan w-5 h-5" />
                  <input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className="bg-transparent text-white w-full outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-text-gray mb-2">Start time</label>
                <input
                  type="time"
                  name="startTime"
                  value={form.startTime}
                  onChange={handleChange}
                  className="w-full bg-primary-navy border-2 border-border-cyan rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-text-gray mb-2">Number of divers</label>
                <div className="flex items-center gap-2 px-4 py-3 bg-primary-navy border-2 border-border-cyan rounded-lg">
                  <Users className="text-accent-cyan w-5 h-5" />
                  <input
                    type="number"
                    name="divers"
                    value={form.divers}
                    onChange={handleChange}
                    min={1}
                    max={8}
                    className="bg-transparent text-white w-full outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-primary-navy border-2 border-border-cyan rounded-lg px-4 py-3">
                <input
                  type="checkbox"
                  id="gearRental"
                  name="gearRental"
                  checked={form.gearRental}
                  onChange={handleChange}
                  className="w-4 h-4 accent-accent-cyan"
                />
                <div>
                  <label htmlFor="gearRental" className="text-white font-semibold block">
                    Need rental gear?
                  </label>
                  <p className="text-text-gray text-sm">Tanks & weights included by default.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-primary-navy border-2 border-border-cyan rounded-lg px-4 py-3">
                <LifeBuoy className="text-accent-cyan w-5 h-5" />
                <div>
                  <p className="text-white font-semibold">Add-ons</p>
                  <p className="text-text-gray text-sm">Nitrox / night dive / private guide? Add below.</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-text-gray mb-2">Notes / add-ons</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your last dive, gear sizes, or add-ons you want."
                className="w-full bg-primary-navy border-2 border-border-cyan rounded-lg px-4 py-3 text-white placeholder-text-gray focus:border-accent-cyan outline-none resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-accent-cyan text-primary-dark font-bold rounded-lg hover:bg-accent-cyan/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Book this dive'
                )}
              </button>
            </div>
          </form>

          {/* Summary */}
          <div className="space-y-4">
            <div className="rounded-2xl border-2 border-border-cyan bg-primary-dark/70 p-5 shadow-lg shadow-accent-cyan/10">
              <div className="flex items-center gap-3 mb-3">
                <ClipboardList className="text-accent-cyan w-5 h-5" />
                <p className="text-white font-semibold">Booking summary (live preview)</p>
              </div>
              <div className="space-y-2 text-sm text-text-gray">
                <div className="flex justify-between">
                  <span>Package</span>
                  <span className="text-white">{selectedPackage?.title}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date &amp; time</span>
                  <span className="text-white">
                    {form.startDate || 'Select date'} @ {form.startTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Divers</span>
                  <span className="text-white">{form.divers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience level</span>
                  <span className="text-white">{form.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span>Gear rental</span>
                  <span className="text-white">{form.gearRental ? 'Needed' : 'Bringing own'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Indicative price</span>
                  <span className="text-accent-cyan font-semibold">{selectedPackage?.price}</span>
                </div>
              </div>
              <p className="text-xs text-text-gray mt-3">
                We&apos;ll confirm pricing and timing based on your selections.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
