import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";


export async function POST(req: Request){

  try{

    const {username,password}=await req.json();


    const user = await prisma.user.findUnique({
      where:{
        username
      }
    });


    if(!user){
      return NextResponse.json({
        message:"Аккаунт не найден"
      });
    }


    const check = await bcrypt.compare(
      password,
      user.password
    );


    if(!check){
      return NextResponse.json({
        message:"Неверный пароль"
      });
    }


    return NextResponse.json({
      message:"Вход выполнен"
    });


  }catch{

    return NextResponse.json({
      message:"Ошибка сервера"
    });

  }

}