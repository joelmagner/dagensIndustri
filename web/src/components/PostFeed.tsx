import { Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { usePostsQuery } from "../generated/graphql";
import { Post } from "./Post";
interface PostFeedProps {}

export const PostFeed: React.FC<PostFeedProps> = ({}) => {
  const [variables, setVariables] = useState({
    limit: 10,
    url: "https://wwww.di.se/rss",
    order: true,
  });
  const [{ data, error, fetching }] = usePostsQuery({
    variables,
  });

  if (!fetching && !data) {
    return (
      <div>
        <div>Your Query failed.</div>
        <div>{error.message}</div>
      </div>
    );
  }

  return (
    <>
      <Box mt={8} mx="auto" w="50vw">
        {!data && fetching ? (
          <div>Loading...</div>
        ) : (
          <Stack spacing={8}>
            {data!.posts.map((p) =>
              !p ? null : <Post key={p.guid + p.isoDate} post={p} />
            )}
          </Stack>
        )}
      </Box>
    </>
  );
};
