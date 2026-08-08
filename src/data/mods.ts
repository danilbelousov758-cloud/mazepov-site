export interface ModItem {
    title: string;
    image: string;
    description: string;
}

export interface ModCategory {
    name: string;
    children?: ModCategory[];
    mods?: ModItem[];
}


export const mods: ModCategory[] = [

    {
        name: "Скины",
        children: [
            {
                name: "Государственные",
                mods: []
            },
            {
                name: "Мафии",
                mods: []
            },
            {
                name: "Банды",
                mods: []
            },
            {
                name: "Гражданские",
                mods: []
            }
        ]
    },


    {
        name: "Оружие",
        children: [
            {
                name: "Ганпак",
                mods: []
            },
            {
                name: "Дигл",
                mods: []
            },
            {
                name: "ЮСП",
                mods: []
            },
            {
                name: "Револьвер",
                mods: []
            },
            {
                name: "АПС",
                mods: []
            },
            {
                name: "СВД ПСО",
                mods: []
            },
            {
                name: "СВД",
                mods: []
            },
            {
                name: "M4A4",
                mods: []
            },
            {
                name: "Абакан",
                mods: []
            },
            {
                name: "Ас Вал",
                mods: []
            },
            {
                name: "Гроза",
                mods: []
            },
            {
                name: "Дробовик",
                mods: []
            }
        ]
    },


    {
        name: "Дороги",
        mods: []
    },


    {
        name: "Карты",
        mods: []
    },


    {
        name: "Интерьеры",
        children: [
            {
                name: "24.7",
                mods: []
            },
            {
                name: "ДПС/ППС/ФСБ",
                mods: []
            },
            {
                name: "Оружейка",
                mods: []
            },
            {
                name: "Ашан",
                mods: []
            },
            {
                name: "Аптека",
                mods: []
            },
            {
                name: "ПК клуб",
                mods: []
            },
            {
                name: "Особняк",
                mods: []
            },
            {
                name: "Банк",
                mods: []
            }
        ]
    },


    {
        name: "Заменные территории",
        children: [
            {
                name:"24.7",
                mods:[]
            },
            {
                name:"ДПС/ППС/ФСБ",
                mods:[]
            },
            {
                name:"Оружейка",
                mods:[]
            },
            {
                name:"Ашан",
                mods:[]
            },
            {
                name:"Аптека",
                mods:[]
            },
            {
                name:"ПК клуб",
                mods:[]
            },
            {
                name:"Особняк",
                mods:[]
            },
            {
                name:"ЦР",
                mods:[]
            },
            {
                name:"ФСИН",
                mods:[]
            },
            {
                name:"Арзамас",
                mods:[]
            },
            {
                name:"Батырево",
                mods:[]
            },
            {
                name:"Южный",
                mods:[]
            },
            {
                name:"Бизвар локации",
                mods:[]
            },
            {
                name:"Вокзалы",
                mods:[]
            }
        ]
    },


    {
        name:"Инвентарь",
        mods:[]
    },


    {
        name:"Скайбоксы",
        mods:[]
    },


    {
        name:"Эффекты",
        children:[
            {
                name:"Кровь",
                mods:[]
            },
            {
                name:"Эффект при попадании",
                mods:[]
            },
            {
                name:"Эффект при убийстве и ноке (ld_bum)",
                mods:[]
            }
        ]
    },


    {
        name:"Нефтевышки",
        mods:[]
    },


    {
        name:"Прицелы",
        mods:[]
    },


    {
        name:"Курсор мыши",
        mods:[]
    },


    {
        name:"Фисты",
        mods:[]
    },


    {
        name:"Звуки",
        children:[
            {
                name:"Попадание",
                mods:[]
            },
            {
                name:"Ганы",
                children:[
                    {
                        name:"Пистолеты",
                        mods:[]
                    },
                    {
                        name:"M4A4",
                        mods:[]
                    },
                    {
                        name:"Абакан",
                        mods:[]
                    },
                    {
                        name:"Гроза",
                        mods:[]
                    },
                    {
                        name:"СВД",
                        mods:[]
                    },
                    {
                        name:"СВД ПСО",
                        mods:[]
                    }
                ]
            }
        ]
    },


    {
        name:"Таймциклы",
        mods:[]
    },


    {
        name:"Пикапы",
        mods:[]
    },


    {
        name:"АХК",
        mods:[]
    },


    {
        name:"ASI плагины",
        mods:[]
    },


    {
        name:"Деревья",
        mods:[]
    },


    {
        name:"Графика",
        mods:[]
    },


    {
        name:"Загрузочный экран",
        mods:[]
    },


    {
        name:"Подсказки для гос. сотрудников",
        mods:[]
    }

];