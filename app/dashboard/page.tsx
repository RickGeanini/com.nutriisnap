import Image from 'next/image';

const DashboardPage = () => {
    /* Render */
    return (
        <>
            <div>
                <h1>Gameficacao</h1>
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
