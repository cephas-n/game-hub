import { useEffect, useState } from "react";
import gameService, { FetchGamesResponse, Game } from "../services/gameService";

function useGames() {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const { request, cancel } = gameService.get<FetchGamesResponse>();

    request
      .then((res) => {
        setGames(res?.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    return cancel;
  }, []);

  return { games, error, isLoading };
}

export default useGames;
