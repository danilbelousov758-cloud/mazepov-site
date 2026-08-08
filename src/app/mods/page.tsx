"use client";

import { useState } from "react";
import { mods, ModCategory } from "@/data/mods";

export default function ModsPage() {

    const [open, setOpen] = useState<string[]>([]);
    const [selected, setSelected] = useState<ModCategory | null>(null);


    function toggleCategory(name:string){

        setOpen(prev =>
            prev.includes(name)
            ? prev.filter(x => x !== name)
            : [...prev, name]
        );

    }


    function CategoryItem({
        item,
        level = 0
    }:{
        item:ModCategory;
        level?:number;
    }){


        const hasChildren = item.children && item.children.length > 0;


        return (

            <div>


                <button

                    onClick={()=>{

                        if(hasChildren){
                            toggleCategory(item.name);
                        }

                        if(item.mods){
                            setSelected(item);
                        }

                    }}


                    className={`
                    w-full
                    flex
                    items-center
                    gap-2
                    text-left
                    px-3
                    py-2
                    rounded-xl
                    text-sm
                    transition

                    ${
                        selected?.name === item.name
                        ?
                        "bg-white text-black"
                        :
                        "text-gray-400 hover:bg-zinc-900 hover:text-white"
                    }
                    `}


                    style={{
                        paddingLeft:`${level * 18 + 10}px`
                    }}

                >


                    <span className="
                    text-base
                    ">
                        {
                            hasChildren
                            ?
                            "◻️"
                            :
                            "◼️"
                        }
                    </span>


                    <span className={`
                    ${hasChildren ? "font-bold text-white" : ""}
                    `}>
                        {item.name}
                    </span>


                </button>



                {
                    hasChildren &&
                    open.includes(item.name) &&

                    <div>

                    {
                        item.children?.map(child=>(

                            <CategoryItem
                            key={child.name}
                            item={child}
                            level={level+1}
                            />

                        ))
                    }

                    </div>

                }


            </div>

        );

    }



    return (

        <main className="
        min-h-screen
        bg-black
        text-white
        relative
        overflow-hidden
        ">


            {/* VIDEO BACKGROUND */}

            <video
            autoPlay
            muted
            loop
            className="
            fixed
            inset-0
            w-full
            h-full
            object-cover
            -z-10
            opacity-40
            "
            >

                <source 
                src="/videos/background.mp4"
                type="video/mp4"
                />

            </video>


            <div className="
            fixed
            inset-0
            bg-black/60
            -z-10
            "></div>



            {/* HEADER */}


            <header className="
            h-20
            border-b
            border-zinc-800
            flex
            items-center
            justify-between
            px-10
            backdrop-blur
            ">


                <div className="
                text-2xl
                font-bold
                ">
                    MAZEPOV
                </div>



                <nav className="
                flex
                gap-8
                text-gray-400
                ">


                    <a href="/">
                        🏠 Главная
                    </a>


                    <a className="text-white">
                        🛠 Моды
                    </a>


                    <a href="/news">
                        📰 Новости
                    </a>


                </nav>



                <button className="
                bg-white
                text-black
                px-5
                py-2
                rounded-xl
                font-semibold
                ">
                    Войти
                </button>


            </header>





            <section className="
            flex
            ">



                {/* MENU */}


                <aside className="
                w-72
                border-r
                border-zinc-800
                min-h-[calc(100vh-80px)]
                p-4
                backdrop-blur
                bg-black/30
                ">


                    <h2 className="
                    font-bold
                    text-lg
                    mb-5
                    ">
                        📦 Категории
                    </h2>



                    <div className="space-y-1">


                    {
                        mods.map(item=>(

                            <CategoryItem
                            key={item.name}
                            item={item}
                            />

                        ))
                    }


                    </div>


                </aside>





                {/* CONTENT */}



                <section className="
                flex-1
                p-10
                ">



                {

                    selected

                    ?

                    <>

                    <h1 className="
                    text-3xl
                    font-bold
                    mb-6
                    ">
                        {selected.name}
                    </h1>



                    <div className="
                    grid
                    grid-cols-3
                    gap-6
                    ">


                    {
                        selected.mods?.map(mod=>(


                            <div
                            key={mod.title}
                            className="
                            bg-zinc-900/80
                            border
                            border-zinc-800
                            rounded-2xl
                            overflow-hidden
                            "
                            >


                                <img
                                src={mod.image}
                                className="
                                h-44
                                w-full
                                object-cover
                                "
                                />


                                <div className="p-5">


                                    <h3 className="
                                    font-bold
                                    text-xl
                                    ">
                                        {mod.title}
                                    </h3>


                                    <p className="
                                    text-gray-400
                                    mt-2
                                    ">
                                        {mod.description}
                                    </p>


                                    <button className="
                                    mt-5
                                    bg-white
                                    text-black
                                    px-5
                                    py-2
                                    rounded-xl
                                    ">
                                        Подробнее
                                    </button>


                                </div>


                            </div>


                        ))
                    }


                    </div>


                    </>


                    :

                    <div className="
                    h-full
                    flex
                    items-center
                    justify-center
                    text-gray-500
                    text-xl
                    ">
                        👈 Выберите категорию
                    </div>


                }


                </section>


            </section>


        </main>

    );

}