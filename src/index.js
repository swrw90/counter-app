import React from "react";
import ReactDOM from "react-dom";

// import components
import Header from "./header";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));