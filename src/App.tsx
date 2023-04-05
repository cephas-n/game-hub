import { Grid, GridItem, Show, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import GameGenreList from "./components/GameGenreList";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handleSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const handleSelectPlatform = (platform: Platform) => {
    if (platform.id === -1) setSelectedPlatform(null);
    else setSelectedPlatform(platform);
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
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelect={handleSelectPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
