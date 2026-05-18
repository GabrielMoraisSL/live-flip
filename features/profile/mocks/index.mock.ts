import Image from '@/public/teste-publi.jpg';

export const USER_MOCK = {
  username: 'john_doe',
  name: 'John Doe',
  location: 'New York, USA',
  instance: 'regular',
  photoUrl: Image,
  kpis: {
    position: 12,
    points: 1500,
    totalLikes: 300,
    totalAchievements: 20,
  },
  lastUnLockedTrick: { name: 'Treflip', date: '2024-06-01', points: 500 },
};
