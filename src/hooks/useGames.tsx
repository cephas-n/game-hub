import { SortOrder } from "../components/SortSelector";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";
import { GameQuery } from "../App";

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGames = (gameQuery: GameQuery) => {
  const config = {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.order?.value,
    },
  };
  return useData<Game>("/games", config, [
    gameQuery.genre?.id,
    gameQuery.platform?.id,
    gameQuery.order?.value,
  ]);
};

export default useGames;
