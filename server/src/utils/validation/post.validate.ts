import { Post } from "../../entities/post";

export const validatePost = (input: Post) => {
  if (input.title.length <= 4) {
    return [
      {
        field: "title",
        message: "Post title must be at least 5 characters.",
      },
    ];
  }
  if (input.title[0] !== input.title[0].toUpperCase()) {
    return [
      {
        field: "title",
        message: "Post title must start with a capitalized letter.",
      },
    ];
  }
  if (input.text.length <= 4) {
    return [
      {
        field: "text",
        message: "Post text must have at least 5 characters.",
      },
    ];
  }

  return null;
};

export const formatPost = (input: Post) => {
  input.text += "(🍺🍺🍺 from backend)";
  input.title = input.title.toUpperCase();
  return input;
};
