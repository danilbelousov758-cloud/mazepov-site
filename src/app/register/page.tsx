"use client";

import { useState } from "react";

export default function RegisterPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");


  async function register() {

    if (password !== repeatPassword) {
      setMessage("Пароли не совпадают");
      return;
    }


    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });


    const data = await res.json();

    setMessage(data.message);
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
          Регистрация
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
        placeholder="Логин"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />


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
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />


        <input
        className="
        w-full
        mb-6
        px-4
        py-3
        rounded-xl
        bg-black
        border
        border-white/10
        "
        placeholder="Повторите пароль"
        type="password"
        value={repeatPassword}
        onChange={(e)=>setRepeatPassword(e.target.value)}
        />


        <button
        onClick={register}
        className="
        w-full
        py-3
        rounded-xl
        bg-white
        text-black
        font-semibold
        ">
          Создать аккаунт
        </button>


        <a
        href="/login"
        className="
        block
        text-center
        mt-4
        py-3
        rounded-xl
        border
        border-white/10
        hover:bg-white/10
        transition
        ">
          Уже есть аккаунт? Войти
        </a>


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