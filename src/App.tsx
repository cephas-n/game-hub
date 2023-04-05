import { Grid, GridItem, HStack, Show, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import GameGenreList from "./components/GameGenreList";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { SortOrder } from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: SortOrder | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    order: null,
  });

  const handleSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre } as GameQuery);
  };

  const handleSelectPlatform = (platform: Platform) => {
    const currentState = { ...gameQuery } as GameQuery;
    if (platform.id === -1) setGameQuery({ ...currentState, platform: null });
    else setGameQuery({ ...currentState, platform });
  };

  const handleSelectOrder = (order: SortOrder) => {
    const currentState = { ...gameQuery } as GameQuery;
    setGameQuery({ ...currentState, order });
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
            selectedGenre={gameQuery?.genre}
            onSelect={handleSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={10}>
        <HStack spacing={4}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelect={handleSelectPlatform}
          />
          <SortSelector
            selectedOrder={gameQuery.order}
            onSort={handleSelectOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
