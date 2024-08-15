import Header from "./_components/header";

import { SearchIcon } from "lucide-react";

import Image from "next/image";

import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { Card, CardContent } from "./_components/ui/card";

import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOption } from "./_constants/search";
import BookingItem from "./_components/booking-item";

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
          {quickSearchOption.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
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
        <BookingItem />

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
