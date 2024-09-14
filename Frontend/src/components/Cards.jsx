function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 rounded-md dark:bg-slate-900 dark:text-white">
        <div className="cursor-pointer card border-none bg-base-100 w-92 shadow-xl dark:bg-slate-900 dark:text-white dark:border-[2px] hover:scale-105 duration-200">
          <figure className="dark:bg-slate-900 dark:text-white">
            <img className="dark:bg-slate-900 dark:text-white" src={item.image} alt="Books" />
          </figure>
          <div className="card-body dark:bg-slate-900 dark:text-white">
            <h2 className="card-title text-black dark:bg-slate-900 dark:text-white">
              {item.name}
              <div className="badge badge-secondary dark:bg-pink-500">{item.category}</div>
            </h2>
            <p className="text-black dark:bg-slate-900 dark:text-white">{item.title}</p>
            <div className="card-actions justify-between dark:bg-slate-900 dark:text-white">
              <div className="text-black badge badge-outline dark:bg-slate-900 dark:text-white">${item.price}</div>
              <div className="text-black cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 dark:bg-slate-900 dark:text-white hover:dark:bg-pink-500">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
