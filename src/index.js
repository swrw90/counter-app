import React from "react";
import ReactDOM from "react-dom";

// import components
import Header from "./header.js";
import Counter from "./counter.js";

// import CSS
import "./index.css";

let myBrand = "Counter";
let subBrands = ["Fun", "Fancy", "Fresh"];

class App extends React.Component {
    render() {
        return (
            <div>
                <Header brand={myBrand} subBrand={subBrands} />
                <Counter />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));