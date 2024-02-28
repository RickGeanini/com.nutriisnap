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

// STYLES
import styles from './MealDetails.module.css';

// UTILS
import { formateToBr } from '@/lib/date';

// MEAL DETAILS COMPONENT UTILS
interface IMealDetailsComponentProps {
    meal: IMeal;
}
// MEAL DETAILS COMPONENT
const MealDetailsComponent = ({ meal }: IMealDetailsComponentProps) => {
    /* Vars */
    const mobile = useMediaQuery('(max-width: 768px)');

    /* Utils */
    const renderedIngredients = (
        <div>
            {meal.ingredients.length > 1 ? (
                meal.ingredients.map((ingredient, key) => {
                    return (
                        <div className="flex text-sm mt-2" key={key}>
                            <BadgeCheck color="#FA830D" size="16px" className="mr-2" /> {ingredient}
                        </div>
                    );
                })
            ) : (
                <span className="flex text-sm">
                    Houve um erro. Parece que você tentou entrar onde não foi convidado. Tente ser
                    mais VIP na próxima vez.
                </span>
            )}
        </div>
    );

    const renderPanel = (
        <div className="p-4 flex flex-col gap-2">
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
                        {meal.is_healthy ? (
                            <div className="flex text-sm mt-2">Sim.</div>
                        ) : (
                            <div className="flex text-sm mt-2">
                                Não, nossa IA entende que sua alimentação parece um catálogo de
                                produtos químicos.
                            </div>
                        )}
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );

    /* Render */
    return (
        <>
            {mobile ? (
                <DrawerContent className={styles.mobile}>
                    <Image
                        alt={meal.name}
                        className="rounded-lg m-4 object-cover"
                        height={160}
                        src={`data:image/jpeg;base64,${meal.picture_base_64}`}
                        width={420}
                    />
                    {renderPanel}
                </DrawerContent>
            ) : (
                <DrawerContent className={styles.desktop}>
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="bg-white rounded-lg mt-2"
                    >
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
                </DrawerContent>
            )}
        </>
    );
};
export default MealDetailsComponent;
