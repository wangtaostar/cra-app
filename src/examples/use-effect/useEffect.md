    useEffect(() => {
        //此处编写 组件挂载之后和组件重新渲染之后执行的代码
        ...

        return () => {
            //此处编写 组件即将被卸载前执行的代码
            ...
        }
    },[deps])

## 拆解说明：

1. effect 函数主体内容中的代码，就是组件挂载之后和组件重新渲染之后你需要执行的代码；

2. effect 函数 return 出去的返回函数主体内容中的代码，就是组件即将被卸载前你需要执行的代码；
   
3. 第2个参数 [deps]，为可选参数，若有值则向React表明该useEffect是依赖哪些变量发生改变而触发的；

## 'effect'补充说明

1. 若你不需要在组件卸载前执行任何代码，那么可以忽略不写 effect 中的 return相关代码；

## '[deps]'补充说明：

1. 若缺省，则组件挂载、组件重新渲染、组件即将被卸载前，每一次都会触发该useEffect；
   
2. 若传值，则必须为数组，数组的内容是函数组件中通过useState自定义的变量或者是父组件传值过来的props中的变量，告诉React只有数组内的变量发生变化时才会触发useEffect；
   
3. 若传值，但是传的是空数组 []，则表示该useEffect里的内容仅会在“挂载完成后和组件即将被卸载前”执行一次；