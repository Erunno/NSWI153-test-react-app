import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CounterContext from "../shared/counter-context";

export default function Layout() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Moje čuprózní apka
            </Typography>
            <Button color="inherit">
              <Link className="nav-link" to="/">
                Text Input Label
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="nav-link" to="/increase">
                Increase
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="nav-link" to="/decrease">
                Decrease
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <CounterContext.Provider value={{ counter, setCounter }}>
        <Outlet />
      </CounterContext.Provider>
    </>
  );
}
