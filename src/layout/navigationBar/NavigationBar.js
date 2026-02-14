import { Grid } from "@radix-ui/themes";

import { AppName, NavBar, Logo } from "./NavigationBar.Styles";

const NavigationBar = () => {
    return (
        <NavBar>
            <Grid columns="2" gap="1">
                <AppName><Logo /> Films</AppName>
            </Grid>
        </NavBar>
    );
};

export default NavigationBar;