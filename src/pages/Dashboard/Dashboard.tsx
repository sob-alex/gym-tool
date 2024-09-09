import { useState } from 'react';
import { BodyStatus } from './components/BodyStatus';
import { ExerciseProgressLog } from './components/ExerciseProgressLog';
import { InfoCard } from './components/InfoCard';
import { TrainingLog } from './components/TrainingLog';
import { Calendar } from 'primereact/calendar';
import { TrainingChart } from './components/TrainingChart';

const Dashboard = () => {
	const [date, setDate] = useState();
	return (
		<>
			<div className="grid">
				<div className="col-12 lg:col-6 xl:col-3">
					<InfoCard
						title="Тренировок проведено"
						value="56"
						descriptionValue="10 "
						description="в этом цикле"
						iconName="pi-calendar"
					/>
				</div>
				<div className="col-12 lg:col-6 xl:col-3">
					<InfoCard
						title="Последняя тренировка"
						value="25 августа"
						descriptionValue="3 "
						description="дня назад"
						iconName="pi-info-circle"
						iconColor="orange"
					/>
				</div>
				<div className="col-12 lg:col-6 xl:col-3">
					<InfoCard
						title="Тренировок осталось"
						value="20"
						descriptionValue="70% "
						description="цикла пройдено"
						iconName="pi-calendar-clock"
						iconColor="cyan"
					/>
				</div>
				<div className="col-12 lg:col-6 xl:col-3">
					<InfoCard
						title="Абонемент истекает"
						value="20 сентября"
						description="абонемент: безлимит"
						iconName="pi-calendar-clock"
						iconColor="purple"
					/>
				</div>
				<div className="col-12 xl:col-6">
					<BodyStatus />
				</div>
				<div className="col-12 xl:col-6">
					<TrainingLog />
				</div>

				<div className="col-12 xl:col-4">
					<ExerciseProgressLog />
				</div>

				<div className="col-12 xl:col-4">
					<Calendar
						className="w-full"
						value={date}
						onChange={(e) => setDate(e.value)}
						inline
						showWeek
					/>
				</div>
				<div className="col-12 xl:col-4">
					<TrainingChart />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
