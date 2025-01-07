import { Link } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { blogsLinks } from "../contant";
import blogimg from "../assets/blogs/blog1.jpeg";
const BlogPage = () => {
  return (
    <div className="">
      <PageBanner title={"Blogs"} />
      <div className="grid wrapper lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-[5rem]">
        {blogsLinks.map((obj, i) => (
          <Link key={i} to={obj.link} className=" group">
            <div className="flex flex-col bg-gradient-to-r rounded-lg overflow-clip justify-center items-center from-blue-400 hover:from-blue-500 to-sky-500 hover:to-sky-600">
              <img
                src={blogimg}
                alt="blogimg"
                className=" h-full w-full left-0 top-0 object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="p-4">
                <h4 className=" text-white font-bold text-3xl hover:text-4xl transition-all duration-300  ">
                  {" "}
                  Blog {i + 1}
                </h4>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi fugit reiciendis illum iusto, perferendis blanditiis
                  cumque saepe odio facilis, esse sint officia corrupti animi
                  odit eveniet aliquid quis, a voluptates.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
