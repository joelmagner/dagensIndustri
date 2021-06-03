import { FieldError } from "../generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors?.forEach(({ field, message }) => {
    errorMap[field] = message;
    console.log("Error", field, message);
  });

  return errorMap;
};
