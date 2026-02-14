import { Route, Switch } from "wouter";
import { Theme } from "@radix-ui/themes";

import { DataProvider } from "./contexts/dataContext";
import NavigationBar from "./layout/navigationBar/NavigationBar";
import Home from "./pages/home/Home";

function App() {
  	return (
    	<Theme appearance="dark">
			<DataProvider>
				<div className="App">
					<NavigationBar />

					<Switch>
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</DataProvider>
    	</Theme>
  	);
}

export default App;
