import Image from 'next/image';

// COMPONENTS
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';

// INTERFACES
import { IMeal } from '@/interfaces/meals';

// MEAL DETAILS COMPONENT UTILS
interface IMealDetailsComponentProps {
    meal: IMeal;
}
// MEAL DETAILS COMPONENT
const MealDetailsComponent = ({ meal }: IMealDetailsComponentProps) => {
    /* Utils */
    const renderedIngredients = (
        <ul className="list-disc pl-8">
            {meal.ingredients.map(ingredient => {
                return (
                    <li className="text-sm text-primary" key={ingredient}>
                        {ingredient}
                    </li>
                );
            })}
        </ul>
    );

    /* Render */
    return (
        <DrawerContent className="bg-white">
            <div className="flex gap-4">
                {/* <AspectRatio ratio={16 / 9} className="rounded-ss-lg rounded-se-lg bg-muted w-96"> */}
                {/* <Image
                    alt={meal.name}
                    className="rounded-ss-lg rounded-se-lg object-cover size-4"
                    fill
                    src={meal.image}
                /> */}
                {/* </AspectRatio> */}
                <div className="p-4 flex flex-col gap-4">
                    <p className="text-2xl text-primary font-semibold">{meal.name}</p>
                    <p className="text-2xl text-primary font-semibold">{meal.create_date}</p>
                    {renderedIngredients}
                </div>
            </div>
        </DrawerContent>
    );
};
export default MealDetailsComponent;
