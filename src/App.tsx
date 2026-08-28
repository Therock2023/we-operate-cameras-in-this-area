import React, { useState } from 'react';
import { Download, ShieldCheck } from 'lucide-react';

export default function App() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-[#0B192C] selection:text-white">
      {/* Semantic Header */}
      <header id="site-header" className="w-full bg-[#0B192C] text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-sm tracking-wide text-white">
              CCTV Warning Graphic
            </span>
          </div>
          <span className="text-xs text-slate-400 font-medium">Free PNG Asset</span>
        </div>
      </header>

      {/* Semantic Main Content */}
      <main id="main-content" className="flex-1 max-w-2xl w-full mx-auto px-4 py-8 sm:py-12 flex flex-col items-center justify-center text-center">
        
        {/* H1 Headline */}
        <h1 id="main-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight">
          We Operate Cameras In This Area – Free PNG Download
        </h1>

        {/* Short 1-2 sentence description */}
        <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed">
          Download the high-resolution CCTV security warning graphic for print and digital use. Ready for signs, stickers, decals, and magnets.
        </p>

        {/* Preview Thumbnail */}
        <div className="mt-8 mb-6 w-full max-w-sm flex flex-col items-center">
          <div className="w-full bg-white p-3 rounded-2xl border border-slate-200 shadow-md">
            <img
              id="cctv-sign-thumbnail"
              src="/we-operate-cameras-in-this-area.png"
              alt="we operate cameras in this area sticker and sign"
              width={1200}
              height={1500}
              className="w-full h-auto object-contain rounded-xl select-none"
              loading="eager"
            />
          </div>
          <span className="mt-2.5 text-xs text-slate-500 font-medium">
            1200 × 1500 px • High-resolution PNG format
          </span>
        </div>

        {/* ONE Clear Download Button using <a> tag with download attribute */}
        <div className="w-full max-w-sm">
          <a
            id="download-png-button"
            href="/we-operate-cameras-in-this-area.png"
            download="we-operate-cameras-in-this-area.png"
            onClick={handleDownload}
            className="w-full inline-flex items-center justify-center space-x-3 bg-[#0B192C] hover:bg-[#1E3E62] active:bg-[#081220] text-white text-lg font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] cursor-pointer"
          >
            <Download className="w-5 h-5 stroke-[2.5]" />
            <span>Download Free PNG</span>
          </a>

          {downloaded && (
            <p id="download-success-note" className="mt-2.5 text-xs text-emerald-700 font-semibold">
              ✓ Download started: we-operate-cameras-in-this-area.png
            </p>
          )}
        </div>

      </main>

      {/* Semantic Footer */}
      <footer id="site-footer" className="w-full bg-slate-900 text-slate-400 border-t border-slate-800 py-6 px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center space-y-2">
          {/* Hidden/small-print keyword line naturally listing format variations */}
          <p id="footer-keyword-formats" className="text-[11px] text-slate-300 max-w-lg leading-normal">
            Available format variations: sticker, small sticker, decal, magnet, metal sticker, metal sign.
          </p>

          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Security Notice Graphics • Free Public Download
          </p>
        </div>
      </footer>
    </div>
  );
}
