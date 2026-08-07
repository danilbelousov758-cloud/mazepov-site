export default function ProductsPage() {
  return (
    <main
      className="
      min-h-screen
      bg-[#060608]
      text-white
      p-10
      relative
      overflow-hidden
      "
    >

      {/* Фон */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
          absolute
          top-[-200px]
          right-[-100px]
          w-[600px]
          h-[600px]
          bg-purple-600/20
          rounded-full
          blur-[160px]
          "
        />


        <div
          className="
          absolute
          bottom-[-200px]
          left-[-100px]
          w-[500px]
          h-[500px]
          bg-pink-500/20
          rounded-full
          blur-[150px]
          "
        />

      </div>




      {/* Заголовок */}
      <div className="flex justify-between items-center">


        <div>

          <h1
            className="
            text-4xl
            font-black
            tracking-widest
            bg-gradient-to-r
            from-purple-400
            via-pink-400
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            PRODUCTS
          </h1>


          <p className="
          text-gray-400
          mt-2
          ">
            Управление файлами и товарами MAZEPOV STORE
          </p>


        </div>




        <a
          href="/admin/products/create"
          className="
          px-6
          py-3
          rounded-xl
          bg-gradient-to-r
          from-purple-600
          to-pink-500
          font-semibold
          shadow-[0_0_25px_rgba(236,72,153,0.25)]
          hover:scale-105
          transition
          "
        >
          + Новый товар
        </a>


      </div>







      {/* Поиск */}
      <div
        className="
        mt-10
        flex
        gap-4
        "
      >


        <input
          placeholder="Поиск товара..."
          className="
          flex-1
          px-5
          py-3
          rounded-xl
          bg-[#0d0d12]
          border
          border-white/10
          outline-none
          focus:border-pink-500
          "
        />



        {[
          "Все",
          "Моды",
          "Сборки",
          "Программы"
        ].map((item) => (

          <button
            key={item}
            className="
            px-5
            rounded-xl
            bg-[#0d0d12]
            border
            border-white/10
            text-gray-300
            hover:text-white
            hover:border-purple-500
            transition
            "
          >
            {item}
          </button>

        ))}


      </div>








      {/* Товары */}
      <div
        className="
        grid
        grid-cols-3
        gap-6
        mt-10
        "
      >


        <ProductCard
          icon="🚗"
          title="BMW M5 F90"
          category="GTA / CRMP MOD"
          price="Бесплатно"
          status="FREE"
        />


        <ProductCard
          icon="📦"
          title="MAZEPOV PACK"
          category="Приватная сборка"
          price="299₽"
          status="PREMIUM"
        />



        <ProductCard
          icon="⚙"
          title="MAZEPOV TOOL"
          category="Программа"
          price="149₽"
          status="PREMIUM"
        />


      </div>


    </main>
  );
}






function ProductCard({
  icon,
  title,
  category,
  price,
  status
}: {
  icon:string;
  title:string;
  category:string;
  price:string;
  status:string;
}) {


  return (

    <div
      className="
      group
      bg-[#0d0d12]
      border
      border-white/10
      rounded-3xl
      p-5
      backdrop-blur-xl
      hover:border-pink-500/50
      hover:shadow-[0_0_35px_rgba(236,72,153,0.15)]
      transition
      "
    >




      {/* Картинка */}
      <div
        className="
        h-36
        rounded-2xl
        bg-gradient-to-br
        from-purple-600/40
        via-pink-500/20
        to-black
        flex
        items-center
        justify-center
        text-5xl
        group-hover:scale-105
        transition
        "
      >

        {icon}

      </div>







      <div className="mt-5">


        <div className="
        flex
        justify-between
        items-center
        ">


          <h2
            className="
            text-lg
            font-bold
            "
          >
            {title}
          </h2>



          <span
            className="
            text-xs
            px-3
            py-1
            rounded-full
            bg-pink-500/20
            text-pink-300
            "
          >
            {status}
          </span>


        </div>





        <p
          className="
          text-gray-400
          mt-2
          text-sm
          "
        >
          {category}
        </p>






        <div
          className="
          flex
          justify-between
          items-center
          mt-5
          "
        >


          <span
            className="
            text-lg
            font-bold
            text-purple-300
            "
          >
            {price}
          </span>





          <button
            className="
            px-4
            py-2
            rounded-xl
            bg-white/5
            border
            border-white/10
            text-sm
            hover:bg-pink-500/20
            hover:border-pink-500/50
            transition
            "
          >
            Открыть
          </button>


        </div>


      </div>


    </div>

  );
}