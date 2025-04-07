import { IoImage } from 'react-icons/io5'

const CreatePost = () => {
  return (
    <form className="flex flex-col lg:w-[75%] w-[90%] p-5 pb-3 bg-neutral-950 border-[1px] border-neutral-800 rounded-md">
    <div className="flex gap-5">
      <div className="shrink-0">
        <img
          className="w-7 aspect-square bg-white rounded-full"
          src={""}
        ></img>
      </div>
      <textarea
        className="w-full h-[5rem] outline-none resize-none"
        placeholder="Make a post!"
        maxLength={260}
      ></textarea>
    </div>
    <div className="flex justify-between w-full mt-2">
      <label className="cursor-pointer" htmlFor="insertImage">
        <input
          id="insertImage"
          className="hidden"
          type="file"
        ></input>
        <IoImage fontSize={"1.5rem"}></IoImage>
      </label>
      <button className="px-4 py-1 bg-white rounded-full text-black">Post</button>
    </div>
  </form>  )
}

export default CreatePost