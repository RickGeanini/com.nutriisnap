import Image from 'next/image';

// COMPONENTS
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import MealDetailsComponent from '@/components/meals-list/details/MealDetails';

// UTILS
import { generateRandomMealItem } from '@/lib/mock';

// MealsList
const MealsListComponent = () => {
    /* Vars */
    const items = Array.from(Array(150).keys());

    /* Utils */
    const renderedMeals = items.map((_, index: number) => {
        const meal = generateRandomMealItem();

        return (
            <Drawer key={index}>
                <DrawerTrigger asChild>
                    <Card className="w-full md:w-64 lg:w-72 xl:w-80 2xl:w-80 shadow-md bg-white rounded-lg hover:cursor-pointer hover:shadow-primary">
                        <CardHeader className="p-0">
                            <AspectRatio
                                ratio={16 / 9}
                                className="rounded-ss-lg rounded-se-lg bg-muted"
                            >
                                <Image
                                    alt="Photo by Drew Beamer"
                                    className="rounded-ss-lg rounded-se-lg object-cover"
                                    fill
                                    src={meal.image}
                                />
                            </AspectRatio>
                        </CardHeader>
                        <CardContent className="p-1 pl-2">
                            <p className="text-xl font-semibold">{meal.name}</p>
                            <small>{meal.calories} Kcal</small>
                        </CardContent>
                    </Card>
                </DrawerTrigger>
                <MealDetailsComponent meal={meal} />
            </Drawer>
        );
    });

    /* Render */
    return <div className="flex flex-wrap gap-8 p-4 place-content-center">{renderedMeals}</div>;
};
export default MealsListComponent;
