import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-black grid grid-cols-1 md:grid-cols-2">
        <aside className="bg-[#1F2937] text-[#fff] text-center flex flex-col justify-center section-py">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl">CONTACT US</h3>
            <h5>123 ABS Street, Uni 21, Bangladesh</h5>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </aside>

        <nav className="bg-[#111827] section-py">
          <div className="flex flex-col justify-center gap-4 text-center text-[#fff]">
            <header className="text-[#fff] text-3xl">Follow US</header>
            <p>Join us on social media</p>
           
          </div>
        </nav>
      </footer>

      <div className="text-[#fff] flex justify-center bg-[#000] py-4">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
