import React from 'react';

interface Props {
	children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
	return <div className='p-4'>{children}</div>;
};

export default Container;
