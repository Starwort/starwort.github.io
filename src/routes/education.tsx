import {Title} from "@solidjs/meta";
import {Typography} from "@suid/material";
import {ProjectCard} from "~/components/ProjectCard";
import {C, CSharp, CXX, Html5, Java, JavaScript, Python, Rust, Sass, TypeScript} from "~/extra_icons";

export default function Education() {
    return <main>
        <Title>My Education</Title>
        <ProjectCard
            title="Oxford Brookes University"
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    2021 &ndash; 2024 &bull; BSc (Hons) First Class, Computer Science
                </Typography>
                <Typography variant="body1">
                    I took modules such as <cite>
                        Basic Communications and PC Networking
                    </cite>, <cite>DevOps</cite>, <cite>
                        Data Structures and Algorithms
                    </cite>, <cite>Web Application Development</cite>, <cite>
                        Advanced Object-Oriented Programming
                    </cite>, and <cite>
                        Software Development with C and C++
                    </cite>. This had me practise a wide variety of disciplines.
                </Typography>
            </>}
            specialise="Edu"
            tags={[
                [<Java />, "Java"],
                [<Rust />, "Rust"],
                [<Python />, "Python"],
                [<TypeScript />, "TypeScript"],
                [<Sass />, "Sass"],
                [<Html5 />, "Semantic HTML5"],
                [<CSharp />, "C#"],
                [<CXX />, "C++"],
                [<C />, "C"],
            ]}
        />
        <ProjectCard
            title="The Cherwell School, Oxford"
            description={<>
                <Typography variant="subtitle1" color="text.secondary" sx={{
                    mt: -1,
                    mb: 1,
                }}>
                    2014 &ndash; 2021 &bull; A Levels
                </Typography>
                <Typography variant="body1">
                    Mathematics, Further Mathematics, Computer Science, Physics
                </Typography>
            </>}
            specialise="Edu"
            tags={[
                [<Python />, "Python"],
                [<JavaScript />, "JavaScript"],
                [<Sass />, "Sass"],
                [<Html5 />, "Semantic HTML5"],
                [<C />, "C"],
            ]}
        />
    </main>;
}