import { Toolbar } from 'primereact/toolbar';

function Left() {
	return (
		<>
			<span className="pi pi-bookmark-fill text-primary-500 text-3xl"></span>
            <span className='font-bold text-lg ml-2'>GYM</span>
		</>
	);
}

function Header() {
	return <Toolbar start={Left} />;
}

export default Header;
