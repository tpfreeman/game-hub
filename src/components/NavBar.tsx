import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/ApLogo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>AXON PARK</Text>
    </HStack>
  );
};

export default NavBar;
