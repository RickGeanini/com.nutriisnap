import { ReactNode } from 'react';

declare global {
    interface IChildrenProps {
        children?: ReactNode;
    }
}
