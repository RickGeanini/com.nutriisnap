// COMPONENTS
import {
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from '@/components/ui/drawer';

// INTERFACES
import { IMeal } from '@/interfaces/meals';

// MEAL DETAILS COMPONENT UTILS
interface IMealDetailsComponentProps {
    meal: IMeal;
}
// MEAL DETAILS COMPONENT
const MealDetailsComponent = ({ meal }: IMealDetailsComponentProps) => {
    /* Render */
    return (
        <DrawerContent className="bg-white">
            <DrawerHeader>
                <DrawerTitle>{meal.name}</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter></DrawerFooter>
        </DrawerContent>
    );
};
export default MealDetailsComponent;
