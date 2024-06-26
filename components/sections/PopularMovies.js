import { Title, Space } from "@mantine/core";
import MovieCarousel from "../MovieCarousel";
import React from "react";
function PopularMovies({ popularMovies }) {
  return (
    <>
      <Space h="md" />
      <Title order={2}>Popular Movies</Title>
      <Space h="md" />
      <MovieCarousel movies={popularMovies} />
    </>
  );
}

export default PopularMovies;