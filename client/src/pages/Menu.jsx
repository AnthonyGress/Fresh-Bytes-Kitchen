import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Menu = () => {
  return (
    <section id="menu">
      <Container>
        <Typography align="center" variant="h3">
          {"Menu"}
        </Typography>
      </Container>
      <CategoryMenu />
      <ProductList />
    </section>
  );
};

export default Menu;
