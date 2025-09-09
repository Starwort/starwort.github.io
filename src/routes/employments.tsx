import {Title} from "@solidjs/meta";
import {Typography} from "@suid/material";
import {ProjectCard} from "~/components/ProjectCard";
import {CSharp, CXX, Haskell, JavaScript, Python, SolidJS, TypeScript} from "~/extra_icons";
import {createMasonry} from "~/hooks/masonry";

export default function Education() {
    const {item, container} = createMasonry();
    return <main use:container>
        <Title>My Employments</Title>
        <ProjectCard
            title="Optellum Ltd."
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    October 2018 &bull; Software Development Assistant
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
                [<Python />, "Python"],
            ]}
            masonryItem={item}
        />
        <ProjectCard
            title="Freelance"
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    March 2020 &ndash; Present &bull; Full-Stack Web Developer
                </Typography>
                <Typography variant="body1">
                    I write front-end (web) and back-end (CRUD) code for a
                    company based in Florida. The majority of the code is in
                    Python, with some JavaScript.
                </Typography>
            </>}
            tags={[
                [<Python />, "Python"],
                [<JavaScript />, "JavaScript"],
            ]}
            masonryItem={item}
        />
        <ProjectCard
            title="Code Ninjas Oxford"
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    June 2021 &ndash; January 2023 &bull; Code Sensei
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
                [<JavaScript />, "JavaScript"],
                [<Python />, "Python"],
                [<CSharp />, "C#"],
                [<CXX />, "C++"],
                [<TypeScript />, "TypeScript"],
            ]}
            masonryItem={item}
        />
        <ProjectCard
            title="Wood Green School, Witney"
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    September 2024 &ndash; May 2025 &bull; Tutor of Computing
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
                [<Python />, "Python"],
                [<Haskell />, "Haskell"],
                [<JavaScript />, "JavaScript"],
            ]}
            masonryItem={item}
        />
        <ProjectCard
            title="Freelance"
            url="https://fawltyat50.co.uk/"
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    May 2025 &ndash; Present &bull; Web Developer
                </Typography>
                <Typography variant="body1">
                    I designed and implemented a website for the book <cite>
                        The Legacy of Fawlty Towers
                    </cite>. The website is written with TypeScript and CSS in
                    the SolidJS framework and conforms to the Material Design
                    guidelines for layout.
                </Typography>
            </>}
            tags={[
                [<TypeScript />, "TypeScript"],
                [<SolidJS />, "SolidJS"],
            ]}
            masonryItem={item}
        />
    </main>;
}