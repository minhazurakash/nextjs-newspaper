import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import Link from 'next/link';

const Reset = () => {
    const handleReset =()=> {}
    return (
        <div className="bg-base-200 container mx-auto  px-3 sm:px-0">
      <div class="items-center justify-center container mx-auto">
        <div class="hero-content h-screen items-center gap-48 flex-col lg:flex-row">
          <div class="text-center hidden lg:block ">
            <img
              src="https://i.ibb.co/qWncyyv/login.png"
              className="w-72"
              alt=""
            />
          </div>
          <div class="card flex-shrink-0 w-full lg:max-w-md sm:w-9/12 shadow-2xl bg-base-100">
            <div class="card-body">
              <div className="flex gap-10 items-center">
                <Link href="/user/login">
                  <FaAngleLeft class="fa-solid fa-arrow-left text-3xl -mt-5 font-bold"/>
                </Link>
                <h1 class="text-3xl mb-5 font-bold text-center">
                  Reset Your Password!
                </h1>
              </div>
              <form onSubmit={handleReset} className="grid gap-4">
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
                <input
                  type="submit"
                  class="btn btn-bordered btn-accent w-full"
                  value="Login"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Reset;