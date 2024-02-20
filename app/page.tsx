import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';

// COMPONENTS
import BackgroundComponent from '@/components/background/Background';
import StarComponent from '@/components/stars/Stars';
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
                <Image src="/images/name.svg" alt="name" width={100} height={100} />
            </div>
            <div className="flex justify-center mt-32">
                <div className="w-1/2 flex justify-center">
                    <Card className="bg-white shadow-sm w-3/6">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#015426]">Login</CardTitle>
                        </CardHeader>
                        <CardFooter className="flex justify-between">
                            <CardDescription className="text-1xl">
                                Não tem uma conta?{' '}
                                <span className="underline underline-offset-1 hover:underline-offset-4 cursor-pointer">
                                    Clique aqui.
                                </span>
                            </CardDescription>
                        </CardFooter>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email" className="text-1xl text-[#015426]">
                                            E-mail
                                        </Label>
                                        <Input id="email" placeholder="@mail.com.br" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email" className="text-1xl text-[#015426]">
                                            Senha
                                        </Label>
                                        <Input
                                            id="password"
                                            placeholder="password"
                                            type="password"
                                        />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button asChild className="text-1xl mt-4">
                                <Link href="/dashboard">Entrar</Link>
                            </Button>
                        </CardFooter>
                        <CardFooter className="flex justify-between">
                            <CardDescription className="text-1xl mt-6">
                                <span className="underline underline-offset-1 hover:underline-offset-4 cursor-pointer">
                                    Esqueceu a senha?
                                </span>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                </div>
                <div className="text-[#015426] w-1/2 ">
                    <div className="w-4/6 flex flex-col ml-[12rem]">
                        <p className="text-[40px] font-bold font-['georgia'] flex flex-col ">
                            Descubra a{' '}
                            <Image src="/images/name.svg" alt="name" width={350} height={350} />
                        </p>
                        <p className="font-['verdana']  mt-3 mb-8">
                            Simplificando o controle de calorias.
                        </p>
                        <p>
                            Tire <b className="text-[#FA830D]">fotos</b> dos seus pratos, receba
                            análises precisas de <br />
                            <b className="text-[#1D7D1B]">calorias e nutrientes</b>, e acompanhe seu
                            progresso com nosso dashboard personalizado.
                        </p>
                        <p className="font-bold mt-6">Sua saúde merece o melhor!</p>
                        <div className="flex flex-row items-center mt-8 ml-[-11px]">
                            <Link href="https://drive.google.com/file/d/1IjA8xWHcW-2kRSZKLcAgJcMfLEIIg129/view">
                                <Image src="/images/gp.png" alt="name" width={200} height={200} />
                            </Link>
                            <StarComponent />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.homeFooter}>
                <p>NutriiSnap © 2024 - Feito com amor na força do ódio</p>
            </div>
        </>
    );
};
export default IndexPage;
