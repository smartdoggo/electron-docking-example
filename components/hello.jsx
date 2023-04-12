let react = require("react")
let React = require("react")
let reactDOM = require("react-dom")
let reactRouter = require("react-router-dom")
let Component = react.Component
let BrowserRouter = reactRouter.BrowserRouter
let Switch = reactRouter.Switch
let Route = reactRouter.Route
class Hello extends react.Component {
	render() {
		return <div>Hello World my friend!</div>
	}
}
function BaseApp() {
	return (
		<Switch>
			<Route path="/" component={Hello} />
		</Switch>
	)
}
class App extends Component {
	render() {
		return <BaseApp />
	}
}
reactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("body")
)
