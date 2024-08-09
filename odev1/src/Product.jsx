import React from 'react'
import { Table, Container } from "reactstrap"

export default function Product(props) {
  return (
    <Container>
      <h2 className="my-4">Ürünler</h2>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>Ürün Adı</th>
            <th>Fiyat</th>
            <th>Stok</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
