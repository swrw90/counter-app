import React from "react";
import ReactDOM from "react-dom";

// import components
import Header from "./header.js";

let myBrand = "Counter";
let subBrands = ["Fun", "Fancy", "Fresh"];

class App extends React.Component {
    render() {
        return (
            <div>
                <Header brand={myBrand} subBrand={subBrands}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));