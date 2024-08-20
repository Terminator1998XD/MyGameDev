const games = [
	{
		name: 'Симулятор пранкера',
		img : 'https://avatars.mds.yandex.net/get-games/6238841/2a0000018ee78e64289bc8588422c7d6bd43/cover1',
		href: 'https://yandex.ru/games/app/283060'
    ,cat:'online,top'
	},
	{
		name: 'Шметрис на двоих',
		img : 'https://avatars.mds.yandex.net/get-games/13012056/2a0000018ee6d2ddd76769f22cbc50e237ce/cover1',
		href: 'https://yandex.ru/games/app/364607'
		,cat:'online,top,mobile,pop'
	},
	{
		name: 'Ниндзя Симулятор',
		img : 'https://avatars.mds.yandex.net/get-games/1881371/2a000001914c3e59e1ce886a740cf3f9029f/cover1',
		href: 'https://yandex.ru/games/app/364916'
		,cat:'online,top,mobile,pop,new'
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
		href: 'https://yandex.ru/games/app/297027'
    ,cat:'online,pop,mobile'
	},
	{
		name: 'Зума Мини',
		img : 'https://avatars.mds.yandex.net/get-games/6238841/2a00000190a5b2327d889be7177a3ee431e5/cover1',
		href: 'https://yandex.ru/games/app/356536',
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
		name:'Стикермены Батл Арена',
		img: 'https://avatars.mds.yandex.net/get-games/11385414/2a0000018f7d45fe8bc21f0eff34d801b189/cover1',
		href: 'https://yandex.ru/games/app/346396',
		mobile: true,
		cat:'online,pop,mobile'
	},
	{
		name: 'Остров на прокачку',
		img : 'https://avatars.mds.yandex.net/get-games/1892995/2a0000018e7abb99051859a7e0d61f3ab09a/cover1',
		href: 'https://yandex.ru/games/app/297810',
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
		name: "Оптические иллюзии",
		href: "https://yandex.ru/games/app/327905",
		img: 'https://avatars.mds.yandex.net/get-games/13012056/2a0000018ecd6766d50bbca8cc6e7c066870/cover1',
    cat:'online,pop,mobile'
	},
	{
		name: "Музыкальный Шар",
		href: "https://yandex.ru/games/app/334912",
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
		href: 'https://yandex.ru/games/app/296816',
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
    href: 'https://yandex.ru/games/app/336350',
    cat: 'online,pop,mobile,top'
  },
	{
		name: 'ChatGPT Побег',
		img: 'https://avatars.mds.yandex.net/get-games/6238841/2a0000018db7da5e7b27e2e0c6c14157ee95/cover1',
		href: 'https://yandex.ru/games/app/294018',
		cat:'online,pop,mobile'
	},
	{
		name: 'Побег от огня Квадробера',
		img: 'https://avatars.mds.yandex.net/get-games/1892995/2a00000190a0a15133105f493b04a2a213c2/cover1',
		href: 'https://yandex.ru/games/app/356390',
		cat:'online,pop,mobile,new'
	},
	{
		name: 'Фонк - Веселый Паркурист',
		img: 'https://avatars.mds.yandex.net/get-games/1890793/2a00000190aae698b860d272f4d5ef189f0a/cover1',
		href: 'https://yandex.ru/games/app/357220',
		cat:'online,pop,mobile,new'
	},
	{
		name: 'ХОМЯК - Ключи Головоломка',
		img: 'https://avatars.mds.yandex.net/get-games/6238841/2a00000190de48d64639202c5a048df4c40a/cover1',
		href: 'https://yandex.ru/games/app/359617',
		cat:'online,pop,mobile,new'
	},
	{
		name: 'Blum - Симулятор крипто бизнеса',
		img: 'https://avatars.mds.yandex.net/get-games/1881371/2a00000190d476f7f3f4bed9ae0ba18afa13/cover1',
		href: 'https://yandex.ru/games/app/359134',
		cat:'online,pop,mobile,new'
	},
	{
		name: 'Все дойдем до клабика',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a00000190b5a97db7f1b78c77eb52b79969/cover1',
		href: 'https://yandex.ru/games/app/357713',
		cat: 'online,pop,mobile,new'
	},
	{
		name: 'Фонк - Эпичный Дрифт',
		img: 'https://avatars.mds.yandex.net/get-games/11374519/2a000001909c61715482a3f01d9697c90b15/cover1',
		href: 'https://yandex.ru/games/app/356160',
		cat: 'online,pop,mobile,new'
	},
	{
		name: 'Epic Bubble Shooter',
		img: 'https://avatars.mds.yandex.net/get-games/1890793/2a000001909c96c378f0bdc0bea4a7aac2e6/cover1',
		href: 'https://yandex.ru/games/app/356205',
		cat: 'online,pop,mobile,new'
	},
	{
		name: 'Фруктовый Шеф Повар',
		img: 'https://avatars.mds.yandex.net/get-games/1881371/2a00000190e87793b818ac18c8f2165e9f93/cover1',
		href: 'https://yandex.ru/games/app/360201',
		cat: 'online,pop,mobile,new'
	},
	{
		name: 'Хамстер Комбат - Фармилка',
		img: 'https://avatars.mds.yandex.net/get-games/1881364/2a00000190a23fb8a0a994d0a237512212d1/cover1',
		href: 'https://yandex.ru/games/app/356425',
		cat: 'online,pop,mobile,new'
	},
	{
		name: 'Квадроберы слияние Фурри',
		img: 'https://avatars.mds.yandex.net/get-games/1881371/2a00000190a0e94d889be523ca605a7ad11d/cover1',
		href: 'https://yandex.ru/games/app/356389',
		cat: 'online,pop,mobile,new'
	},
	{
		name: 'Двойки Слияние - 2048',
		img: 'https://avatars.mds.yandex.net/get-games/1892995/2a00000190afac3d395b9ec99d7d981148ea/cover1',
		href: 'https://yandex.ru/games/app/357463',
		cat: 'online,pop,mobile,new'
	},
	{
		name: 'Флекс Дэш',
		img: 'https://avatars.mds.yandex.net/get-games/1892995/2a0000018e0f7f96b4c4534be4c528550b30/icon1',
		href: 'https://yandex.ru/games/app/298578',
		cat:'online,pop,mobile'
	},
	{
		name : 'Глобальный GTA Тест',
		img: 'https://avatars.mds.yandex.net/get-games/6238841/2a0000018bbcedecc582e00f9bb083621504/cover1',
		href: 'https://yandex.ru/games/app/269912',
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
