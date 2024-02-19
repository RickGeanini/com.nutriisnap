// COMPONENTS
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// GAME COMPONENT UTILS
interface IGameComponentProps {
    healthy_meals: number;
    isLoading?: boolean;
    total_meals: number;
    unhealthy_meals: number;
}

// GAME COMPONENT
const GameComponent = ({
    healthy_meals,
    isLoading,
    total_meals,
    unhealthy_meals,
}: IGameComponentProps) => {
    /* Render */
    return (
        <div className="flex flex-wrap gap-8 p-4">
            <Card className="shadow-sm bg-white rounded-lg flex-grow">
                <CardHeader>
                    <CardTitle>
                        {isLoading ? (
                            <Skeleton className="bg-primary h-6 w-[190px]" />
                        ) : (
                            'Total de refeições'
                        )}
                    </CardTitle>
                    <CardDescription className="text-2xl">
                        {isLoading ? <Skeleton className="bg-primary h-6 w-10" /> : total_meals}
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="shadow-sm bg-white rounded-lg flex-grow">
                <CardHeader>
                    <CardTitle>
                        {isLoading ? (
                            <Skeleton className="bg-primary h-6 w-[190px]" />
                        ) : (
                            'Refeições saudáveis'
                        )}
                    </CardTitle>
                    <CardDescription className="text-2xl">
                        {isLoading ? <Skeleton className="bg-primary h-6 w-10" /> : healthy_meals}
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="shadow-sm bg-white rounded-lg flex-grow">
                <CardHeader>
                    <CardTitle>
                        {isLoading ? (
                            <Skeleton className="bg-primary h-6 w-[250px]" />
                        ) : (
                            'Refeições não saudáveis'
                        )}
                    </CardTitle>
                    <CardDescription className="text-2xl">
                        {isLoading ? <Skeleton className="bg-primary h-6 w-10" /> : unhealthy_meals}
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
};

export default GameComponent;
