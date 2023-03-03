import { AppBar, Box, Container, Toolbar, Button } from "@mui/material"
import { NavLink } from "react-router-dom"


export default function MerchantNavBar() {
    const navBarItems = [
        {
            title: "Home",
            linkTo: "/merchant",
        },
        {
            title: "Products",
            linkTo: "/merchant/products",
        },
        {
            title: "Orders",
            linkTo: "/merchant/orders",
        },
        {
            title: "View Profile",
            linkTo: "/merchant/profile",
        },
        {
            title: "Logout",
            linkTo: "/",
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
