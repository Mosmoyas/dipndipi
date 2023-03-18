import images from "./images";
const drinks =
{
  hotchocolate: [
    {
      name: "Hot Chocolate",
      arabic_name: 'الشوكولاتة الساخنة',
      price: 6000, description: "",
      image: images.hot_chocolate,
    },
  ],

  mighty_milkshake: [
    {
      name: "strawberry",
      arabic_name: 'مايتي فراولة',
      price: 7000, description: "",
      image: images.strawberry,
    },
    {
      name: "chocolate freezy creamy",
      arabic_name: 'مايتي فريزي الشوكولاتة',
      price: 7500, description: "",
      image: images.chocolate_freezy_creamy,
    },
    {
      name: "cookies n cream",
      arabic_name: 'مايتي كوكيز اند كريم',
      price: 7000, description: "",
      image: images.cookies_n_cream,
    },
    {
      name: "smores toasted",
      arabic_name: 'مايتي سمورز',
      price: 7000, description: "",
      image: images.smores_toasted,
    },
    {
      name: "speculoos milk shake",
      arabic_name: 'ميلك شيك السبيكولوس',
      price: 7500, description: "",
      image: images.speculoos_milk_shake,
    },
  ],
  lattes: [
    {
      name: "Popcorn latte",
      arabic_name: 'بوب كورن لاتيه',
      price: 5000, description: "",
      image: images.popcorn_latte,
    },
    {
      name: "Spanish latte",
      arabic_name: 'سبانش لاتيه',
      price: 5500, description: "",
      image: images.spanish_latte,
    },
    {
      name: "creme brulee latte",
      arabic_name: 'كريم بروليه لاتيه',
      price: 5000, description: "",
      image: images.creme_brulee_latte,
    },
    {
      name: "Oriental latte",
      arabic_name: 'أورينتال لاتيه',
      price: 5000, description: "",
      image: images.oriental_latte,
    },
    {
      name: "speculoos latte",
      arabic_name: 'سبيكولوس لاتيه',
      price: 5000, description: "",
      image: images.speculoos_latte,
    },
    {
      name: "classic latte",
      arabic_name: 'كلاسيك لاتيه',
      price: 4500, description: "",
      image: images.classic_latte,
    },
  ],

  Coffeeontherocks: [
    {
      name: "rose latte",
      arabic_name: 'لاتيه الورد',
      price: 5500, description: "",
      image: images.rose_latte,
    },
    {
      name: "iced coffee mocha",
      arabic_name: 'موكا قهوة مثلجة',
      price: 5500, description: "",
      image: images.iced_coffee_mocha,
    },
    {
      name: "double coffee vanilla latte",
      arabic_name: 'لاتيه الفانيلا مع القهوة',
      price: 5500, description: "",
      image: images.double_coffee_vanilla_latte,
    },
    {
      name: "iced Spanish latte",
      arabic_name: 'سبانش لاتيه',
      price: 5500, description: "",
      image: images.iced_Spanish_latte,
    },
    {
      name: "iced cappuccino",
      arabic_name: 'كابتشينو مثلج',
      price: 5500, description: "",
      image: images.iced_cappuccino,
    },
    {
      name: "caramel macchiato latte",
      arabic_name: 'كراميل ماكياتو',
      price: 5000, description: "",
      image: images.caramel_macchiato_latte,
    },
  ],

  mojitos: [
    {
      name: "classic mojitos",
      arabic_name: 'كلاسيك',
      price: 4500, description: "",
      image: images.classic_mojitos,
    },
    {
      name: "passion fruit mojitos",
      arabic_name: "ماراكويا",
      name: 5.500, description: "",
      image: images.passion_fruit_mojitos,
    },
    {
      name: "mixed berries mojitos",
      arabic_name: "توت",
      name: 5.500,
      description: "",
      image: images.mixed_berries_mojitos,
    },
    {
      name: "strawberry mojitos",
      arabic_name: "فراولة",
      name: 5.500,
      description: "",
      image: images.strawberry_mojitos,
    },
    {
      name: "peach mojitos",
      price: 5500, arabic_name: "دراق",
      name: 5.500, description: "",
      image: images.peach_mojitos,
    },
    {
      name: "orange mojitos",
      arabic_name: "برتقال",
      name: 5.500,
      description: "",
      image: images.orange_mojitos,
    },
  ],
  Milkshakes: [
    {
      name: "chocolate freezy",
      arabic_name: "ميلك شيكس",
      name: 5.000, description: "",
      image: images.chocolate_freezy,
    },
    {
      name: "cookies n cream Milkshakes",
      arabic_name: "كوكيز ان كريم",
      name: 5.000,
      description: "",
      image: images.cookies_n_cream_milkshakes,
    },
    {
      name: "strawberry milkshakes",
      arabic_name: "فراولة",
      name: 5.000,
      description: "",
      image: images.strawberry_milkshakes,
    },
  ],
  beverages: [
    {
      name: "espresso solo or lungo",
      arabic_name: "إسبريسو سولو أو لونغو",
      name: 3.000,
      description: "",
      image: images.espresso_solo_or_lungo,
    },
    {
      name: "espresso doppio",
      arabic_name: "إسبريسو دوبيو",
      name: 4.500,
      description: "",
      image: images.espresso_doppio,
    },
    {
      name: "cafe Americano",
      arabic_name: "كافيه أمريكانو",
      name: 4.500,
      description: "",
      image: images.cafe_americano,
    },
    {
      name: "cappuccino",
      arabic_name: "كابتشينو",
      name: 5.500,
      description: "",
      image: images.cappuccino,
    },
    {
      name: "caramel macchiato",
      arabic_name: "كراميل ماكياتو",
      name: 5.000, description: "",
      image: images.caramel_macchiato,
    },
    {
      name: "Turkish coffe",
      arabic_name: "قهوة تركية",
      name: 3.500, description: "",
      image: images.turkish_coffe,
    },
    {
      name: "tea", arabic_name: "شاي",
      name: 2.500, description: "", image: images.tea
    },
    {
      name: "iced tea", arabic_name: "شاي مثلج",
      name: 4.000, description: "", image: images.iced_tea
    },
    {
      name: "soft drink",
      arabic_name: "مشروبات غازية",
      name: 1.000,
      description: "",
      image: images.soft_drink,
    },
    {
      name: "mineral water",
      arabic_name: "مياه معدنية",
      name: 0.500,
      description: "",
      image: images.mineral_water,
    },
    {
      name: "energy drink",
      arabic_name: "مشروبات طاقة",
      name: 4.000,
      description: "",
      image: images.energy_drink,
    },
  ],

  fresh_juices: [
    {
      name: "pomegranate juice",
      arabic_name: "عصير الرمان", price: 5.500,
      description: "",
      image: images.pomegranate_juice,
    },
    {
      name: "melon juice",
      arabic_name: "عصير البطيخ", price: 5.500,
      description: "",
      image: images.melon_juice,
    },
    {
      name: "orange juice",
      arabic_name: "عصير البرتقال", price: 5.500,
      description: "",
      image: images.orange_juice,
    },
    {
      name: "Lemon & Mint",
      arabic_name: "ليمون ونعنع", price: 5000,
      description: "",
      image: images.lemon_mint,
    },
  ],
}



export default drinks