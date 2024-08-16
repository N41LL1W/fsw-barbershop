import Image from "next/image";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOption } from "../_constants/search";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import Link from "next/link";

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="py-5 border-b border-solid flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/52001533?s=400&u=2bf9e286b488afb5f0bc7c28a1ef64e2813d9106&v=4" />
        </Avatar>

        <div>
          <p className="font-bold">Willian Gomes</p>
          <p className="text-xs">willian.play.cel@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col border-b gap-2 py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col border-b gap-2 py-5">
        {quickSearchOption.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imageUrl}
              height={18}
              width={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
