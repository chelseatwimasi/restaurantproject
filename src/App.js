import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import CardList from "./Components/CardList";
import "./App.css";

let data = [
  "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif",
  "https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif",
  "https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg",
  "https://i.redd.it/b3esnz5ra34y.jpg"
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <CardList />
      <h1>Chelly and Dijah's Food Blog</h1>
    </div>
  );
}
//class App extends Component {
//  constructor(props) {
//    super(props);
//this.state = {
// cart: []
// };
//  }

// render() {
//   return (
// <div className="App">
// <h1>Chelsea and Dijah's Food Blog</h1>
// </div>
//   );
// }
//}

export default App;
