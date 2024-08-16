import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { quickSearchOption } from "../_constants/search";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex flex-row items-center">
        <Image alt="FSWBarber" src="/Logo.png" height={18} width={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
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
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
