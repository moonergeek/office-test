import { useQuery } from "@tanstack/react-query";
import { useDisclosure, Box } from "@chakra-ui/react";

import ModalContainer from "./ModalContainer";
import UsersTable from "./UsersTable";

const Characters = () => {
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Box width="80%" borderRadius={2} mx="auto">
      <UsersTable onOpen={onOpen} data={data} />
      {data.map((user) => (
        <ModalContainer user={user} isOpen={isOpen} onClose={onClose} />
      ))}
    </Box>
  );
};

export default Characters;
