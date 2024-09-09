import React from 'react';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import body from '/body.png?url';

const BodyStatus: React.FC = ({}) => {
	return (
		<Card>
			<h3>Показатели</h3>
			<Divider />
			<div className="flex gap-3">
				<div>
					<Image src={body} alt="Image" width="350" />
				</div>
				<div className="flex-1">
					<div className="text-base line-height-4">
						<h4>Основные показатели</h4>
						<div className="flex justify-content-between">
							<div className="text-900">Рост</div>
							<div className="text-500">181</div>
						</div>
						<div className="flex justify-content-between">
							<div className="text-900">Вес</div>
							<div className="text-500">81</div>
						</div>
						<Divider />
						<h4>Антропометрия</h4>
						<div className="flex justify-content-between">
							<div className="text-900">Бицепса</div>
							<div className="text-500">43</div>
						</div>
						<div className="flex justify-content-between">
							<div className="text-900">Талии</div>
							<div className="text-500">90</div>
						</div>
						<div className="flex justify-content-between">
							<div className="text-900">Грудной клетка</div>
							<div className="text-500">110</div>
						</div>
						<div className="flex justify-content-between">
							<div className="text-900">Бедро</div>
							<div className="text-500">62</div>
						</div>
						<Button className='w-full mt-5' label="Посмотреть все" />
					</div>
				</div>
			</div>
		</Card>
	);
};

export default BodyStatus;
