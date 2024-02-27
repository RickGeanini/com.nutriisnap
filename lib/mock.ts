// INTERFACES
import { IMeal } from '@/interfaces/meals';

const generateRandomDate = () => {
    const startDate = new Date(2020, 0, 1).getTime();
    const endDate = new Date().getTime();
    const randomDate = new Date(startDate + Math.random() * (endDate - startDate));
    return randomDate.toISOString().split('T')[0];
};

const generateRandomIngredients = () => {
    const ingredientsList = [
        'Flour',
        'Sugar',
        'Eggs',
        'Butter',
        'Milk',
        'Salt',
        'Baking Powder',
        'Vanilla Extract',
        'Chocolate Chips',
        'Bananas',
        'Apples',
        'Blueberries',
        'Strawberries',
        'Oats',
        'Cinnamon',
        'Honey',
        'Yogurt',
        'Nuts',
        'Nutella',
        'Peanut Butter',
    ];
    const numIngredients = Math.floor(Math.random() * ingredientsList.length) + 1;
    const ingredients = [];
    for (let i = 0; i < numIngredients; i++) {
        const randomIndex = Math.floor(Math.random() * ingredientsList.length);
        ingredients.push(ingredientsList[randomIndex]);
    }
    return ingredients;
};

const generateRandomName = () => {
    const names = [
        'Cake',
        'Cookies',
        'Brownies',
        'Muffins',
        'Pancakes',
        'Waffles',
        'Smoothie',
        'Granola Bars',
        'Salad',
        'Soup',
        'Sandwich',
        'Stir-Fry',
        'Pasta',
        'Pizza',
        'Tacos',
        'Burger',
        'Sushi',
        'Curry',
        'Risotto',
        'Quiche',
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
};

export const generateRandomMealItem = (): IMeal => {
    const randomCalories = Math.floor(Math.random() * 1000) + 1;
    const randomImage = '/images/background.jpg';
    const randomIsHealthy = Math.random() < 0.5; // 50% chance of being healthy

    return {
        created_at: generateRandomDate(),
        file_name: generateRandomName(),
        ingredients: generateRandomIngredients(),
        is_healthy: randomIsHealthy,
        name: generateRandomName(),
        picture_base_64: randomImage,
        total_calories: randomCalories,
        updated_at: generateRandomDate(),
    };
};
