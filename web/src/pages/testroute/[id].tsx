import { Box } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

interface PostPageProps {}

const Testroute: React.FC<PostPageProps> = ({}) => {
  const router = useRouter();

  return <Box>Heeey... {router.query.id}</Box>;
};

export default Testroute;
