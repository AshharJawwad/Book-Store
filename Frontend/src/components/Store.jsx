import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Store() {
  return (
    <>
      <div className="bg-white max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="items-center justify-center text-center dark:bg-slate-900 dark:text-white">
          <div className="dark:bg-slate-900 dark:text-white">
            <h1 className="mt-24 text-2xl text-black dark:bg-slate-900 dark:text-white md:text-4xl">
              We Welcome You To{" "}
              <span className="text-pink-500 dark:bg-slate-900">
                FabBooks :)
              </span>
            </h1>
          </div>
          <p className="mt-12 text-black dark:bg-slate-900 dark:text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            eius quae dolores reiciendis beatae, magni necessitatibus molestias
            sit, nihil quasi qui, ut ducimus numquam sunt nam odit. Recusandae
            alias quidem beatae dolor? Inventore officiis accusamus ipsam
            asperiores praesentium unde consectetur deserunt ullam incidunt
            beatae aspernatur cum ex natus necessitatibus quam doloremque
            delectus, ea, fugit similique! Aperiam, laborum? Aperiam amet,
            magnam temporibus deleniti error expedita labore.
          </p>
          <Link to="/">
            <button className="mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 dark:bg-slate-900 dark:text-white md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Store;
