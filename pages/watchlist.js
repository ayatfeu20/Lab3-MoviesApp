import MovieCarousel from "@/components/MovieCarousel";
import SkeletonLoader from "@/components/skeletonLoader";
import { useWatchlist } from "@/lib/hooks/useWatchlist";
import React from "react";
import { Carousel } from "@mantine/carousel";
import {
  Button,
  Center,
  Container,
  SimpleGrid,
  Skeleton,
  Stack,
  Title,
} from "@mantine/core";
import Link from "next/link";

function Watchlist() {
  const { watchlist, isLoading } = useWatchlist();

  return (
    <Stack>
      <Center h={250} bg="blue">
        <Title>Your Watchlist</Title>
      </Center>

      {isLoading && <SkeletonLoader />}

      {watchlist?.length > 0 && <MovieCarousel movies={watchlist} />}
      {watchlist?.length < 1 && (
        <Stack align="center">
          <Title order={3} size="h4">
            you haven't added any movie
          </Title>
          <Link href="/search">
            <Button>Search for movies</Button>
          </Link>
        </Stack>
      )}
    </Stack>
  );
}

export default Watchlist;