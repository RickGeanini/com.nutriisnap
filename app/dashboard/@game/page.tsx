import { Suspense } from 'react';

// COMPONENTS
import GameComponent from '@/components/game/Game';

// DASHBOARD PAGE
export default async function GamePage() {
    /* Render */
    return (
        <Suspense fallback={<> Carregando ... </>}>
            <GameComponent
                isLoading={false}
                healthy_meals={3}
                total_meals={10}
                unhealthy_meals={7}
            />
        </Suspense>
    );
}
