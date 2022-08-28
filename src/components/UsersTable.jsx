import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";

const UsersTable = ({ data, onOpen }) => {
  return (
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
  );
};

export default UsersTable;
