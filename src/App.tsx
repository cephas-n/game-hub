import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import useGenres from "./hooks/useGenres";
import apiClient from "./services/api-client";

interface Genre {
  id: number;
  name: string;
}

const App = () => {
  const { genres, isLoading } = useGenres();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <ul>
            {genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
