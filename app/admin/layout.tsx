import Admin from "@/components/Layouts/Admin";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <Admin>{children}</Admin>;
}
