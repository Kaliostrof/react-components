import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const isValueValid = value.length < 3 ? false : true;

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		// console.log(promptValue);
		if (promptValue.length < 3) {
			setError(
				(newErr) =>
					(newErr = 'Введенное значение должно содержать минимум 3 символа'),
			);
			setValue('');
		} else {
			setValue((newValue) => (newValue = promptValue));
			setError((newErr) => (newErr = ''));
		}
	};

	const onAddButtonClick = () => {
		if (isValueValid) {
			const id = Date.now();
			const newDate = new Date();
			const updatedList = [...list, { id, value, newDate }];
			console.log(list);
			setList(updatedList);
			setValue('');
			setError('');
		}
	};
	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' ? <div className={styles.error}>{error}</div> : ''}
			<div className={styles['buttons-container']}>
				<button
					onClick={() => {
						onInputButtonClick();
					}}
					className={styles.button}
				>
					Ввести новое
				</button>
				<button
					onClick={() => {
						onAddButtonClick();
					}}
					className={styles.button}
					disabled={!isValueValid}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length !== 0 ? (
					<ul className={styles.list}>
						{list.map((el) => {
							// let newDate = new Date();
							return (
								<li className={styles['list-item']} key={el.id}>
									{el.value}
									{' - ' + el.newDate.toLocaleString()}
								</li>
							);
						})}
					</ul>
				) : (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
			</div>
		</div>
	);
};
