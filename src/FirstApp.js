import MeImage from "./assets/me.png";
import "./assets/styles.css";
import MyButton from "./components/MyButton";
const user = {
  name: "Godly Mathew",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const listItems = products.map((product) => (
  <li key={product.id}> {product.title}</li>
));

function handleClick() {
  alert("You clicked me!");
}
const first = () => {
  return (
    <>
      <div>My first React App</div>
      <img className="avatar" src={MeImage} />
      <ul>{listItems}</ul>
      <MyButton name="Godly" />
      <MyButton name="Mathew" />
    </>
  );
};
export default first;
