"use client";

import { Star } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import GoogleReviews from "../GoogleReviews";

export default function Testimonials() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
        {/* Orbis Nexa Review Summary */}
        <div className="w-full shrink-0 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:w-[270px]">
          <div className="flex items-center gap-4">
            <img
              src="/Logo/OrbisLogo.webp"
              alt="Orbis Nexa"
              className="h-14 w-14 rounded-xl bg-white object-contain p-1 shadow-sm"
            />

            <div>
              <h2 className="text-xl font-bold text-gray-900">Orbis Nexa</h2>

              <p className="mt-1 text-sm text-gray-500">Student Reviews</p>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-6 flex items-center gap-2">
            <span className="text-4xl font-extrabold text-gray-900">4.6</span>

            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={17} fill="#ff8b25" stroke="#ff8b25" />
                ))}
              </div>

              <p className="mt-1 text-xs text-gray-500">Excellent Rating</p>
            </div>
          </div>

          {/* Review Count */}
          <div className="mt-5 border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-600">
              Based on{" "}
              <span className="font-bold text-gray-900">23 reviews</span>
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-gray-500">Powered by</span>

              <FaGoogle className="text-xl" />
              <span className="text-sm font-semibold text-gray-700">
                Google
              </span>
            </div>
          </div>
        </div>

        {/* Google Reviews Carousel */}
        <div className="w-full min-w-0 flex-1">
          <GoogleReviews />
        </div>
      </div>
    </section>
  );
}
