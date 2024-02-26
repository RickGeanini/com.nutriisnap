// COMPONENTS
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// Loading
const LoadingComponent = () => {
    /* Vars */
    const items = Array.from(Array(12).keys());

    /* Utils */
    const renderedMeals = items.map((_, index: number) => {
        return (
            <Card className="w-full md:w-64 lg:w-72 xl:w-80 2xl:w-80 shadow-md bg-white rounded-lg">
                <CardHeader className="p-0 rounded-ss-lg rounded-se-lg">
                    <AspectRatio ratio={16 / 9} className="rounded-ss-lg rounded-se-lg">
                        <Skeleton className="bg-primary w-full h-full rounded-br-none rounded-bl-none" />
                    </AspectRatio>
                </CardHeader>
                <CardContent className="p-4 flex flex-col gap-3 bg-slate-50 rounded-es-lg rounded-ee-lg">
                    <p className="text-xl font-semibold text-wrap text-primary">
                        <Skeleton className="bg-primary h-6 w-20" />
                    </p>
                    <small className="text-md text-secondary">
                        <Skeleton className="bg-primary h-[19px] w-16" />
                    </small>
                </CardContent>
            </Card>
        );
    });

    /* Render */
    return <div className="flex flex-wrap gap-8 p-4 place-content-center">{renderedMeals}</div>;
};

export default LoadingComponent;
