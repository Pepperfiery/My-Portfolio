import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-[#f0e6e6] py-16 px-4 sm:px-6 lg:px-8 mt-12">
      <section className="bg-[#f0e6e6] py-10 px-4 sm:px-6 lg:px-8  ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl text-[#34012F]">
          Ready to start your project?
        </h2>
        <p className="mt-3 text-xl text-black sm:mt-4">
          Let's work together to build something amazing. Contact me today to get started.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#d84e65] hover:border-4 hover:bg-[#d84e65]/50 "
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Me
        </h2>
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="first_name"
                className="block text-lg font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#d84e65]/50 focus:border-[#d84e65]/50 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-lg font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="family-name"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#d84e65]/50 focus:border-[#d84e65]/50 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#d84e65]/50 focus:border-[#d84e65]/50 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#d84e65]/50 focus:border-[#d84e65]/50 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium  bg-[#d84e65] text-white hover:border-4 hover:bg-[#d84e65]/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
