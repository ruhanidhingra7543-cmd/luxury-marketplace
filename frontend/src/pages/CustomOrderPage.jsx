import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import { createCustomOrder } from '../services/api';

export default function CustomOrderPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [width, setWidth] = useState('240');
  const [length, setLength] = useState('300');
  const [notes, setNotes] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState(['mat-wool', 'mat-silk']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const toggleMaterial = (id) => {
    setSelectedMaterials(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const materialLabels = {
        'mat-wool': 'New Zealand Wool',
        'mat-silk': 'Pure Silk',
        'mat-cotton': 'Organic Cotton',
        'mat-bamboo': 'Bamboo Silk'
      };

      await createCustomOrder({
        width: Number(width),
        length: Number(length),
        materials: selectedMaterials.map(m => materialLabels[m] || m),
        notes,
        referenceFile: selectedFileName || null
      });

      setSubmittedSuccess(true);
      setTimeout(() => {
        navigate('/order-tracking');
      }, 1500);
    } catch (err) {
      console.error('Custom order submission error:', err);
      navigate('/order-tracking');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-lg">
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .pill-checkbox:checked + label {
          background-color: #9f402d;
          color: #ffffff;
          border-color: #9f402d;
        }
      `}</style>

      <TopAppBar />

      <main className="flex-1 px-container-margin py-8 md:max-w-2xl md:mx-auto w-full">
        <header className="mb-section-gap text-center">
          <h2 className="font-headline-lg-mobile md:text-headline-lg text-primary mb-2">Bespoke Design Request</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Submit your specifications for a custom crafted rug. Our artisans will review and provide a quotation.
          </p>
        </header>

        {submittedSuccess && (
          <div className="mb-6 p-4 bg-tertiary-fixed/40 border border-tertiary rounded-lg text-center text-primary font-body-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-tertiary">check_circle</span>
            Bespoke request sent to our master weavers! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-section-gap flex flex-col">
          {/* Step 1: Upload Reference */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-title-md text-title-md text-primary">1. Reference Imagery</h3>
              <span className="material-symbols-outlined text-outline-variant" title="Upload moodboards, sketches, or room photos">
                info
              </span>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".svg,.png,.jpg,.jpeg,.pdf"
              className="hidden"
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border border-dashed border-outline-variant bg-surface-container-low rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-[32px] mb-2">upload_file</span>
              <p className="font-body-sm text-body-sm text-primary mb-1">
                {selectedFileName ? selectedFileName : 'Click to upload or drag and drop'}
              </p>
              <p className="font-label-caps text-label-caps text-on-surface-variant">SVG, PNG, JPG or PDF (max. 10MB)</p>
            </div>
          </section>

          {/* Step 2: Dimensions */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-title-md text-title-md text-primary">2. Dimensions</h3>
              <span className="material-symbols-outlined text-outline-variant" title="Specify the final woven size">
                info
              </span>
            </div>
            <div className="grid grid-cols-2 gap-gutter">
              <div className="relative">
                <input
                  className="block w-full bg-transparent border-0 border-b border-outline-variant py-2 focus:ring-0 focus:border-primary font-body-lg text-body-lg text-primary peer"
                  id="width"
                  placeholder=" "
                  required
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
                <label
                  className="absolute text-on-surface-variant font-body-sm text-body-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  htmlFor="width"
                >
                  Width (cm)
                </label>
              </div>
              <div className="relative">
                <input
                  className="block w-full bg-transparent border-0 border-b border-outline-variant py-2 focus:ring-0 focus:border-primary font-body-lg text-body-lg text-primary peer"
                  id="length"
                  placeholder=" "
                  required
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
                <label
                  className="absolute text-on-surface-variant font-body-sm text-body-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  htmlFor="length"
                >
                  Length (cm)
                </label>
              </div>
            </div>
          </section>

          {/* Step 3: Materials */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-title-md text-title-md text-primary">3. Materials</h3>
              <span className="material-symbols-outlined text-outline-variant" title="Select primary fibers for the weave">
                info
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { id: 'mat-wool', label: 'New Zealand Wool' },
                { id: 'mat-silk', label: 'Pure Silk' },
                { id: 'mat-cotton', label: 'Organic Cotton' },
                { id: 'mat-bamboo', label: 'Bamboo Silk' }
              ].map(mat => {
                const checked = selectedMaterials.includes(mat.id);
                return (
                  <div key={mat.id}>
                    <input
                      className="pill-checkbox hidden"
                      id={mat.id}
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleMaterial(mat.id)}
                    />
                    <label
                      className="cursor-pointer inline-flex items-center px-4 py-2 rounded-full border border-primary text-primary font-body-sm text-body-sm transition-colors"
                      htmlFor={mat.id}
                    >
                      {mat.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Additional Notes */}
          <section className="space-y-4">
            <div className="relative mt-4">
              <textarea
                className="block w-full bg-surface-container-low border-0 border-b border-outline-variant py-3 px-4 focus:ring-0 focus:border-primary font-body-sm text-body-sm text-primary rounded-t-DEFAULT resize-none peer"
                id="notes"
                placeholder="Any specific design details or knot count preferences..."
                rows="3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </section>

          {/* CTA */}
          <div className="pt-8">
            <button
              disabled={isSubmitting}
              className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-4 rounded-full shadow-[0px_10px_30px_rgba(0,0,60,0.08)] hover:opacity-90 active:scale-95 transition-all flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
              type="submit"
            >
              {isSubmitting ? 'Submitting Specifications...' : 'Request Quotation'}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
