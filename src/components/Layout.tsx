import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

export default function Layout() {
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

      <Outlet />
    </>
  );
}
