import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';

// COMPONENTS
import BackgroundComponent from '@/components/background/Background';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// STYLES
import styles from './../components/background/Background.module.css';

// INDEX PAGE
const IndexPage: NextPage = () => {
    /* Render */
    return (
        <>
            <BackgroundComponent />
            <div className={styles.homeHeader}>
                <Image src="/images/logo.png" alt="icone" width={45} height={45} />
                <Image src="/images/name.png" alt="name" width={110} height={110} />
            </div>
            <div className="flex justify-evenly mt-32">
                <div className="">
                    <h1>WIP - Descubra a NutriiSnap</h1>
                    <p>Simplificando o controle de calorias e a gestão da sua dieta.</p>
                    <p>
                        Tire fotos dos seus pratos, receba análises precisas de calorias e<br />
                        nutrientes, e acompanhe seu progresso com nosso dashboard personalizado.
                    </p>
                    <p>
                        Transforme seus objetivos em realidade com a NutriiSnap - sua saúde merece o
                        melhor!
                    </p>

                    <Link href="/dashboard">
                        <Image src="/images/gp.png" alt="name" width={200} height={200} />
                    </Link>
                </div>
                {/* mr-48 mt-40 */}
                <Card className="bg-white shadow-sm w-96">
                    <CardHeader>
                        <CardTitle className="text-3xl">Login</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                        <CardDescription className="text-1xl">
                            Não tem uma conta? Clique aqui.
                        </CardDescription>
                    </CardFooter>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email" className="text-1xl">
                                        E-mail
                                    </Label>
                                    <Input id="email" placeholder="@mail.com.br" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email" className="text-1xl">
                                        Password
                                    </Label>
                                    <Input id="password" placeholder="password" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button asChild className="text-1xl">
                            <Link href="/dashboard">Entrar</Link>
                        </Button>
                    </CardFooter>
                    <CardFooter className="flex justify-between">
                        <CardDescription className="text-1xl">Esqueceu a senha?</CardDescription>
                    </CardFooter>
                </Card>
            </div>
            <div className={styles.homeFooter}>
                <p>NutriiSnap © 2024 - Feito com amor na força do ódio</p>
            </div>
        </>
    );
};
export default IndexPage;
