import images from "./images";
const food = {
    breakfast: [
        {
        name: "Breakfast for 3 Person",
        arabic_name: "فطور لـ 3 أشخاص",
        description:
            "Chicken fajita crepe - pepperoni pizza - fried eggs - cheese plate - labneh - vegetable plate - pancake with chocolate - bread - tea for 3 people",
        price: "25000",
        image: images.breakfast_for_3_person,
    },
    {
        name: "Breakfast for One Person",
        arabic_name: "فطور لشخص واحد",

        description:
            "Choose a dish from the following: Museo crepe | Madam Crepe | Cheese Crepe | Chicken Fajita Crepe | feta cheese crepe - Fried eggs - small vegetable plate - bread - tea",
        price: "10000",
        image: images.breakfast_for_one_person,
    },
    {
        name: "Breakfast for 5 Person",
        arabic_name: "فطور لخمس اشخاص",
        description:
            "Honey-labneh-pepperoni pizza-egg-stuffed with meat-blueberry jam-strawberry jam-pancake with chocolate-egg and mortadella-guimar-vegetables-samon-tea-molasses-butter-shallal cheese-hummus with tahini",
        price: "50000",
        image:
            images.breakfast_for_5_person

    }],

    salt_crepe: [
        {
        name: "Chicken Wrap",
        arabic_name: "راب الدجاج",

        description: "chicken wrap",
        price: "8000",
        image:
            images.chicken_wrap

    },
    {
        name: "Chicken Caesar",
        arabic_name: "سيزر بالدجاج",

        description:
            "Chicken and Edam cheese, garnished with lettuce and toasted toast and served with Caesar dressing",
        price: "8000",
        image:
            images.chicken_caesar

    }],

    quesadilla: [{
        name: "Chicken",
        arabic_name: "الدجاج",

        description: "Mixed cheeses, spinach, fried onions, oregano and mayonnaise",
        price: "9000",
        image:
            images.chicken

    },
    {
        name: "Smoked Turkey and Cheese",
        arabic_name: "الحبش المدخن والجبنة",

        
        description: "Pesto, fried mushrooms, mayonnaise",
        price: "8500",
        image:
            images.smoked_turkey_and_cheese

    },],

    tortilla_pizza: [{

        name: "Margarita",
        arabic_name: "مارغريتا",
        description:
            "Tortilla bread covered with mozzarella cheese, parmesan cheese and tomato sauce",
        price: "7500",
        image:
            images.margarita

    },
    {
        name: "Pepperoni",
        arabic_name: "الببيروني",

        description:
            "Tortilla bread covered with pepperoni, tomato sauce, mozzarella cheese and parmesan",
        price: "8500",
        image:
            images.pepperoni

    },
    {
        name: "Vegetables",
        arabic_name: "خضروات",

        description:
            "Tortilla bread tossed with sweet pepper, corn, sugar syrup, tomato sauce, mozzarella cheese and",
        price: "8500",
        image: images.vegetables


    },
    {
        name: "Turkey and Cheese",
        arabic_name: "راب الدجاج",

        description:
            "Tortilla bread topped with smoked turkey slices, fresh mushrooms, tomato sauce, mozzarella cheese and parmesan cheese, garnished with fresh arugula",
        price: "9500",
        image: images.turkey_and_cheese

    },


    ]



}
export default food