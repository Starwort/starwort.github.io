import {MetaProvider} from "@solidjs/meta";
import {A, Router} from "@solidjs/router";
import {clientOnly} from "@solidjs/start";
import {FileRoutes} from "@solidjs/start/router";
import {DarkMode, Folder, FolderOutlined, Favorite as Heart, LightMode, Menu as MenuIcon, Person, PersonOutlined, School, SchoolOutlined, Park as Tree, ParkOutlined as TreeOutlined, Work, WorkOutline} from "@suid/icons-material";
import {AppBar, Box, CssBaseline, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography, createPalette, createTheme, useMediaQuery} from "@suid/material";
import {Show, Suspense, createEffect, createMemo, createSignal, onMount} from "solid-js";
import styles from "./app.module.css";
import {GitHub} from "./extra_icons";
import {loadFromStorage} from "./util";

const Drawer = clientOnly(() => import("@suid/material/Drawer"));

export default function App() {
    const [themeColour, setThemeColour] = createSignal<"dark" | "light">(
        "dark"
    );
    onMount(() => {
        setThemeColour(loadFromStorage<"dark" | "light">("theme", "dark", ["dark", "light"]));
    });
    const palette = createMemo(() =>
        createPalette({
            mode: themeColour(),
            primary: {
                main: themeColour() == "dark" ? "#bb86fc" : "#6200ee",
            },
            secondary: {
                main: "#03dac6",
            },
        })
    );
    const theme = createTheme({palette});
    const drawerIsPersistent = typeof window === "undefined" ? () => true : useMediaQuery(theme.breakpoints.up("md"));
    const [persistentDrawerOpen, setPersistentDrawerOpen] = createSignal(true);
    const [temporaryDrawerOpen, setTemporaryDrawerOpen] = createSignal(false);
    createEffect(() => {
        if (drawerIsPersistent()) {
            setPersistentDrawerOpen(true);
            setTemporaryDrawerOpen(false);
        }
    });
    return (
        <MetaProvider>
            <ThemeProvider theme={theme}>
                <Router root={(props) => <>
                    <CssBaseline />
                    <AppBar sx={{zIndex: drawerIsPersistent() ? (theme) => theme.zIndex.drawer + 1 : undefined}}>
                        <Toolbar sx={{gap: 1}}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={() => drawerIsPersistent() ?
                                    setPersistentDrawerOpen(open => !open)
                                    : setTemporaryDrawerOpen(true)
                                }
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h5" component="h1" sx={{
                                flexGrow: 1,
                            }}>
                                Toby Collier | Starwort
                            </Typography>
                            {/* <IconButton color="inherit" component="a" href="https://github.com/Starwort/">
                            <GitHub />
                        </IconButton>
                        <IconButton color="inherit" component="a" href="https://ko-fi.com/starwort/">
                            <GitHub />
                        </IconButton> */}
                        </Toolbar>
                    </AppBar>
                    <Toolbar />
                    <Drawer
                        variant={drawerIsPersistent() ? 'persistent' : 'temporary'}
                        open={drawerIsPersistent() ? persistentDrawerOpen() : temporaryDrawerOpen()}
                        onClose={() => setTemporaryDrawerOpen(false)}
                        PaperProps={{sx: {width: 240}}}
                    >
                        <Show when={drawerIsPersistent()}>
                            <Toolbar />
                        </Show>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton
                                    selected={props.location.pathname == "/"}
                                    component={A}
                                    href="/"
                                >
                                    <ListItemIcon>
                                        <Show
                                            when={props.location.pathname == "/"}
                                            fallback={<PersonOutlined />}
                                        >
                                            <Person />
                                        </Show>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="About"
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    selected={props.location.pathname == "/projects"}
                                    component={A}
                                    href="/projects"
                                >
                                    <ListItemIcon>
                                        <Show
                                            when={props.location.pathname == "/projects"}
                                            fallback={<FolderOutlined />}
                                        >
                                            <Folder />
                                        </Show>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="My Projects"
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    selected={props.location.pathname == "/advent-of-code"}
                                    component={A}
                                    href="/advent-of-code"
                                >
                                    <ListItemIcon>
                                        <Show
                                            when={props.location.pathname == "/advent-of-code"}
                                            fallback={<TreeOutlined />}
                                        >
                                            <Tree />
                                        </Show>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Advent of Code"
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    selected={props.location.pathname == "/education"}
                                    component={A}
                                    href="/education"
                                >
                                    <ListItemIcon>
                                        <Show
                                            when={props.location.pathname == "/education"}
                                            fallback={<SchoolOutlined />}
                                        >
                                            <School />
                                        </Show>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="My Education"
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    selected={props.location.pathname == "/jobs"}
                                    component={A}
                                    href="/jobs"
                                >
                                    <ListItemIcon>
                                        <Show
                                            when={props.location.pathname == "/jobs"}
                                            fallback={<WorkOutline />}
                                        >
                                            <Work />
                                        </Show>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="My Employments"
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component="a"
                                    href="https://github.com/Starwort/"
                                >
                                    <ListItemIcon>
                                        <GitHub />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="My GitHub Profile"
                                    />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <div style={{"flex-grow": 1}} />
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component="a"
                                    href="https://ko-fi.com/starwort"
                                    target="_blank"
                                >
                                    <ListItemIcon>
                                        <Heart />
                                    </ListItemIcon>
                                    <ListItemText primary="Support Me" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component="a"
                                    href="https://github.com/Starwort/starwort.github.io/"
                                    target="_blank"
                                >
                                    <ListItemIcon>
                                        <GitHub />
                                    </ListItemIcon>
                                    <ListItemText primary="Repository" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        window.localStorage.theme = setThemeColour(
                                            themeColour => themeColour == "dark"
                                                ? "light" : "dark"
                                        );
                                    }}
                                >
                                    <ListItemIcon>
                                        <Show when={themeColour() == "dark"} fallback={<DarkMode />}>
                                            <LightMode />
                                        </Show>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={themeColour() == "dark"
                                            ? "Use Light Theme" : "Use Dark Theme"}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Box class={styles.mainContainer} sx={{
                        marginLeft: drawerIsPersistent() && persistentDrawerOpen()
                            ? '240px'
                            : '0px',
                    }}>
                        <Suspense>
                            {props.children}
                        </Suspense>
                    </Box>
                </>}>
                    <FileRoutes />
                </Router>
            </ThemeProvider>
        </MetaProvider>
    );
}
