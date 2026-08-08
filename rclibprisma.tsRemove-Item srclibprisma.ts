[33mcommit 4a9b1e0f55ac5de283d3a46b469e98f212b60937[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: Danil Belousov <danilbelousov758@gmail.com>
Date:   Sat Aug 8 03:18:56 2026 +0300

    remove registration system and update login

 package-lock.json                   | 1437 [32m+[m[31m----------------------------------[m
 package.json                        |    4 [31m-[m
 prisma.config.ts                    |   14 [31m-[m
 src/app/api/register/login/route.ts |   53 [31m--[m
 src/app/api/register/route.ts       |   58 [31m--[m
 src/app/register/page.tsx           |  171 [31m-----[m
 6 files changed, 17 insertions(+), 1720 deletions(-)
