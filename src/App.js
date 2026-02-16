import { Route, Switch } from "wouter";
import { Theme } from "@radix-ui/themes";

import { DataProvider } from "./contexts/dataContext";
import NavigationBar from "./layout/navigationBar/NavigationBar";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import Search from "./pages/search/Search";

function App() {
  	return (
    	<Theme appearance="dark">
			<DataProvider>
				<div className="App">
					<NavigationBar />

					<Switch>
						<Route path="/" component={Home} />
						<Route path="/movie/:id" component={Movie} />
						<Route path="/search" component={Search} />
					</Switch>
				</div>
			</DataProvider>
    	</Theme>
  	);
}

export default App;
