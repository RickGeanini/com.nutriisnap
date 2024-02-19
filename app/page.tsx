import type { NextPage } from 'next';

// COMPONENTS
import DrawerComponent from '@/components/calories-goals/CaloriesGoals';
import BackgroundComponent from '@/components/background/Background';

// INDEX PAGE
const IndexPage: NextPage = () => {
    /* Render */
    return (
        <>
            <BackgroundComponent />
            {/* <Button variant="outline">Click me</Button> */}
            <DrawerComponent />
        </>
    );
};
export default IndexPage;
