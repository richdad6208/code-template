export type PickOne<T> = {
    [P in keyof T]: Record<P, T[P]> & Partial<Record<Exclude<keyof T, P>, undefined>>
}[keyof T]; 