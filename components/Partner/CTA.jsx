import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="flex justify-center relative w-full bg-white z-10 py-16 px-4 sm:px-6 lg:px-12 lg:mb-10">
      <div className="bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] rounded-[20px] p-5 lg:h-[250px] h-full lg:w-[80%] w-full">
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:p-10 p-5">
          <div className="">
            <h6 className="lg:text-3xl text-lg  font-semibold text-white">
              A good partnership starts with a conversation.
            </h6>
            <p className="text-gray-300 lg:mt-2">
              Bring your ideas. Let’s see where we can go together.
            </p>
          </div>
          <div className="mt-5">
            <button className="group flex items-center cursor-pointer text-black font-semibold gap-2 lg:w-65 px-5 py-3 bg-white shadow-sm rounded-full shadow-white hover:shadow-lg duration-300">
              Start the Conversation{" "}
              <ArrowRight className="group-hover:ml-3 duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
