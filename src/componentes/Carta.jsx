import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Pencil, Trash2 } from "lucide-react";



export function Carta() {
  return (
    <Card isFooterBlurred className="w-[400px] h-[400px] col-span-12 sm:col-span-5 relative">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Viaje a Nepal</p>
        <h4 className="text-white font-medium text-2xl">Agosto de 2024</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Paisaje de Nepal"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://nextui.org/images/card-example-6.jpeg" // Reemplaza esta URL con la URL de tu imagen
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">
            ¡Una aventura alucinante! 17 días de viaje mochilero por un paraíso. Recorrimos todo el norte de Nepal caminando.
          </p>
        </div>
        <div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            <Pencil></Pencil>
          </Button>
          <Button className="text-tiny" color="error" radius="full" size="sm">
            <Trash2></Trash2>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
