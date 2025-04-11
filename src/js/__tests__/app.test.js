
import {HealthHero} from '../app';

test ('check HealthHero', () => {
  
  const expected = {
    name: 'Петр Первый',
    health: 99,
    status: "healthy"
  };
  expect(new HealthHero('Петр Первый', 99)).toEqual(expected);
})

test ('check function healthStatusCheck', () =>{
  const heroHealth1 = new HealthHero('Петр Первый', 40);
  const st = heroHealth1.healthStatusCheck();
  expect(st).toBe('wounded');
})

test ('check function healthStatusCheck2', () =>{
  const heroHealth1 = new HealthHero('Петр Первый', 9);
  const st = heroHealth1.healthStatusCheck();
  expect(st).toBe('critical');
})