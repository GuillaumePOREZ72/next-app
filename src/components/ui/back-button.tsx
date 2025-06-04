"use client";

import { ArrowLeftIcon } from "lucide-react";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center w-full text-gray-500 dark:text-gray-400 px-6 py-3 rounded-lg hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
    >
      <ArrowLeftIcon className="w-4 h-4 mr-2" />
      Page précédente
    </button>
  );
}
