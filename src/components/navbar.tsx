'use client'
import {AppBar, Box, Button, Container, Menu, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import WalletButton from "@/components/WalletButton";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
    const pages = [
        {label: "projects", url: "projects"},
        {label: "investments", url: "investments"},
        {label: "donations", url: "donations"},
    ];
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: "none", md: "flex"},
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        E-green4all
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: "flex", md: "none"},
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Crimes chain
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                sx={{my: 2, color: "white", display: "block"}}
                            >
                                <Link href={`/${page.url}`}>
                                    {page.label}
                                </Link>
                            </Button>
                        ))}
                    </Box>
                    <WalletButton/>
                    <PersonIcon/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
