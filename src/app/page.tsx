export default function Home() {
  return (

    <main
      className="
      h-screen
      overflow-hidden
      bg-[#050505]
      text-white
      relative
      "
    >

      {/* VIDEO BACKGROUND */}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        opacity-30
        z-0
        "
      >
        <source
          src="/videos/background.mp4"
          type="video/mp4"
        />
      </video>



      {/* DARK OVERLAY */}

      <div
        className="
        absolute
        inset-0
        bg-black/50
        z-10
        "
      />



      {/* PURPLE GLOW */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,#35104455,transparent_50%)]
        z-10
        "
      />



      {/* КУБИКИ ФОНА */}





      {/* HEADER */}

      <header
        className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        w-[92%]
        max-w-7xl
        h-16
        px-6
        rounded-2xl
        bg-black/70
        border
        border-white/10
        backdrop-blur-xl
        flex
        items-center
        justify-between
        z-50
        "
      >


        <nav
          className="
          flex
          gap-8
          text-sm
          text-zinc-400
          "
        >


          <a
            href="/"
            className="
            hover:text-white
            transition
            "
          >
            Главная
          </a>



          <a
            href="/mods"
            className="
            hover:text-white
            transition
            "
          >
            Моды
          </a>



          <a
            href="/news"
            className="
            hover:text-white
            transition
            "
          >
            Новости
          </a>


        </nav>




        <button
          className="
          px-5
          py-2
          rounded-xl
          bg-white
          text-black
          text-sm
          font-semibold
          "
        >
          Войти
        </button>


      </header>





      {/* CONTENT */}


      <section
        className="
        relative
        z-20
        pt-24
        h-full
        "
      >



        {/* LEFT IMAGE */}





        {/* RIGHT PHOTOS */}





        {/* DESCRIPTION */}



      </section>






      {/* FOOTER */}


      <footer
        className="
        fixed
        bottom-0
        left-0
        w-full
        h-10
        flex
        items-center
        justify-center
        gap-6
        bg-black/40
        backdrop-blur-md
        border-t
        border-white/10
        z-50
        text-xs
        "
      >


        <a
          href="https://t.me/mazepovvv"
          target="_blank"
          className="
          text-white
          transition-all
          duration-300
          hover:text-transparent
          hover:bg-gradient-to-r
          hover:from-purple-400
          hover:to-pink-400
          hover:bg-clip-text
          "
        >
          TG - MAZEPOV
        </a>



        <a
          href="https://t.me/ConnextionSqaude"
          target="_blank"
          className="
          text-white
          transition-all
          duration-300
          hover:text-transparent
          hover:bg-gradient-to-r
          hover:from-purple-400
          hover:to-pink-400
          hover:bg-clip-text
          "
        >
          TG - CONNEXTION
        </a>



      </footer>



    </main>

  );
}




function Photo({
  src
}: {
  src:string
}) {

  return (

    <div
      className="
      rounded-3xl
      overflow-hidden
      "
    >

      <img
        src={src}
        className="
        w-full
        h-full
        object-cover
        "
      />

    </div>

  );

}