import { Flex, Grid, GridItem, HStack, Show, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import GameGenreList from "./components/GameGenreList";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { SortOrder } from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: SortOrder | null;
  search: string | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    order: null,
    search: null,
  });

  const handleSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handleSelectPlatform = (platform: Platform) => {
    const currentState = { ...gameQuery };
    if (platform.id === -1) setGameQuery({ ...currentState, platform: null });
    else setGameQuery({ ...currentState, platform });
  };

  const handleSelectOrder = (order: SortOrder) => {
    const currentState = { ...gameQuery };
    setGameQuery({ ...currentState, order });
  };

  const handleSearchGame = (search: string | null) => {
    setGameQuery({ ...gameQuery, search });
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
        <NavBar onSearch={handleSearchGame} />
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
        <GameHeading gameQuery={gameQuery} />
        <Flex gap={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelect={handleSelectPlatform}
          />
          <SortSelector
            selectedOrder={gameQuery.order}
            onSort={handleSelectOrder}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
