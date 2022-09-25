export default function destructuring(character) {
  const arrResult = JSON.parse(JSON.stringify(character.special));
  for (let i = 0; i < arrResult.length; i += 1) {
    if (!('description' in arrResult[i])) {
      arrResult[i].description = 'Описание недоступно';
    }
  }
  return arrResult;
}
