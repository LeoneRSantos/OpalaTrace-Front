import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function SignIn() {
    return (
        <>
            <main className="h-screen flex w-full">
                <div className="bg-primary-foreground w-full h-full flex p-16"> </div>
                    <section className="flex items-center justify-center bg-foreground h-full max-m-3xl w-full p-4">
                    <Card className=" w-full max-w-md"> 
                        <CardHeader>
                            <CardTitle className=" text-2xl font-bold trackng"> 
                                Entre com sua conta
                            </CardTitle>
                            <CardDescription> 
                                Utilize seu e-mail e senha
                            </CardDescription>
                        </CardHeader>
                        <CardContent> 
                            <div> 
                                <Label htmlFor="email"> 
                                    E-mail
                                </Label>
                                <Input id="email" placeholder="exemplo@email.com" type="email"> 

                                </Input>
                            </div>

                            <div className="mt-4"> 
                                <Label htmlFor="senha"> 
                                    Senha
                                </Label>
                                <Input id="senha" placeholder="*****" type="password"> 

                                </Input>
                            </div>
                            <Button className="mt-6 w-full"> Entrar </Button>
                            <div className="flex items-center gap-16 mt-4"> 
                                <Separator> 
                                    <span className="text-xs text-muted-foreground"> ou </span>
                                </Separator>
                            </div>
                            <Button variant="outline" className="mt-6 w-full"> 
                            Entrar com Google
                            </Button>
                        </CardContent>
                        <CardFooter className=" text-muted-foreground text-center text-sm"> 
                            <p>Ao entrar na nossa plataforma, você concorda com nossos termos de uso e política de privacidade.</p>
                        </CardFooter>
                    </Card> 
                    
                    </section>
            </main>
        </>

    )

}