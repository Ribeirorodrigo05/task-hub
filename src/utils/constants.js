export const MENU_ITEMS = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    path: '/'
  },
  {
    label: 'Favorites',
    icon: 'pi pi-star',
    path: 'favorites'
  },
  {
    label: 'Categories',
    icon: 'pi pi-bookmark',
    items: [
      {
        label: 'Action',
        path: 'Action'
      },
      {
        label: 'Adventure',
        path: 'Adventure'
      },
      {
        label: 'Comedy',
        path: 'Comedy'
      },
      {
        label: 'Drama',
        path: 'Drama'
      },
      {
        label: 'Fantasy',
        path: 'Fantasy'
      },
      {
        label: 'Horror',
        path: 'Horror'
      },
      {
        label: 'Mystery',
        path: 'Mystery'
      },
      {
        label: 'Romance',
        path: 'Romance'
      },
      {
        label: 'Sci-Fi',
        path: 'Sci-Fi'
      },
      {
        label: 'Thriller',
        path: 'Thriller'
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    badge: 3,
    path: 'Contact'
  }
];
