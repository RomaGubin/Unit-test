import lifeBar from "../src/life_bar.js";

test('life bar', () => {
  const list = 
    {
      name:'Маг',
      health: 90,
    }
  const result = lifeBar(list);
  expect(result).toBe('Маг healthy');
});

test.each([
  ['Маг', 90, 'Маг healthy'],
  ['Эльф', 14, 'Эльф critical'],
  ['Гном', 43, 'Гном wounded'],
])
('testing lifeBar function with %n name and %i health', (name, health, life) => {
  const result = lifeBar({name, health});
  expect(result).toBe(life);
});