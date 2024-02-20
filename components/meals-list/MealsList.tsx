import Image from 'next/image';

// COMPONENTS
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '../ui/aspect-ratio';

// MealsList
const MealsListComponent = () => {
    /* Vars */
    const items = Array.from(Array(150).keys());

    /* Utils */
    const renderedMeals = items.map(() => {
        return (
            <Card className="shadow-md bg-white rounded-lg flex-grow">
                <CardHeader className="flex p-0">
                    <AspectRatio ratio={16 / 9} className="rounded-ss-lg rounded-se-lg bg-muted">
                        <Image
                            alt="Photo by Drew Beamer"
                            className="rounded-ss-lg rounded-se-lg object-cover"
                            fill
                            src="/images/background.jpg"
                        />
                    </AspectRatio>
                </CardHeader>
                <CardContent className="p-1 pl-2">
                    <p className="text-xl font-semibold">Nome Prato</p>
                    <small>200 Kcal</small>
                </CardContent>
            </Card>
        );
    });

    /* Render */
    return <div className="flex flex-wrap gap-8 p-4">{renderedMeals}</div>;
};
export default MealsListComponent;
