import { Flex, Heading, Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import React from "react";
import { TestComponent } from "../components/TestComponent";

const Index = () => {
  return (
    <Container pb={30} h={"100vh"}>
      <Heading pt={8} pb={8}>
        Bi-directional kommunikation med NextJS & GraphQL
      </Heading>
      <Flex width="100%" direction="column" pl={8}>
        <Text>ApolloServerExpress ••• GraphQL Middleware för express</Text>
        <Text>Urql ••• GraphQL klient för React/JS, caching, SSR, mm..</Text>
        <Text>
          TypeGraphQL •••{" "}
          <i>
            <u>"one source of truth", goodbye to mismatches!"</u>{" "}
            {"   <--------"}
          </i>
        </Text>
        <Text>
          GraphQL-codegen ••• synca definition & implementation!
          -----------------^
        </Text>
      </Flex>
      <TestComponent />
      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
