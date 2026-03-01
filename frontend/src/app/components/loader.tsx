import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img
        src="/images/logo.png"  // <-- your logo here
        alt="Clinic Logo"
        className="w-32 h-32 logo-animation"
      />
      <p className="mt-4 text-gray-600 text-sm tracking-wide">
        Creating Beautiful Smiles...
      </p>
    </div>
  );
}
