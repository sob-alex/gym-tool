import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { logStub } from './data.stub';
import { Card } from 'primereact/card';

const TrainingLog: React.FC = ({}) => {
	return (
		<Card>
			<div className="card">
				<h3>История тренировок</h3>
				<DataTable className='mt-4' value={logStub} rows={5} paginator>
					<Column
						field="date"
						header="Дата"
						style={{ width: '35%' }}
					/>
					<Column
						field="trainingType"
						header="Тип тренировки"
						style={{ width: '35%' }}
					/>
					<Column
                        className='text-green-500'
						field="progress"
						header="Прогресс"
						style={{ width: '35%' }}
					/>
				</DataTable>
			</div>
		</Card>
	);
};

export default TrainingLog;
