import {Title} from "@solidjs/meta";
import {Link} from "@suid/material";
import {ProjectCard} from "~/components/ProjectCard";
import {C, CSharp, JavaScript, Python, React, Rust, SolidJS, TypeScript} from "~/extra_icons";
import {createMasonry} from "~/hooks/masonry";


export default function Projects() {
    const {item, container} = createMasonry();
    return <main use:container>
        <Title>My Projects</Title>
        <ProjectCard
            masonryItem={item}
            title="WanaKana-Python"
            url="https://pypi.org/project/wanakana-python/"
            description={<>
                A Python library for detecting and transliterating between
                Hiragana, Katakana, and Romaji.
                <br />
                This library is a port of the original JavaScript library.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
            repoUrl="https://github.com/Starwort/wanakana-py"
        />
        <ProjectCard
            masonryItem={item}
            title={<>
                <cite>MOLEK-SYNTEZ</cite> Solitaire Solver
            </>}
            url="/NEA/all.html"
            description={<>
                A solver for the solitaire game within the game <cite>
                    MOLEK-SYNTEZ
                </cite> by Zachtronics, developed as part of my A-level computer
                science qualification.
            </>}
            tags={[
                [<C />, "C"],
                [<Python />, "Python"],
            ]}
            repoUrl="https://github.com/Starwort/NEA"
        />
        <ProjectCard
            masonryItem={item}
            title={<>
                <cite>Little Man Computer</cite> Simulator
            </>}
            url="/lmc/"
            description={<>
                An implementation of the <cite>
                    Little Man Computer
                </cite> educational model computer created by Dr. Stuart Madnick,
                built using React and TypeScript.
            </>}
            tags={[
                [<TypeScript />, "TypeScript"],
                [<React />, "React"],
            ]}
            repoUrl="https://github.com/Starwort/lmc"
        />
        <ProjectCard
            masonryItem={item}
            title="Computer Science Notes"
            url="/computer-science/"
            description={<>
                All of my computer science A-level work and notes, rendered
                into a full website using a custom-built preprocessor and Jekyll
                via GitHub Pages.
            </>}
            tags={[
                [<Python />, "Python"],
                [<JavaScript />, "JavaScript"],
            ]}
        />
        <ProjectCard
            masonryItem={item}
            title="YAIM; Yet Another I18n Manager"
            url="https://starbright.dyndns.org/yaim/"
            description={<>
                An internationalisation (i18n) file manager web and desktop
                application, built using TypeScript, React, and Electron.
            </>}
            tags={[
                [<TypeScript />, "TypeScript"],
                [<React />, "React"],
            ]}
            repoUrl="https://github.com/Starwort/yaim"
        />
        <ProjectCard
            masonryItem={item}
            title="TriPeaks Solitaire Solver"
            description={<>
                A TriPeaks solver written in Rust. Algorithm based on one by
                Courtney Pitcher, but optimised to reduce allocations and thus
                improve performance.
            </>}
            tags={[
                [<Rust />, "Rust"],
            ]}
            repoUrl="https://github.com/Starwort/tripeak_solver"
        />
        <ProjectCard
            masonryItem={item}
            title="NookData"
            url="/nookdata"
            description={<>
                <cite>NookData</cite> is an <cite>
                    Animal Crossing: New Horizons
                </cite> information and tracking tool. It is built using TypeScript
                and React, and is a progressive web app (PWA) so it can be used
                fully offline after the first load.
            </>}
            tags={[
                [<TypeScript />, "TypeScript"],
                [<React />, "React"],
            ]}
            repoUrl="https://github.com/Starwort/nookdata"
        />
        <ProjectCard
            masonryItem={item}
            title="Ability Miner"
            description={<>
                A high-performance tool for brute-forcing gear seeds for the
                game Splatoon 3. Based on the work of the dataminer <Link
                    href="https://leanny.github.io/"
                >
                    Lean
                </Link>, it represents approximately a 12x speedup over their
                original C implementation.
            </>}
            tags={[
                [<Rust />, "Rust"],
            ]}
            repoUrl="https://github.com/Starwort/ability-miner"
        />
        <ProjectCard
            masonryItem={item}
            title="Turing Machine Simulator"
            description={<>
                A program to simulate an arbitrary Turing machine based on a
                simple textual specification. Written in Rust using <Link
                    href="https://pest.rs"
                >Pest</Link> for parsing.
            </>}
            tags={[
                [<Rust />, "Rust"],
            ]}
            repoUrl="https://github.com/Starwort/turing-machine"
        />
        <ProjectCard
            masonryItem={item}
            title="StackCell Esolang"
            url="https://esolangs.org/wiki/StackCell"
            description={<>
                The reference implementation of a recreational esoteric
                programming language.
            </>}
            tags={[
                [<Rust />, "Rust"],
            ]}
            repoUrl="https://github.com/Starwort/stackcell"
        />
        <ProjectCard
            masonryItem={item}
            title="Minesweeprs"
            description={<>
                A probabilistic minesweeper solver, based on <Link
                    href="https://github.com/mrgriscom/minesweepr"
                >
                    Drew Roos' algorithm
                </Link>, which was originally written in Python 2.
            </>}
            tags={[
                [<Rust />, "Rust"],
            ]}
            repoUrl="https://github.com/Starwort/minesweeprs"
        />
        <ProjectCard
            masonryItem={item}
            title="Domgen"
            url="https://pypi.org/project/domgen/"
            description={<>
                A small Python library for generating HTML documents from Python
                objects.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
            repoUrl="https://github.com/Starwort/domgen"
        />
        <ProjectCard
            masonryItem={item}
            title="Dice Calculator"
            description={<>
                A dice distribution calculator supporting both simple and
                complex expressions. Uses <Link href="https://pest.rs">
                    Pest
                </Link> for parsing.
            </>}
            tags={[
                [<Rust />, "Rust"],
            ]}
            repoUrl="https://github.com/Starwort/dice-calculator"
        />
        <ProjectCard
            masonryItem={item}
            title="SorbetReforges"
            description={<>
                A mod for Terraria modifying the modifier system in line with
                changes suggested by the YouTuber <Link
                    href="https://www.youtube.com/@sorbetcafe"
                >
                    Sorbet Cafe
                </Link> in his video <Link href="https://www.youtube.com/watch?v=UBfoOkhV2vY">
                    <cite>
                        The Problem with Reforges
                    </cite>
                </Link>.
            </>}
            tags={[
                [<CSharp />, "C#"],
            ]}
            repoUrl="https://github.com/Starwort/SorbetReforges"
        />
        <ProjectCard
            masonryItem={item}
            title="Quantum Werewolf"
            url="/quantum-werewolf/"
            description={<>
                A tool designed to facilitate running a game of <Link
                    href="https://www.mezzacotta.net/puzzle/cisra/2008/quantumwerewolf.html"
                >
                    Quantum Werewolf
                </Link>,
                a game invented by Steven Irrgang.
            </>}
            tags={[
                [<TypeScript />, "TypeScript"],
                [<SolidJS />, "SolidJS"],
            ]}
            repoUrl="https://github.com/Starwort/quantum-werewolf"
        />
        <ProjectCard
            masonryItem={item}
            title="BingoBoardCore"
            description={<>
                A Terraria mod which adds the core functionality for Bingo and
                Lockout boards. Designed in a modular way so that goals can be
                added by plugin mods.
            </>}
            tags={[
                [<CSharp />, "C#"],
            ]}
            repoUrl="https://github.com/Starwort/BingoBoardCore"
        />
        <ProjectCard
            masonryItem={item}
            title="BingoSyncGoalPack"
            description={<>
                The default goal pack for BingoBoardCore. Currently unfinished.
            </>}
            tags={[
                [<CSharp />, "C#"],
            ]}
            repoUrl="https://github.com/Starwort/BingoSyncGoalPack"
        />
        <ProjectCard
            masonryItem={item}
            title={<code>aoc_helper</code>}
            url="https://pypi.org/project/aoc-helper/"
            description={<>
                A collection of utilities useful for solving Advent of Code
                problems, including input fetching and parsing, submission,
                solution templating, and running practice puzzles.
            </>}
            tags={[
                [<Python />, "Python"],
            ]}
            repoUrl="https://github.com/Starwort/aoc_helper"
        />
        <ProjectCard
            masonryItem={item}
            title="Tile Touching Challenge"
            description={<>
                A Terraria mod which instantly kills the player if they touch
                a tile which is not whitelisted. Created in response to the
                video <Link href="https://www.youtube.com/watch?v=MdlsAQ8loac">
                    <cite>
                        Terraria, but I can only touch candy cane blocks...
                    </cite>
                </Link> by the YouTuber <Link
                    href="https://www.youtube.com/@WandofSparking"
                >
                    Wand of Sparking
                </Link>.
            </>}
            tags={[
                [<CSharp />, "C#"],
            ]}
            repoUrl="https://github.com/Starwort/TileTouchingChallenge"
        />
        <ProjectCard
            masonryItem={item}
            title="Tangleword"
            url="/tangleword/"
            description={<>
                A daily word puzzle based on the puzzle described by Alex Bellos
                in <Link
                    href="https://www.theguardian.com/science/2024/mar/03/can-you-solve-it-the-word-game-at-the-cutting-edge-of-computer-science"
                >
                    this <cite>The Guardian</cite> article
                </Link>, where he put out a call for somebody to create an
                interactive version.
            </>}
            tags={[
                [<TypeScript />, "TypeScript"],
                [<SolidJS />, "SolidJS"],
            ]}
            repoUrl="https://github.com/Starwort/tangleword"
        />
        <ProjectCard
            masonryItem={item}
            title="Gerrymandering"
            url="/gerrymandering/"
            description={<>
                A puzzle where the player must divide a grid into districts
                such that the minority colour wins a plurality overall.
                <br />
                Based on the original concept as described by <Link
                    href="https://www.youtube.com/@v.deckard"
                >
                    Deckard
                </Link> in his video <Link href="https://www.youtube.com/watch?v=WQQrFOgRjDg">
                    <cite>
                        Let's turn Gerrymandering into a puzzle genre!
                    </cite>
                </Link>.
                <br />
                The puzzle has since been <Link
                    href="https://www.theguardian.com/science/2025/sep/01/can-you-solve-it-are-you-a-genius-at-gerrymandering"
                >
                    featured in <cite>The Guardian</cite>
                </Link>.
            </>}
            tags={[
                [<TypeScript />, "TypeScript"],
                [<SolidJS />, "SolidJS"],
            ]}
            repoUrl="https://github.com/Starwort/gerrymandering"
        />
        <ProjectCard
            masonryItem={item}
            title="Fawlty at Fifty - The Legacy of Fawlty Towers (website)"
            url="fawltyat50.co.uk"
            description={<>
                The website for the book <cite>
                    The Legacy of Fawlty Towers
                </cite>.
            </>}
            tags={[
                [<TypeScript />, "TypeScript"],
                [<SolidJS />, "SolidJS"],
            ]}
        />
        <ProjectCard
            masonryItem={item}
            title="This Website"
            description={<>
                The website you are looking at right now!
            </>}
            tags={[
                [<TypeScript />, "TypeScript"],
                [<SolidJS />, "SolidJS"],
            ]}
            repoUrl="https://github.com/Starwort/starwort.github.io"
        />
    </main>;
};