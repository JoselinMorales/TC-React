import React from 'react';
import { Todos } from './Todos';
import { useParams } from 'react-router';

export const MyTodoList = () => {
	const params = useParams();
	console.log(params);
	return <Todos/>
}