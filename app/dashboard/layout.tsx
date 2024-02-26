import { ReactElement } from 'react';

// COMPONENTS
import NavigationMenuComponent from '@/components/navigation/Navigation';

// DASHBOARD LAYOUT UTILS
interface IDashboardLayoutProps {
    game: ReactElement;
    meals: ReactElement;
}

// DASHBOARD LAYOUT
const DashboardLayout = ({ game, meals }: IDashboardLayoutProps) => {
    /* Render */
    return (
        <>
            <NavigationMenuComponent />
            {game}
            {meals}
        </>
    );
};
export default DashboardLayout;
