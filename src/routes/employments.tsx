import {Title} from "@solidjs/meta";
import {Typography} from "@suid/material";
import {ProjectCard} from "~/components/ProjectCard";
import {CSharp, CXX, Haskell, JavaScript, Python, TypeScript} from "~/extra_icons";
import {createMasonry} from "~/hooks/masonry";

export default function Education() {
    const {item, container} = createMasonry();
    return <main use:container>
        <Title>My Employments</Title>
        <ProjectCard
            title="Optellum Ltd. - Software Development Assistant"
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    October 2018
                </Typography>
                <Typography variant="body1" paragraph>
                    I worked here for my Year 11 Work Experience
                    placement. My duties had me write Python scripts to automate
                    previously manual processes, such as copying files and verifying
                    the integrity of the copies.
                </Typography>
                <Typography variant="body1">
                    I was due to return in the summer of 2020, but due to the
                    pandemic I was unable to do so.
                </Typography>
            </>}
            tags={[
                <Python />,
            ]}
            masonryItem={item}
        />
        <ProjectCard
            title="Freelance - Full-Stack Web Developer"
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    March 2020 - Present
                </Typography>
                <Typography variant="body1">
                    I write front-end (web) and back-end (CRUD) code for a
                    company based in Florida. The majority of the code is in
                    Python, with some JavaScript.
                </Typography>
            </>}
            tags={[
                <Python />,
                <JavaScript />,
            ]}
            masonryItem={item}
        />
        <ProjectCard
            title="Code Ninjas Oxford - Code Sensei"
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    June 2021 - January 2023
                </Typography>
                <Typography variant="body1">
                    I worked here part-time as a 'Code Sensei', the company's
                    term for teaching staff. In this role, I taught children and
                    young adults to code, primarily in JavaScript. During this
                    time I also created some demonstration projects and internal
                    tools, including setting up a Samba server to allow sharing
                    files between the centre's computers more easily, and writing
                    Arduino programs in C++, BBC Micro:Bit programs in TypeScript,
                    and simple games in Python with Processing.
                </Typography>
            </>}
            tags={[
                <JavaScript />,
                <Python />,
                <CSharp />,
                <CXX />,
                <TypeScript />,
            ]}
            masonryItem={item}
        />
        <ProjectCard
            title="Wood Green School, Witney - Tutor of Computing"
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    September 2024 - May 2025
                </Typography>
                <Typography variant="body1">
                    I worked here as an unqualified teacher, teaching a class of
                    5 Year 13s (A Level) and assisting with the teaching of a
                    full-size class of Year 11s (GCSE). This was a fixed-term
                    contract, due to the school’s decision to stop offering
                    Computer Science courses after the 2023-5 cohort.
                </Typography>
            </>}
            tags={[
                <Python />,
                <Haskell />,
            ]}
            masonryItem={item}
        />
    </main>;
}