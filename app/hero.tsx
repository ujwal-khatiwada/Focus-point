import Image from 'next/image';

export default function Hero() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left md:flex-grow">
        <div className="flex flex-1 flex-col justify-center items-center p-2">
          <div className="flex flex-col items-center bg-gradient-to-b from-gray-200 to-gray-700 bg-clip-text text-transparent">
            <h2 className="text-4xl font-bold">FRONTEND</h2>
            <h2 className="text-4xl font-bold">DEVELOPER</h2>
          </div>
          <div className="mt-4 px-5 text-white max-w-lg">
            <p>
              Hi, I'm Ujwal, a passionate web developer with a strong focus on
              creating beautiful, responsive, and user-friendly websites. I take
              pride in crafting seamless web experiences that not only look great
              but function flawlessly across all devices.
            </p>
          </div>
          <button className="mt-6 px-6 py-2 rounded-full text-white font-bold hover:shadow-[5px_5px_20px_5px_rgb(2,192,240)] transition-all">
            VIEW MY WORK
          </button>
        </div>
        <div className="flex flex-1 justify-center items-center p-0 m-0">
          <Image
            src="/ujwal.png"
            alt="Pic-here"
            width={300}
            height={300}
            className="w-4/5 md:w-auto h-auto mt-5 md:mt-0 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
