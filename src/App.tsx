import { Grid, GridItem, Show, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import GameGenreList from "./components/GameGenreList";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="20px">
          <GameGenreList
            selectedGenre={selectedGenre}
            onSelect={handleSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={10}>
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
