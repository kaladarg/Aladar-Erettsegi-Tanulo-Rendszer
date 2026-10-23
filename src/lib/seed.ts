/** A seed for shuffling that differs between rounds. */
export const freshSeed = () => (Date.now() % 2_147_483_647) + 1;
