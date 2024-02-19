import Image from 'next/image';

// COMPONENTS
import GameComponent from '@/components/game/Game';

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
                <ul>
                    <li>
                        <div>
                            <p>Nome Prato</p>
                            <Image
                                alt="Nome prato"
                                height={200}
                                src="/images/lunch_food.jpg"
                                width={200}
                            />
                            <p>Kcal</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default DashboardPage;
