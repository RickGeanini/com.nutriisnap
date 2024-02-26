import { Suspense } from 'react';

// COMPONENTS
import GameComponent from '@/components/game/Game';
import LoadingGameComponent from '@/components/game/Loading';

// DASHBOARD PAGE
export default async function GamePage() {
    /* Render */
    return (
        <Suspense fallback={<LoadingGameComponent />}>
            <GameComponent />
        </Suspense>
    );
}
