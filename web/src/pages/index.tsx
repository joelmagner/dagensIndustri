import { Heading } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import React from "react";
import { PostFeed } from "../components/PostFeed";

const Index = () => (
  <Container pb={30}>
    <Heading>Dagens Industri RSS</Heading>
    <PostFeed />
    <DarkModeSwitch />
  </Container>
);

export default Index;
