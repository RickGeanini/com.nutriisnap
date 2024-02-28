'use client';
import useMediaQuery from 'react-use-media-query-ts';

// COMPONENT
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Radiation, LeafyGreen } from 'lucide-react';
import ProgressBar from '@ramonak/react-progress-bar';

// PROGRESS COMPONENT UTILS
interface IProgressProps {
    healthy: number;
    total: number;
}

// PROGRESS COMPONENT
export function ProgressComponent({ total, healthy }: IProgressProps) {
    /* Vars */
    const calc = ((healthy / total) * 100).toFixed(2);
    const isMobile = useMediaQuery('(max-width: 768px)');

    /* Render */
    return (
        <div className="container flex flex-wrap gap-8 p-4">
            <Card className="shadow-sm bg-white rounded-lg flex-grow">
                <CardHeader>
                    <CardTitle>Nível das refeições:</CardTitle>
                </CardHeader>
                <div className="w-full flex justify-between mb-4 items-center">
                    <div className="w-1/4 flex justify-end">
                        {!isMobile && <span className="mr-1">Lixo Tóxico</span>}
                        <Radiation size="24px" color="orange" className="mr-4" />
                    </div>
                    <div className="w-2/4">
                        <ProgressBar
                            baseBgColor="#015426"
                            bgColor="#015426"
                            completed={calc}
                            customLabel="|"
                            height="25px"
                            labelColor="#ffffff"
                            maxCompleted={100}
                        />
                    </div>
                    <div className="w-1/4 flex">
                        <LeafyGreen size="24px" color="#1D7D1B" className="ml-4 mr-1" />
                        {!isMobile && <p>Capim</p>}
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ProgressComponent;
