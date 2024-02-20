// COMPONENTS
import GameComponent from '@/components/game/Game';
import MealsListComponent from '@/components/meals-list/MealsList';

// DASHBOARD PAGE
const DashboardPage = () => {
    /* Render */
    return (
        <>
            <div>
                <GameComponent
                    isLoading={false}
                    healthy_meals={3}
                    total_meals={10}
                    unhealthy_meals={7}
                />
                <MealsListComponent />
            </div>
        </>
    );
};

export default DashboardPage;
