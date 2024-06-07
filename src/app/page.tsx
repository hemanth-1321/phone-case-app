import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { Icons } from "@/components/icons";
import { Check, Star } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start ">
              <div className="absolute w-28 left-0 -top-20 hidden  lg:block">
                <img src="/snake-1.png" />
              </div>
              <h1 className="relative w-fit tracking-tighter text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-gray-700 px-2 text-white rounded-lg">
                  Custom
                </span>{" "}
                PhoneCase
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balanace md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">Phone Case</span>
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-900" />
                    High-Quality, duarable meterial
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-900" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-900" />
                    Modern iPhone models supported{" "}
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full "
                    src="/users/user-1.png"
                    alt="user1"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full "
                    src="/users/user-2.png"
                    alt="user2"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full "
                    src="/users/user-3.png"
                    alt="user3"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full "
                    src="/users/user-4.jpg"
                    alt="user4"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full "
                    src="/users/user-5.jpg"
                    alt="user5"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                  </div>
                  <p>
                    <span className="font-semibold">1.2k</span> Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>{" "}
      </section>

      {/*value section*/}

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-3 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2 text-blue-400">Customer</span> Say
            </h2>
            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-2xl grid-cols px-4 lg:mx-0 lg:max-w-none lg:grid-col-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-0 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 text-red-500 fill-red-500" />
                <Star className="h-5 text-red-500 fill-red-500" />
                <Star className="h-5 text-red-500 fill-red-500" />
                <Star className="h-5 text-red-500 fill-red-500" />
                <Star className="h-5 text-red-500 fill-red-500" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durale And i even got a compliment on the"
                  design. Has the case for two and a half months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  ,on the case i had before ,the image started fading into
                  yellowish color after a couple weeks. love it"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-1.png"
                  className="rounded-full h-12 w-12 object-cover"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className=" font-semibold">Johnathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-blue-500" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-0 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 text-red-500 fill-red-500" />
                <Star className="h-5 text-red-500 fill-red-500" />
                <Star className="h-5 text-red-500 fill-red-500" />
                <Star className="h-5 text-red-500 fill-red-500" />
                <Star className="h-5 text-red-500 fill-red-500" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I usually keep my Phone together with my keys in my pocket
                  and usually that led to some pretty heavy scratchmarks on all
                  of my phoneCase .. This one,besides a barly noticable scratch
                  on the corner"
                  <span className="p-0.5 bg-slate-800 text-white">
                    looks brand new after about half a year
                  </span>
                  .I dig it
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-4.jpg"
                  className="rounded-full h-12 w-12 object-cover"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className=" font-semibold">Demon</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-blue-500" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
};

export default page;
