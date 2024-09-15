type WellBeingThisDay = 'good' | 'neutral' | 'bad';
type WeightMeasure = 'kg' | 'unit';
type WorkoutType = 'strength' | 'cardio' | 'flexibility' | 'mixed';
type SetType = 'reps' | 'hold' | 'stretching' | 'cardio';

interface TrainingSet {
	id: string;
	setType: SetType;
	weight?: number;
	weightMeasure?: WeightMeasure;
	reps?: number;
	duration?: number;
	toFailure?: number;
	note?: string;
}

interface Exercise {
	id: string;
	name: string;
	sets: TrainingSet[];
}

interface Workout {
	id: string;
	date?: string;
	type: WorkoutType;
    status?: 'planned' | 'completed' | 'cancelled'; 
	muscleGroupType: string;
	exercises: Exercise[];
	duration?: number;
	wellBeing?: WellBeingThisDay;
	note?: string;
	extra?: Record<string, unknown>;
}
