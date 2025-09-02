import {Launch} from "@suid/icons-material";
import {Box, Card, CardActionArea, CardActions, CardContent, IconButton, Typography} from "@suid/material";
import {Component, For, JSX, Show} from "solid-js";
import {Directive, MasonryItemDirective} from "~/hooks/masonry";

interface ProjectInfo {
    title: JSX.Element;
    url?: string;
    description: string | JSX.Element;
    children?: JSX.Element;
    tags: JSX.Element[];
    masonryItem?: Directive<MasonryItemDirective>;
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
    return <Card variant="elevation" sx={{gridColumn: "span 4"}} ref={props.masonryItem}>
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
            {props.children}
            <Show when={props.url}>
                <IconButton component="a" href={props.url} target="_blank">
                    <Launch />
                </IconButton>
            </Show>
            <Box sx={{flexGrow: 1}} />
            <For each={props.tags}>{tag => (
                <Box sx={{
                    p: 1,
                    ml: '0 !important',
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {tag}
                </Box>
            )}</For>
        </CardActions>
    </Card>;
};