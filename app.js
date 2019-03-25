class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log("wywołanie metody constructor");
    }
    componentWillMount() {
        console.log("wywołanie componentWillMount")
    }
    componentDidMount() {
        console.log("wywołanie componentDidMount")
    }
    render() {
        console.log("wywołanie metody render");
        return (
            <div>
                <p> lifecicle -czas zycia komponentu</p>
                <Child />
            </div>
        )
    }
}

class Child extends React.Component {
    componentDidMount() {
        console.log("wywołanie componentDidMount w dziecku")
    }
    render() {
        return (
            <h1>Dziecko</h1>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))