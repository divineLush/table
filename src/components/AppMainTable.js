import React from 'react'
import Table from 'react-bootstrap/Table'
import '../styles/AppMainTable.scss'

const AppMainTable = () => {
    const highlightedCols = [2, 5, 6, 9]

    const theadData = () => {
        const data = ['Секции', 'Бедный', 'Богатый']
        for (let i = 1; i <= 15; i++ )
            data.push(i)

        return data
    }

    const tbodyData = () => {
        const data = [
            [
                {
                    title: 'Нагрузки на МСЦ',
                    body: 'рекомендация'
                }
            ],
            [
                {
                    title: 'Руда/вода',
                    body: 'рекомендация'
                }
            ]
        ]

        for (let i = 0; i < 17; i++) {
            let firstRow = [197, 197]
            if (i <= 8)
                firstRow = [193, 193]

            if (i === 9)
                firstRow = [205, 194]

            let secondRow = [0.85, 0.85]
            if (i === 9)
                secondRow[0] = 0.86

            data[0].push(firstRow)
            data[1].push(secondRow)
        }

        return data
    }

    const renderCell = (idx, first, second) => {
        const cellClassName = idx => {
            const highlight = idx =>
                highlightedCols.filter(el => el === idx).length !== 0
                    ? 'main-table__cell--highlighted' : ''

            return `main-table__cell ${highlight(idx)}`
        }

        const titleStyle = idx =>
            ({ fontWeight: idx === 0 ? 'bold' : 'normal' })

        return <div className={ cellClassName(idx) }>
            <span style={ titleStyle() }>{ first }</span>
            <span>{ second }</span>
        </div>
    }

    return (
        <div>
            <Table className="main-table" striped size="sm">
                <thead className="main-table__head">
                    <tr>{ theadData().map((el, key) => <td key={ key }>{ el }</td>) }</tr>
                </thead>
                <tbody>
                    { tbodyData()
                        .map((el, key) =>
                            <tr key={ key }>
                                { el.map((el, key) =>
                                    <td key={ key }>
                                        {
                                            key !== 0
                                                ? renderCell(key, el[0], el[1])
                                                : renderCell(key, el.title, el.body)
                                        }
                                    </td>)
                                }
                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default AppMainTable;
