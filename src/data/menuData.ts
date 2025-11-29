export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Espresso",
    price: 3.5,
    description: "Rich and bold espresso shot made from premium arabica beans. Perfect pick-me-up any time of day.",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    name: "Cappuccino",
    price: 4.5,
    description: "Perfectly balanced espresso with steamed milk and a thick layer of foam. Topped with cocoa powder.",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    name: "Caramel Latte",
    price: 5.0,
    description: "Smooth espresso with steamed milk and sweet caramel syrup. Finished with whipped cream and caramel drizzle.",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1599750389196-85c58cd5605b?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    name: "Avocado Toast",
    price: 8.5,
    description: "Fresh avocado mash on toasted sourdough bread, topped with cherry tomatoes, feta cheese, and poached egg.",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    name: "Blueberry Pancakes",
    price: 9.0,
    description: "Fluffy pancakes loaded with fresh blueberries. Served with maple syrup and butter.",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    name: "Croissant Sandwich",
    price: 7.5,
    description: "Buttery croissant filled with ham, cheese, lettuce, and tomato. Served with a side salad.",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
  },
  {
    id: "7",
    name: "Caesar Salad",
    price: 10.0,
    description: "Crisp romaine lettuce with parmesan cheese, croutons, and creamy Caesar dressing. Add grilled chicken for $3 extra.",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
  },
  {
    id: "8",
    name: "Chocolate Cake",
    price: 6.0,
    description: "Rich, moist chocolate cake with layers of chocolate ganache. Served with vanilla ice cream.",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
  },
  {
    id: "9",
    name: "Strawberry Smoothie",
    price: 5.5,
    description: "Fresh strawberries blended with banana, yogurt, and honey. Refreshing and healthy!",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
  },
  {
    id: "10",
    name: "Iced Mocha",
    price: 5.0,
    description: "Chilled espresso with chocolate syrup and cold milk. Topped with whipped cream and chocolate shavings.",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop",
  },
  {
    id: "11",
    name: "Club Sandwich",
    price: 11.0,
    description: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo. Served with french fries.",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
  },
  {
    id: "12",
    name: "Tiramisu",
    price: 6.5,
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream. Dusted with cocoa.",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
  },
];

// Function to get Food of the Day based on current day
export const getFoodOfTheDay = (): MenuItem => {
  const dayIndex = new Date().getDay();
  return menuItems[dayIndex % menuItems.length];
};
