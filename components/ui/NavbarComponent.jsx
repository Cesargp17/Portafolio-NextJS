import { Navbar, Link, Text, Avatar, Dropdown, Button } from "@nextui-org/react";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";

export const NavbarComponent = () => {

    const collapseItems = [
        { id: 1, name: "Inicio", href: '/'},
        { id: 2, name: "Sobre mí", href: '/#about'},
        { id: 3, name: "Conocimientos", href: '/#conocimientos'},
        { id: 4, name: "Portafolio", href: '/#portafolio'},
        { id: 5, name: "Contácto", href: '/#contacto'},
      ];

      const { onChangeTheme, ThemeIcon } = useContext( UIContext );

  return (
    <Navbar variant="sticky" maxWidth='xl'>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          {/* <AcmeLogo /> */}
          <Text b color="inherit" h2>C</Text>
          <Text b color="inherit" h3>ésar</Text>

          <Text b color="inherit" h2>P</Text>
          <Text b color="inherit" h3>érez</Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="#">Inicio</Navbar.Link>
          <Navbar.Link href="#about">Sobre mí</Navbar.Link>
          <Navbar.Link href="#conocimientos">Conocimientos</Navbar.Link>
          <Navbar.Link href="#portafolio">Portafolio</Navbar.Link>
          <Navbar.Link href="#contacto">Contácto</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Item>
          <Button
        auto
        onClick={ onChangeTheme }
        color=""
        css={{ color: 'black' }}
        icon={ ThemeIcon }
      />

            </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item) => (
            <Navbar.CollapseItem
              key={item.id}
            >
              <Link
                color="inherit"
                href={item.href}
              >
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
  )
}
