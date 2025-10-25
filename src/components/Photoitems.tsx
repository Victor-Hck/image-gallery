import { Imagens } from "@/types/types";
import Image from "next/image";

export const Galeria = ({photo, onClick}: Imagens) => {
    return(
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <Image
                src={`/assets/${photo.url}`}
                width={500}
                height={500}
                quality={100}
                alt="asd"
                className="w-full"
            />
        </div>
    );
};