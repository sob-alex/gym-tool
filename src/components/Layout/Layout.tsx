import { Menu } from '../Menu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className="grid">
			<div className="grid col lg:col-10 xl:col-9 m-auto">
				<div className="col-2">
					<Menu />
				</div>
				<div className="col-10">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
