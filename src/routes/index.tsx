import {Title} from "@solidjs/meta";
import {Box, Link, Typography} from "@suid/material";

export default function Index() {
    return <main>
        <Title>About Me</Title>
        <Box sx={{gridColumn: "span 12"}}>
            <Typography variant="body1" paragraph>
                I am Toby Collier (she/her), and I am a Computer Science graduate
                and hobbyist software developer from the UK.
            </Typography>
            <Typography variant="body1" paragraph>
                I am both autistic and transgender, and my interests include
                programming, gaming, and <Link href="https://esolangs.org/wiki/Main_Page">
                    esolangs
                </Link>.
            </Typography>
            <Typography variant="body1" paragraph>
                This website functions as a CV and portfolio of my work, as well
                as a place to share tidbits of information about myself.
            </Typography>
            <Typography variant="body1" paragraph>
                I'm currently looking for work, so if you have any opportunities
                available, please don't hesitate to <Link href="mailto:tcphone93@gmail.com">
                    contact me via email
                </Link> or on Discord @starwort.
            </Typography>
        </Box>
    </main>;
}