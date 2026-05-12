// list that exports all available years from the OBI starting from 2000
export const yearList = [];
const atualDate = new Date();
for (let i = atualDate.getFullYear() - 1; i >= 2000; i--) {
  yearList.push({ value: String(i), key: String(i) });
}

// list that exports all available phases from the OBI (cf, 0, 1, 2, 3)
export const phaseList = [{ value: "Comp. Fem", key: "cf" }];
for (let i = 0; i < 4; i++) {
  phaseList.push({ value: `Fase ${i}`, key: String(i) });
}

// list that exports all avaible levels from the OBI (j, s, u, 0, 1, 2)
export const levelList = [
  { value: "Nível Júnior", key: "j" },
  { value: "Nível Sênior", key: "s" },
  { value: "Nível Universitário", key: "u" },
];
for (let i = 0; i < 3; i++) {
  levelList.push({ value: `Nível ${i}`, key: String(i) });
}
