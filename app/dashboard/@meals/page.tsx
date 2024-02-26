import { Suspense } from 'react';

// COMPONENTS
import MealsListComponent from '@/components/meals-list/MealsList';
import LoadingMealsListComponent from '@/components/meals-list/Loading';

// MEALS PAGE
export default async function MealsPage() {
    /* Render */
    return (
        <Suspense fallback={<LoadingMealsListComponent />}>
            <MealsListComponent />
        </Suspense>
    );
}
