import { Navbar, Container } from "react-bootstrap";

interface HeaderProps {
  isLoggedIn?: boolean
}
export const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">First Last</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
