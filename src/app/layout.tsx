import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets:["latin","cyrillic"],
  variable:"--font-inter",
});


const montserrat = Montserrat({
  subsets:["latin","cyrillic"],
  variable:"--font-montserrat",
});



export const metadata: Metadata = {
  title: "Mazepov | Connextion",
  description:
  "Игровая платформа модов, сборок и проектов",
};



export default function RootLayout({
children,
}:{
children:React.ReactNode;
}) {

return (

<html lang="ru">

<body
className={`
${inter.variable}
${montserrat.variable}
bg-[#050505]
text-white
antialiased
`}
>

{children}

</body>

</html>

);

}