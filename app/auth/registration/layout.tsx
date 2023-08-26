import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-registration bg-white mx-auto px-9 py-10 rounded-xl shadow-xl">
      {children}
    </div>
  );
}
