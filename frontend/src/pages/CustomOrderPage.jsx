import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';

export default function CustomOrderPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order-tracking');
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
              <div>
                <input className="pill-checkbox hidden" id="mat-wool" type="checkbox" />
                <label
                  className="cursor-pointer inline-flex items-center px-4 py-2 rounded-full border border-primary text-primary font-body-sm text-body-sm transition-colors"
                  htmlFor="mat-wool"
                >
                  New Zealand Wool
                </label>
              </div>
              <div>
                <input className="pill-checkbox hidden" id="mat-silk" type="checkbox" />
                <label
                  className="cursor-pointer inline-flex items-center px-4 py-2 rounded-full border border-primary text-primary font-body-sm text-body-sm transition-colors"
                  htmlFor="mat-silk"
                >
                  Pure Silk
                </label>
              </div>
              <div>
                <input className="pill-checkbox hidden" id="mat-cotton" type="checkbox" />
                <label
                  className="cursor-pointer inline-flex items-center px-4 py-2 rounded-full border border-primary text-primary font-body-sm text-body-sm transition-colors"
                  htmlFor="mat-cotton"
                >
                  Organic Cotton
                </label>
              </div>
              <div>
                <input className="pill-checkbox hidden" id="mat-bamboo" type="checkbox" />
                <label
                  className="cursor-pointer inline-flex items-center px-4 py-2 rounded-full border border-primary text-primary font-body-sm text-body-sm transition-colors"
                  htmlFor="mat-bamboo"
                >
                  Bamboo Silk
                </label>
              </div>
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
              ></textarea>
            </div>
          </section>

          {/* CTA */}
          <div className="pt-8">
            <button
              onClick={() => navigate('/order-tracking')}
              className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-4 rounded-full shadow-[0px_10px_30px_rgba(0,0,60,0.08)] hover:opacity-90 active:scale-95 transition-all flex justify-center items-center gap-2 cursor-pointer"
              type="button"
            >
              Request Quotation
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
