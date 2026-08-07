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


{/* ФОН */}

<div
  className="
  absolute
  inset-0
  -z-20
  bg-[radial-gradient(circle_at_top,#351044,transparent_45%)]
  "
/>


<div
  className="
  absolute
  right-[-200px]
  bottom-[-200px]
  w-[600px]
  h-[600px]
  bg-purple-600/20
  rounded-full
  blur-[180px]
  -z-20
  "
/>



{/* КУБИКИ ФОНА */}


<div
className="
absolute
inset-0
overflow-hidden
-z-10
"
>


<div
className="
absolute
top-[15%]
left-[8%]
w-24
h-24
border
border-purple-400/20
bg-purple-500/5
backdrop-blur-sm
rotate-12
animate-[float_8s_ease-in-out_infinite]
"
/>


<div
className="
absolute
top-[25%]
right-[12%]
w-32
h-32
border
border-pink-400/20
bg-pink-500/5
backdrop-blur-sm
rotate-45
animate-[float_10s_ease-in-out_infinite]
"
/>


<div
className="
absolute
bottom-[20%]
left-[35%]
w-20
h-20
border
border-purple-400/20
bg-purple-500/5
rotate-45
animate-[float_7s_ease-in-out_infinite]
"
/>


</div>






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


<div className="flex items-center gap-3">


<img
src="/images/logo.png"
className="
w-9
h-9
rounded-xl
object-cover
"
/>



<div>


<h1
className="
font-bold
text-sm
"
>
Mazepov | Connextion
</h1>


<p
className="
text-[10px]
text-zinc-500
"
>
AMAZING ONLINE
</p>


</div>


</div>





<nav
  className="
  hidden
  md:flex
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
pt-24
h-[calc(100vh-96px)]
max-w-7xl
mx-auto
px-8
"
>


<div
className="
grid
md:grid-cols-2
gap-5
h-[56vh]
"
>





{/* LEFT IMAGE */}


<div
className="
relative
overflow-hidden
rounded-[32px]
"
>


<img
src="/images/fon.png"
className="
w-full
h-full
object-cover
[mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]
"
/>


</div>







{/* RIGHT PHOTOS */}


<div
className="
grid
grid-cols-2
gap-5
"
>


<Photo src="/images/gallery1.jpg"/>

<Photo src="/images/gallery2.jpg"/>

<Photo src="/images/gallery3.jpg"/>

<Photo src="/images/gallery4.jpg"/>


</div>


</div>









{/* DESCRIPTION */}


<div
className="
mt-5
h-[120px]
rounded-3xl
bg-[#111]
border
border-white/10
px-8
py-5
"
>


<h3
className="
text-2xl
font-black
"
>
MAZEPOV CONNEXTION - MODS STORE
</h3>



<p
className="
mt-2
text-sm
text-zinc-400
"
>
На данном сайте вы можете приобрести различные товары,
найти подходящие модификации и дополнения для своей сборки.
Создавайте уникальный игровой опыт вместе с Mazepov | Connextion.
</p>


</div>



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
gap-10
bg-black/60
backdrop-blur-md
border-t
border-white/5
text-[11px]
font-medium
tracking-wide
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
bg-[#111]
border
border-white/10
hover:border-white/30
transition
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