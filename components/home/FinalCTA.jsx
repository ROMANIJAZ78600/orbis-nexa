import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="w-[80%] h-full mx-auto rounded-[15px]">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="lg:w-[50%] w-full">
            <h2 className="text-4xl text-black w-full">
              Your global study plan starts with clarity.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Take the first step toward your international education journey.
              Get expert guidance, explore the right universities and
              destinations, and create a personalized study plan that turns your
              global ambitions into reality.
            </p>
          </div>
          <div className="lg:w-[50%] w-full">
            <button className="flex gap-2 lg:justify-center lg:w-[50%] w-full lg:ml-80 bg-[#0265aa] p-4 text-white mt-6 rounded-[15px] hover:scale-95 cursor-pointer duration-300">
              Book a Free Consultation <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
