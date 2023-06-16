import exercisesData from "../../db.json";

export default function handler(req, res) {
  const { target, bodyPart, equipment, bodyPartsList, id, idSort } = req.query;
  if (req.method === "GET") {
    let data = exercisesData;

    if (idSort) {
      const uniqueIds = [
        ...new Set(
          exercisesData.map((exercise) => ({
            id: exercise.id,
            gifUrl: exercise.gifUrl,
            bodyPart: exercise.bodyPart,
            equipment: exercise.equipment,
            name: exercise.name,
            target: exercise.target,
          }))
        ),
      ];

      uniqueIds.sort((a, b) => a.id.localeCompare(b.id));

      const updatedExercises = uniqueIds.map((exercise, index) => ({
        ...exercise,
        id: String(index + 1).padStart(4, "0"),
        gifUrl: `https://res.cloudinary.com/devthakur/image/upload/v1686929351/Exercises_Gif/gif_image_${exercise.id}.gif`,
      }));

      return res.status(200).json(updatedExercises);
    }
    if (id) {
      const exercise = exercisesData.find((item) => item.id === id);
      if (exercise) return res.status(200).json(exercise);
      else return res.status(404).json({ error: "Exercise not found" });
    }

    if (bodyPartsList) {
      const bodyPartsList = [
        ...new Set(exercisesData.map((exercise) => exercise.bodyPart)),
      ];
      return res.status(200).json(bodyPartsList);
    }

    if (target) {
      data = data.filter((exercise) => exercise.target === target);
    }

    if (bodyPart) {
      data = data.filter((exercise) => exercise.bodyPart === bodyPart);
    }

    if (equipment) {
      data = data.filter((exercise) => exercise.equipment === equipment);
    }

    //   console.log(data.length);

    res.status(200).json(data);
  }
  res.status(405).end();
}
