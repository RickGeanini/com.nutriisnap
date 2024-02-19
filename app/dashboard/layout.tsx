import NavigationMenuComponent from '@/components/navigation/Navigation';

// layout
const DashboardLayout = ({ children }: IChildrenProps) => {
    /* Render */
    return (
        <>
            <NavigationMenuComponent />
            <div>{children}</div>
        </>
    );
};
export default DashboardLayout;
