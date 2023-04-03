import { useState, useEffect } from "react";
import genreService, {
  FetchGenresResponse,
  Genre,
} from "../services/genreService";

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const { request, cancel } = genreService.get<FetchGenresResponse>();

    request
      .then((res) => {
        setGenres(res?.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    return cancel;
  });

  return { genres, error, isLoading };
}

export default useGenres;
