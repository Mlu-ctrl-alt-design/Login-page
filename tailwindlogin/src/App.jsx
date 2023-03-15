import React from "react";
import Form from "./Components/Form";

export default function App() {
  return (
    <div className="p-4 w-full h-screen bg-slate-200 ">
      <div className="flex align-items-center items-center w-full h-full bg-gray-200 space-x-4 ">
        <div className="bg-white w-full p-8 rounded-lg border-1 border-gray-300 px-4 lg:w-1/2">
          <Form />
        </div>
        <div
          className="w-0 
          
          lg:w-1/2 h-screen"
        >
          <div className="w-full h-full">
            <img
              className="flex object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1678537378341-f9a017d75515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
