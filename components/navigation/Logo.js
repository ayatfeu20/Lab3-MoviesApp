import { Text } from "@mantine/core";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      style={{
        textDecoration: "none",
        
      }}
    >
      <Text
        style={{
          cursor: "pointer",
        }}
        fz="xl"
        fw="bolder"
        fs="italic"
        component="span"
        variant="gradient"
        gradient={{ from: "cyan", to: "blue" }}
      >
        AMMoviesApp
      </Text>
    </Link>
  );
};

export default Logo;