"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

const fetchAnime = async (page: number) => {
  const MAX_LIMIT = 8;
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export default fetchAnime;
