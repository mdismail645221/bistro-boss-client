import React from "react";
import SectionTitle from "./SectionTitle";

const ContactUs = () => {
  return (
    <section>
      <div className="container mx-auto section-py">
        <SectionTitle mainHeading={"OUR LOCATION"} subHeading={"Visit Us"} />
        <div className="PAW-Wrapper grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 px-10 py-6"> 
          <div className="phone card text-center border px-4 py-2 ">
            <h3 className="font-bold phone-title">PHONE</h3>
            <p className="phone-number">+38 (012) 34 56 789</p>
          </div>
          <div className="address card text-center border px-4 py-2 ">
            <h3 className="font-bold address-title">ADDRESS</h3>
            <p className="address-number">+38 (012) 34 56 789</p>
          </div>
          <div className="work-place card text-center border px-4 py-2 ">
            <h3 className="font-bold work-place-title">WORKING HOURS</h3>
            <p className="work-place-number">
              Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </div>

      {/* contact form section start */}
      <div className="container mx-auto section-pb">
        <SectionTitle
          color={""}
          subHeading="---Send Us a Message---"
          mainHeading="CONTACT FORM"
        />
        <div className="contact-form-wrapper">
          <form className="w-full md:w-2/3 mx-auto bg-[#f9f9f9] px-10 py-24 flex flex-col gap-6">
            <div className="contact-form-body flex flex-col gap-6">
              <div className="name-email-wrapper flex flex-col md:flex-row items-center gap-4">
                <div className="name-body flex flex-col md:flex-row w-full md:w-1/2 gap-3">
                  <label htmlFor="name">Name*</label>
                  <input className="border w-full py-3 px-2" type="text" />
                </div>
                <div className="email-body flex flex-col md:flex-row w-full md:w-1/2 gap-3">
                  <label htmlFor="email">Email*</label>
                  <input className="border w-full py-3 px-2" type="email" />
                </div>
              </div>
              <div className="phone-body flex flex-col gap-3">
                <label htmlFor="phone">Phone</label>
                <input className="border w-full py-3 px-2" type="number" />
              </div>
              <div className="contact-msg-body flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="96"
                  rows="10"
                ></textarea>
              </div>
            </div>




            <a href="#" className="contact-btn flex mx-auto justify-center w-[250px] text-[#fff] p-3 gap-3 bg-[#B58130]">
              <p>Send Message</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.7358 3.29705C22.8078 2.82305 22.6058 2.34805 22.2148 2.06905C21.8238 1.79105 21.3088 1.75605 20.8838 1.97905C17.4828 3.76505 5.58577 10.011 1.93177 11.929C1.48077 12.165 1.21477 12.647 1.25377 13.154C1.29277 13.661 1.62877 14.097 2.11077 14.262C3.53377 14.749 5.27277 15.346 7.99977 16.281L18.9998 6.00005L10.0978 17C13.0058 17.997 17.5528 19.556 18.6938 19.9471C19.0508 20.0701 19.4448 20.0271 19.7678 19.8321C20.0908 19.6361 20.3098 19.3071 20.3668 18.9331L22.7358 3.29705Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.83154 17.623V20.893C8.83154 21.395 9.12654 21.85 9.58354 22.055C10.0415 22.261 10.5765 22.179 10.9515 21.845L13.7895 19.323L8.83154 17.623Z"
                  fill="white"
                />
              </svg>
            </a>



          </form>
        </div>
      </div>
      {/* contact form section end */}
    </section>
  );
};

export default ContactUs;
