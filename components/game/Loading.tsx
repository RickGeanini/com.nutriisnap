// COMPONENTS
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// GAME COMPONENT
export default function LoadingComponent() {
    /* Render */
    return (
        <div className="container flex flex-wrap gap-8 p-4">
            <Card className="shadow-sm bg-white rounded-lg flex-grow">
                <CardHeader>
                    <CardTitle>
                        <Skeleton className="bg-primary h-6 w-[120px]" />
                    </CardTitle>
                    <CardDescription className="text-2xl">
                        <Skeleton className="bg-primary h-6 w-10" />
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="shadow-sm bg-white rounded-lg flex-grow">
                <CardHeader>
                    <CardTitle>
                        <Skeleton className="bg-primary h-6 w-[190px]" />
                    </CardTitle>
                    <CardDescription className="text-2xl">
                        <Skeleton className="bg-primary h-6 w-10" />
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="shadow-sm bg-white rounded-lg flex-grow">
                <CardHeader>
                    <CardTitle>
                        <Skeleton className="bg-primary h-6 w-[250px]" />
                    </CardTitle>
                    <CardDescription className="text-2xl">
                        <Skeleton className="bg-primary h-6 w-10" />
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
