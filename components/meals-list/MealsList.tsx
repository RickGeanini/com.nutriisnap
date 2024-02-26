import Image from 'next/image';

// COMPONENTS
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import MealDetailsComponent from '@/components/meals-list/details/MealDetails';

// INTERFACES
import { IMeal } from '@/interfaces/meals';

// UTILS
import { generateRandomMealItem } from '@/lib/mock';

async function getMealsList(): Promise<IMeal[] | undefined> {
    const res = await fetch(
        `${process.env.API_URL}/get_meals_list?client_uuid=${process.env.CLIENT_UUID}`
    );

    if (res.status === 200) {
        return res.json() as unknown as IMeal[];
    }

    return [];
}

// MealsList
export default async function MealsListComponent() {
    const meals = await getMealsList();

    console.log({ meals });

    /* Utils */
    const renderedMeals = (meals ?? []).map((meal, index: number) => {
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
                                    alt={meal.name}
                                    className="rounded-ss-lg rounded-se-lg object-cover"
                                    fill
                                    src={`data:image/jpeg;base64,${meal.image}`}
                                />
                            </AspectRatio>
                        </CardHeader>
                        <CardContent className="p-4 flex flex-col gap-3 bg-slate-50 rounded-es-lg rounded-ee-lg">
                            <p className="text-xl font-semibold text-wrap text-primary">
                                {meal.name ?? meal.file_name}
                            </p>
                            <small className="text-md text-secondary">{meal.calories} Kcal</small>
                        </CardContent>
                    </Card>
                </DrawerTrigger>
                {/* <MealDetailsComponent meal={meal} /> */}
            </Drawer>
        );
    });

    /* Render */
    return (
        <div className="flex flex-wrap gap-8 p-4 place-content-center">
            {(meals ?? []).length > 0 && renderedMeals}
        </div>
    );
}
