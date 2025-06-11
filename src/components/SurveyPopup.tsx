"use client";
import { useEffect, useState } from "react";

export default function SurveyPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Only show the popup if not already closed in this session
    if (typeof window !== "undefined" && !sessionStorage.getItem("dg_survey_popup_closed")) {
      let scrolled = false;
      let timer: NodeJS.Timeout;
      const onScroll = () => {
        if (!scrolled) {
          scrolled = true;
          timer = setTimeout(() => setShow(true), 3000);
          window.removeEventListener("scroll", onScroll);
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        if (timer) clearTimeout(timer);
      };
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("dg_survey_popup_closed", "1");
    }
  };

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-xl font-bold mb-4">Would you be willing to try DissolvaGum?</h2>
        <p className="text-lg font-semibold mb-2">We'd love your feedback!</p>
        <p className="mb-4">If you can spare just 40 seconds, please help us by sharing your thoughts on our DissolvaGum concept. Your feedback will help shape the future of eco-friendly gum. Thank you!</p>
        <a
          href="https://forms.gle/XshZmHL6ix4sesuE9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition mb-2"
        >
          Take the Survey
        </a>
        <div className="mb-2">or</div>
        <a
          href="/support-interest"
          className="inline-block underline text-teal-700 hover:text-teal-900"
        >
          Visit our Supporter Form
        </a>
        <button
          className="block mt-6 mx-auto text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
