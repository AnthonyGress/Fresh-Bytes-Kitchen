import CategoryMenu from "../components/CategoryMenu";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


const Menu = () => {
  return (
    <section id="menu">
      <Container>
        <Typography align="center" variant="h1" style={{marginTop: "3rem", fontFamily: "IM Fell Double Pica, serif;"}}>
          {"Menu"}
        </Typography>
      </Container>
      <CategoryMenu />
    </section>
  );
};

export default Menu;
