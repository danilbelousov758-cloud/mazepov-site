import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";


export async function POST(req: Request) {

  try {

    const { username, password } = await req.json();


    if (!username || !password) {
      return NextResponse.json({
        message: "Заполните все поля"
      });
    }


    const user = await prisma.user.findUnique({
      where:{
        username
      }
    });


    if(user){
      return NextResponse.json({
        message:"Такой пользователь уже существует"
      });
    }


    const hash = await bcrypt.hash(password,10);


    await prisma.user.create({
      data:{
        username,
        password:hash
      }
    });


    return NextResponse.json({
      message:"Аккаунт создан!"
    });


  } catch(error){

    return NextResponse.json({
      message:"Ошибка сервера"
    });

  }

}