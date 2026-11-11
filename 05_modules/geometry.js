export function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    throw new RangeError("Dimensions must not be negative");
  }
  return width * height;
}

export const shapeName = "rectangle";
