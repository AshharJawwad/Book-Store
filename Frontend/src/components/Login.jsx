import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-900 dark:text-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="dark:bg-slate-900 dark:text-white"
          >
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2 dark:bg-slate-900 dark:text-white"
              onClick={() => document.getElementById("my_modal_3").closest()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg text-black text-center dark:bg-slate-900 dark:text-white">
              Login
            </h3>
            {/* Email */}
            <div className="mt-8 space-y-2 dark:bg-slate-900 dark:text-white">
              <span className="text-black dark:bg-slate-900 dark:text-white">
                Email
              </span>
              <br className="dark:bg-slate-900 dark:text-white" />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-8 space-y-2 dark:bg-slate-900 dark:text-white">
              <span className="text-black dark:bg-slate-900 dark:text-white">
                Password
              </span>
              <br className="dark:bg-slate-900 dark:text-white" />
              <input
                type="text"
                placeholder="Enter your Password"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Button */}
            <div className="text-black items-center justify-center text-center dark:bg-slate-900 dark:text-white">
              <button className="mt-5 bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="mt-6 text-black dark:bg-slate-900 dark:text-white">
                Don't have an account?{" "}
                <Link
                  to="/Signup"
                  className="underline text-blue-500 cursor-pointer dark:bg-slate-900"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default login;
