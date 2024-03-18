# Моадльное окно 

### примечания:
> Основные стили передаются в компонент modal это:


```tsx
  const light = ['default', 'bordered', 'flat'];
  const dark = ['default', 'deep', 'deep-bordered', 'bordered', 'flat'];
```

> соответственно эти же стили и переходя в подкомпонент footer.modat.tsx:

```tsx
export const ModalFooter = ({onToggle, onClick, theme, variant}: FooterModalProps): JSX.Element => {
	console.log(variant);
	return (
		<div className={styles.footer}>
			<Button text='Close modal' onClick={onToggle} theme={theme} variant='red'/>
			{
				theme === 'light' ? (
					<Button text='Event' onClick={onClick} theme='dark' variant={variant}/>
				) : (
					<Button text='Event' onClick={onClick} theme='light' variant={variant}/>
				)
			}
			{/* ну или можно свой вариант */}
		</div>
	);
};


```
> Таким образом если возможности CyberUI стараются отталкиваться от поведения пользователя, однако если вы не хотите видеть в своем модальном окне при светлой теме кнопку event темной темы тогда просто вручную измените данный компонент.
> Таким обрзаом CyberUI дает возможность дополнять/изменять/улучшать уже существующие компоненты отталкиваясь от личных предпочтений пользоввателя
