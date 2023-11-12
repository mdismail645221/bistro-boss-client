import React from "react";
import fetchedImgSrc from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import authLoingImg from "../../assets/others/authentication2.png";

const Login = () => {


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value; 
        const password = form.password.value; 
        console.log({email, password})
    }


  return (
    <section
    className="section-py"
      style={{
        backgroundImage: `url(${fetchedImgSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="loginContainer container mx-auto">
        <div>
          <div className="sm:flex sm:flex-col md:flex md:flex-row  md:items-center md:justify-center">
            <div className="text-center lg:text-left">
              <img src={authLoingImg} alt="" />
            </div>
            <div className="card  shadow-2xl bg-base-100">
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
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="LOGIN" />
                </div>
              </form>
            </div>
          </div>
        </div> {/* hero end tag */} 
      </div>{/* login Container end tag */} 
    </section>
  );
};

export default Login;
