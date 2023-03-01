import { AppBar, Box, Container, Toolbar, Button } from "@mui/material"
import { NavLink } from "react-router-dom"


export default function CustomerNavBar() {
    const navBarItems = [
        {
            title: "Home",
            linkTo: "/customer",
        },
        {
            title: "Products",
            linkTo: "/customer/products",
        },
        {
            title: "Cart",
            linkTo: "/customer/cart",
        },
        {
            title: "Orders",
            linkTo: "/customer/orders",
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
