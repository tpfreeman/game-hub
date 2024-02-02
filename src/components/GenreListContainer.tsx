import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreListContainer = ({ children }: Props) => {
  return (
    <Box paddingY={1} borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GenreListContainer;
