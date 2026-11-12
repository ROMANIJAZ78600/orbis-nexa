"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Fatima Shabir",
    date: "4 months ago",
    image: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    text: "Have a great experience. Opportunity they guide students with their devotion. Very good experience with the entire team.",
  },
  {
    id: 2,
    name: "Ijaz ul Haq",
    date: "6 months ago",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    text: "Highly recommended for study abroad. Especially Sir Zeeshan was very helpful throughout my process.",
  },
  {
    id: 3,
    name: "Momna Malik",
    date: "6 months ago",
    image: "https://i.pravatar.cc/100?img=44",
    rating: 5,
    text: "We had a great experience with Aziz bhai. The entire process was handled very smoothly from start to finish. Highly recommended!",
  },
  {
    id: 4,
    name: "Ahmed Khan",
    date: "7 months ago",
    image: "https://i.pravatar.cc/100?img=11",
    rating: 5,
    text: "Excellent consultancy and professional guidance. The team helped me at every step of my admission process.",
  },
  {
    id: 5,
    name: "Ayesha Noor",
    date: "8 months ago",
    image: "https://i.pravatar.cc/100?img=32",
    rating: 5,
    text: "Very helpful and supportive team. They guided me through university selection and all the required documentation.",
  },
];

const GOOGLE_LOGO =
  "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png";

export default function GoogleReviews() {
  const sliderRef = useRef(null);
  const [expanded, setExpanded] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  const getScrollStep = () => {
    const slider = sliderRef.current;
    if (!slider) return 0;

    const card = slider.querySelector(".review-card");
    if (!card) return 0;

    const gap = parseFloat(getComputedStyle(slider).gap) || 0;

    return card.getBoundingClientRect().width + gap;
  };

  const scrollNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = getScrollStep();
    if (!step) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll - 10) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: step,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = getScrollStep();
    if (!step) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft <= 10) {
      slider.scrollTo({
        left: maxScroll,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: -step,
        behavior: "smooth",
      });
    }
  };

  // Automatic Carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const toggleReadMore = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="w-full min-w-0">
      <div className="w-full min-w-0">
        {/* Carousel */}
        <div
          className="relative px-5 sm:px-7"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Button */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous reviews"
            className="absolute -left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition-all duration-300 hover:scale-110 hover:border-[#0265AA] hover:bg-[#0265AA] hover:text-white sm:-left-1 sm:h-10 sm:w-10"
          >
            <ChevronLeft size={21} />
          </button>

          {/* Reviews Track */}
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-[18px] overflow-x-auto scroll-smooth px-1 pb-3 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => {
              const isExpanded = expanded.includes(review.id);

              return (
                <div
                  key={review.id}
                  className="review-card w-full flex-none snap-start self-stretch rounded-xl border border-transparent bg-[#f4f4f5] p-4 transition-all duration-300 hover:border-gray-200 hover:shadow-lg sm:basis-[calc((100%-18px)/2)] sm:w-auto lg:basis-[calc((100%-36px)/3)]"
                >
                  {/* User Info */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-3">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-11 w-11 shrink-0 rounded-full border border-gray-200 bg-white object-cover shadow-sm"
                      />

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-medium text-blue-700 sm:text-base">
                          {review.name}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          {review.date}
                        </p>
                      </div>
                    </div>

                    {/* Google Logo */}
                    <img
                      src={GOOGLE_LOGO}
                      alt="Google"
                      className="h-5 w-5 shrink-0 object-contain"
                    />
                  </div>

                  {/* Star Rating */}
                  <div className="mt-3 flex gap-1">
                    {Array.from({
                      length: review.rating,
                    }).map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        fill="#ff8b25"
                        stroke="#ff8b25"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="mt-3 text-sm leading-6 text-gray-800 sm:text-[15px]">
                    {isExpanded
                      ? review.text
                      : `${review.text.slice(0, 105)}${
                          review.text.length > 105 ? "..." : ""
                        }`}
                  </p>

                  {/* Read More */}
                  {review.text.length > 105 && (
                    <button
                      type="button"
                      onClick={() => toggleReadMore(review.id)}
                      className="mt-1 text-sm text-gray-700 underline underline-offset-2 transition-colors hover:text-[#0265AA]"
                    >
                      {isExpanded ? "read less" : "read more"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next reviews"
            className="absolute -right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition-all duration-300 hover:scale-110 hover:border-[#0265AA] hover:bg-[#0265AA] hover:text-white sm:-right-1 sm:h-10 sm:w-10"
          >
            <ChevronRight size={21} />
          </button>
        </div>

        {/* Bottom Google Rating */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <img
            src={GOOGLE_LOGO}
            alt="Google"
            className="h-5 w-5 object-contain"
          />

          <span className="text-sm font-semibold text-gray-700">
            Google Reviews
          </span>

          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={14} fill="#ff8b25" stroke="#ff8b25" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
