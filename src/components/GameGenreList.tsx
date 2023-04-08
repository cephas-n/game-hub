import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GameGenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data: genres, isLoading } = useGenres();

  if (isLoading) return <Spinner size="lg" />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <HStack key={genre.id} paddingY="5px">
            <Image
              src={getCroppedImage(genre.image_background)}
              boxSize="32px"
              borderRadius="8px"
              objectFit="cover"
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => onSelect(genre)}
              whiteSpace="normal"
              textAlign="left"
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GameGenreList;
