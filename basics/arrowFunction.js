const getArea = (width, length, unit) => {
  const area = width * length;
  return `${area} ${unit}`
}

const sayGreeting = (greeting = 'Good morning', name = 'student') => {
  return `${greeting}, ${name}`
}