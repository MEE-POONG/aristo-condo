import React from "react";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Progess() {
  const now = 0;

  return (
    <div className="min-h-0 bg-all my-24 ">
      <div className="relative wow">
        <div className="banner-progess">
          <div className="mx-auto  max-w-xs lg:max-w-6xl">
            <div className="flex text-white us justify-center py-4 ">
              Project Progress{" "}
            </div>
            <div className="text-center">
              <Image
                src="/Image/progress.png"
                width={177}
                height={26}
              />
              <ProgressBar
                completed={now}
                className="wrapper my-4  "
                barContainerClassName="bg-transparent "
                completedClassName="bg-white w-0 ml-2 "
                labelClassName="label"
              />
              <div className="grid grid-col-12 gap-4 lg:grid-cols-12">
                <div className="col-span-12 lg:col-span-4 ">
                  <div className="flex justify-center text-sm lg:text-2xl  uppercase text-white">
                    OverALL Progress
                  </div>
                  <ProgressBar
                    completed={0}
                    className="wrapper my-4  "
                    barContainerClassName=" "
                    completedClassName="bg-white   "
                    labelClassName="sub-label text-gold"
                  />
                </div>
                <div className="col-span-12 lg:col-span-4 ">
                  <div className="flex justify-center text-sm lg:text-2xl  uppercase text-white">
                  STRUCTURE
                  </div>
                  <ProgressBar
                    completed={0}
                    className="wrapper my-4  "
                    barContainerClassName=" "
                    completedClassName="bg-white   "
                    labelClassName="sub-label text-gold"
                  />
                </div>
                <div className="col-span-12 lg:col-span-4 ">
                  <div className="flex justify-center text-sm lg:text-2xl  uppercase text-white">
                  ARCHITECTURE
                  </div>
                  <ProgressBar
                    completed={0}
                    className="wrapper my-4  "
                    barContainerClassName=" "
                    completedClassName="bg-white   "
                    labelClassName="sub-label text-gold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
