import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Willian !</h2>
        <p>Terça-Feira, 13 de Agosto.</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative h-[150px] w-full mt-6">
          <Image
            alt="Agendo nos melhores com FSWBarber"
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
