"use client";
import { useRegistrationContext } from "@/contexts/RegistrationContext";
import { IUser } from "@/types/User";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data } = useRegistrationContext();

  console.log("data", data);
  useEffect(() => {
    const userString = localStorage.getItem("user");
    const user: IUser | null = userString ? JSON.parse(userString) : null;
    console.log(user);
    if (user) {
      user.position === "teacher"
        ? router.push("/admin/dashboard")
        : router.push("/student/dashboard");
    } else {
      // router.push("/auth/login");
      console.log(user);
    }
  }, [router]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
