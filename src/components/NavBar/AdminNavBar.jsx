import { AppBar, Box, Container, Toolbar, Button } from "@mui/material"
import { NavLink } from "react-router-dom"


export default function AdminNavBar() {
    const navBarItems = [
        {
            title: "Home",
            linkTo: "/admin",
        },
        {
            title: "Merchants",
            linkTo: "/admin/merchant-list",
        },
        {
            title: "Customers",
            linkTo: "/admin/customer-list",
        },
        {
            title: "Logout",
            linkTo: "/",
        },
        {
            title: "View Profile",
            linkTo: "/admin/profile",
        },
    ]


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: "flex" }}>
                        {navBarItems.map((item) => {
                            return (
                                <NavLink
                                    key={item.title}
                                    style={{
                                        textDecoration: "none",
                                    }
                                    }
                                    to={item.linkTo}
                                >
                                    <Button
                                        sx={{
                                            my: 1,
                                            color: "white",
                                            display: "block",
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                </NavLink>
                            )
                        })}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
