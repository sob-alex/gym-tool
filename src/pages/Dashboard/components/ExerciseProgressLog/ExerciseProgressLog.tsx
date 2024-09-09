import React from 'react';

import { Card } from 'primereact/card';

const ExerciseProgressLog: React.FC = ({}) => {
	return (
		<Card>
			<div className="card">
				<div className="flex justify-content-between align-items-center mb-5">
					<h3>Прогресс в упражениях</h3>
				</div>
				<ul className="list-none p-0 m-0">
					<li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
						<div>
							<span className="text-900 font-medium mr-2 mb-1 md:mb-0">
								Жим лежа
							</span>
							<div className="mt-1 text-600">максимум, проходка</div>
						</div>
						<div className="mt-2 md:mt-0 flex align-items-center">
							<div
								className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
								style={{ height: '8px' }}
							>
								<div
									className="bg-orange-500 h-full"
									style={{ width: '50%' }}
								/>
							</div>
							<span className="text-orange-500 ml-3 font-medium">
								%50
							</span>
						</div>
					</li>
					<li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
						<div>
							<span className="text-900 font-medium mr-2 mb-1 md:mb-0">
								Подтягивания
							</span>
							<div className="mt-1 text-600">10 раз, проходка</div>
						</div>
						<div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
							<div
								className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
								style={{ height: '8px' }}
							>
								<div
									className="bg-cyan-500 h-full"
									style={{ width: '16%' }}
								/>
							</div>
							<span className="text-cyan-500 ml-3 font-medium">
								%16
							</span>
						</div>
					</li>
					<li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
						<div>
							<span className="text-900 font-medium mr-2 mb-1 md:mb-0">
								Расширение очка снарядом ВОВ
							</span>
							<div className="mt-1 text-600">Диаметр, мм</div>
						</div>
						<div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
							<div
								className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
								style={{ height: '8px' }}
							>
								<div
									className="bg-pink-500 h-full"
									style={{ width: '100%' }}
								/>
							</div>
							<span className="text-pink-500 ml-3 font-medium">
								%100
							</span>
						</div>
					</li>
					<li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
						<div>
							<span className="text-900 font-medium mr-2 mb-1 md:mb-0">
								Приседание на конус
							</span>
							<div className="mt-1 text-600">глубина, см</div>
						</div>
						<div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
							<div
								className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
								style={{ height: '8px' }}
							>
								<div
									className="bg-green-500 h-full"
									style={{ width: '35%' }}
								/>
							</div>
							<span className="text-green-500 ml-3 font-medium">
								%35
							</span>
						</div>
					</li>
					<li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
						<div>
							<span className="text-900 font-medium mr-2 mb-1 md:mb-0">
								Выдержка без трусов в раздевалке
							</span>
							<div className="mt-1 text-600">максимум, секунды</div>
						</div>
						<div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
							<div
								className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
								style={{ height: '8px' }}
							>
								<div
									className="bg-purple-500 h-full"
									style={{ width: '75%' }}
								/>
							</div>
							<span className="text-purple-500 ml-3 font-medium">
								%75
							</span>
						</div>
					</li> 
				</ul>
			</div>
		</Card>
	);
};

export default ExerciseProgressLog;
