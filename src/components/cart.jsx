import React, { useState } from "react";
import Counter from "../components/counter";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Container,
} from "@material-ui/core";

const Cart = () => {
  const [x, setX] = useState(5);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung",
      price: 15000.0,
    },
    {
      id: 2,
      name: "Nokia",
      price: 18000.0,
    },
    {
      id: 3,
      name: "Mi",
      price: 12000.0,
    },
  ]);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Item Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <Counter />
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
