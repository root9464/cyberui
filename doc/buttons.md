# Документация CyberUI | Кнопки:
> [!NOTE]
> Кнопки могут приминать в себя обработчик onclick ввиде пропсов из верхнего компонента. Рекомендуется использовать хук useCallback для функции передаваемую в props чтобы избежать ререндеринг родительского компонента в котором используется кнопка.

#### Пример:
```
	const [count, setCount] = useState<number>(0);
	const Counter = useCallback(() => {
	    setCount(prevCount => prevCount + 1);
	    console.log(count);
	}, []);

    <Button {...{theme: 'light', variant: 'default', text: 'ModernUI', onClick: Counter}}/>
```