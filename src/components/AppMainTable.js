import React from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import '../styles/AppMainTable.scss'

const AppMainTable = () => {
    const highlightedCols = [2, 5, 6, 9]

    const cellClassName = idx =>
        highlightedCols.find(el => el === idx) !== undefined
            ? 'main-table__cell--highlighted' : ''

    const theadRow = (() => {
        const theadData = (() => {
            const data = ['Секции', 'Бедный', 'Богатый']
            for (let i = 1; i <= 15; i++ )
                data.push(i)

            return data
        })()

        return theadData
            .map((el, key) => <td key={ key }>{ el }</td>)
    })()

    const tbodyData = (() => {
        const body = 'рекомендация'
        const data = [
            [
                { title: 'Нагрузки на МСЦ', body }
            ],
            [
                { title: 'Руда/вода', body }
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

        const thirdRow = [{ title: 'Работа доп. МШ', body }, [7, 6], [1, 1], ['да', 'нет']]
        for (let i = 0; i < 7; i++) {
            thirdRow.push([])
            thirdRow.push(['да', 'да'])
        }
        data.push(thirdRow)

        return data
    })()

    const renderCell = (idx, first, second) => {
        const titleStyle = idx =>
            ({ fontWeight: idx === 0 ? 'bold' : 'normal' })

        return <div className="main-table__cell__content">
            <span style={ titleStyle(idx) }>{ first }</span>
            <span>{ second }</span>
        </div>
    }

    return (
        <div>
            <Table className="main-table" striped size="sm">
                <thead className="main-table__head">
                    <tr>{ theadRow }</tr>
                </thead>
                <tbody>
                    { tbodyData
                        .map((el, key) =>
                            <tr key={ key }>
                                { el.map((el, key) =>
                                    <td className={ cellClassName(key) } key={ key }>
                                        {
                                            key !== 0
                                                ? renderCell(key, el[0], el[1])
                                                : renderCell(key, el.title, el.body)
                                        }
                                    </td>)
                                }
                            </tr>)
                    }
                    <tr>
                        <td>
                            <div className="main-table__cell__content">
                                <span style={{ fontWeight: 'bold' }}>Доп. режимы</span>
                                <span>режимы</span>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td colSpan="2"><span>Насос 802</span></td>
                        <td>
                            <div className="main-table__cell__content">
                                <span>да</span>
                                <span>нет</span>
                            </div>
                        </td>
                        <td></td>
                        <td colSpan="2"><span>Насос 163</span></td>
                        <td>
                            <div className="main-table__cell__content">
                                <span>нет</span>
                                <span>нет</span>
                            </div>
                        </td>
                        <td></td>
                        <td colSpan="2"><span>Насос 13</span></td>
                        <td>
                            <div className="main-table__cell__content">
                                <span>нет</span>
                                <span>нет</span>
                            </div>
                        </td>
                        <td></td>
                        <td colSpan="3">
                            <div style={{ display: 'flex' }}>
                                <span>Насос 15</span>
                                <Form>
                                    <Form.Group>
                                        <Form.Control
                                            style={{ padding: '0.5vh', fontSize: '1.5vh' }}
                                            size="sm"
                                            as="select"
                                        >
                                            <option>на 3-97</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AppMainTable;
