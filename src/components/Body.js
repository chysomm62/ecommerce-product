import Header from "./header/Header";

import Content from "./content/Content";
import "../App.css";

const Body = (props) => {
  const { currentQty, setCurrentQty, products } = props;

  return (
    <div className="body">
      <Header />
      <Content
        products={products}
        currentQty={currentQty}
        setCurrentQty={setCurrentQty}
      />
    </div>
  );
};

export default Body;
