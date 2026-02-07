export const getTodaysMenu = async (location, mealType) => {
  // Mock data - replace with real Firebase later
  const menus = {
    'Haverford DC': {
      breakfast: [
        { name: 'Pancakes', rating: 4.2, allergens: ['gluten', 'dairy'], isLocal: true },
        { name: 'Scrambled Eggs', rating: 3.8, allergens: ['eggs'], isLocal: false }
      ],
      lunch: [
        { name: 'Pizza Station', rating: 4.5, allergens: ['gluten', 'dairy'], isLocal: false },
        { name: 'Stir Fry Bar', rating: 4.7, allergens: ['soy'], isLocal: true }
      ],
      dinner: [
        { name: 'Pasta Bar', rating: 4.3, allergens: ['gluten'], isLocal: false },
        { name: 'Dessert Bar', rating: 4.9, allergens: ['dairy', 'gluten'], isLocal: false }
      ]
    },
    'Erdman': {
      lunch: [
        { name: 'Salad Bar', rating: 4.1, allergens: [], isLocal: true },
        { name: 'Oily Pizza', rating: 2.1, allergens: ['gluten', 'dairy'], isLocal: false }
      ]
    },
    'New Dorm': {
      dinner: [
        { name: 'Oily Pizza', rating: 2.3, allergens: ['gluten', 'dairy'], isLocal: false }
      ]
    }
  };
  
  return menus[location]?.[mealType] || [];
};

export const getLineStatus = async (location) => {
  // Mock data - returns random status
  const statuses = ['none', 'short', 'long'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

export const getUpcomingEvents = async () => {
  return [
    { id: 1, title: 'Lunar New Year Feast', date: '2026-02-15', location: 'Haverford DC', description: 'Celebrate with authentic Chinese cuisine!' },
    { id: 2, title: 'Sustainable Food Week', date: '2026-02-20', location: 'All locations', description: '100% locally sourced menu all week' },
    { id: 3, title: 'Dessert Bar Extravaganza', date: '2026-02-22', location: 'Erdman', description: 'Triple the desserts, triple the fun' }
  ];
};
EOF
