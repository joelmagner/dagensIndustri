import { Box, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usePostsQuery } from "../generated/graphql";
import { Post } from "./Post";
interface PostFeedProps {}

export const PostFeed: React.FC<PostFeedProps> = ({}) => {
  const [diVar, __] = useState({
    limit: 10,
    url: "https://wwww.di.se/rss",
    order: true,
  });

  const [dnVar, _] = useState({
    limit: 10,
    url: "https://wwww.dn.se/rss",
    order: true,
  });

  const [postData, setPostData] = useState([]);

  const [
    { data: diData, error: diError, fetching: diFetching },
  ] = usePostsQuery({
    variables: diVar,
  });

  const [
    { data: dnData, error: dnError, fetching: dnFetching },
  ] = usePostsQuery({
    variables: dnVar,
  });

  useEffect(() => {
    setPostData(diData?.posts);
    dnData?.posts.map((p) => postData?.push(p));
  }, [diData, dnData]);

  if (!diFetching && !diData) {
    return (
      <div>
        <div>Your Query failed.</div>
        <div>{diError.message}</div>
      </div>
    );
  }

  return (
    <>
      <Box mt={8} mx="auto" w="50vw">
        {console.log("dwadwa", postData)}
        {!postData && (diFetching || dnFetching) ? (
          <div>Loading...</div>
        ) : (
          <Stack spacing={8}>
            {postData?.map((p) =>
              !p ? null : <Post key={p.guid + p.isoDate} post={p} />
            )}
          </Stack>
        )}
      </Box>
    </>
  );
};
