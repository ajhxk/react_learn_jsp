import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div>
                Hello JSPang
                <ul className="my-list">
                    <li>{false ? 'JSPang.com' : '技术胖'}</li>
                    <li>I Love React</li>
                </ul>
            </div>
        )
    }
}

export default App