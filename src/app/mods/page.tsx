export default function ModsPage() {
  return (

<main
className="
min-h-screen
bg-[#050505]
text-white
relative
overflow-hidden
"
>


{/* ФОН */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,#351044,transparent_45%)]
"
/>


<div
className="
absolute
right-[-200px]
top-[200px]
w-[500px]
h-[500px]
bg-purple-600/20
rounded-full
blur-[180px]
"
/>





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
className="hover:text-white transition"
>
Главная
</a>


<a
href="/mods"
className="text-white"
>
Моды
</a>


<a
href="/news"
className="hover:text-white transition"
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
pt-32
max-w-7xl
mx-auto
px-8
"
>


<h2
className="
text-5xl
font-black
tracking-tight
"
>
Моды
</h2>


<p
className="
mt-3
text-zinc-400
max-w-xl
"
>
Лучшие модификации для Amazing Online.
Установи новые автомобили, модели и дополнения для своей игры.
</p>








<div
className="
grid
md:grid-cols-3
gap-6
mt-12
"
>


<ModCard
image="/images/mod1.jpg"
title="BMW M5 F90"
text="Премиальный автомобильный мод"
/>



<ModCard
image="/images/mod2.jpg"
title="Mercedes AMG"
text="Новая игровая модель"
/>



<ModCard
image="/images/mod3.jpg"
title="Mazepov Pack"
text="Эксклюзивный набор"
/>



</div>



</section>







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
"
>


<a
href="https://t.me/mazepovvv"
className="
text-white
hover:text-transparent
hover:bg-gradient-to-r
hover:from-purple-400
hover:to-pink-400
hover:bg-clip-text
transition
"
>
TG - MAZEPOV
</a>


<a
href="https://t.me/ConnextionSqaude"
className="
text-white
hover:text-transparent
hover:bg-gradient-to-r
hover:from-purple-400
hover:to-pink-400
hover:bg-clip-text
transition
"
>
TG - CONNEXTION
</a>


</footer>


</main>

  );
}







function ModCard({
image,
title,
text
}:{
image:string;
title:string;
text:string;
}) {


return (

<div
className="
group
bg-[#111]
border
border-white/10
rounded-3xl
overflow-hidden
hover:border-purple-500/40
transition
"
>


<div
className="
h-52
overflow-hidden
"
>


<img
src={image}
className="
w-full
h-full
object-cover
group-hover:scale-105
transition
"
/>


</div>



<div
className="
p-5
"
>


<h3
className="
text-xl
font-bold
"
>
{title}
</h3>


<p
className="
mt-2
text-sm
text-zinc-500
"
>
{text}
</p>



<button
className="
mt-5
px-5
py-2
rounded-xl
bg-white
text-black
text-sm
font-semibold
"
>
Подробнее
</button>


</div>


</div>


);

}