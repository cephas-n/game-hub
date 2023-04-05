import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGames = (selectedGenre: Genre | null) => {
  const config = { params: { genres: selectedGenre?.id } };
  return useData<Game>("/games", config, [selectedGenre?.id]);
};

export default useGames;
