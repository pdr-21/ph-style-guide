export const agentImages = [
  'https://i.imgur.com/w3dC1gP.png',
  'https://i.imgur.com/hPjltPi.png',
  'https://i.imgur.com/ZVTe6X9.png',
  'https://i.imgur.com/YeGxKkW.png',
  'https://i.imgur.com/KzPQcfk.png',
  'https://i.imgur.com/k5JOYky.png',
  'https://i.imgur.com/VhmSJ1v.png',
  'https://i.imgur.com/gKwQixu.png',
  'https://i.imgur.com/3ittPka.png',
  'https://i.imgur.com/9K19SpJ.png',
  'https://i.imgur.com/4vbq8IS.png'
];

// Helper function to get a random agent image
export const getRandomAgentImage = () => {
  return agentImages[Math.floor(Math.random() * agentImages.length)];
};

// Helper function to get agent image by index
export const getAgentImageByIndex = (index: number) => {
  return agentImages[index % agentImages.length];
};