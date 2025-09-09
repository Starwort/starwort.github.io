import {Title} from "@solidjs/meta";
import {Launch} from "@suid/icons-material";
import {Button, Card, CardActions, CardContent, Typography} from "@suid/material";
import {Component} from "solid-js";
import {ProjectCard, ProjectInfo} from "~/components/ProjectCard";
import {C, Python, Rust} from "~/extra_icons";
import {createMasonry} from "~/hooks/masonry";

const AocCard: Component<Omit<ProjectInfo, "specialise">> = (props) => <ProjectCard {...props} specialise="AoC" />;

export default function AdventOfCode() {
    const {item, container} = createMasonry();
    return <main use:container>
        <Title>Advent of Code</Title>
        <Card sx={{gridColumn: "1/-1"}} ref={item}>
            <CardContent>
                <Typography variant="body1" paragraph>
                    <cite>Advent of Code</cite> is an annual event in December
                    where a series of small programming puzzles are released each day
                    to be solved in any programming language.
                </Typography>
                <Typography variant="body1" paragraph>
                    I have participated every year since 2017, despite puzzles
                    being released at 5AM UK time, and my solutions have been
                    publicly available since 2019.
                </Typography>
                <Typography variant="body1">
                    Since 2022, I have also maintained leaderboards for code
                    golf solutions. I am currently working on moving from
                    repositories to having a dedicated website for this.
                </Typography>
            </CardContent>
            <CardActions>
                <Button component="a" href="https://adventofcode.com/" endIcon={<Launch />}>
                    Visit Advent of Code
                </Button>
            </CardActions>
        </Card>
        <AocCard
            masonryItem={item}
            title="2024"
            url="https://benediktwerner.github.io/aoc-leaderboard/#2024"
            description={<>
                In 2024, I earnt 282 points and got 237th place (tied) out of
                over 274,000 participants.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
            repoUrl="https://github.com/Starwort/advent-of-code-2024"
        />
        <AocCard
            masonryItem={item}
            title="2024 - Golf"
            description={<>
                The Code Golf leaderboard for 2024, and the Discord bot used to
                manage the leaderboard.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
            repoUrl="https://github.com/Starwort/advent-of-code-golf-2024"
        />
        <AocCard
            masonryItem={item}
            title="2023"
            url="https://benediktwerner.github.io/aoc-leaderboard/#2023"
            description={<>
                In 2023, I earnt 618 points and got 111st place out of over
                307,000 participants.
            </>}
            tags={[
                [<Python />, "Python"],
                [<Rust />, "Rust"],
            ]}
            repoUrl="https://github.com/Starwort/advent-of-code-2023"
        />
        <AocCard
            masonryItem={item}
            title="2023 - Golf"
            description={<>
                The Code Golf leaderboard for 2023, and the Discord bot used to
                manage the leaderboard.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
            repoUrl="https://github.com/Starwort/advent-of-code-golf-2023"
        />
        <AocCard
            masonryItem={item}
            title="2022"
            url="https://benediktwerner.github.io/aoc-leaderboard/#2022"
            description={<>
                In 2022, I earnt 321 points and got 189th place out of over
                307,000 participants.
            </>}
            tags={[
                [<Python />, "Python"],
                [<Rust />, "Rust"],
            ]}
            repoUrl="https://github.com/Starwort/advent-of-code-2022"
        />
        <AocCard
            masonryItem={item}
            title="2022 - Golf"
            description={<>
                The Code Golf leaderboard for 2022, and the Discord bot used to
                manage the leaderboard.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
            repoUrl="https://github.com/Starwort/advent-of-code-golf-2022"
        />
        <AocCard
            masonryItem={item}
            title="2021"
            url="https://benediktwerner.github.io/aoc-leaderboard/#2021"
            description={<>
                In 2021, I earnt 191 points and got 272nd place (tied) out of
                over 219,000 participants.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
            repoUrl="https://github.com/Starwort/advent-of-code-2021"
        />
        <AocCard
            masonryItem={item}
            title="2020"
            url="https://benediktwerner.github.io/aoc-leaderboard/#2020"
            description={<>
                In 2020, I earnt 586 points and got 101st place (tied) out of
                over 168,000 participants.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
            repoUrl="https://github.com/Starwort/advent-of-code-2020"
        />
        <AocCard
            masonryItem={item}
            title="2019"
            url="https://benediktwerner.github.io/aoc-leaderboard/#2019"
            description={<>
                In 2019, I earnt 922 points and got 78th place out of over
                116,000 participants.
            </>}
            tags={[
                [<Python />, "Python"],
                [<C />, "C"],
            ]}
            repoUrl="https://github.com/Starwort/advent-of-code-2019"
        />
        <AocCard
            masonryItem={item}
            title="2018"
            url="https://benediktwerner.github.io/aoc-leaderboard/#2018"
            description={<>
                In 2018, I earnt 68 points and got 487th place (tied) out of
                over 100,000 participants.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
        />
        <AocCard
            masonryItem={item}
            title="2017"
            url="https://benediktwerner.github.io/aoc-leaderboard/#2017"
            description={<>
                In 2017, I earnt 7 points and got 798th place (tied) out of over
                67,000 participants, despite starting on the afternoon of the
                2nd.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
        />
    </main>;
}