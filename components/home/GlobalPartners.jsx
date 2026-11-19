"use client";

import { useState } from "react";
import { motion } from "framer-motion";
const countries = [
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
  { name: "Germany", code: "de" },
  { name: "Italy", code: "it" },
  { name: "France", code: "fr" },
  { name: "Fin Land", code: "fi" },
  { name: "Swedan", code: "se" },
];

const Universities = [
  // United States
  {
    name: "Harvard University",
    country: "United States",
    code: "us",
    logo: "https://www.google.com/s2/favicons?domain=harvard.edu&sz=128",
  },
  {
    name: "Stanford University",
    country: "United States",
    code: "us",
    logo: "https://www.google.com/s2/favicons?domain=stanford.edu&sz=128",
  },
  {
    name: "MIT",
    country: "United States",
    code: "us",
    logo: "https://www.google.com/s2/favicons?domain=mit.edu&sz=128",
  },
  {
    name: "Yale University",
    country: "United States",
    code: "us",
    logo: "https://www.google.com/s2/favicons?domain=yale.edu&sz=128",
  },
  {
    name: "Princeton University",
    country: "United States",
    code: "us",
    logo: "https://www.google.com/s2/favicons?domain=princeton.edu&sz=128",
  },
  {
    name: "Columbia University",
    country: "United States",
    code: "us",
    logo: "https://www.google.com/s2/favicons?domain=columbia.edu&sz=128",
  },
  {
    name: "University of California, Berkeley",
    country: "United States",
    code: "us",
    logo: "https://www.google.com/s2/favicons?domain=berkeley.edu&sz=128",
  },

  // United Kingdom
  {
    name: "University of Oxford",
    country: "United Kingdom",
    code: "gb",
    logo: "https://www.google.com/s2/favicons?domain=ox.ac.uk&sz=128",
  },
  {
    name: "University of Cambridge",
    country: "United Kingdom",
    code: "gb",
    logo: "https://www.google.com/s2/favicons?domain=cambridge.ac.uk&sz=128",
  },
  {
    name: "Imperial College London",
    country: "United Kingdom",
    code: "gb",
    logo: "https://www.google.com/s2/favicons?domain=imperial.ac.uk&sz=128",
  },
  {
    name: "University College London",
    country: "United Kingdom",
    code: "gb",
    logo: "https://www.google.com/s2/favicons?domain=ucl.ac.uk&sz=128",
  },
  {
    name: "University of Edinburgh",
    country: "United Kingdom",
    code: "gb",
    logo: "https://www.google.com/s2/favicons?domain=ed.ac.uk&sz=128",
  },
  {
    name: "University of Leeds",
    country: "United Kingdom",
    code: "gb",
    logo: "https://www.google.com/s2/favicons?domain=leeds.ac.uk&sz=128",
  },

  // Canada
  {
    name: "University of Toronto",
    country: "Canada",
    code: "ca",
    logo: "https://www.google.com/s2/favicons?domain=utoronto.ca&sz=128",
  },
  {
    name: "University of British Columbia",
    country: "Canada",
    code: "ca",
    logo: "https://www.google.com/s2/favicons?domain=ubc.ca&sz=128",
  },
  {
    name: "McGill University",
    country: "Canada",
    code: "ca",
    logo: "https://www.google.com/s2/favicons?domain=mcgill.ca&sz=128",
  },
  {
    name: "University of Waterloo",
    country: "Canada",
    code: "ca",
    logo: "https://www.google.com/s2/favicons?domain=uwaterloo.ca&sz=128",
  },
  {
    name: "University of Alberta",
    country: "Canada",
    code: "ca",
    logo: "https://www.google.com/s2/favicons?domain=ualberta.ca&sz=128",
  },

  // Australia
  {
    name: "University Of Melbourne",
    country: "Australia",
    code: "au",
    logo: "https://www.google.com/s2/favicons?domain=unimelb.edu.au&sz=128",
  },
  {
    name: "The University of Sydney",
    country: "Australia",
    code: "au",
    logo: "https://www.google.com/s2/favicons?domain=sydney.edu.au&sz=128",
  },
  {
    name: "The Australian National University",
    country: "Australia",
    code: "au",
    logo: "https://www.google.com/s2/favicons?domain=anu.edu.au&sz=128",
  },
  {
    name: "UNSW Sydney",
    country: "Australia",
    code: "au",
    logo: "https://www.google.com/s2/favicons?domain=unsw.edu.au&sz=128",
  },
  {
    name: "Monash University",
    country: "Australia",
    code: "au",
    logo: "https://www.google.com/s2/favicons?domain=monash.edu&sz=128",
  },

  // Germany
  {
    name: "Technical University of Munich",
    country: "Germany",
    code: "de",
    logo: "https://www.google.com/s2/favicons?domain=tum.de&sz=128",
  },
  {
    name: "LMU Munich",
    country: "Germany",
    code: "de",
    logo: "https://www.google.com/s2/favicons?domain=lmu.de&sz=128",
  },
  {
    name: "Heidelberg University",
    country: "Germany",
    code: "de",
    logo: "https://www.google.com/s2/favicons?domain=uni-heidelberg.de&sz=128",
  },
  {
    name: "Humboldt University of Berlin",
    country: "Germany",
    code: "de",
    logo: "https://www.google.com/s2/favicons?domain=hu-berlin.de&sz=128",
  },
  {
    name: "RWTH Aachen University",
    country: "Germany",
    code: "de",
    logo: "https://www.google.com/s2/favicons?domain=rwth-aachen.de&sz=128",
  },

  // Italy
  {
    name: "University of Bologna",
    country: "Italy",
    code: "it",
    logo: "https://www.google.com/s2/favicons?domain=unibo.it&sz=128",
  },
  {
    name: "Politecnico di Milano",
    country: "Italy",
    code: "it",
    logo: "https://www.google.com/s2/favicons?domain=polimi.it&sz=128",
  },
  {
    name: "Sapienza University of Rome",
    country: "Italy",
    code: "it",
    logo: "https://www.google.com/s2/favicons?domain=uniroma1.it&sz=128",
  },
  {
    name: "University of Padua",
    country: "Italy",
    code: "it",
    logo: "https://www.google.com/s2/favicons?domain=unipd.it&sz=128",
  },
  {
    name: "Politecnico di Torino",
    country: "Italy",
    code: "it",
    logo: "https://www.google.com/s2/favicons?domain=polito.it&sz=128",
  },

  // France
  {
    name: "Université PSL",
    country: "France",
    code: "fr",
    logo: "https://www.google.com/s2/favicons?domain=psl.eu&sz=128",
  },
  {
    name: "Institut Polytechnique de Paris",
    country: "France",
    code: "fr",
    logo: "https://www.google.com/s2/favicons?domain=ip-paris.fr&sz=128",
  },
  {
    name: "Sorbonne Université",
    country: "France",
    code: "fr",
    logo: "https://www.google.com/s2/favicons?domain=sorbonne-universite.fr&sz=128",
  },
  {
    name: "HEC Paris",
    country: "France",
    code: "fr",
    logo: "https://www.google.com/s2/favicons?domain=hec.edu&sz=128",
  },
  {
    name: "Université Paris-Saclay",
    country: "France",
    code: "fr",
    logo: "https://www.google.com/s2/favicons?domain=universite-paris-saclay.fr&sz=128",
  },

  // Fin Land
  {
    name: "University of Helsinki",
    country: "Fin Land",
    code: "fi",
    logo: "https://www.google.com/s2/favicons?domain=helsinki.fi&sz=128",
  },
  {
    name: "Aalto University",
    country: "Fin Land",
    code: "fi",
    logo: "https://www.google.com/s2/favicons?domain=aalto.fi&sz=128",
  },
  {
    name: "University of Turku",
    country: "Fin Land",
    code: "fi",
    logo: "https://www.google.com/s2/favicons?domain=utu.fi&sz=128",
  },
  {
    name: "Tampere University",
    country: "Fin Land",
    code: "fi",
    logo: "https://www.google.com/s2/favicons?domain=tuni.fi&sz=128",
  },
  {
    name: "University of Oulu",
    country: "Fin Land",
    code: "fi",
    logo: "https://www.google.com/s2/favicons?domain=oulu.fi&sz=128",
  },

  // Swedan
  {
    name: "KTH Royal Institute of Technology",
    country: "Swedan",
    code: "se",
    logo: "https://www.google.com/s2/favicons?domain=kth.se&sz=128",
  },
  {
    name: "Lund University",
    country: "Swedan",
    code: "se",
    logo: "https://www.google.com/s2/favicons?domain=lu.se&sz=128",
  },
  {
    name: "Uppsala University",
    country: "Swedan",
    code: "se",
    logo: "https://www.google.com/s2/favicons?domain=uu.se&sz=128",
  },
  {
    name: "Chalmers University of Technology",
    country: "Swedan",
    code: "se",
    logo: "https://www.google.com/s2/favicons?domain=chalmers.se&sz=128",
  },
  {
    name: "Stockholm University",
    country: "Swedan",
    code: "se",
    logo: "https://www.google.com/s2/favicons?domain=su.se&sz=128",
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
