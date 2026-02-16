import { useLocation } from "wouter";
import { Grid } from "@radix-ui/themes";

import { AppName, NavBar, Logo } from "./NavigationBar.Styles";

const NavigationBar = () => {
    const [location, navigate] = useLocation();

    const handleGoHome = () => {
        if(location !== "/") {
            navigate("/");
        }
    };

    return (
        <NavBar>
            <Grid columns="2" gap="1">
                <AppName onClick={handleGoHome}><Logo /> Films</AppName>
            </Grid>
        </NavBar>
    );
};

export default NavigationBar;