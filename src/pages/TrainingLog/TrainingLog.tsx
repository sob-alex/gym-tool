import { useState, useEffect } from 'react';
import {
	DataTable,
	DataTableExpandedRows,
	DataTableValueArray,
} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import styles from './TrainingLog.module.scss'
import { data } from './stub';
import { mapTrainingExercisesToSets } from './utils';

export default function TrainingLogTable() {
	const [products, setProducts] = useState<Workout[]>([]);
	const [expandedRows, setExpandedRows] = useState<
		DataTableExpandedRows | DataTableValueArray | undefined
	>(undefined);

	useEffect(() => {
		setProducts(data);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const expandAll = () => {
		let _expandedRows: DataTableExpandedRows = {};

		products.forEach((p) => (_expandedRows[`${p.id}`] = true));

		setExpandedRows(_expandedRows);
	};

	const collapseAll = () => {
		setExpandedRows(undefined);
	};

	const allowExpansion = (rowData: Workout) => {
		return rowData.exercises!.length > 0;
	};


	const rowExpansionTemplate = (data: Workout) => {
		const sets = mapTrainingExercisesToSets(data.exercises);
		console.log(sets);
		
		return (
			<div className="p-3">
				<h5>Тренировка {data.muscleGroupType}</h5>
				<DataTable
					className="mt-3"
					size="small"
					value={sets}
					rowGroupMode="rowspan"
					groupRowsBy="name"
					showGridlines
				>
					<Column
						field="name"
						header="Название упражнения"
						sortable
					></Column>
					<Column
						field="weight"
						header="Вес"
						sortable
					></Column>
					<Column
						field="reps"
						header="Повторения"
						sortable
					></Column>
					<Column
						field="toFailure"
						header="До отказа"
						sortable
					></Column>
					<Column
						field="note"
						header="Замечание"
						sortable
					></Column>
				</DataTable>
			</div>
		);
	};

	const header = (
		<div className="flex flex-wrap justify-content-end gap-2">
			<Button
				icon="pi pi-plus"
				label="Раскрыть все"
				onClick={expandAll}
				text
			/>
			<Button
				icon="pi pi-minus"
				label="Скрыть все"
				onClick={collapseAll}
				text
			/>
		</div>
	);

	return (
		<Card>
			<DataTable
				className={styles.table}
				value={products}
				expandedRows={expandedRows}
				onRowToggle={(e) => setExpandedRows(e.data)}
				rowExpansionTemplate={rowExpansionTemplate}
				dataKey="id"
				header={header}
				tableStyle={{ minWidth: '60rem' }}
			>
				<Column expander={allowExpansion} style={{ width: '5rem' }} />
				<Column field="date" header="Дата" sortable />
				<Column field="type" header="Тип" />
				<Column field="muscleGroupType" header="Типа по группе мышц" />

				<Column field="note" header="Примечание" />
			</DataTable>
		</Card>
	);
}
