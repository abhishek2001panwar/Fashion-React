import React from "react";

function About() {
  return (
    <section className="bg-gray-200 w-full min-h-screen pt-[10vh]">
    <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center">
    <div className="w-full md:w-1/2 pr-8 mb-4 mt-[10vh] md:mb-0">
          <img
            src="https://media.istockphoto.com/id/1338083652/photo/phone-screen-online-delivery-on-bike-and-delivery-van-with-box-internet-shipping-web-banner.jpg?s=612x612&w=0&k=20&c=wJbYHeEp-a92nfY4tmkhlml9FPnwczTs-hvrfbDCOWs=" // Replace with your image source
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
      <div className="max-w-4xl mx-auto text-center md:w-1/2">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-white-200 bg-zinc-300 rounded-md shadow-lg p-2 leading-relaxed mb-8">
          E-commerce websites allow people to buy products or services online.
          They have become increasingly popular in recent years, as they offer
          a convenient and secure way to make purchases. One of the main
          benefits of using an e-commerce website is the convenience it
          offers. Customers can shop at any time of the day or night, from the
          comfort of their own homes. This means that they don't have to worry
          about traffic or finding parking, and they can compare prices and
          reviews without having to leave their couches. E-commerce websites
          are also secure, as most use secure sockets layer (SSL) encryption
          to protect the information transmitted between the customer and the
          website.
        </p>

        {/* Mission and Vision Section */}
        <div className="rounded-lg shadow-lg p-4 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-white-200 bg-zinc-300 rounded-md shadow-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
            dolor at velit vestibulum, ac vehicula odio finibus. Integer ut rhoncus
            turpis. Nulla facilisi. Vivamus et augue sed nisi vestibulum ultricies ut
            ac justo. Integer condimentum at odio a semper.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-white-200 bg-zinc-300 rounded-md shadow-lg leading-relaxed">
            Sed elementum odio vel justo accumsan suscipit. Phasellus nec lectus a dui
            fermentum malesuada. Vivamus congue consectetur convallis. Vivamus hendrerit
            urna auctor, consectetur est sit amet, consectetur neque. Sed quis magna at
            libero vestibulum lacinia sit amet vel libero.
          </p>
        </div>
        {/* End Mission and Vision Section */}
      </div>
      {/* End Content Section */}

      {/* Image Section */}
      {/* <div className="w-full md:w-1/2 pr-8 mb-8 md:mb-0 md:mt-0">
        <img
          src="https://media.istockphoto.com/id/1338083652/photo/phone-screen-online-delivery-on-bike-and-delivery-van-with-box-internet-shipping-web-banner.jpg?s=612x612&w=0&k=20&c=wJbYHeEp-a92nfY4tmkhlml9FPnwczTs-hvrfbDCOWs="
          alt="About Us"
          className="rounded-lg shadow-lg"
        />
      </div> */}
      {/* End Image Section */}
    </div>
  </section>
  );
}

export default About;
