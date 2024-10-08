import banner from "../../public/banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col dark:bg-slate-900 dark:text-white md:flex-row my-15">
        <div className="bg-base-000 order-2 md:order-1 w-full dark:bg-slate-900 dark:text-white md:w-1/2 mt-16 md:mt-32">
          <div className="space-y-10 dark:bg-slate-900 dark:text-white">
            <h1 className="text-4xl font-bold text-black dark:bg-slate-900 dark:text-white">
              We welcome you to learn something
              <span className="text-pink-500 dark:bg-slate-900"> new, everyday!!!</span>
            </h1>
            <p className="text-xl text-black dark:bg-slate-900 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              fugit est, omnis dolores ea, in quasi quaerat ipsam aliquam,
              dignissimos libero corporis? Quod similique incidunt vero
              provident cupiditate, commodi explicabo!
            </p>
            <label className="input input-bordered rounded-md flex items-center gap-2 bg-white text-black dark:bg-slate-900 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 dark:bg-slate-900 dark:text-white"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 mb-6 btn-secondary">Submit</button>
        </div>
        <div className="order-1 w-full mt-10 dark:bg-slate-900 dark:text-white md:w-1/2">
            <img src={banner} className="w-92 h-92 mt-12 rounded-md px-4 dark:bg-slate-900 dark:text-white" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
