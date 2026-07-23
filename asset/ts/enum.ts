enum TColors {
  Red = "red",
  Green = "green",
}

interface TeeShirt {
  size: number;
  color: TColors;
}

const order1: TeeShirt = {
  size: 42,
  color: TColors.Green,
};
