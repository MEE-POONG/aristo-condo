import React from "react";
import Image from "next/image";

export default function Progess() {
  return (
    <div className="min-h-0 bg-all mt-24 ">
      <div className="relative wow">
        <div className="banner-progess py-12">
          <div className="mx-auto max-w-xs lg:max-w-7xl">
            <div className="flex text-pro us justify-center py-4 ">
              Project Progress{" "}
            </div>
          </div>
          <div className=" mx-auto max-w-3xl grid grid-cols-12  ">
            <div className="col-span-4">
              <div className="progress ">
                <span className="title timer text-pro us">0%</span>
                <div className="overlay"></div>
                <div className="left"></div>
                <div className="right"></div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="text-white uppercase progress-head mt-4 text-left">
                overall project
              </div>
              <div className="text-pro uppercase progress-sub mt-4 text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-xs lg:max-w-7xl  gray h-0.5  w-full rounded-lg my-6"></div>
          <div className="grid grid-cols-12 mx-auto max-w-xs lg:max-w-5xl  ">
            <div className="col-span-12 lg:col-span-4 ">
              <div className="text-white uppercase progress-head mt-4 text-left">
                structural work
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1 text-center text-xl text-per self-center">70%</div>
                <div className="col-span-3 progressbar">
                  <div className="bar1"></div>
                </div>
              </div>
              <div className="text-pro uppercase progress-sub mt-4 text-left">
              structural work almost complete
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 ">
              <div className="text-white uppercase progress-head mt-4 text-left">
                system installation
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1 text-center text-xl text-per self-center">20%</div>
                <div className="col-span-3 progressbar">
                  <div className="bar2"></div>
                </div>
              </div>
              <div className="text-pro uppercase progress-sub mt-4 text-left">
              system installation s standard dummy
                text ever since the 1500s
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 ">
              <div className="text-white uppercase progress-head mt-4 text-left">
                achitectural work
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1 text-center text-xl text-per self-center">50%</div>
                <div className="col-span-3 progressbar">
                  <div className="bar3"></div>
                </div>
              </div>
              <div className="text-pro uppercase progress-sub mt-4 text-left">
              achitectural work is simply dummy text of the printing and typesetting
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
