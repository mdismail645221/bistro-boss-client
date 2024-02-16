import React, { useContext, useEffect, useState } from "react";
import fetchedImgSrc from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import authLoingImg from "../../assets/others/authentication2.png";
import swal from 'sweetalert';

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import RegisterSignInTitle from "../../components/RegisterSignInTitle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { Helmet } from "react-helmet";
import AuthSocialIcons from "../../components/AuthSocialIcons";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Login = () => {
  const {user, loading, loginUser, setUser} = useContext(AuthContext);
  const [disable, setDisable] = useState(true);
  const location = useLocation()
  const navigate = useNavigate()
  const axios = useAxiosSecure(); 

  let from = location.state?.from?.pathname || "/";


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

const [recaphaValue, setRecaphaValue] = useState('')

  function handleValidatedCaptcha(e) {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(recaphaValue) == false) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
    .then((result)=> {
      const user = result?.user;

   
      
        if(user){
          const userInfo = 
          {name: user?.displayName, email: user?.email, uid: user?.user?.uid, role: "user"}
          fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            Swal.fire({
              title: "Registered is Successfully",
              icon: "success"
            })
            .then(result => {
              if(result.isConfirmed){
                navigate('/')
              }
            })
          })
        }

      // console.log({loginUser: user})
      swal({
        title: "Login Successfully",
        icon: "success"
      });
      navigate(from, {replace: true})
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setUser(false)
      console.log(errorMessage, errorCode)
      // ..
    });
  };



  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${fetchedImgSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        zIndex: 0,
      }}
    >

      <Helmet>
        <title>Log In</title>
      </Helmet>

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
              <RegisterSignInTitle title="Login" />
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
                    <LoadCanvasTemplateNoReload />
                  </label>

                  <div className="flex items-center justify-between gap-3">
                    <input
                      type="text"
                      onChange={(e)=> setRecaphaValue(e.target.value)}
                      placeholder="Write Captcha text"
                      className="input input-bordered flex-1"
                      required
                    />
                    <span onClick={handleValidatedCaptcha} className="btn">Validate</span>
                   
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
              {/* social login box */}
              <div className="pb-5">
                <h4 className="text-center mb-3">
                  <span>New here?</span>
                  <Link className="underline ml-3 text-blue" to="/register">Create a New Account</Link>
                </h4>
                 {/* auth social icons box wrapper  */}
                <AuthSocialIcons/>
              </div>
            </div>
            {/* form end box  */}
           
            
          </div>
        </div>
        {/* hero end tag */}

      </div>
      {/* login Container end tag */}



    {/* back to home btn */}

    <div className="back-to-home-btn" style={
      {
        position: "absolute",
        content: "",
        top: "20px",
        left: "200px",
        width: "200px",
        height: "100%"
      }
    }>
      <Link to="/" className="btn">BACK TO HOME</Link>
    </div>


    </section>
  );
};
export default Login;
