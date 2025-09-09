import {Launch} from "@suid/icons-material";
import {Box, Card, CardActionArea, CardActions, CardContent, IconButton, Typography} from "@suid/material";
import {Component, For, JSX, Show} from "solid-js";
import {GitHub} from "~/extra_icons";
import {Directive, MasonryItemDirective} from "~/hooks/masonry";

export interface ProjectInfo {
    title: JSX.Element;
    url?: string;
    repoUrl?: string;
    description: string | JSX.Element;
    tags: [JSX.Element, string][];
    masonryItem?: Directive<MasonryItemDirective>;
    specialise?: "AoC" | "Edu";
}

const MaybeActionArea: Component<{
    url?: string;
    children: JSX.Element;
}> = (props) => <Show when={props.url} fallback={props.children}>
    <CardActionArea component="a" href={props.url}>
        {props.children}
    </CardActionArea>
</Show>;

export const ProjectCard: Component<ProjectInfo> = (props) => {
    return <Card variant="elevation" sx={{gridColumn: props.specialise == "Edu" ? "1/-1" : "span 4"}} ref={props.masonryItem}>
        <MaybeActionArea url={props.url}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="body1">
                    {props.description}
                </Typography>
            </CardContent>
        </MaybeActionArea>
        <CardActions>
            <Show when={props.repoUrl}>
                <IconButton
                    component="a"
                    href={props.repoUrl}
                    title={props.specialise == "AoC"
                        ? "Open this solution repository"
                        : "Open the repository for this project"}
                >
                    <GitHub />
                </IconButton>
            </Show>
            <Show when={props.url}>
                <IconButton
                    component="a"
                    href={props.url}
                    target="_blank"
                    title={props.specialise == "AoC"
                        ? "Open this year's overall leaderboard in a new tab"
                        : "Open this project in a new tab"}
                >
                    <Launch />
                </IconButton>
            </Show>
            <Box sx={{flexGrow: 1}} />
            <For each={props.tags}>{([tag, title]) => (
                <Box sx={{
                    p: 1,
                    ml: '0 !important',
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                }} title={title}>
                    {tag}
                </Box>
            )}</For>
        </CardActions>
    </Card>;
};