import { Link } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { blogsLinks } from "../contant";

const BlogPage = () => {
  return (
    <div className="">
      <PageBanner title={"Blogs"} />
      <div className="grid wrapper lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-[5rem]">
        {blogsLinks.map((obj, i) => (
          <Link key={i} to={obj.link} className="group">
            <div className="bg-gradient-to-r group-hover:scale-105 transition-all duration-300 from-blue-400 hover:from-blue-200 to-sky-500 hover:to-sky-400 aspect-square flex justify-center items-center text-white font-bold text-3xl hover:text-4xl">
              Blog {i + 1}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
