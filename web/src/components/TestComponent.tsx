import { Button } from "@chakra-ui/button";
import React from "react";
import { Form, Formik } from "formik";
import { Container } from "./Container";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { InputField } from "./InputField";
import { useCreatePostMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { ResponseModal } from "../utils/responseModal";

interface TestComponentProps {}

export const TestComponent: React.FC<TestComponentProps> = ({}) => {
  const [{ data }, createPost] = useCreatePostMutation();
  return (
    <Container>
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={async (input, { setErrors }) => {
          const response = await createPost({ input });
          const modal = new ResponseModal();

          if (response.data?.createPost?.errors || !response.data) {
            setErrors(toErrorMap?.(response?.data?.createPost?.errors));
            return modal.error();
          }
          return modal.success();
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <InputField name="title" placeholder="title" label="title" />
            <Box mt={8}>
              <InputField name="text" placeholder="text" label="text" />
            </Box>
            <Button
              size="lg"
              colorScheme="green"
              mt="24px"
              type="submit"
              isLoading={isSubmitting}
            >
              Send data to backend 🤞
            </Button>
          </Form>
        )}
      </Formik>

      <Flex direction="column" justifyContent="center" alignItems="center">
        <Box mb={8} mt={4}>
          <Heading>Response from backend 🤺</Heading>
        </Box>
        {data?.createPost?.post ? (
          <Box>
            <h1>{data.createPost?.post?.title}</h1>
            <h1>{data.createPost?.post?.text}</h1>
          </Box>
        ) : (
          <>
            <h1>No data yet </h1>
          </>
        )}
      </Flex>
    </Container>
  );
};

export default TestComponent;
