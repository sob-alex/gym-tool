import { Calendar } from 'primereact/calendar';
import { Card } from 'primereact/card';
import { useState } from 'react';

const WorkoutFormPage = () => {
    const [date, setDate] = useState(null); 
	return (
		<Card title="Добавить тренировку">
            <div className='mt-5'>
            <h4>Выберите дату</h4>
			<Calendar
                className='mt-2'
				value={date}
				onChange={(e) => setDate(e.value)}
				showIcon
			/>
            </div>
          
		</Card>
	);
};

export default WorkoutFormPage;
