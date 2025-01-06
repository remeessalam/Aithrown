import { Link } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { blogsLinks } from "../contant";

const BlogPage = () => {
  return (
    <div className="">
      <PageBanner title={"Blogs"} />
      <div className="grid wrapper lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-[5rem]">
        {blogsLinks.map((obj, i) => (
          <Link key={i} to={obj.link}>
            <div className="bg-gradient-to-r from-blue-400 to-sky-500 aspect-square flex justify-center items-center text-white font-bold text-3xl">
              Blog {i + 1}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
