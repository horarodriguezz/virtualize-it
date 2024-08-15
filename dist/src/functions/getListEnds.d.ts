interface GetListEndsOptions {
    totalElements: number;
    itemSize: number;
    scrollDistance: number;
    listSize: number;
    overscan: number;
}
interface ListEnds {
    start: number;
    end: number;
}
export default function getListEnds(options: GetListEndsOptions): ListEnds;
export {};
