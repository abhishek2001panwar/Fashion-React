import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [isValid, setIsValid] = useState(true); // State to track form validity

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if required fields are filled
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !messageRef.current.value
    ) {
      setIsValid(false); // Set form as invalid
      return; // Exit the function
    }

    // Check if message length is greater than 10 characters
    if (messageRef.current.value.length < 5) {
      toast.error("Message should be at least 10 characters long");
      return; // Exit the function
    }

    // If all validations pass, reset form validity
    setIsValid(true);

    // Perform form submission or API call here
    toast.success("Query Received! We will get back to you ASAP");

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <section className="bg-gray-200 w-full h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl  mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="bg-zinc-300 rounded-lg shadow-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Send us a message
              </h3>
              {!isValid && (
                <p className="text-red-500 mb-4">
                  Please fill out all the required fields.
                </p>
              )}
              <div className="mb-4">
                <input
                  type="text"
                  ref={nameRef}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  ref={emailRef}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  ref={messageRef}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full inline-block uppercase font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
              <ToastContainer />
            </form>
            {/* Contact information section */}

            <div className="bg-zinc-300 text-white rounded-lg shadow-2xl p-20">

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-4">
                Address: 123 meerut, uttarpradesh, india
              </p>
              <p className="text-gray-600 mb-4">Phone: 9528521770</p>
              <p className="text-gray-600 mb-4">
                Email: abhishek.panwar.cseiot.2022@miet.ac.in
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="text-zinc-600 hover:text-zinc-700 text-xl font-bold transition duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="text-zinc-600 hover:text-zinc-700 text-xl font-bold transition duration-300 ml-4"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-zinc-600 hover:text-zinc-700 text-xl font-bold transition duration-300 ml-4"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
