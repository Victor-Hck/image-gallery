"use client";

import { Janela } from "@/components/Modal";
import { Galeria } from "@/components/Photoitems";
import { photoList } from "@/data/PhotoList";
import { useState } from "react";

const Page = () => {
    const [showModal, setShowModal] = useState(false);
    const [imageOfModal, setImageOfModal] = useState("");

    const openModal = (id: number) => {
        const photo = photoList.find(item => item.id === id);
        if(photo) {
            setImageOfModal(photo.url);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return(
        <div>
            <h1 className="text-center text-3xl font-bold my-10">Galeria de Imagens</h1>

            <section className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photoList.map(item => (
                    <Galeria
                        key={item.id}
                        photo={item}
                        onClick={() => openModal(item.id)}
                    />
                ))}
            </section>
            {showModal &&
                <Janela
                    image={imageOfModal}
                    closeModal={closeModal}
                />
            }
        </div>
    );
};

export default Page;