const games = [
	{
		name: 'Симулятор пранкера',
		img : 'https://avatars.mds.yandex.net/get-games/1881364/2a0000018cb5f7edcda8d5f9ecd7b47b7e9f/cover1',
		href: 'https://yandex.ru/games/app/283060?lang=ru'
    ,cat:'online,top'
	},
	{
		name: 'Падающие фигуры на двоих',
		img : 'https://avatars.mds.yandex.net/get-games/13012056/2a0000018ee6d2ddd76769f22cbc50e237ce/cover1',
		href: 'https://yandex.ru/games/app/328421?lang=ru'
		,cat:'online,top,mobile,pop'
	},
	{
		name: 'Нубик Выживание и Войнушка',
		img: 'https://avatars.mds.yandex.net/get-games/13012056/2a0000018f1b3061b96c9eea4ad3a49ac89c/cover1',
		href:'https://yandex.ru/games/app/334175'
    ,cat:'online,top,mobile'
	},
	{
		name: 'Нубик качалка и драки',
		img:'https://avatars.mds.yandex.net/get-games/12797757/2a0000018eff3fb728f3758bb1b160cdf4f8/cover1',
		href:'https://yandex.ru/games/app/310556'
		,cat:'online,top,mobile,pop'
	},
	{
		name: 'Шахматы 2048 - Слияние',
		img : 'https://avatars.mds.yandex.net/get-games/3006389/2a0000018e22328678ef4bf46b61e853f9aa/cover1',
		href: 'https://yandex.ru/games/app/297027?lang=ru'
    ,cat:'online,pop,mobile'
	},
	{
		name: 'Зума против фруктов',
		img : 'https://avatars.mds.yandex.net/get-games/12797757/2a0000018e55a440778e7da4a99349423df2/cover1',
		href: 'https://yandex.ru/games/app/303623',
		cat:'online,pop,mobile'
	},
	{
		name: 'Планетарий',
		img: 'png/pl.png',
		href: 'https://yandex.ru/games/app/311921',
		mobile:true,
    cat:'online,pop,mobile'
	},
	{
		name: 'Оборона',
		img: 'https://avatars.mds.yandex.net/get-games/3006389/2a0000018e83bce0cffd400f451e3ac47470/cover1',
		href: 'https://yandex.ru/games/app/310557',
		mobile: true,
    cat:'online,pop,mobile'
	},
	{
		name: 'Остров на прокачку',
		img : 'https://avatars.mds.yandex.net/get-games/1892995/2a0000018e7abb99051859a7e0d61f3ab09a/cover1',
		href: 'https://yandex.ru/games/app/297810?lang=ru',
    cat:'online,pop'
	},
	{
		name: 'War Reborn',
		img: 'https://i.imgur.com/oAGAzBE.png',
		href: 'https://disk.yandex.ru/d/Md9JLO-e2z-frw',
		cat:'ofline,top,noads'
	},
	{
		name: "Angry Toilets",
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018ce46752871677f39a5385cdf076/cover1',
		href: 'https://yandex.ru/games/app/283371?lang=ru',
		cat:'online,top,pop,mobile'
	},
	{
		name : 'Виртуальная Машина',
		img: 'https://avatars.mds.yandex.net/get-games/1890793/2a0000018ecc1863f42658c38b259b85b1f3/cover1',
		href: 'https://yandex.ru/games/app/313152',
		cat:'online,apps,mobile'
	},
	{
		name : 'Skibidi War',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018c4cc7065b38690a3feb6543bc45/cover1',
		href: 'https://yandex.ru/games/app/270667?lang=ru',
    cat:'online,top,pop'
	},
	{
		name: 'Симулятор Ствола',
		img:'https://avatars.mds.yandex.net/get-games/10152950/2a0000018d4573fd8ee28f8a6a6b05e48dcf/cover1',
		href: 'https://yandex.ru/games/app/289424?lang=ru',
		cat:'online,pop,mobile'
	},
	{
		name: "Оптические иллюзии",
		href: "https://yandex.ru/games/app/327905?lang=ru",
		img: 'https://avatars.mds.yandex.net/get-games/13012056/2a0000018ecd6766d50bbca8cc6e7c066870/cover1',
    cat:'online,pop,mobile'
	},
	{
		name: "Музыкальный Шар",
		href: "https://yandex.ru/games/app/334912?lang=ru",
		img: 'https://avatars.mds.yandex.net/get-games/11385414/2a0000018f296039bef9bc2998440c5517e6/cover1',
		cat:'online,pop,mobile'
	},
	{
		name: 'Ниндзя Симулятор',
		img:'https://avatars.mds.yandex.net/get-games/11385414/2a0000018d031945b991228294d94bcbb69c/cover1',
		href: 'https://yandex.ru/games/app/286481?lang=ru',
		cat:'online,pop,mobile'
	},
	{
		name: 'Защити Девушку От Зомби',
		img:'https://avatars.mds.yandex.net/get-games/11385414/2a0000018dc78eddb18e83eed45e9dc10679/cover1',
		href: 'https://yandex.ru/games/app/296182?lang=ru',
		cat:'online,pop,mobile'
	},
	{
		name: 'Кото-мешалка слияние котиков',
		img:'https://avatars.mds.yandex.net/get-games/12797757/2a0000018dd4c6dfa937e5819dbdad29cc19/cover1',
		href: 'https://yandex.ru/games/app/296816?lang=ru',
		cat:'online,pop,mobile'
	},
	{
		name: '2048 Стрелялка',
		img:'https://avatars.mds.yandex.net/get-games/12797757/2a0000018ee2ceb547829b02abd6f4425523/cover1',
		href: 'https://yandex.ru/games/app/290170',
		cat:'online,pop,mobile'
	},
	{
		name: 'Palworld ферма',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018da68f8dbcab392567e24786eb87/cover1',
		href: 'https://yandex.ru/games/app/292538',
		cat:'online,pop,mobile'
	},
	{
		name: 'ГТА 6 - Миссия с вертолетиком',
		img: 'https://avatars.mds.yandex.net/get-games/11385414/2a0000018db23e34864156b4f946b9fd7e25/cover1',
		href: 'https://yandex.ru/games/app/295132',
		cat:'online,top,pop,mobile'
	},
	{
		name: 'ГТА 6 - Ограбление Лайнера',
		img: 'https://avatars.mds.yandex.net/get-games/6238841/2a0000018ddfeb7815e2fbd97aeba0642db6/cover1',
		href: 'https://yandex.ru/games/app/296645',
		cat:'online,top,pop,mobile'
	},
  {
    name:'Шейп шарики стрелялка',
    img:'https://avatars.mds.yandex.net/get-games/2977039/2a0000018f43774fde8f1d11a2d01a39597a/cover1',
    href: 'https://yandex.ru/games/app/336350?lang=ru',
    cat: 'online,pop,mobile,top'
  },
	{
		name: 'Слаймы',
		img:'https://avatars.mds.yandex.net/get-games/10152950/2a0000018d637b038fe22e723f62b3c00d9b/cover1',
		href: 'https://yandex.ru/games/app/289283',
		cat:'online,pop,mobile'
	},
	{
		name: 'Бешеная косилка',
		img:'https://avatars.mds.yandex.net/get-games/12797757/2a0000018dcb5b169defc4154f4e25732c57/cover1',
		href: 'https://yandex.ru/games/app/296180',
		cat:'online,pop,mobile'
	},
	{
		name: 'Прокати девушку по кругу',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018d783605bed140d65f545427cbe3/cover1',
		href: 'https://yandex.ru/games/app/290879',
		cat:'online,pop,mobile'
	},
  {
		name: 'Cимулятор Космонавта',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018d2b45ef729356467a86cacc11f6/cover1',
		href: 'https://yandex.ru/games/app/286735',
		cat:'online,pop,mobile'
	},
	{
		name: 'ChatGPT Побег',
		img: 'https://avatars.mds.yandex.net/get-games/6238841/2a0000018db7da5e7b27e2e0c6c14157ee95/cover1',
		href: 'https://yandex.ru/games/app/294018',
		cat:'online,pop,mobile'
	},
	{
		name: 'Красный шар: убегай от лавы',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018d27384f04140b1ea604b893c9cc/cover1',
		href: 'https://yandex.ru/games/app/286735',
		cat:'online,pop,mobile'
	},
	{
		name: 'Неоновая птица',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018d2725dbcaaf7433070a6b737ca5/cover1',
		href: 'https://yandex.ru/games/app/286735',
		cat:'online,pop,mobile'
	},
	{
		name: 'Флекс Дэш',
		img: 'https://avatars.mds.yandex.net/get-games/1892995/2a0000018e0f7f96b4c4534be4c528550b30/icon1',
		href: 'https://yandex.ru/games/app/298578',
		cat:'online,pop,mobile'
	},
	{
		name: 'Симулятор Пчелы',
		img: 'https://avatars.mds.yandex.net/get-games/6238841/2a0000018d54fc0423577a623be7f22c605f/icon1',
		href: 'https://yandex.ru/games/app/290763',
		cat:'online,pop,mobile'
	},
	{
		name: 'Клади дорогу',
		img: 'https://avatars.mds.yandex.net/get-games/11385414/2a0000018d3033b6310c92233f40149199fb/cover1',
		href: 'https://yandex.ru/games/app/288642',
		cat:'online,pop,mobile'
	},
	{
		name : 'Глобальный GTA Тест',
		img: 'https://avatars.mds.yandex.net/get-games/6238841/2a0000018bbcedecc582e00f9bb083621504/cover1',
		href: 'https://yandex.ru/games/app/269912?lang=ru',
		cat:'online,top,pop,mobile'
	},
	{
		name : 'Симулятор Акулы',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018bc918654bca4c85e0e0dcbe7c09/cover1',
		href: 'https://yandex.ru/games/app/271227?lang=ru',
    cat:'online,pop'
	},
  {
    name:'Лови шарики по цвету',
    img: 'png/bl.png',
    href:'/noads/balls/index.html',
    cat: 'online,pop,noads'
  },
  {
    name:'Майнкрафт тест и пазлы',
    img: 'https://avatars.mds.yandex.net/get-games/1881364/2a0000018cb60e5c0e522d2862e852a389aa/cover1',
    href:'/noads/test/index.html',
    cat: 'online,top,pop,noads'
  },
  {
    name:'Симулятор панды',
    img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018d2741033702edf4f08f04d4e31b/cover1',
    href:'/noads/panda/index.html',
    cat: 'online,pop,noads'
  }
]