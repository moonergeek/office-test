import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";

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
    <Box width="80%" borderRadius={2} mx="auto" bg="">
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Users of the office</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Family</Th>
              <Th>Website</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((user) => (
              <Tr>
                <Td>{user.name}</Td>
                <Td>{user.username}</Td>
                <Td>{user.website}</Td>
                <Td>
                  <Button onClick={onOpen} colorScheme="teal" variant="solid">
                    More Details
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {data.map((user) => (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{`User ${user.id}`}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{user.email}</ModalBody>

            <ModalFooter isCentered>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Edit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ))}
    </Box>
  );
};

export default Characters;
