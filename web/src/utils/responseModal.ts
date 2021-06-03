import { createStandaloneToast, toast } from "@chakra-ui/react";

export class ResponseModal {
  error = () => {
    const toast = createStandaloneToast();
    return toast({
      title: "An error occurred.",
      description: "Request to backend didn't go as intended.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  success = () => {
    const toast = createStandaloneToast();
    return toast({
      title: "Wohoo 🎉🎉🎉",
      description: "Du vann 1 fredagsöl 🍺",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
}

export default ResponseModal;
