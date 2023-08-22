"use client";
import { useRegistrationContext } from "@/contexts/RegistrationContext";
import { useUserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  // const { user } = useUserContext();
  const { data } = useRegistrationContext();

  console.log("data", data);
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      router.push("/admin/dashboard");
    } else {
      router.push("/auth/login");
    }
  }, [router]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
