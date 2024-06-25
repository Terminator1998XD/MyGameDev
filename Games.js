const games = [
	{
		name: 'Симулятор пранкера',
		img : 'https://avatars.mds.yandex.net/get-games/6238841/2a0000018ee78e64289bc8588422c7d6bd43/cover1',
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
		name: 'Не заходи в эту игру ночью',
		img : 'https://avatars.mds.yandex.net/get-games/1892995/2a0000018ffc0959593caa8775c060000531/cover1',
		href: 'hhttps://yandex.ru/games/app/346924'
		,cat:'online,top,mobile,hor,new'
	},
	{
		name: 'Мемный Арканойд',
		img: 'https://avatars.mds.yandex.net/get-games/11385414/2a0000018fa9c55931e402a571a0554669d8/cover1',
		href:'https://yandex.ru/games/app/336492'
    ,cat:'online,top,mobile,new'
	},
	{
		name: 'Я че Емеля?',
		img: 'https://avatars.mds.yandex.net/get-games/1881371/2a000001900befb92eccf93716ec93ff298c/cover1',
		href:'https://yandex.ru/games/app/348141'
    ,cat:'online,pop,mobile,new'
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
		name:'Анекдоты',
		img: 'https://avatars.mds.yandex.net/get-games/2977039/2a0000018fc04b5efb72c00fe069252b8e09/cover1',
		href: 'https://yandex.ru/games/app/344311',
		cat:'online,mobile,new,trash'
	},
	{
		name:'Летающая Ванна',
		img: 'https://avatars.mds.yandex.net/get-games/1892995/2a0000018fbf41d4fb73c285bd8e9b5bc2cf/cover1',
		href: 'https://yandex.ru/games/app/344134',
		cat:'online,mobile,new,trash,asset'
	},
	{
		name:'В Конце Туннеля',
		img: 'https://avatars.mds.yandex.net/get-games/10152950/2a0000018fec4922eaeefe2a8e07bfeb19ff/cover1',
		href: 'https://yandex.ru/games/app/344134',
		cat:'online,mobile,new,asset'
	},
	{
		name:'Стикермены Батл Арена',
		img: 'https://avatars.mds.yandex.net/get-games/11385414/2a0000018f7d45fe8bc21f0eff34d801b189/cover1',
		href: 'https://yandex.ru/games/app/346396',
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
		img: 'png/at.png',
		href: 'https://mini.vkplay.ru/play/game/angry_toilets/',
		cat:'online,top,pop,mobile'
	},
	{
		name: "Злые Наггетсы",
		img: 'https://avatars.mds.yandex.net/get-games/12797757/2a0000018fa0ed8ff48de5b7ee9d610ae7fe/cover1',
		href: 'https://yandex.ru/games/app/283371',
		cat:'online,top,pop,mobile'
	},
	{
		name : 'Виртуальная Машина',
		img: 'https://avatars.mds.yandex.net/get-games/1890793/2a0000018ecc1863f42658c38b259b85b1f3/cover1',
		href: 'https://yandex.ru/games/app/313152',
		cat:'online,apps,mobile'
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
		href: 'https://www.rustore.ru/catalog/app/com.terminator1998.ninja',
		cat:'online,pop,mobile'
	},
	{
		name: 'Кото-мешалка слияние котиков',
		img:'https://avatars.mds.yandex.net/get-games/1890793/2a0000019000ef6de278ff345cc898626499/cover1',
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
		name:'Стикер Побег от Санитаров',
		img: 'https://avatars.mds.yandex.net/get-games/12797757/2a0000018f7118378950687db4ee2aaada2f/cover1',
		href:'https://yandex.ru/games/app/339173',
		cat: 'online,pop,mobile,top'
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
		name: 'Постройка Города Мечты',
		img: 'https://avatars.mds.yandex.net/get-games/1890793/2a0000018f5353a980b26e0229ed85c804d0/cover1',
		href: 'https://yandex.ru/games/app/337339',
		cat: 'online,pop,mobile,top'
	},
	{
		name: 'Наггетсы На Паутине',
		img: 'https://avatars.mds.yandex.net/get-games/10152950/2a0000018f94ec37ec2e96c7168a033a034b/cover1',
		href: 'https://yandex.ru/games/app/341959',
		cat: 'new,online,pop,mobile,top'
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
		name : 'Глобальный GTA Тест',
		img: 'https://avatars.mds.yandex.net/get-games/6238841/2a0000018bbcedecc582e00f9bb083621504/cover1',
		href: 'https://yandex.ru/games/app/269912?lang=ru',
		cat:'online,top,pop,mobile,test'
	},
  {
    name:'Лови шарики по цвету',
    img: 'png/bl.png',
    href:'noads/balls/index.html',
    cat: 'online,pop,noads'
  },
  {
		name: 'Прокати девушку по кругу',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018d783605bed140d65f545427cbe3/cover1',
		href: 'noads/Race/index.html',
		cat:'online,pop,noads'
	},  
  {
    name:'Майнкрафт тест и пазлы',
    img: 'https://avatars.mds.yandex.net/get-games/1881364/2a0000018cb60e5c0e522d2862e852a389aa/cover1',
    href:'noads/test/index.html',
    cat: 'online,top,pop,noads,test'
  },
  {
    name:'Симулятор панды',
    img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018d2741033702edf4f08f04d4e31b/cover1',
    href:'noads/panda/index.html',
    cat: 'online,pop,noads'
  },
  {
		name: 'Слаймы',
		img:'https://avatars.mds.yandex.net/get-games/10152950/2a0000018d637b038fe22e723f62b3c00d9b/cover1',
		href: 'noads/slime/index.html',
		cat:'online,noads,pop'
	},
  {
		name: 'Cимулятор Космонавта',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a0000018d2b45ef729356467a86cacc11f6/cover1',
		href: 'noads/sp/index.html',
		cat:'online,pop,mobile,noads'
	},
	{
    name:'Симулятор Жизни',
    img: 'https://avatars.mds.yandex.net/get-games/1890793/2a0000018f3c9a9d60b4d093523b79681338/cover1',
    href:'https://yandex.ru/games/app/335178',
    cat: 'online,pop,mobile,top'
  },
	{
    name:'Пасьянс 2048',
    img: 'https://avatars.mds.yandex.net/get-games/12797757/2a0000018f4cf921f41844e12b3bf9871a58/cover1',
    href:'https://yandex.ru/games/app/336906',
    cat: 'online,pop,mobile'
  },  
  {
		name: 'Клади дорогу',
		img: 'https://avatars.mds.yandex.net/get-games/11385414/2a0000018d3033b6310c92233f40149199fb/cover1',
		href: 'noads/car/index.html',
		cat:'online,pop,mobile,noads'
	},
]
