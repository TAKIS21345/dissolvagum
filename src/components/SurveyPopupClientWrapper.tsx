"use client";
import dynamic from "next/dynamic";

const SurveyPopup = dynamic(() => import("@/components/SurveyPopup"), { ssr: false });

export default function SurveyPopupClientWrapper() {
  return <SurveyPopup />;
}
