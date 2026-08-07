export default function CreateProductPage() {
  return (
    <main
      className="
      min-h-screen
      bg-[#050510]
      text-white
      p-10
      "
    >

      <div className="max-w-4xl mx-auto">


        <h1
          className="
          text-4xl
          font-black
          tracking-widest
          bg-gradient-to-r
          from-purple-400
          to-cyan-400
          bg-clip-text
          text-transparent
          "
        >
          НОВЫЙ ТОВАР
        </h1>


        <p className="text-gray-400 mt-2">
          Добавление нового файла в MAZEPOV STORE
        </p>




        <div
          className="
          mt-10
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-8
          backdrop-blur-xl
          space-y-6
          "
        >



          <div>
            <label className="text-sm text-gray-400">
              Название товара
            </label>

            <input
              placeholder="Например: BMW M5 F90"
              className="
              mt-2
              w-full
              px-5
              py-3
              rounded-xl
              bg-black/30
              border
              border-white/10
              outline-none
              focus:border-purple-500
              "
            />
          </div>





          <div>
            <label className="text-sm text-gray-400">
              Категория
            </label>


            <select
              className="
              mt-2
              w-full
              px-5
              py-3
              rounded-xl
              bg-black/30
              border
              border-white/10
              "
            >

              <option>
                Моды
              </option>

              <option>
                Сборки
              </option>

              <option>
                Программы
              </option>

            </select>

          </div>





          <div>
            <label className="text-sm text-gray-400">
              Описание
            </label>


            <textarea
              placeholder="Описание товара..."
              className="
              mt-2
              w-full
              h-32
              px-5
              py-3
              rounded-xl
              bg-black/30
              border
              border-white/10
              outline-none
              "
            />

          </div>





          <div className="grid grid-cols-2 gap-5">


            <div>

              <label className="text-sm text-gray-400">
                Цена
              </label>


              <input
                placeholder="299"
                className="
                mt-2
                w-full
                px-5
                py-3
                rounded-xl
                bg-black/30
                border
                border-white/10
                "
              />

            </div>



            <div>

              <label className="text-sm text-gray-400">
                Доступ
              </label>


              <select
              className="
              mt-2
              w-full
              px-5
              py-3
              rounded-xl
              bg-black/30
              border
              border-white/10
              "
              >

                <option>
                  Бесплатный
                </option>

                <option>
                  Платный
                </option>


              </select>


            </div>


          </div>





          <div>

            <label className="text-sm text-gray-400">
              Файл товара
            </label>


            <input
              type="file"
              className="
              mt-2
              w-full
              px-5
              py-3
              rounded-xl
              bg-black/30
              border
              border-white/10
              "
            />

          </div>





          <div>

            <label className="text-sm text-gray-400">
              Изображение
            </label>


            <input
              type="file"
              className="
              mt-2
              w-full
              px-5
              py-3
              rounded-xl
              bg-black/30
              border
              border-white/10
              "
            />

          </div>






          <button
            className="
            w-full
            py-4
            rounded-xl
            font-bold
            bg-gradient-to-r
            from-purple-600
            to-cyan-500
            hover:scale-[1.02]
            transition
            "
          >
            Создать товар
          </button>



        </div>


      </div>


    </main>
  );
}