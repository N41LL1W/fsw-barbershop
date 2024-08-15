import Header from "./_components/header";

import { SearchIcon } from "lucide-react";

import Image from "next/image";

import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { Card, CardContent } from "./_components/ui/card";

import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  // chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({});
  const popularBarbeshops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-xl font-bold">Olá, Willian !</h2>
        <p>Terça-Feira, 13 de Agosto.</p>

        {/* BUSCA */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* BUSCA RAPIDA */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt="Cabelo" />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" width={16} height={16} alt="Barba" />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamento.svg"
              width={16}
              height={16}
              alt="Acabamento"
            />
            Acabamento
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/pezinho.png" width={16} height={16} alt="Pezinho" />
            Pézinho
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/sobrancelha1.png"
              width={16}
              height={16}
              alt="Sobrancelha"
            />
            Sobrancelha
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative h-[150px] w-full mt-6">
          <Image
            alt="Agendo nos melhores com FSWBarber"
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* AGENDAMENTO */}
        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        {/* RECOMENDATOS */}
        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershops) => (
            <BarbershopItem key={barbershops.id} barbershop={barbershops} />
          ))}
        </div>

        {/* PUPOLARES */}
        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbeshops.map((barbershops) => (
            <BarbershopItem key={barbershops.id} barbershop={barbershops} />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2024 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
};

export default Home;
