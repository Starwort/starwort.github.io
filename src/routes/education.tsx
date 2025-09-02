import {Title} from "@solidjs/meta";
import {Typography} from "@suid/material";

export default function Education() {
    return <main>
        <Title>My Education</Title>
        <Typography sx={{gridColumn: "1/-1"}}>
            2021 - 2024: Oxford Brookes University, BSc (Hons) First Class,
            Computer Science
        </Typography>
        <Typography sx={{gridColumn: "1/-1"}}>
            2014 - 2021  The Cherwell School, Oxford. A levels: Mathematics,
            Further Mathematics, Computer Science, Physics
        </Typography>
    </main>;
}