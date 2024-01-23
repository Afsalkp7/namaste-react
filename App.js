import React from "react";
import ReactDOM from "react-dom/client"


/**
 * REACT
 */

// const heading = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{},"React"),
//         React.createElement("h2",{},"I'm a h2 tag"),
//     ]),
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"I'm a h1 tag"),
//         React.createElement("h2",{},"I'm a h2 tag"),
//     ])
// ])

/**
 * JSX
 */

// const heading = <h1 id="heading"> hello world!! </h1>
// const image = <img src="https://res.cloudinary.com/dzvvpbnai/image/upload/v1702547794/vlrrr1ojxijcvu4w9oks.jpg"/>


// const root = ReactDOM.createRoot(document.getElementById("root"))
// const img = ReactDOM.createRoot(document.getElementById("img"))
// img.render(image)
// root.render(heading)

/**
 * Function component
 */

const text = <h3>Its a text</h3>

const Title = () => (
    <div>
        <h1>Hello world from function ⚡</h1>
    </div>
)

const Header = () => (
    <div>
        <Title />
        <Title></Title>
        {Title()}
        {text}
        <h2>hello react</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header />)