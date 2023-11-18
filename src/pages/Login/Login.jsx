import React, { useEffect, useRef, useState } from "react";
import fetchedImgSrc from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import authLoingImg from "../../assets/others/authentication2.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaText = useRef(null);
  const [disable, setDisable] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  function handleValidatedCaptcha() {
    const user_captcha_value = captchaText.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    } else {
      setDisable(true);
      alert("Captcha Does Not Match");
    }
  }

  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${fetchedImgSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="loginContainer container mx-auto">
        <div className="flex items-center justify-center h-screen">
          <div className="sm:flex sm:flex-col md:flex md:flex-row  md:items-center md:justify-center">
            {/* form img box */}
            <div className="text-center lg:text-left w-1/2">
              <img width={"100%"} src={authLoingImg} alt="" />
            </div>
            {/* form img end box */}

            {/* form box */}
            <div className="card  shadow-2xl bg-base-100 w-1/2">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {/* capcha load  */}
                <div className="form-control flex">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>

                  <div className="flex items-center justify-between gap-1">
                    <input
                      type="text"
                      ref={captchaText}
                      placeholder="Write Captcha text"
                      className="input input-bordered flex-1"
                      required
                    />
                    <button
                      onClick={handleValidatedCaptcha}
                      className="btn btn-primary"
                    >
                      Validate
                    </button>
                  </div>

                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="LOGIN"
                    disabled={disable}
                  />
                </div>
              </form>
            </div>
            {/* form end box  */}
          </div>
        </div>{" "}
        {/* hero end tag */}
      </div>
      {/* login Container end tag */}
    </section>
  );
};

export default Login;
