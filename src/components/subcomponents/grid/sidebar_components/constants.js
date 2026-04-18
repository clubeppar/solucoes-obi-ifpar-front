export const yearList = [];
const atualDate = new Date();
for (let i = atualDate.getFullYear() - 1; i >= 2000; i--) {
  yearList.push({ value: String(i), key: String(i) });
}

export const phaseList = [{ value: "Comp. Fem", key: "cf" }];
for (let i = 0; i < 4; i++) {
  phaseList.push({ value: `Fase ${i}`, key: String(i) });
}

export const levelList = [
  { value: "Nível Júnior", key: "j" },
  { value: "Nível Sênior", key: "s" },
  { value: "Nível Universitário", key: "u" },
];
for (let i = 0; i < 3; i++) {
  levelList.push({ value: `Nível ${i}`, key: String(i) });
}
