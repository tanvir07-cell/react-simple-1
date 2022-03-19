import logo from "./logo.svg";
import "./App.css";

const products = [
  {
    name: "laptop",
    price: 95000,
  },

  {
    name: "mobile",
    price: 45000,
  },

  { name: "watch", price: 15000 },

  { name: "sunglass", price: 5000 },
];

function App() {
  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}

      {/* using dynamic but one kind of data or primitive data type */}
      {/* <Product name="laptop" price="93000"></Product>
      <Product name="mobile" price="23000"></Product> */}
    </div>
  );
}

// function component:

function Product(props) {
  return (
    <div className="product">
      <h1>Name : {props.name}</h1>
      <p>Price : {props.price} </p>
    </div>
  );
}

export default App;
