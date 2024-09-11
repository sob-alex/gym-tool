import classNames from 'classnames';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Menu } from 'primereact/menu';
import { ROUTE_PATHS } from '../../routes';
import { Link } from 'react-router-dom';

function Header() {
	const itemRenderer = (item: any) => (
		<div className="p-menuitem-content">
			<Link to={item.url} className="flex align-items-center p-menuitem-link">
				<span className={item.icon} />
				<span className="mx-2">{item.label}</span>
				{item.badge && <Badge className="ml-auto" value={item.badge} />}
				{item.shortcut && (
					<span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
						{item.shortcut}
					</span>
				)}
			</Link>
		</div>
	);
	let items = [
		{
			template: () => {
				return (
					<Link to={ROUTE_PATHS.DASHBOARD} className="inline-flex px-3 py-2">
						<span className="font-medium text-xl font-semibold">
							Быдло<span className="text-primary"> Качалка</span>
						</span>
					</Link>
				);
			},
		},
		{
			separator: true,
		},
		{
			label: 'Тренировки',
			items: [
				{
					label: 'Добавить',
					icon: 'pi pi-plus',
					shortcut: 'Ctrl+N',
					template: itemRenderer,
					url: ROUTE_PATHS.TRAINING_LOG
				},
				{
					label: 'Дневник',
					icon: 'pi pi-align-justify',
					shortcut: 'Ctrl+D',
					template: itemRenderer,
					url: ROUTE_PATHS.TRAINING_LOG
				},
			],
		},
		{
			label: 'Аналитика',
			items: [
				{
					label: 'График прогресса',
					icon: 'pi pi-cog',
					shortcut: 'Ctrl+P',
					template: itemRenderer,
					url: '',
				},
				{
					label: 'Цели и достижения',
					icon: 'pi pi-arrow-up-right',
					badge: 2,
					template: itemRenderer,
					url: '',
				},
				{
					label: 'Пойти нахуй',
					icon: 'pi pi-sign-out',
					shortcut: 'Ctrl+Q',
					template: itemRenderer,
					url: '',
				},
			],
		},
		{
			separator: true,
		},
		{
			template: (_: any, options: any) => {
				return (
					<button
						onClick={(e) => options.onClick(e)}
						className={classNames(
							options.className,
							'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround'
						)}
					>
						<Avatar
							image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
							className="mr-2"
							shape="circle"
						/>
						<div className="flex flex-column align">
							<span className="font-bold">Тупая Кочка</span>
							<span className="text-sm">Подснежник</span>
						</div>
					</button>
				);
			},
		},
	];
	return (
		<div className="card flex justify-content-center">
			<Menu model={items} className="w-full" />
		</div>
	);
}

export default Header;
