import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Menu = () => {
  return (
    <section id="menu">
      <h1>Menu</h1>
      <CategoryMenu />
      <ProductList />
    </section>
  );
};

export default Menu;
