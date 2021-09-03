import CategoryMenu from "../components/CategoryMenu";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const font = "'Courgette', cursive";

const Order = () => {
  return (
    <section id="menu">
      <Container>
        <Typography align="center" variant="h1" style={{paddingTop: "6rem", fontFamily: font}}> 
          {"Menu"}
        </Typography>
      </Container>
      <CategoryMenu />
    </section>
  );
};

export default Order;
