export default function Recognition() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] py-16 px-4 sm:px-6 lg:px-12">
      <div className="bg-black/10  border-1 border-black/20 lg:w-[80%] w-full h-full mx-auto rounded-[15px]">
        <div className="p-10">
          <h2 className="lg:text-4xl text-xl text-white/90">
            Recognition & Registration
          </h2>
          <br />
          <br />

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4">
            <div className="bg-black/10 border-black/50 lg:w-45 lg:h-45 w-30 h-30 rounded-[10px] p-5">
              <img
                alt="FBR LOGO"
                srcSet="https://crystalpng.com/wp-content/uploads/2025/04/fbr-logo-1.png"
              />
              <p className="text-center text-gray-300 font-semibold mt-5">
                FBR
              </p>
            </div>
            <div className="bg-black/10 border-black/50 lg:w-45 lg:h-45 w-30 h-30 rounded-[10px] p-5">
              <img
                alt="SECP LOGO"
                srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyC6od2q1F74YQI6QY5DTk20Nw7qYikyitTMLQdto35w&s"
              />
              <p className="text-center text-gray-300 font-semibold mt-5">
                SECP
              </p>
            </div>
            <div className="bg-black/10 border-black/50 lg:w-45 lg:h-45 w-30 h-30 rounded-[10px] p-5 lg:mt-0 mt-4">
              <img
                alt="IELTS LOGO"
                srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPdzUserJ1uklWgNkWZgZSekmuNx5YdV5vEOF8ztArw&s=10"
              />
              <p className="text-center text-gray-300 font-semibold mt-5">
                IELTS
              </p>
            </div>
            <div className="bg-black/10 border-black/50 lg:w-45 lg:h-45 w-30 h-30 rounded-[10px] p-5 lg:mt-0 mt-4">
              <img
                alt="FBR LOGO"
                srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2zabbeugurNlNf0uOUmrAd_jlqnvaYKJ8UT3MouRoirSxfZeCzJzM7E&s=10"
              />
              <p className="text-center text-gray-300 font-semibold mt-5">
                UK GOVT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
