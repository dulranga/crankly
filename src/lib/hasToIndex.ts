// Simple deterministic hash → index
export const hashToIndex = (seed: string, length: number) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = (hash << 5) - hash + seed.charCodeAt(i);
        hash |= 0; // force 32-bit
    }
    return Math.abs(hash) % length;
};
