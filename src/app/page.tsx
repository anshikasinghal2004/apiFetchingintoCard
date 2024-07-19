import styles from "./components/productList.module.css"
import ProductList from "./components/productList"
const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
};

export default Home;
