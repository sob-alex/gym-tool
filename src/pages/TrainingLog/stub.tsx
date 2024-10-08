export const data: Workout[] = [
	{
		id: '1001',
		date: '23 сентября',
		type: 'strength',
		muscleGroupType: 'Тяговая',
		note: 'Тренировка прошла успешно',
		exercises: [
			{
				id: '1001-0',
				name: 'Становая тяга',
				sets: [
					{
						id: '1001-0-0',
						setType: 'stretching',
						weight: 120,
						reps: 8,
						toFailure: 1,
						note: 'Хорошо',
					},
					{
						id: '1001-0-1',
						setType: 'stretching',
						weight: 130,
						reps: 6,
						toFailure: 0,
						note: 'Сложно, но справился',
					},
				],
			},
			{
				id: '1001-1',
				name: 'Подтягивания',
				sets: [
					{
						id: '1001-1-0',
						setType: 'stretching',
						weight: 0,
						reps: 10,
						toFailure: 2,
						note: 'Отлично',
					},
					{
						id: '1001-1-1',
						setType: 'stretching',
						weight: 0,
						reps: 8,
						toFailure: 1,
						note: 'Немного устал',
					},
				],
			},
		],
	},
	{
		id: '1002',
		date: '24 сентября',
		type: 'strength',
		muscleGroupType: 'Ноги',
		note: 'Тяжелая тренировка',
		exercises: [
			{
				id: '1002-0',
				name: 'Приседания со штангой',
				sets: [
					{
						id: '1002-0-0',
						setType: 'stretching',
						weight: 100,
						reps: 10,
						toFailure: 2,
						note: 'Чувствую прогресс',
					},
					{
						id: '1002-0-1',
						setType: 'stretching',
						weight: 110,
						reps: 8,
						toFailure: 1,
						note: 'Тяжело, но справился',
					},
				],
			},
			{
				id: '1002-1',
				name: 'Выпады с гантелями',
				sets: [
					{
						id: '1002-1-0',
						setType: 'stretching',
						weight: 20,
						reps: 12,
						toFailure: 0,
						note: 'Ноги горят',
					},
					{
						id: '1002-1-1',
						setType: 'stretching',
						weight: 22,
						reps: 10,
						toFailure: 1,
						note: 'Держусь',
					},
				],
			},
		],
	},
	{
		id: '1003',
		date: '25 сентября',
		type: 'strength',
		muscleGroupType: 'Плечи',
		note: 'Хорошая тренировка',
		exercises: [
			{
				id: '1003-0',
				name: 'Жим штанги стоя',
				sets: [
					{
						id: '1003-0-0',
						setType: 'stretching',
						weight: 60,
						reps: 10,
						toFailure: 1,
						note: 'Отлично пошло',
					},
					{
						id: '1003-0-1',
						setType: 'stretching',
						weight: 65,
						reps: 8,
						toFailure: 0,
						note: 'Чувствую усталость',
					},
				],
			},
			{
				id: '1003-1',
				name: 'Разведения гантелей в стороны',
				sets: [
					{
						id: '1003-1-0',
						setType: 'stretching',
						weight: 12,
						reps: 12,
						toFailure: 2,
						note: 'Плечи горят',
					},
					{
						id: '1003-1-1',
						setType: 'stretching',
						weight: 14,
						reps: 10,
						toFailure: 1,
						note: 'Последний подход дался тяжело',
					},
				],
			},
		],
	},
	{
		id: '1004',
		date: '26 сентября',
		type: 'strength',
		muscleGroupType: 'Спина',
		note: 'Сосредоточился на технике',
		exercises: [
			{
				id: '1004-0',
				name: 'Тяга верхнего блока',
				sets: [
					{
						id: '1004-0-0',
						setType: 'stretching',
						weight: 70,
						reps: 12,
						toFailure: 1,
						note: 'Хорошо чувствую мышцы',
					},
					{
						id: '1004-0-1',
						setType: 'stretching',
						weight: 75,
						reps: 10,
						toFailure: 0,
						note: 'Контроль каждого повторения',
					},
				],
			},
			{
				id: '1004-1',
				name: 'Тяга гантели в наклоне',
				sets: [
					{
						id: '1004-1-0',
						setType: 'stretching',
						weight: 30,
						reps: 10,
						toFailure: 1,
						note: 'Стабильная техника',
					},
					{
						id: '1004-1-1',
						setType: 'stretching',
						weight: 32,
						reps: 8,
						toFailure: 2,
						note: 'Устал, но доволен',
					},
				],
			},
		],
	},
	{
		id: '1005',
		date: '27 сентября',
		type: 'strength',
		muscleGroupType: 'Руки',
		note: 'Фокус на бицепс и трицепс',
		exercises: [
			{
				id: '1005-0',
				name: 'Подъем штанги на бицепс',
				sets: [
					{
						id: '1005-0-0',
						setType: 'stretching',
						weight: 40,
						reps: 12,
						toFailure: 2,
						note: 'Мышцы забились',
					},
					{
						id: '1005-0-1',
						setType: 'stretching',
						weight: 42,
						reps: 10,
						toFailure: 1,
						note: 'Держу темп',
					},
				],
			},
			{
				id: '1005-1',
				name: 'Французский жим',
				sets: [
					{
						id: '1005-1-0',
						setType: 'stretching',
						weight: 30,
						reps: 10,
						toFailure: 1,
						note: 'Хорошая концентрация',
					},
					{
						id: '1005-1-1',
						setType: 'stretching',
						weight: 32,
						reps: 8,
						toFailure: 0,
						note: 'Последние повторения дались сложно',
					},
				],
			},
		],
	},
];
