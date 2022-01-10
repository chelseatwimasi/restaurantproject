import React, { Component } from "react";
import Navbar from "./Components/Navbar";
//import Card from "./Components/Card";
import "./App.css";
import CardList from "./Components/CardList";

let data = [
  "https://www.africanbites.com/wp-content/uploads/2018/03/IMG_9302.jpg",
  "https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg",
  "https://therealfooddietitians.com/wp-content/uploads/2017/02/Crispy-Baked-Buffalo-Wings-9.jpg",
  "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg",
  "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2019/11/spicy-chicken-pasta-1.jpg",
  "https://www.thespruceeats.com/thmb/X6mg_2VBCQQ2X8VrLcPTf8_4ce0=/2733x2050/smart/filters:no_upscale()/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg",
  "https://www.thedreamafrica.com/wp-content/uploads/2017/07/best-Ghanaian-Food.jpg",
  "https://popmenucloud.com/bhxiavmo/73b4b821-571d-434d-949b-6962e81a5df4",
  "https://jamafo.com/wp-content/uploads/2019/05/jamaican-food-spread-1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuKn8rC7j9mIlAph3UkBXiiegG16D62WwKg&usqp=CAU"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add state items here
      card1Clicks: 0
    };
  }
  // click hander
  handle1Click = () => {
    let clicks = this.state.card1Clicks;
    clicks++;
    this.setState({ card1Clicks: clicks });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Chelsea and Dijah's Food Blog</h1>
        <h3>Recommended Top 10 Restaurants In NYC Based Off of Food</h3>
        <CardList
          images={data}
          clicks={this.state}
          click1Handler={this.handle1Click}
          // pass state values as props
        />
      </div>
    );
  }
}

export default App;

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
