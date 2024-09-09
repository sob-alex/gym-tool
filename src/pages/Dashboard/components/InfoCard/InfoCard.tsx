import React from 'react';
import { Card } from 'primereact/card';
import cn from 'classnames';
import styles from './InfoCard.module.scss';

interface Props {
	title: string;
	value: string;
	description: string;
	iconName: string;
	iconColor?: string;
	className?: string;
	descriptionValue?: string;
}

const InfoCard: React.FC<Props> = ({
	title,
	value,
	descriptionValue,
	description,
	iconName,
	className,
	iconColor,
}) => {
	return (
		<Card className={cn([styles.infoCard, className])}>
			<div className="flex justify-content-between mb-3">
				<div>
					<span className="block text-500 font-medium mb-3">
						{title}
					</span>
					<div className="text-900 font-medium text-xl">{value}</div>
				</div>
				<div
					className={`flex align-items-center justify-content-center bg-${
						iconColor || 'blue'
					}-100 border-round`}
					style={{ width: '2.5rem', height: '2.5rem' }}
				>
					<i
						className={`pi ${iconName} text-${
							iconColor || 'blue'
						}-500 text-xl`}
					/>
				</div>
			</div>
			{descriptionValue && (
				<span className="text-green-500 font-medium">
					{descriptionValue}
				</span>
			)}

			<span className="text-500">{description}</span>
		</Card>
	);
};

export default InfoCard;
