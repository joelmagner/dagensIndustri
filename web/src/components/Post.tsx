import { Flex, Box, Link, Heading, Text, Img } from "@chakra-ui/react";
import React from "react";
import { Di } from "../generated/graphql";

interface PostProps {
  post: Di;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <Flex key={post.guid + post.pubDate} p={5} shadow="md" borderWidth="1px">
        <Box flex={1}>
          <Link href={post.guid}>
            <Heading fontSize="xl">{post.title}</Heading>
          </Link>
          <Img src={post.thumbnail?.url} />
          <Text>{post.thumbnail?.description}</Text>
          <Flex>
            <Text mr={1}>Posted by</Text>
            <Text
              style={{
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              {post.creator}
            </Text>
          </Flex>

          <Flex align="center">
            <Text flex={1} mt={4}>
              {new Date(post.pubDate).toLocaleString()}
            </Text>
            <Box ml="auto">{post.contentSnippet}</Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
