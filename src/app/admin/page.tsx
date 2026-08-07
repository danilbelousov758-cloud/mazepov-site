export default function AdminPage() {
  return (
    <main className="
    min-h-screen
    bg-[#050510]
    text-white
    flex
    ">


      {/* Боковое меню */}
      <aside className="
      w-72
      min-h-screen
      border-r
      border-white/10
      bg-black/20
      backdrop-blur-xl
      p-6
      ">


        <div className="
        text-2xl
        font-black
        tracking-widest
        bg-gradient-to-r
        from-purple-400
        to-cyan-400
        bg-clip-text
        text-transparent
        ">
          MAZEPOV
        </div>


        <p className="
        text-xs
        text-gray-500
        mt-1
        ">
          ADMIN PANEL
        </p>



        <nav className="
        mt-10
        space-y-3
        ">


          <button className="
          w-full
          text-left
          px-4
          py-3
          rounded-xl
          bg-gradient-to-r
          from-purple-600/30
          to-cyan-500/20
          ">
            🏠 Главная
          </button>


<a
href="/admin/products"
className="
w-full
block
text-left
px-4
py-3
rounded-xl
hover:bg-white/5
transition
"
>
📦 Товары
</a>

          <button className="
          w-full
          text-left
          px-4
          py-3
          rounded-xl
          hover:bg-white/5
          transition
          ">
            👥 Пользователи
          </button>


          <button className="
          w-full
          text-left
          px-4
          py-3
          rounded-xl
          hover:bg-white/5
          transition
          ">
            💳 Оплаты
          </button>


          <button className="
          w-full
          text-left
          px-4
          py-3
          rounded-xl
          hover:bg-white/5
          transition
          ">
            ⚙ Настройки
          </button>


        </nav>


      </aside>





      {/* Основная часть */}
      <section className="
      flex-1
      p-10
      ">



        <h1 className="
        text-4xl
        font-black
        ">
          Dashboard
        </h1>


        <p className="
        text-gray-400
        mt-2
        ">
          Управление MAZEPOV STORE
        </p>





        {/* Статистика */}
        <div className="
        grid
        grid-cols-3
        gap-6
        mt-10
        ">


          <div className="
          p-6
          rounded-2xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          ">
            <p className="text-gray-400">
              Товаров
            </p>

            <h2 className="
            text-4xl
            font-bold
            mt-3
            ">
              128
            </h2>
          </div>



          <div className="
          p-6
          rounded-2xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          ">
            <p className="text-gray-400">
              Пользователей
            </p>

            <h2 className="
            text-4xl
            font-bold
            mt-3
            ">
              542
            </h2>
          </div>



          <div className="
          p-6
          rounded-2xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          ">
            <p className="text-gray-400">
              Продажи
            </p>

            <h2 className="
            text-4xl
            font-bold
            mt-3
            ">
              2 450₽
            </h2>
          </div>


        </div>





        {/* Последние действия */}
        <div className="
        mt-10
        p-8
        rounded-2xl
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        ">


          <h2 className="
          text-2xl
          font-bold
          ">
            Последние действия
          </h2>



          <div className="
          mt-5
          space-y-4
          text-gray-400
          ">


            <p>
              🟣 Добавлен новый мод BMW M5
            </p>


            <p>
              🔵 Пользователь купил приватную сборку
            </p>


            <p>
              🟣 Загружено обновление программы
            </p>


          </div>


        </div>



      </section>



    </main>
  );
}