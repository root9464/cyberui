# Документация CyberUI | Кнопки:
> [!NOTE]
> Кнопки могут приминать в себя обработчик onclick ввиде пропсов из верхнего компонента. Рекомендуется использовать хук useCallback для функции передаваемую в props чтобы избежать ререндеринг родительского компонента в котором используется кнопка.

#### Пример:
```tsx
	const [count, setCount] = useState<number>(0);
	const Counter = useCallback(() => {
	    setCount(prevCount => prevCount + 1);
	    console.log(count);
	}, []);

    <Button {...{theme: 'light', variant: 'default', text: 'ModernUI', onClick: Counter}}/>
```

### Примечания:
> Кнопки темы dark имеют 2 вида border -> deep-border и border при использовании этих вариантов кнопок стоит учитывать, что border при hovver становится цветом равным border а deep-bordered при hover сохраняет цвет border несмотря на hover эффект

#### Пример:
```sass
    &.deepBordered
      background-color: $color-theme-dark-deep
      border: 2px solid $color-theme-dark-deepBorder
	// <--
    &.bordered
      background-color: $color-theme-dark
      border: 2px solid $color-theme-dark-border
      &:hover
        background-color: $color-theme-dark-border // <--
        transition: background-color 0.45s ease-out
```
