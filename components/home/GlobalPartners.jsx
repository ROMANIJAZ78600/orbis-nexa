"use client";

import { useState } from "react";
import { motion } from "framer-motion";
const countries = [
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
  { name: "Germany", code: "de" },
  { name: "Japan", code: "jp" },
  { name: "Brazil", code: "br" },
  { name: "South Africa", code: "za" },
];

const Universities = [
  {
    name: "University Of Melbourne",
    country: "Australia",
    logo: "https://www.google.com/s2/favicons?domain=unimelb.edu.au&sz=128",
  },
  {
    name: "Harvard University",
    country: "United States",
    logo: "https://www.google.com/s2/favicons?domain=harvard.edu&sz=128",
  },
  {
    name: "Stanford University",
    country: "United States",
    logo: "https://www.google.com/s2/favicons?domain=stanford.edu&sz=128",
  },
  {
    name: "MIT",
    country: "United States",
    logo: "https://www.google.com/s2/favicons?domain=mit.edu&sz=128",
  },
  {
    name: "Yale University",
    country: "United States",
    logo: "https://www.google.com/s2/favicons?domain=yale.edu&sz=128",
  },
  {
    name: "Princeton University",
    country: "United States",
    logo: "https://www.google.com/s2/favicons?domain=princeton.edu&sz=128",
  },
  {
    name: "Columbia University",
    country: "United States",
    logo: "https://www.google.com/s2/favicons?domain=columbia.edu&sz=128",
  },
  //   United Kingdom
  {
    name: "University of Oxford",
    country: "United Kingdom",
    logo: "https://www.google.com/s2/favicons?domain=ox.ac.uk&sz=128",
  },
  {
    name: "University of Cambridge",
    country: "United Kingdom",
    logo: "https://www.google.com/s2/favicons?domain=cambridge.ac.uk&sz=128",
  },
  {
    name: "University of Leeds",
    country: "United Kingdom",
    logo: "https://www.google.com/s2/favicons?domain=leeds.ac.uk&sz=128",
  },

  //   Canada
  {
    name: "University of Toronto",
    country: "Canada",
    logo: "https://www.google.com/s2/favicons?domain=utoronto.ca&sz=128",
  },
];

//
export default function GlobalPartners() {
  const [selectedCountry, setSelectedCountry] = useState("us");

  const selectedCountryName = countries.find(
    (country) => country.code === selectedCountry,
  )?.name;

  const filteredUniversities = Universities.filter(
    (uni) =>
      uni.country === selectedCountryName ||
      uni.countryCode === selectedCountry,
  );

  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      {/* header */}
      <div className="mx-auto max-w-4xl text-center mb-12">
        <p className="relative flex items-center mx-auto gap-3 tracking-[0.1em] w-fit max-w-full bg-blue-200/20 border font-bold border-blue-400/50 px-3 py-2 rounded-full text-black/50 text-xs sm:text-sm">
          <motion.span
            animate={{
              scale: [1, 2.4],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute w-3 h-3 rounded-full bg-blue-400"
          />
          <span className="relative z-10 w-2.5 h-2.5 shrink-0 rounded-full bg-blue-600 shadow-sm" />
          Study Destination
        </p>
        <h2 className="lg:text-5xl text-3xl font-bold mt-4">
          Explore Our <span className="text-[#0265AA]">Global University</span>{" "}
          Partners
        </h2>
        <p className="lg:text-[20px] text-lg text-gray-600 mt-4">
          Discover leading universities across the countries we proudly serve.
          Select a destination to explore universities.
        </p>
      </div>

      {/* Country Categeory */}
      <div className="mt-5">
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          {countries.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => setSelectedCountry(country.code)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 cursor-pointer ${
                selectedCountry === country.code
                  ? "border-blue-600 bg-[#0265AA] text-white shadow-md"
                  : "border-gray-300 bg-white shadow-md shadow-blue-50 hover:shadow-blue-100 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:translate-y-0.5"
              }`}
            >
              <img
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={country.name}
                className="h-5 w-6 lg:w-7 lg:h-7 rounded object-cover"
              />

              <span className="text-sm lg:text-lg font-medium">
                {country.name}
              </span>
            </button>
          ))}
        </div>

        {selectedCountry && (
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 px-6 py-4 shadow-sm">
              <img
                src={`https://flagcdn.com/w80/${selectedCountry}.png`}
                alt={
                  countries.find((country) => country.code === selectedCountry)
                    ?.name
                }
                className="h-10 w-14 rounded-md object-cover shadow-sm"
              />

              <div>
                <h3 className="text-lg font-bold text-[#0265AA]">
                  {
                    countries.find(
                      (country) => country.code === selectedCountry,
                    )?.name
                  }
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Universities Grid */}
      {selectedCountry ? (
        filteredUniversities.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
            {filteredUniversities.map((uni) => (
              <div
                key={uni.id || uni.name}
                className="relative group isolate overflow-hidden flex flex-col items-center justify-center gap-3 rounded-xl border border-blue-100 bg-blue-50 p-5 text-center shadow-md shadow-blue-100 transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:shadow-lg active:shadow-lg cursor-pointer"
              >
                <div className="absolute top-0 w-1 h-1 lg:block hidden rounded-full bg-[#0265aa] z-[-1] group-hover:w-full active:group-hover:w-full duration-300" />
                <div className="absolute bottom-[-15px] right-[-15px] w-20 h-20 group-hover:w-30 active:group-hover:w-30 group-hover:h-30 active:group-hover:h-30 duration-300 rounded-full bg-blue-100 group-hover:scale-105 active:group-hover:scale-105 z-[-1]" />
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="h-20 w-20 rounded-full bg-white object-contain p-2 shadow-sm"
                />

                <h4 className="text-base font-bold text-gray-900 sm:text-lg">
                  {uni.name}
                </h4>

                <p className="text-sm text-gray-600">
                  {uni.country || selectedCountryName}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-gray-500">
            No universities available for {selectedCountryName}.
          </p>
        )
      ) : (
        <p className="mt-10 text-center text-gray-500">
          Please select a country to explore its universities.
        </p>
      )}
    </section>
  );
}
