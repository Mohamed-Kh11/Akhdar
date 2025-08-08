import Link from "next/link";


const Btn = ({text ,url, target}) => {
  return (
    <div className="">
      <Link target={target} href={url}>
      <button className="overflow-hidden w-36 p-2 h-12 bg-green-700 text-white border-none rounded-4xl text-xl font-bold cursor-pointer relative z-10 group text-nowrap touch-manipulation  md:outline-offset-[3px] md:outline-2 ">{text} 
        <span className="absolute w-40 h-32 -top-8 -left-2 bg-green-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
        <span
          className="absolute w-40 h-32 -top-8 -left-2 bg-green-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
        ></span>
        <span
          className="absolute w-40 h-32 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
        ></span>
        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute w-32 h-12 top-1/2 -translate-y-1/2   z-10 flex text-nowrap justify-center items-center  ">{text}</span>
      </button>
      </Link>
    </div>
  );
}

export default Btn;