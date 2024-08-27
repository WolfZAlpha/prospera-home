const navbarLightCode = `// PROSPERA DEFI PLATFORM components
import MKBox from "components/MKBox";

// PROSPERA DEFI PLATFORM examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarLight() {
  return (
    <MKBox bgColor="white" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.prosperaico.com",
          label: "buy now",
          color: "info",
        }}
        transparent
        relative
        center
      />
    </MKBox>
  );
}

export default NavbarLight;`;

export default navbarLightCode;
