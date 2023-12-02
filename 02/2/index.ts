export const handler = (input: string): number => {
  const lines = input.split("\n");
  const powers: number[] = [];

  // line example: "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
  for (const line of lines) {
    const roundCubes = line.split(":")[1].trim().split(";");

    const minCubes: Record<string, number> = {};

    for (const roundCube of roundCubes) {
      // example for roundCube string: " 3 blue, 4 red"
      const pickedCubes = roundCube.split(",");

      for (const pickedCube of pickedCubes) {
        // example for pickedCube string: " 3 blue"
        const [numberOfCubes, colorOfCube] = pickedCube.trim().split(" ");

        if (!minCubes[colorOfCube]) {
          minCubes[colorOfCube] = parseInt(numberOfCubes);
          continue;
        }

        if (minCubes[colorOfCube] < parseInt(numberOfCubes)) {
          minCubes[colorOfCube] = parseInt(numberOfCubes);
        }
      }
    }

    let totalPower = 1;
    for (const minCube in minCubes) {
      const minCubeNumber = minCubes[minCube];
      totalPower *= minCubeNumber;
    }
    powers.push(totalPower);
  }

  const sumOfPowers = powers.reduce((prev, curr) => prev + curr, 0);

  return sumOfPowers;
};
