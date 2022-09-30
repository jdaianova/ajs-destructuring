export default function destructuring(char) {
  const resultArr = [];
  for (let i = 0; i < char.special.length; i += 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = char.special[i];
    resultArr.push({
      id, name, icon, description,
    });
  }
  return resultArr;
}
