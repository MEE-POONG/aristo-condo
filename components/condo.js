import React, { useState, useEffect } from "react";
import Image from "next/image";

import Aos from "aos";

import "aos/dist/aos.css";

export default function Condo() {
  const [openTab, setOpenTab] = useState(1);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative">
      <div className="bg-all py-20">
        <div className="grid grid-cols-12 gap-6 ">
          <div className="col-span-7">
            <Image src="/Image/room-21.jpg" width={900} height={600} />
          </div>
          <div className="col-span-5 text-center font-well">
            WHAT ARE THE PROBLEMS/CONSTRAINTS AND HOW DID YOU OVERCOME THE
            CHALLENGE?
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="mx-auto w-1/2 lg:max-w-4xl  line h-0.5 my-1"
            ></div>
            <div className="font-wellsub text-left my-6">
              This tight, triangular site caused obvious difficulties and the
              solutions had to be genuinely ‘bespoke’. No copy-and-paste, just
              thoughtful, careful and considered creativity. Not an easy
              project, but we hope that our Concept Design positively surprised
              the Client.
            </div>
            <div className="font-wellsub2 text-left">
              The recessed elevator core and high-level areas are clad with
              manufactured timber which is lightweight and mould/climate
              resistant. It can be made in a variety of wood tones/colours
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-20 ">
          <div className="col-span-5 text-center font-well">
            A Warm Welcome
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="mx-auto w-1/2 lg:max-w-4xl  line h-0.5 my-1"
            ></div>
            <div className="font-wellsub text-right my-6">
              The extensive glazed areas on the ground floor areas give the
              whole building a floating effect. The high lobby (7m) has a
              covered drop-off area for both private cars and taxis. Reception,
              Lobby-Lounge, Mailboxes and a generous Parcel Room are all
              conveniently located
            </div>
            <div className="font-wellsub2 text-right">
              One wall of the Entrance Lobby features a 7 metre water cascade.
              The two towers are clad in different materials. One in a
              brise-soleil, the other with a dark grey stone with dramatic white
              vein markings.
            </div>
          </div>
          <div className="col-span-7 text-right">
            <Image src="/Image/room-22.jpg" width={900} height={600} />
          </div>
        </div>

        <div className="mx-auto"></div>
      </div>
    </div>
  );
}
