"use server";

const fetchAnime = async (page: number) => {
  const MAX_LIMIT = 8;
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  return data;
};

export default fetchAnime;
