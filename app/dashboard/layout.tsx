import NavigationMenuComponent from '@/components/navigation/Navigation';

// layout
const DashboardLayout = ({ children }: IChildrenProps) => {
    /* Render */
    return (
        <>
            <NavigationMenuComponent />
            {children}
        </>
    );
};
export default DashboardLayout;
