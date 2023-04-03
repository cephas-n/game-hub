import { HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  genre: Genre;
}
const GenreItem = ({ genre }: Props) => {
  return (
    <HStack paddingY="5px">
      <Image src={getCroppedImage(genre.image_background)} boxSize="32px" borderRadius="8px" />
      <Text fontSize="lg">{genre.name}</Text>
    </HStack>
  );
};

export default GenreItem;
