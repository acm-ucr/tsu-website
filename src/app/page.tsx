"use client";

import ThaiStudentUnion from "../components/home/ThaiStudentUnion";
import WhoAreWe from "../components/home/whoAreWe"; // double-check casing!
import JoinUs from "../components/home/JoinUs";

export default function Home() {
  return (
    <main>
      <ThaiStudentUnion />
      <WhoAreWe />
      <JoinUs />
    </main>
  );
}