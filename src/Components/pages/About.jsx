import React from "react";

const About = () => {
  return (
    <>
      <main className="w-full">
        {/* ================= HERO ================= */}
        <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">About Us</h1>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              We are a team of passionate designers and engineers building
              meaningful digital experiences that scale.
            </p>
          </div>
        </section>

        {/* ================= WHO WE ARE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who We Are
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                We are a collective of experienced engineers, architects,
                developers, and consultants specializing in enterprise IT, cloud
                platforms, AI technologies, and modern application development.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                From strategic consulting to hands-on execution, we partner with
                startups, SMBs, and large enterprises to solve complex
                technology challenges and deliver measurable outcomes.
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl h-[320px] flex items-center justify-center text-gray-400 text-lg">
              Image / Illustration
            </div>
          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              Our Core Values
            </h2>

            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we build and deliver.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Integrity",
                  desc: "We believe in transparency, honesty, and long-term trust.",
                },
                {
                  title: "Innovation",
                  desc: "We continuously explore better ways to solve problems.",
                },
                {
                  title: "Excellence",
                  desc: "Quality and performance are never compromised.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MISSION ================= */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>

            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our mission is to empower businesses with reliable, scalable, and
              beautifully crafted digital solutions that drive growth,
              efficiency, and long-term success.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
