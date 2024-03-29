'use client';

import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';
import useMediaQuery from 'react-use-media-query-ts';

// COMPONENTS
import { DrawerContent } from '@/components/ui/drawer';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Separator } from '@/components/ui/separator';

// INTERFACES
import { IMeal } from '@/interfaces/meals';

// UTILS
import { formateToBr } from '@/lib/date';

// MEAL DETAILS COMPONENT UTILS
interface IMealDetailsComponentProps {
    meal: IMeal;
}
// MEAL DETAILS COMPONENT
const MealDetailsComponent = ({ meal }: IMealDetailsComponentProps) => {
    /* Vars */
    const isMobile = useMediaQuery('(max-width: 768px)');

    /* Utils */
    const renderedIngredients = (
        <div>
            {meal.ingredients.length === 0 ? (
                <span className="flex text-sm">
                    Houve um erro. A IA decidiu interpretar 'precisão' como um conceito opcional.
                </span>
            ) : (
                meal.ingredients.map((ingredient, key) => {
                    return (
                        <div className="flex text-sm mt-2" key={key}>
                            <BadgeCheck color="#FA830D" size="16px" className="mr-2" /> {ingredient}
                        </div>
                    );
                })
            )}
        </div>
    );

    const renderPanel = (
        <div className="flex flex-col gap-2 p-4">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none">
                            {meal.name ?? meal.file_name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            {formateToBr(meal.created_at)}
                        </p>
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <div className="space-y-1 ml-2">
                        <h4 className="text-sm font-medium leading-none">Calorias:</h4>
                        <p className="text-sm text-muted-foreground">{meal.total_calories}</p>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
            <Separator className="my-4" />

            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <h3 className="text-1xl text-primary">Ingredientes</h3>
                    {renderedIngredients}
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <h3 className="text-1xl text-primary ml-2">É saudável?</h3>
                    <div className="space-y-1 ml-2">
                        <div className="text-sm mt-2">
                            <p>{meal.is_healthy ? 'Sim' : 'Não'}.</p>
                            <p>{meal.comment}</p>
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );

    const renderedDrawerContent = isMobile ? (
        <div className="overflow-x-auto h-[80vh] relative pr-[1rem] pl-[1rem] pb-4 mt-4">
            <div className="relative grid min-h-[300px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <Image
                    alt={meal.name}
                    className="object-cover object-center w-full h-96"
                    src={`data:image/jpeg;base64,${meal.picture_base_64}`}
                    fill
                />
            </div>

            {renderPanel}
        </div>
    ) : (
        <ResizablePanelGroup direction="horizontal" className="bg-white rounded-lg mt-4">
            <ResizablePanel>
                <Image
                    alt={meal.name}
                    className="rounded-lg m-4 object-cover"
                    height={160}
                    src={`data:image/jpeg;base64,${meal.picture_base_64}`}
                    width={420}
                />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>{renderPanel}</ResizablePanel>
        </ResizablePanelGroup>
    );

    /* Render */
    return (
        <DrawerContent
            className={`bg-white flex items-center justify-center ${
                !isMobile ? 'pr-[10rem] pl-[10rem]' : ''
            }`}
        >
            {renderedDrawerContent}
        </DrawerContent>
    );
};
export default MealDetailsComponent;
