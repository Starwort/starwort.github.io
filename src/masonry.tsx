type Directive<T> = T extends true | undefined
    ? (element: HTMLElement, value?: () => T) => void
    : (element: HTMLElement, value: () => T) => void;

type MasonryContainerDirective = true;
type MasonryItemDirective = true;

declare module "solid-js" {
    namespace JSX {
        interface Directives {
            container: MasonryContainerDirective;
            item: MasonryItemDirective;
        }
    }
}


export function createMasonry(): {
    container: Directive<MasonryContainerDirective>;
    item: Directive<MasonryItemDirective>;
} {
    let rowGap: string; // in px
    const itemsToLayOut: HTMLElement[] = [];
    const layOutEl = (el: HTMLElement) => {
        const {height} = el.getBoundingClientRect();
        el.style.gridRow = `span ${Math.ceil(height + parseFloat(rowGap))}`;
    };
    const reLayOutAll = () => {
        for (const el of itemsToLayOut) {
            layOutEl(el);
        }
    };
    return {
        container: (el) => setTimeout(() => {
            ({rowGap} = getComputedStyle(el));
            console.log(rowGap, Object.entries(getComputedStyle(el)));
            el.style.rowGap = '1px';
            el.style.gridAutoRows = '0px';
            reLayOutAll();
            const observer = new ResizeObserver(reLayOutAll);
            observer.observe(el);
        }, 0),
        item: (el) => {
            itemsToLayOut.push(el);
            layOutEl(el);
            const observer = new ResizeObserver(() => layOutEl(el));
            observer.observe(el);
        },
    };
}