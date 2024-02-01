import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Link, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        maxH={{ base: "200px", lg: "250px" }}
        minH={{ base: "130px", lg: "150px" }}
        objectFit="cover"
        src={game.background_image}
      />
      <CardBody>
        <Link>
          <Heading fontSize="2xl">{game.name}</Heading>
        </Link>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconsList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
