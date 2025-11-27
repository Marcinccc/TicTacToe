import { Dispatch, SetStateAction } from "react"


interface IProps {
    setSymbol: Dispatch<SetStateAction<string>>,
    setSymbols: Dispatch<SetStateAction<string[]>>,
    index: number,
    symbols: string[]
    winerInfo: string
}
const Item = ({ setSymbol, setSymbols, index, symbols, winerInfo }: IProps) => {

    const showSymbol = () => {
        if (symbols[index] !== '' || winerInfo !== '') {
            return;
        }
        setSymbol((prev) => {
            setSymbols((symbols) => symbols.map((item, itemIndex) => index === itemIndex ? prev : item))
            return prev === 'x' ? 'o' : 'x'

        })
    }

    return (
        <div onClick={showSymbol} style={{
            height: '100px', border: '1px solid #000'
        }}>
            {symbols[index]}
        </div >

    )
}
export default Item