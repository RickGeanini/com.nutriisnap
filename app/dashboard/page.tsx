import { Suspense } from 'react';

// COMPONENTS
import GameComponent from '@/components/game/Game';
import MealsListComponent from '@/components/meals-list/MealsList';
import LoadingMealsListComponent from '@/components/meals-list/Loading';

// DASHBOARD PAGE
export default async function DashboardPage() {
    /* Render */
    return (
        <>
            <GameComponent
                isLoading={false}
                healthy_meals={3}
                total_meals={10}
                unhealthy_meals={7}
            />
            <Suspense fallback={<LoadingMealsListComponent />}>
                <MealsListComponent />
            </Suspense>
        </>
    );
}
