import { Link } from "react-router-dom";
import Login from "./login";

function Signup() {
  return (
    <>
      <div className="bg-white flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white">
        <div className="w-[600px]">
          <div className="modal-box bg-white dark:bg-slate-900 dark:text-white">
            <form method="dialog" className="dark:bg-slate-900 dark:text-white">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2 dark:bg-slate-900 dark:text-white">
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg text-black text-center dark:bg-slate-900 dark:text-white">
              Signup
            </h3>
            {/* Name */}
            <div className="mt-8 w-full space-y-2 dark:bg-slate-900 dark:text-white">
              <span className="text-black dark:bg-slate-900 dark:text-white">
                Name
              </span>
              <br className="dark:bg-slate-900 dark:text-white" />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              />
            </div>
            {/* Email */}
            <div className="mt-8 w-full space-y-2 dark:bg-slate-900 dark:text-white">
              <span className="text-black dark:bg-slate-900 dark:text-white">
                Email
              </span>
              <br className="dark:bg-slate-900 dark:text-white" />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              />
            </div>
            {/* Password */}
            <div className="mt-8 w-full space-y-2 dark:bg-slate-900 dark:text-white">
              <span className="text-black dark:bg-slate-900 dark:text-white">
                Password
              </span>
              <br className="dark:bg-slate-900 dark:text-white" />
              <input
                type="text"
                placeholder="Enter your Password"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              />
            </div>
            {/* Button */}
            <div className="text-black items-center justify-center text-center dark:bg-slate-900 dark:text-white">
              <button className="mt-5 bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Register
              </button>
              <p className="mt-6 text-black dark:bg-slate-900 dark:text-white">
                Already have an account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer dark:bg-slate-900"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
