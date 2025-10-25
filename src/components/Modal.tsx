import { Modal } from "@/types/types";
import Image from "next/image";

export const Janela = ({image, closeModal}: Modal) => {
    return(
        <>
            <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
                <Image
                    width={1000}
                    height={1000}
                    src={`/assets/${image}`}
                    alt="Modal"
                />
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5 h-10 cursor-pointer text-white text-5xl">
                x
            </div>
        </>
    );
};