"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Page() { 
  const router = useRouter();
  const isLoggedIn = false; // replace with real auth check

  useEffect(() => {
    if (isLoggedIn) { 
        router.push("/compare");
    } },[isLoggedIn, router]);

  return  <h1 className="text-3xl font-bold underline">
      Home Page
    </h1>
}