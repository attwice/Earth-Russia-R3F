import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraLight } from "./CameraLight";
import { Earth } from "./Earth";

export type Coord = {
  title: string;
  lat: number;
  lon: number;
  hash?: string;
  icon?: string;
  link?: string;
  location?: string;
  description?: string;
};

const coords: Coord[] = [
  {
    hash: "#sabetta",
    title: "Mammoet",
    location: "Сабетта, Россия",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 71.2499989,
    lon: 72.0852686,
    description:
      "Большие ангары для обслуживания на территории с экстремальными погодными условиями",
    link: "/portfolio/mammut-rus/"
  },
  {
    hash: "#ssk",
    title: "Сибирская Сервисная Компания",
    location: "Новопортовское месторождение, Россия",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 67.8147238,
    lon: 72.5538405,
    description: "Пневмоангары для хранения техники и грузов",
    link: "/portfolio/sibirskaya-servisnaya-kompaniya/"
  },
  {
    hash: "#Liebherr",
    title: "Liebherr",
    description:
      "Надувной ангар для ремонта портовых кранов Liebherr LHM в Красноярском крае",
    location: "Дудинка",
    link: "/portfolio/liebherr/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 69.4093474,
    lon: 86.1673476
  },
  {
    hash: "#nn",
    title: "Норильский Никель",
    description: "Надувной гараж. Стоянка, обслуживание и ремонт самосвалов",
    location: "Норильск",
    link: "/portfolio/norilskij-nikel/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 69.4274176,
    lon: 87.5391578
  },
  {
    hash: "#nd",
    title: "Nabors Drilling",
    description:
      "Cварочный цех для буровой установки. Надувной ангар используется для проведения сварочных работ и дефектоскопии бурового оборудования",
    location: "Усинск",
    link: "/portfolio/nabors/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 66.0027799,
    lon: 57.3294949
  },
  {
    hash: "#py",
    title: "Парк Яхрома",
    description:
      "Надувной павильон. Организация общественного питания, новогодних корпоративов и банкетов на горнолыжной базе отдыха",
    location: "Дмитров",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 56.2680174,
    lon: 37.4745233,
    link: "/portfolio/restoran-coca-cola/"
  },
  {
    hash: "#usfam",
    title: "Усадьба Фамилия",
    description:
      "Быстровозводимый спортивный зал, где можно играть в футбол, теннис, баскетбол и в другие виды подвижных игр",
    location: "Пластуновская",
    link: "/portfolio/usadba-familiya/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 45.289907,
    lon: 39.3107868
  },
  {
    hash: "#vertros",
    title: "Вертолеты России",
    description:
      "Легко переносимый вертолетный ангар для проведения краткосрочных ремонтных работ",
    location: "Ангар переносится по всему миру",
    link: "/portfolio/vertolety-rossii/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 56.4902767,
    lon: 37.9019703
  },
  {
    hash: "#SSGPO",
    title: "SSGPO",
    description: "Надувные ангары с высокими пролетам для карьерных самосвалов",
    location: "п. Качар, Костанайская область, Казахстан",
    link: "/portfolio/ssgpo/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 53.3775249,
    lon: 62.8473742
  },
  {
    hash: "#Halliburton",
    title: "Halliburton",
    description:
      "В надувном быстровозводимом пневмоангаре ведется производство сухих смесей для буровых растворов",
    location: "Россия",
    link: "/portfolio/halliburton/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 63.2116091,
    lon: 85.5976565
  },
  {
    hash: "#Sarens",
    title: "Sarens",
    description:
      "Мобильные здания для стоянки, обслуживания и ремонта самоходных монтажных тележек СПМТ",
    location: "Месторождение Тенгиз, Казахстан",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 46.1484308,
    lon: 53.3890467,
    link: "/portfolio/sarens/"
  },
  {
    hash: "#ink",
    title: "Иркутская нефтяная компания",
    description: "Быстровозводимое здание для бетонно-растворного узла БР",
    location: "Ярактинское месторождение, Россия",
    link: "/portfolio/irkutskaya-neftyanaya-kompaniya/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 57.5764869,
    lon: 105.8109954
  },
  {
    hash: "#tsk",
    title: "Техстройконтракт",
    description:
      "Надувной ангар для ремонта и обслуживания самосвалов HITACHI EH1700",
    location: "г. Краснокаменск, Забайкальский край, Россия",
    link: "/portfolio/tehstrojkontrakt/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 49.9981423,
    lon: 117.0086963
  },
  {
    hash: "#yy",
    title: "Yamata Yatirim",
    description:
      "Ангары для опасных материалов и оборудования в крупнейшем в мире расширении трубопровода при условиях повышенной влажности",
    location: "г. Свободный, Амурская область, Россия",
    link: "/portfolio/sklad-yamata-yatyrym/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 51.3687841,
    lon: 128.067162
  },
  {
    hash: "#bts",
    title: "BTS Tunelling",
    description:
      "Ангары для опасных материалов и оборудования в крупнейшем в мире расширении трубопровода при условиях повышенной влажности",
    location: "Кузнецовский тоннель, Хабаровский край, Россия",
    link: "/portfolio/bts-tunelling/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 50.1854444,
    lon: 139.0134384
  },
  {
    hash: "#ipkushn",
    title: "ИП Кушнаренко",
    description:
      "Передвижной павильон. Теплое помещение для использования в качестве детского развлекательного центра с аттракционами",
    location: "Южно-Сахалинск, Россия",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 46.960079,
    lon: 142.5907014
  },
  {
    hash: "#avic",
    title: "AVIC International",
    description: "Авиационный ангар. Стоянка, обслуживание и ремонт самолетов",
    location: "Пекин, Китай",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 39.9375346,
    lon: 115.837023
  },
  {
    hash: "#Flight",
    title: "Flight Alaska",
    description:
      "Ангар для технического обслуживания самолетов, спроектированный с учетом требований CAA",
    location: "Бетел, Аляска, США",
    link: "/portfolio/flight-alaska/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 60.7907215,
    lon: -161.933809
  },
  {
    hash: "#iaf",
    title: "Indonesian Air Force",
    description:
      "Временные убежища для передовых оперативных баз ВВС со сроком размещения менее 24 часов",
    location: "Индонезия",
    link: "/portfolio/indonesian-air-force/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: -1.8785136,
    lon: 78.0556148
  },
  {
    hash: "#gazpromneft",
    title: "Газпром нефть",
    description:
      "Быстровозводимое офисное помещение для работы на удаленных территориях",
    location: "Мессояхское месторождение, ЯНАО, Россия",
    link: "/portfolio/gazprom-neft/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 68.9577126,
    lon: 79.8355434
  },
  {
    hash: "#smt",
    title: "СМТ",
    description:
      "Спортивный зал используется для игр по волейболу, мини футболу и теннису",
    location: "Московская область, Россия",
    link: "/portfolio/smt/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 55.7799,
    lon: 37.6388182
  },
  {
    hash: "#delf",
    title: "Дельфинарий",
    description:
      "Быстровозводимый пневмоангар для организации цирковых представлений",
    location: "Россия",
    link: "/portfolio/delfinarij/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 52.8894592,
    lon: 42.8436663
  },
  {
    hash: "#chili",
    title: "ВВС Чили",
    description:
      "Портативный центр технического обслуживания и исследований, спроектированный для самой пересеченной местности в мире - Антарктиды. Компактный, легкий и раскладывающийся непосредственно на лед",
    location: "Сантьяго, Чили",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: -33.4724728,
    lon: -70.9100195,
    link: "/portfolio/vvs-chili/"
  },
  {
    hash: "#akts",
    title: "АкТрансСервис",
    description: "Пневмоангары для теплых автостоянок и ремонтных мастерских",
    location: "Верхнечонское месторождение, Иркутская область, Россия",
    link: "/portfolio/aktransservis/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 60.8979739,
    lon: 103.0280929
  },
  {
    hash: "#peri",
    title: "PERI",
    description: "Ангар для ремонта техники и хранения строительных материалов",
    location: "г. Ногинск, Московская область, Россия",
    link: "/portfolio/peri/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 55.8770976,
    lon: 38.3827666
  },
  {
    hash: "#y-club",
    title: "Яхт-Клуб",
    description:
      "Надувной ангар для хранения и технического обслуживания яхт и катеров",
    location: "г. Нижний Новгород, Россия",
    link: "/portfolio/yaht-klub/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 56.2917013,
    lon: 43.6459918
  },
  {
    hash: "#TeknRus",
    title: "Текнимонт Руссия",
    description:
      "Надувной спортзал, где можно проводить игры по минифутболу, волейболу, баскетболу и теннису",
    location: "г. Свободный, Амурская область, Россия",
    link: "/portfolio/teknimont-russiya/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 51.3687841,
    lon: 128.067162
  },
  {
    hash: "#FerronordikM",
    title: "Ферронордик Машины",
    description:
      "Пневмоангар используется для сервисного обслуживания и ремонта тяжелой техники в условиях Крайнего Севера",
    location: "Крайний Север, Россия",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 62.608833,
    lon: 109.7083531,
    link: "/portfolio/ferronordik-mashiny/"
  },
  {
    hash: "#NorNikel",
    title: "Норильский Никель",
    description:
      "Надувной ангар для ремонта и обслуживания карьерных самосвалов Caterpillar",
    location: "г. Норильск, Красноярский край, Россия",
    link: "/portfolio/norilskij-nikel-2/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 69.3844606,
    lon: 88.0536293
  },
  {
    hash: "#MantrakV",
    title: "Мантрак Восток",
    description:
      "Надувной ремонтный бокс для обслуживания карьерных самосвалов Caterpillar 777",
    location: "г. Воркута, Республика Коми, Россия",
    link: "/portfolio/mantrak-vostok/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 67.5016369,
    lon: 63.9550957
  },
  {
    hash: "#Alers",
    title: "Алерс Рус",
    description:
      "Мобильный надувной склад для хранения медицинского оборудования стоимостью около 40 миллиардов рублей",
    location: "Санкт-Петербург, Россия",
    link: "/portfolio/alers-rus/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 59.7038187,
    lon: 30.2950948
  },
  {
    hash: "#Novatek",
    title: "Новатэк",
    description: "Надувной павильон для организации обеденного зала",
    location: "Пуровский район, Ямало-Ненецкий автономный округ, Россия",
    link: "/portfolio/novatek/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 65.0119986,
    lon: 72.4649687
  },
  {
    hash: "#Chempionat",
    title: "Чемпионат Мира по биатлону",
    description: "Удобное расположение для зрителей на соревнованиях",
    location: "Ханты-Мансийск, Россия",
    link: "/portfolio/chempionat-mira-po-biatlonu/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 61.0163758,
    lon: 69.0342372
  },
  {
    hash: "#RHInd",
    title: "Renaissance Heavy Industries",
    description:
      "Экономичные помещения для проектов, где размер оборудования слишком велик для традиционного складирования",
    location: "Амурская область, Россия",
    link: "/portfolio/renaissance-heavy-industries/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 52.8770878,
    lon: 122.8026764
  },
  {
    hash: "#sandvinik",
    title: "Сандвик Майнинг энд Констракшн",
    description:
      "Надувной ангар с воротами уникальной формы, благодаря которым возможно рационально использовать внутреннее пространство пневмоангара",
    location: "Кемерово, Россия",
    link: "/portfolio/sandvik-majning-end-konstrakshn/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 55.4042374,
    lon: 85.9425094
  },
  {
    hash: "#verhnechonskNG",
    title: "Верхнечонскнефтегаз",
    description:
      "Надувной ангар-склад разделяется на 3 независимых модуля для загрузки крупногабаритного оборудования",
    location: "Катангский район, Иркутская обл., Россия",
    link: "/portfolio/verhnechonskneftegaz/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 60.903337,
    lon: 103.0285287
  },
  {
    hash: "#INK-stroyNG",
    title: "ИНК-СтройНефтеГаз",
    description:
      "Ангары для размещения автоматических трубосварочных комплексов",
    location: "Усть-Куть, Ирскутская область, Россия",
    link: "/portfolio/ink-strojneftegaz/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 56.788551,
    lon: 105.6463204
  },
  {
    hash: "#mchsrossii",
    title: "Авиационно-спасательный центр МЧС России",
    description: "Ангар для ремонта самолетов и вертолетов",
    location: "г. Хабаровск, Россия",
    link: "/portfolio/aviatsionno-spasatelnyj-tsentr-mchs-rossii/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 48.4649872,
    lon: 134.973345
  },
  {
    hash: "#energomikss",
    title: "Энергомикс",
    description: "Авиационный ангар для стоянки и обслуживания вертолетов",
    location: "Аэропорт Храброво, Калининград, Россия",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 54.8824281,
    lon: 20.5834253,
    link: "/portfolio/energomiks/"
  },
  {
    hash: "#MTRussia",
    title: "МТ Руссия",
    description: "Быстровозводимый склад для хранения оборудования",
    location: "Амурский ГПЗ, Амурская область, Россия",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 51.5355143,
    lon: 128.1833123,
    link: "/portfolio/mt-russiya/"
  },
  {
    hash: "#JBRoche",
    title: "JB Roche",
    description:
      "Ангар спроектирован для размещения стратосферного гелиевого аэростата для исследования воздушных масс и сбора проб воздуха. Конструкция выполнена из высокопрочного морозостойкого износостойкого материала",
    location: "США",
    link: "/portfolio/jb-roche/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 37.2756537,
    lon: -104.6561154
  },
  {
    hash: "#rde",
    title: "Rizzani de Eccher",
    description:
      "В ангаре полезной площадью 700 м² разместился цех по покраске металлоконструкций антикоррозийными и огнезащитными составамимосква",
    location: "Москва",
    link: "/portfolio/rizzani-de-eccher/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 55.874961,
    lon: 7.500555
  },
  {
    hash: "#spetsneftetrans",
    title: "СпецНефтеТранс",
    description: "Склад для хранения оборудования",
    location: "г. Норильск, Красноярский край",
    link: "/portfolio/spetsneftetrans/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 69.320445,
    lon: 88.278445
  },
  {
    hash: "#Nor_complex",
    title: "Норильский обеспечивающий комплекс",
    description:
      "Передвижные ремонтные боксы для размещения карьерных буровых станков",
    location: "Рудник Комсомольский, Норильск, Россия",
    link: "/portfolio/norilskij-obespechivayushhij-kompleks/",
    icon: "https://angarstroy.com/wp-content/uploads/2019/06/logo_small.png",
    lat: 69.4208616,
    lon: 88.0339978
  }
];

export function App() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <p>Spinner</p>
        </div>
      }
    >
      <Canvas dpr={[1, 1]}>
        <color attach="background" args={[0x111111]} />
        <CameraLight />
        <Earth coords={coords} />
        <OrbitControls
          enablePan={false}
          autoRotateSpeed={0.2}
          autoRotate
          minDistance={1.5}
          maxDistance={3}
        />
      </Canvas>
    </Suspense>
  );
}
