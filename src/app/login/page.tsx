"use client";

import { useState } from "react";

export default function LoginPage() {

  const [nickname, setNickname] = useState("");
  const [server, setServer] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);


  const servers = [
    {name:"RED", color:"#ff3030"},
    {name:"YELLOW", color:"#ffd900"},
    {name:"GREEN", color:"#00ff66"},
    {name:"AZURE", color:"#075985"},
    {name:"SILVER", color:"#c0c0c0"},
    {name:"ROSE", color:"#ff69b4"},
    {name:"BLACK", color:"#111111"},
    {name:"SKY", color:"#87ceeb"},
    {name:"TITAN", color:"#3b0764"},
    {name:"X", color:"#800020"},
    {name:"FIRE", color:"#ff4500"},
    {name:"LIME", color:"#32ff32"}
  ];


  function login() {

    if (!nickname) {
      setMessage("Введите никнейм");
      return;
    }


    if (!server) {
      setMessage("Выберите сервер");
      return;
    }


    localStorage.setItem(
      "nickname",
      nickname
    );


    localStorage.setItem(
      "server",
      server
    );


    setMessage(
      `Вы вошли: ${nickname} | ${server}`
    );

  }


  return (

    <main className="
    min-h-screen
    bg-black
    flex
    items-center
    justify-center
    text-white
    ">


      <div className="
      w-full
      max-w-md
      bg-zinc-900
      border
      border-white/10
      rounded-3xl
      p-8
      ">


        <h1 className="
        text-3xl
        font-bold
        text-center
        mb-6
        ">
          Вход
        </h1>


        <input

        className="
        w-full
        mb-4
        px-4
        py-3
        rounded-xl
        bg-black
        border
        border-white/10
        "

        placeholder="Никнейм"

        value={nickname}

        onChange={(e)=>
          setNickname(e.target.value)
        }

        />


        <div className="
        relative
        mb-6
        ">


          <button

          onClick={()=>
            setOpen(!open)
          }

          className="
          w-full
          px-4
          py-3
          rounded-xl
          bg-black
          border
          border-white/10
          flex
          items-center
          gap-3
          text-left
          hover:border-white/30
          transition
          "

          >


          {server ? (

            <>

            <span

            className="
            w-3
            h-3
            rounded-full
            "

            style={{
              background:
              servers.find(
                (item)=>item.name===server
              )?.color
            }}

            />


            {server}

            </>

          ) : (

            "Выберите сервер"

          )}


          </button>



          {open && (

            <div

            className="
            absolute
            z-50
            mt-2
            w-full
            bg-zinc-900
            border
            border-white/10
            rounded-xl
            overflow-hidden
            shadow-xl
            "

            >


            {servers.map((item)=>(


              <button

              key={item.name}

              onClick={()=>{

                setServer(item.name);
                setOpen(false);

              }}

              className="
              w-full
              px-4
              py-3
              flex
              items-center
              gap-3
              hover:bg-white/10
              transition
              text-left
              "

              >


                <span

                className="
                w-3
                h-3
                rounded-full
                "

                style={{
                  background:item.color
                }}

                />


                {item.name}


              </button>


            ))}


            </div>

          )}


        </div>



        <button

        onClick={login}

        className="
        w-full
        py-3
        rounded-xl
        bg-white
        text-black
        font-semibold
        hover:opacity-80
        transition
        "

        >

          Войти

        </button>



        <p className="
        text-center
        mt-4
        text-zinc-400
        ">

          {message}

        </p>


      </div>


    </main>

  );

}