import { List, ListIcon, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";

const GameGenreList = () => {
  const { data: genres, isLoading } = useGenres();

  if (isLoading) return <Spinner size="lg" />;

  return (
    <List>
      {genres.map((genre) => (
        <GenreItem genre={genre} />
      ))}
    </List>
  );
};

export default GameGenreList;
