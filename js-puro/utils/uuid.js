function generatorUUID() {
  let now = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let number = (now + Math.random() * 16) % 16 | 0;
    now = Math.floor(now / 16);

    return (c === 'x' ? number : (number & 0x3 | 0x8)).toString(16);
  });

  return uuid;
}