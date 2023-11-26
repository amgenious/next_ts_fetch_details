import React from "react";
import Image from "next/image";

async function getAnimeDetails(id: string) {
  const res = await fetch("https://shikimori.one/api/animes/" + id);
  return res.json();
}

export default async function Detailspage({ params }: { params: any }) {
  const animedetails = await getAnimeDetails(params.id);
  return (
    <>
      <h2 className="text-red-400 text-3xl p-2 font-bold">{animedetails.name}</h2>
      <hr></hr>
      <div className=" p-2 h-max flex gap-2">
        <div className="w-full relative" id="image">
          <Image
            src={`https://shikimori.one/${animedetails.image.original}`}
            alt={animedetails.name}
            layout="responsive" width={500} height={300}
            className="rounded-xl"
          />
        </div>
        <div className="card w-[50%] p-2" id="details">
          <p className="font-bold text-white text-xl line-clamp-1 w-full">{animedetails.name}</p>
          <p className="text-white text-sm font-bold capitalize">Kind: {animedetails.kind}</p>
          <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {animedetails.episodes || animedetails.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{animedetails.score}</p>
          </div>
        </div>
          <p>Status: <span className="text-base font-bold text-amber-400 capitalize">{animedetails.status}</span></p>
          <p>Rating: <span className="text-base font-bold text-red-400 capitalize">{animedetails.rating}</span></p>
          <p className="text-justify ">{animedetails.description_html}</p>
        </div>
      </div>
    </>
  );
}
