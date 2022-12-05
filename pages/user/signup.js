import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import Link from 'next/link';
import GoogleLogin from '../../components/GoogleLogin';

const Signup = () => {
    const handleSignIn = ()=>{}
    return (
        <div className="bg-base-200">
      <div class="  container mx-auto">
        <div class="hero-content flex-col lg:flex-row-reverse justify-start">
          <div class="text-center hidden lg:block ">
            <img src="https://i.ibb.co/6FzF1gW/login.png" alt="" />
          </div>
          <div class="card flex-shrink-0 w-full lg:max-w-md sm:w-9/12 shadow-2xl bg-base-100">
            <div class="card-body">
            <div className="flex gap-10 items-center">
                <Link href="/user/login">
                  <FaAngleLeft class="fa-solid fa-arrow-left text-3xl -mt-5 font-bold"/>
                </Link>
                <h1 class="text-3xl mb-5 font-bold text-center">
                  Create accaount
                </h1>
              </div>
              <form onSubmit={handleSignIn} className="grid gap-4">
                <div>
                  <label className="lebel-text label">Name</label>
                  <input
                    name="name"
                    type="name"
                    placeholder="Enter your name"
                    class="input input-bordered w-full bg-transparent"
                    required
                  />
                </div>
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
                <input
                  type="submit"
                  class="btn btn-bordered btn-accent w-full"
                  value="Signup"
                />
              </form>
              <p>
                Already have an accaount?
                <Link href="/user/login" className="text-blue-500">
                  {" "}
                  Login
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

export default Signup;