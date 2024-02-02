import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card>
      <Skeleton height="40px" />
    </Card>
  );
};

export default GenreListSkeleton;
