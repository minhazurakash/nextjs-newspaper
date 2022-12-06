import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import Link from 'next/link';
import GoogleLogin from '../../components/GoogleLogin';
import Head from 'next/head';

const Login = () => {
    const handleLogin = () =>{}
    return (
        <div className="bg-base-200 container mx-auto px-3 sm:px-0">
          <Head>
            <title>Login -Prothom Alo</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="Login -Prothom Alo" key="title" />
            <meta property="og:image" content="https://images.prothomalo.com/prothomalo/import/default/2016/03/15/4d3620a7127d4a031a05a962fcc4b253-palo-logo.jpg" key="image" itemProp='image'/>
          </Head>
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