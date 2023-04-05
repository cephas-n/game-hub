import { Grid, GridItem, HStack, Show, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import GameGenreList from "./components/GameGenreList";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { SortOrder } from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedOrder, setSelectedOrder] = useState<SortOrder | null>(null);

  const handleSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const handleSelectPlatform = (platform: Platform) => {
    if (platform.id === -1) setSelectedPlatform(null);
    else setSelectedPlatform(platform);
  };

  const handleSelectOrder = (order: SortOrder) => {
    setSelectedOrder(order);
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
        <HStack spacing={4}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelect={handleSelectPlatform}
          />
          <SortSelector
            selectedOrder={selectedOrder}
            onSort={handleSelectOrder}
          />
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedOrder={selectedOrder}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
