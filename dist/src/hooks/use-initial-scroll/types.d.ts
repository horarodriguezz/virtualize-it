import { ListOrientation } from '../../components/types';

export interface InitialScrollOptions {
    elementRef: React.RefObject<HTMLDivElement>;
    orientation: ListOrientation;
    reverse: boolean;
}
