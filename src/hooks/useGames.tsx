import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const useGames = ({ selectedGenre, selectedPlatform }: Props) => {
  const config = {
    params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
  };
  return useData<Game>("/games", config, [
    selectedGenre?.id,
    selectedPlatform?.id,
  ]);
};

export default useGames;
