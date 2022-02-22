import React, { useState } from "react";
import { Image } from "react-bootstrap";

import { IoCloseOutline } from "react-icons/io5";

const galleryList = [
  { id: 1, imgs: "/image/room-6.jpg" },
  { id: 2, imgs: "/image/room-7.jpg" },
  { id: 3, imgs: "/image/room-8.jpg" },
  { id: 4, imgs: "/image/room-21.jpg" },
  { id: 5, imgs: "/image/room-22.jpg" },
  { id: 6, imgs: "/image/room-23.jpg" },
  { id: 7, imgs: "/image/room-2.jpg" },
  { id: 8, imgs: "/image/room-12.jpg" },
  { id: 9, imgs: "/image/room-11.jpg" },
  { id: 10, imgs: "/image/room-18.jpg" },
  { id: 11, imgs: "/image/room-20.jpg" },
  { id: 12, imgs: "/image/room-20.jpg" },
  { id: 13, imgs: "/image/room-9.jpg" },
  { id: 14, imgs: "/image/room-15.jpg" },
  { id: 15, imgs: "/image/room-17.jpg" },
  { id: 16, imgs: "/image/room-16.jpg" },
  { id: 17, imgs: "/image/room-14.jpg" },
  { id: 18, imgs: "/image/room-13.jpg" },
  { id: 19, imgs: "/image/room-8.jpg" },
  { id: 20, imgs: "/image/room-5.jpg" },
  { id: 21, imgs: "/image/room-4.jpg" },
  { id: 22, imgs: "/image/room-20.jpg" },
  { id: 23, imgs: "/image/room-3.jpg" },
  { id: 24, imgs: "/image/room-1.jpg" },
];

export default function Gallery() {
  const [showGallerry, setShowGallerry] = useState();
  const [modal, setModal] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setImgLoading(!imgLoading);
  };

  const paginate = (array, n) => {
    const pageSize = Math.ceil(array.length / n);

    return Array.from({ length: pageSize }, (_, index) => {
      const start = index * n;
      return array.slice(start, start + n);
    });
  };
  // console.log(showGallerry);
  return (
    <div>
      <section className="overflow-hidden text-gray-700 mt-12">
        {paginate(galleryList, 12).map((gallerry) => {
          // console.log(555,idx,gallerry);
          return (
            <div
              key="kuy"
              className=" px-5 py-2 mx-auto "
            >
              <div
                key={gallerry[0]}
                className="flex flex-wrap -m-1 md:-m-2 "
                onClick={openModal}
                type="button"
              >
                <div className="flex flex-wrap w-1/2">
                  {modal ? (
                    <section className="modal__bg">
                      <div className="modal__align">
                        <div className="">
                          <IoCloseOutline
                            className="modal__close justify-between"
                            arial-label="Close modal"
                            onClick={setModal}
                          />
                          <div className="modal__gellerry-align">
                            <Image
                              className="modal__gellerry-style "
                              width=""
                              height=""
                              onLoad={spinner}
                              loading="lazy"
                              src={showGallerry}
                              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              // allowfullscreen
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  ) : null}

                  <div className="w-1/2 p-1 md:p-2 ">
                    {gallerry[0]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[0]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[0].imgs)}
                      />
                    )}
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    {gallerry[1]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[1]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[1].imgs)}
                      />
                    )}
                  </div>
                  <div className="w-full p-1 md:p-2">
                    {gallerry[2]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[2]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[2].imgs)}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="w-full p-1 md:p-2">
                    {gallerry[3]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[3]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[3].imgs)}
                      />
                    )}
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    {gallerry[4]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[4]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[4].imgs)}
                      />
                    )}
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    {gallerry[5]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[5]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[5].imgs)}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="w-1/2 p-1 md:p-2">
                    {gallerry[6]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[6]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[6].imgs)}
                      />
                    )}
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    {gallerry[7]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[7]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[7].imgs)}
                      />
                    )}
                  </div>
                  <div className="w-full p-1 md:p-2">
                    {gallerry[8]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[8]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[8].imgs)}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="w-full p-1 md:p-2">
                    {gallerry[9]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[9]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[9].imgs)}
                      />
                    )}
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    {gallerry[10]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[10]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[10].imgs)}
                      />
                    )}
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    {gallerry[11]?.imgs && (
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={gallerry[11]?.imgs}
                        onClick={(e) => setShowGallerry(gallerry[11].imgs)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
  
      </section>
    </div>
  );
}
