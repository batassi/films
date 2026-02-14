import { Theme } from "@radix-ui/themes";

import NavigationBar from "./layout/navigationBar/NavigationBar";

function App() {
  	return (
    	<Theme appearance="dark">
      		<div className="App">
        		<NavigationBar />
      		</div>
    	</Theme>
  	);
}

export default App;
