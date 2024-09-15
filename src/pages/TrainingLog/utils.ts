export function mapTrainingExercisesToSets(exercises: Exercise[]) {
	return exercises.flatMap((exercise) =>
		exercise.sets.map((set) => ({
			...set,
			name: exercise.name,
		}))
	);
}
