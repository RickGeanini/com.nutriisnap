import { Citrus, Pizza, Utensils } from 'lucide-react';

// COMPONENTS
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// INTERFACES
import { IWeeklyReport } from '@/interfaces/weekly_report';

async function getWeeklyReport() {
    try {
        const res = await fetch(`${process.env.API_URL}/get_weekly_report`, {
            next: { revalidate: 3600 },
        });

        if (res.ok) {
            return res.json() as unknown as IWeeklyReport;
        }
    } catch (error) {
        console.log({ error });
    }

    return {
        healthy_meals: 0,
        total_meals: 0,
        unhealthy_meals: 0,
    } as IWeeklyReport;
}

// GAME COMPONENT
export default async function GameComponent() {
    const weeklyReport = await getWeeklyReport();

    /* Render */
    return (
        <div className="container flex flex-wrap gap-8 p-4">
            <Card className="shadow-sm bg-white rounded-lg flex-grow">
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center">
                            <Utensils />
                            <div className="ml-4">Total de refeições:</div>
                        </div>
                    </CardTitle>
                    <CardDescription className="text-2xl">
                        {weeklyReport.total_meals}
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="shadow-sm bg-white rounded-lg flex-grow">
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center">
                            <Citrus />
                            <div className="ml-4">Saudável</div>
                        </div>
                    </CardTitle>
                    <CardDescription className="text-2xl">
                        {weeklyReport.healthy_meals}
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="shadow-sm bg-white rounded-lg flex-grow">
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center">
                            <Pizza />
                            <div className="ml-4">Não saudável</div>
                        </div>
                    </CardTitle>
                    <CardDescription className="text-2xl">
                        {weeklyReport.unhealthy_meals}
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
