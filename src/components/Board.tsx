import Item from "./Item"
import { useState, useEffect } from "react"

const Board = () => {

    const [symbol, setSymbol] = useState<string>('x')
    const [symbols, setSymbols] = useState<string[]>([...Array(9)].map(_ => ''))
    const [winerInfo, setWinerInfo] = useState<string>('')


    const winer = () => {
        const winningCompbinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

        const checkCombination = winningCompbinations.find((combination) => symbols[combination[0]] !== '' && symbols[combination[0]] == symbols[combination[1]] && symbols[combination[0]] === symbols[combination[2]])

        if (checkCombination !== undefined) {
            setWinerInfo(`wygrana ${symbol === 'x' ? 'o' : 'x'}`)
        } else if (symbols.find((el) => el === '') === undefined && checkCombination === undefined) {
            setWinerInfo('remis')

        }
    }

    const newGame = () => {
        setSymbols([...Array(9)].map(_ => ''))
        setWinerInfo('')
        setSymbol('')

    }

    useEffect(() => {
        winer()
    }, [symbols])




    return (
        <>
            {winerInfo !== '' &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', color: 'red', fontSize: '40px' }}>
                    {winerInfo}
                    <button onClick={newGame}>Nowa gra</button>
                </div>
            }
            <div>{ }</div>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    height: '300px', border: "2px black solid", width: "300px", display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'
                }}>
                    {[...Array(9)].map((_, index) => <Item key={index} setSymbol={setSymbol} setSymbols={setSymbols} index={index} symbols={symbols} winerInfo={winerInfo} />)}
                </div>
            </div>

        </>
    )
}
export default Board
