import {Container, Row, Col} from "reactstrap"
import Navbar from "./Navbar"
import Menu from "./Menu"
import Dashboard from "./Product"
import Footer from "./Footer"



function App() {
  const title="Product App"
    const products=[
        {id:1, name:"Ürün 1", price:"50 TL", stock:"20" },
        {id:2, name:"Ürün 2", price:"100 TL", stock:"15" },
        {id:3, name:"Ürün 3", price:"75 TL", stock:"10" },
        {id:4, name:"Ürün 4", price:"200 TL", stock:"5" },
    ]
    const menuItems = ["Anasayfa", "Hakkımızda", "İletişim", "Ürünler"]

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
        <Navbar title={title} />
        </Col>
        <Col xs={3}>
          <Menu items={menuItems} />
        </Col>
        <Col xs={9}>
        <Dashboard products={products} />
        </Col>
      </Row>
      <Row>
        <Col>
        <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default App
