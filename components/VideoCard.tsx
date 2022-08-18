import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsFillPauseFill, BsFillPlayFill, BsPlay } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

import { Video } from "../types";

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href="">
              <>
                <Image
                  width={62}
                  height={62}
                  className="rounded-full"
                  src={post.postedBy.image}
                  alt="Profile Photo"
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div>
            <Link href="">
              <div>
                <p>{post.postedBy.userName}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
