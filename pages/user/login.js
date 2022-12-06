import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import Link from 'next/link';
import GoogleLogin from '../../components/GoogleLogin';

const Login = () => {
    const handleLogin = () =>{}
    return (
        <div className="bg-base-200 container mx-auto px-3 sm:px-0">
        <div class=" items-center container mx-auto">
          <div class="hero-content flex-col lg:flex-row">
            <div class="text-center hidden lg:block ">
              <img src="https://i.ibb.co/6FzF1gW/login.png" alt="" />
            </div>
            <div class="card flex-shrink-0 w-full lg:max-w-md sm:w-9/12 shadow-2xl bg-base-100">
              <div class="card-body">
              <div className="flex gap-10 items-center">
                <Link href="/">
                  <FaAngleLeft class="fa-solid fa-arrow-left text-3xl -mt-5 font-bold"/>
                </Link>
                <h1 class="text-3xl mb-5 font-bold text-center">
                  Login
                </h1>
              </div>
                <form onSubmit={handleLogin} className="grid gap-4">
                  <div>
                    <label className="lebel-text label">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      class="input input-bordered w-full bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="lebel-text label">Password</label>
                    <input
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      class="input input-bordered w-full bg-transparent"
                      required
                    />
                  </div>
                  <Link href="/user/reset">Forgot password?</Link>
                  <input
                    type="submit"
                    class="btn btn-bordered btn-accent w-full"
                    value="Login"
                  />
                </form>
                <p>
                  New to Tech House?
                  <Link href="/user/signup" className="text-blue-500">
                    {" "}
                    Signup
                  </Link>
                </p>
  
                <div class="divider">OR</div>
                    <GoogleLogin/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;