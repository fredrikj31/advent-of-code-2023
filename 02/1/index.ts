export const handler = (input: string): number => {
  const lines = input.split("\n");

  const maxCubes: Record<string, number> = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const possibleGameIds: number[] = [];
  // line example: "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
  for (const line of lines) {
    const gameId = parseInt(line.split(":")[0].replace("Game ", ""));
    let isGamePossible: boolean = true;
    const roundCubes = line.split(":")[1].trim().split(";");

    for (const roundCube of roundCubes) {
      // example for roundCube string: " 3 blue, 4 red"
      const pickedCubes = roundCube.split(",");

      for (const pickedCube of pickedCubes) {
        // example for pickedCube string: " 3 blue"
        const [numberOfCubes, colorOfCube] = pickedCube.trim().split(" ");

        if (maxCubes[colorOfCube] >= parseInt(numberOfCubes)) {
          continue;
        } else {
          isGamePossible = false;
        }
      }
    }

    if (isGamePossible) {
      possibleGameIds.push(gameId);
    }
  }

  const sum = possibleGameIds.reduce((prev, curr) => prev + curr, 0);
  return sum;
};
