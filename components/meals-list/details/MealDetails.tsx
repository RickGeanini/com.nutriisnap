import Image from 'next/image';

// COMPONENTS
import { DrawerContent } from '@/components/ui/drawer';

// INTERFACES
import { IMeal } from '@/interfaces/meals';

// UTILS
import { formateToBr } from '@/lib/date';

// MEAL DETAILS COMPONENT UTILS
interface IMealDetailsComponentProps {
    meal: IMeal;
}
// MEAL DETAILS COMPONENT
const MealDetailsComponent = ({ meal }: IMealDetailsComponentProps) => {
    /* Utils */
    const renderedIngredients = (
        <ul className="list-disc pl-8">
            {meal.ingredients.map((ingredient, key) => {
                return (
                    <li className="text-sm text-primary" key={key}>
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
                <Image
                    alt={meal.name}
                    className="rounded-lg m-4 object-cover"
                    height={160}
                    src={meal.image}
                    width={420}
                />

                <div className="p-4 flex flex-col gap-2">
                    <h1 className="text-2xl text-primary font-semibold">
                        {meal.name ?? meal.file_name}
                    </h1>
                    <small className="text-1xl text-primary">{formateToBr(meal.created_at)}</small>
                    <h3 className="text-1xl text-primary">Ingredientes</h3>
                    {renderedIngredients}
                </div>
            </div>
        </DrawerContent>
    );
};
export default MealDetailsComponent;
