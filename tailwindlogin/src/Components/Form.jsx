import React from "react";

function Form() {
  return (
    <div className="w-full flex-col gap-4 justify-center">
      <h1 className="text-5xl font-semibold text-zinc-800">Welcome Back</h1>
      <h4 className="mt-6 text-base text-zinc-600 font-semibold">
        Please enter your details
      </h4>

      <div className="flex-col">
        <div className="mt-4">
          <label
            className="ml-2 text-base text-gray-700 font-medium"
            htmlFor=""
          >
            Email
            <input
              className=" w-full flex py-3 border-2 rounded-lg px-4 bg-transparent"
              type="email"
              placeholder="Enter your email"
            />
          </label>
        </div>

        <div className="mt-4">
          <label
            className="ml-2 text-base text-gray-700 font-medium"
            htmlFor=""
          >
            Password
            <input
              className=" w-full flex py-3 border-2 rounded-lg px-4 bg-transparent"
              type="Password"
              placeholder="Enter your password"
            />
          </label>
        </div>
      </div>

      <div className="w-full flex justify-between mt-7 mb-7">
        <div className="flex justify-between">
          <label
            className="text-base font-semibold text-zinc-800"
            htmlFor="Remember me for 30 days"
            for="Remember me for 30 days"
          >
            <input
              className="mr-4"
              type="checkbox"
              name="Remember me for 30days"
              id=""
            />
            Remember me for 30 days
          </label>
        </div>
        <p className="flex text-violet-700 font-bold "> Forgot Password</p>
      </div>
      <div className="flex-col space-y-3">
        <button className="py-4 bg-violet-700 text-white font-bold w-full rounded-lg">
          Sign in
        </button>
        <button className="py-4 w-full rounded-lg border-2 font-bold text-gray-500 border-gray-400">
          Sign in with Google
        </button>
      </div>

      <div className="mt-8 w-full flex items-center justify-center ">
        <p>Don't have an account?</p>
        <p className="text-base font-semibold ml-2 text-violet-700">Sign up</p>
      </div>
    </div>
  );
}

export default Form;
