import { BiReply } from "react-icons/bi";
import { IoHeart } from "react-icons/io5";

const Post = () => {
  return (
    <div className="flex flex-col items-center gap-3 lg:w-[75%] w-[90%] aspect-2/1 md:p-5 p-3 border-2 border-neutral-900 rounded-lg">
      <div className="flex items-center gap-3 w-full">
        <img
          className="shrink-0 w-[2.5rem] h-fit aspect-square rounded-full object-cover bg-white"
          src={""}
        ></img>
          <div className="flex flex-col">
            <p>mako</p>
            <p className="text-neutral-400">@makoshark</p>
          </div>
      </div>
      <p className="lg:text-lg md:text-sm text-sm"> {/* Character count for posts will be 260 */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
        eligendi rerum aspernatur dicta, obcaecati, qui est minus, voluptates
        assumenda alias facilis? Eaque tenetur doloribus natus sapiente nemo
        aspernatur, repudiandae neque. Lorem ipsum dolor sit amet.
      </p>
      <div className="w-full md:aspect-video aspect-square lg:mt-10 md:mt-5 mt-2 bg-neutral-800 rounded-sm"></div>
      <div className="flex gap-3 items-center w-full mt-4">
        <IoHeart className="cursor-pointer" fontSize={"2rem"}></IoHeart>
        <BiReply className="cursor-pointer" fontSize={"2rem"}></BiReply>
      </div>
    </div>
  );
};

export default Post;
