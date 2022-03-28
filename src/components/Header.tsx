import { Navbar, Container, Button } from "react-bootstrap";

interface HeaderProps {
  isLoggedIn?: boolean
}
export const Header: React.FC<HeaderProps> = (props) => {

  const DisplayButtons = () => {
    if (props.isLoggedIn) {
      return (
        <Button className="transparent" variant="transparent">Logout</Button>
      )
    } else {
      return (
        <Button className="transparent" variant="transparent">Login</Button>
      )
    }
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <DisplayButtons />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
