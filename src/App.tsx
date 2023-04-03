import { Grid, GridItem, Show, Spinner } from "@chakra-ui/react";
import GameGenreList from "./components/GameGenreList";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

interface Genre {
  id: number;
  name: string;
}

const App = () => {
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
          <GameGenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
