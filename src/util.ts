export function loadNumFromStorage(key: string, defaultValue: number): number {
    if (typeof window === "undefined") {
        return defaultValue;
    }
    let value = parseInt(window.localStorage[key] || "");
    if (isNaN(value)) {
        value = defaultValue;
    }
    return value;
}
export function loadBoolFromStorage(key: string, defaultValue: boolean = false): boolean {
    if (typeof window === "undefined") {
        return defaultValue;
    }
    let value = window.localStorage[key];
    if (value === "true") {
        return true;
    } else if (value === "false") {
        return false;
    } else {
        return defaultValue;
    }
}

export function loadFromStorage(key: string, defaultValue: string): string;
export function loadFromStorage<T extends string>(key: string, defaultValue: T, options: T[]): T;
export function loadFromStorage<T extends string>(key: string, defaultValue: T, options?: T[]): T {
    if (typeof window === "undefined") {
        return defaultValue;
    }
    let value = window.localStorage[key];
    if (value === null || value === undefined) {
        return defaultValue;
    }
    if (options && !options.includes(value as T)) {
        return defaultValue;
    }
    return value as T;
}

export function formatTime(millis: number) {
    let seconds = Math.floor(millis / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let parts = [];
    if (hours > 0) {
        parts.push(hours.toString().padStart(2, "0"));
    }
    parts.push((minutes % 60).toString().padStart(2, "0"));
    parts.push((seconds % 60).toString().padStart(2, "0"));
    return parts.join(":");
}
export function shiftFocus(by = 1) {
    const inputs = [...document.querySelectorAll("input:not([disabled])")] as HTMLInputElement[];
    const thisInput = inputs.findIndex(
        (e) => e === document.activeElement
    );
    const next = inputs[(thisInput + by + inputs.length) % inputs.length];
    next?.focus();
}

