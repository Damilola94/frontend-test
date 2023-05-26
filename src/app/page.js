import Image from "next/image";
import { FaAward, FaCcMastercard, FaSimCard } from "react-icons/fa";
import { HiWifi } from "react-icons/hi";
import { RxBorderDotted } from "react-icons/rx";
import { AiFillApple , AiFillGithub} from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { RiSettings3Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

export default function Home() {
  const backgroundImage = {
    backgroundImage: "url('blue-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 text-black bg-cover bg-center"
      style={backgroundImage}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="bg-white m-16 w-full h-fit p-10 flex justify-between space-x-12">
          <div className="w-4/6">
            <div className="flex">
              <div className="flex justify-between w-full">
                <div className="flex justify-center items-center">
                  <div className="w-8 h-8 bg-blue-900 rounded-2xl flex justify-center items-center">
                    <AiFillGithub className="text-2xl text-white"/>
                  </div>
                  <h1 className="text-black ml-2 font-bold">AceCoin<span className="font-thin">Pay</span></h1>
                </div>

                <div className="flex justify-center items-center">
                  <div className="flex space-x-1 text-white">
                    <div className="w-7 h-7 bg-gray-700 rounded-sm  flex justify-center items-center">
                      0
                    </div>
                    <div className="w-7 h-7 bg-gray-700 rounded-sm  flex justify-center items-center">
                      1
                    </div>
                  </div>
                  <p>:</p>
                  <div className="flex space-x-1 text-white">
                    <div className="w-7 h-7 bg-gray-700 rounded-sm  flex justify-center items-center">
                      1
                    </div>
                    <div className="w-7 h-7 bg-gray-700 rounded-sm  flex justify-center items-center">
                      9
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <div>
                <h2 className="">Card Number</h2>
                <p className="text-[8px]">
                  Enter the 16-digit card number on the card
                </p>
              </div>
              <div className="flex text-blue-800 space-x-1">
                <MdModeEdit className="text-blue-800 text-lg"/>
                <p>Edit</p>
              </div>
            </div>
            <div className="flex w-full mt-5 text-gray-300">
              <div className="border border-gray-300 bg-gray-50 w-full p-3 rounded-md flex justify-center items-center space-x-2">
                <FaCcMastercard className="text-2xl text-black mr-2" />
                <input className="w-1/4 outline-none flex-1 bg-gray-50" />
                <span>-</span>
                <input className="w-1/4 outline-none flex-1 bg-gray-50" />
                <span>-</span>
                <input className="w-1/4 outline-none flex-1 bg-gray-50" />
                <span>-</span>
                <input className="w-1/4 outline-none flex-1 bg-gray-50" />
                <RiSettings3Fill className="text-2xl text-blue-900" />
              </div>
            </div>
            <div className="flex justify-between mt-8 items-center">
              <div className="w-1/2">
                <h2 className="">CVV Number</h2>
                <p className="text-[8px]">
                  Enter the 3 or digit number on the card
                </p>
              </div>
              <div className="flex w-1/2 text-gray-300">
                <div className="border border-gray-300 bg-gray-50 w-full p-3 rounded-md flex justify-between items-center">
                  <input className="w-1/4 outline-none flex-1 bg-gray-50 text-center" />
                  <CgMenuGridO className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8 items-center">
              <div className="w-1/2">
                <h2 className="">Expiry Date</h2>
                <p className="text-[8px]">
                  Enter the expiration date of the card
                </p>
              </div>
              <div className="flex w-1/2 text-gray-300">
                <div className="flex justify-center items-center space-x-4">
                  <input className="w-1/2 outline-none flex-1 bg-gray-50 border border-gray-300 p-3 rounded-md flex justify-center items-center" />
                  <p className="text-black font">/</p>
                  <input className="w-1/2 outline-none flex-1 bg-gray-50 border border-gray-300 p-3 rounded-md flex justify-center items-center" />
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8 items-center">
              <div className="w-1/2">
                <h2 className="">Password</h2>
                <p className="text-[8px]">Enter your Dynamic password</p>
              </div>
              <div className="flex w-1/2 text-gray-300">
                <div className="border border-gray-300 bg-gray-50 w-full p-3 rounded-md flex justify-between items-center">
                  <input
                    className="w-1/4 outline-none flex-1 bg-gray-50"
                    type="password"
                  />
                  <CgMenuGridO className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8 items-center">
              <button className="p-2 flex-1 px-4 py-3 text-white bg-blue-900 rounded-md outline-none ring-offset-2 focus:ring-2">
                Pay Now
              </button>
            </div>
          </div>
          <div className="w-2/6  flex-col justify-center item-center relative">
            <div className="bg-white w-[70%] h-56 rounded-2xl shadow-xl absolute left-[38px]">
              <div className="w-1/4 shadow-xl h-1 bg-blue-800 text-center mx-auto" />
              <div className="flex justify-between px-6 pb-14 pt-4">
                <FaSimCard className="text-lg text-gray-600" />
                <HiWifi className="text-lg text-gray-600" />
              </div>
              <div className="px-6">
                <h3 className="text-[10px] text-gray-600">Jonathan Michael</h3>
                <div className="flex space-x-3 items-center">
                  <RxBorderDotted className="text-2xl" />
                  <p>3456</p>
                </div>
              </div>
              <div className="flex justify-between px-6 pt-14 pb-14 mb-10">
                <div>09/22</div>
                <FaCcMastercard className="text-2xl text-black" />
              </div>
            </div>
            <div className="bg-gray-100 w-full h-[24rem] rounded-md px-8 mt-[110px] pt-44 space-y-2">
              <div className="flex justify-between text-xs">
                <h2 className="text-gray-500">Company</h2>
                <div className="flex justify-between space-x-1">
                  <AiFillApple />
                  <h2>Apple</h2>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <h2 className="text-gray-500">Order Number</h2>
                <div className="flex justify-between space-x-1">
                  <h2>1266201</h2>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <h2 className="text-gray-500">Product</h2>
                <div className="flex justify-between space-x-1">
                  <h2>MacBook Air</h2>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <h2 className="text-gray-500">VAT (200%)</h2>
                <div className="flex justify-between space-x-1">
                  <h2>$100.00</h2>
                </div>
              </div>
              <div className="flex text-xs -mx-11 justify-between items-center">
                <div className="w-6 h-6 bg-white rounded-xl"></div>
                <div className="border border-gray-400 border-dotted w-full h-0" />
                <div className="w-6 h-6 bg-white rounded-xl"></div>
              </div>
              <div>
                <h2 className="text-gray-500 text-[10px]">You have to Pay</h2>
                <div className="flex justify-between text-xs">
                  <h2 className="font-bold text-2xl">
                    549
                    <span className="text-sm font-thin">
                      .99 <span className="text-gray-500">USD</span>
                    </span>
                  </h2>
                  <FaAward className=" text-lg text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
