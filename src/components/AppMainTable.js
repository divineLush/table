import React from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import '../styles/AppMainTable.scss'
import { MainTableCell } from '../assets/utils'

const AppMainTable = () => {
    const highlightedCols = [2, 5, 6, 9]

    const cellClassName = (idx, trIdx) =>
        highlightedCols.find(el => el === idx) !== undefined &&
        trIdx <= 2
            ? 'main-table__cell--highlighted' : ''

    const theadRow = (() => {
        const theadData = (() => {
            const data = ['Секции', 'Бедный', 'Богатый']
            for (let i = 1; i <= 15; i++ )
                data.push(i)

            return data
        })()

        return <tr>{ theadData.map((el, key) => <td key={ key }>{ el }</td>) }</tr>
    })()

    const tbodyData = (() => {
        const body = 'рекомендация'
        const data = [
            [
                new MainTableCell(['Нагрузки на МСЦ', body])
            ],
            [
                new MainTableCell(['Руда/вода', body])
            ]
        ]

        for (let i = 0; i < 17; i++) {
            let firstRow = new MainTableCell([197, 197])
            if (i <= 8)
                firstRow.data = [193, 193]

            if (i === 9) {
                firstRow.data = [205, 194]
                firstRow.colorHighlight = true
                firstRow.backgroundHighlight = true
                firstRow.boldHighlight = true
            }

            let secondRow = new MainTableCell([0.85, 0.85])
            if (i === 9) {
                secondRow.data[0] = 0.86
                secondRow.colorHighlight = true
                secondRow.backgroundHighlight = true
            }

            data[0].push(firstRow)
            data[1].push(secondRow)
        }

        const thirdRow = [
            new MainTableCell(['Работа доп. МШ', body]),
            new MainTableCell([7, 6], 1, true, true, true, true),
            new MainTableCell([1, 1]),
            new MainTableCell(['да', 'нет'], 1, true, true, true, true)
        ]
        for (let i = 0; i < 7; i++) {
            thirdRow.push(new MainTableCell([]))
            thirdRow.push(new MainTableCell(['да', 'да']))
        }
        data.push(thirdRow)

        const fourthRow = [
            new MainTableCell(['Доп. режимы', body]),
            new MainTableCell([]),
            new MainTableCell([]),
            new MainTableCell(['Насос 802'], 2, true),
            new MainTableCell(['да', 'нет'], 1, true, true, true, true),
            new MainTableCell([]),
            new MainTableCell(['Насос 163'], 2, true),
            new MainTableCell(['нет', 'нет']),
            new MainTableCell([]),
            new MainTableCell(['Насос 13'], 2, true),
            new MainTableCell(['нет', 'нет']),
            new MainTableCell([])
        ]

        data.push(fourthRow)

        return data
    })()

    const renderSelect = trKey =>
        trKey === 3
            ? <td colSpan="3">
                <div style={{ display: 'flex' }}>
                    <span className="main-table__cell--bold">Насос 15</span>
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
            : ''

    const renderCell = (idx, el) => {
        const boldHighlight = el.boldHighlight
            ? 'main-table__cell--bold' : ''

        const className = (() => {
            const content = 'main-table__cell__content'
            const title = idx === 0 ? 'main-table__title' : ''
            const colorHighlight = el.colorHighlight ? 'main-table__cell--color-highlight' : ''
            const backgroundHighlight = el.backgroundHighlight
                ? 'main-table__cell--background-danger'
                : ''

            return `${content} ${title} ${colorHighlight} ${boldHighlight} ${backgroundHighlight}`
        })()

        const border = el.borderHighlight
            ? 'main-table__cell--border' : ''

        return <div className={ border }>
            <span className={ className }>{ el.data[0] }</span>
            <span className={ boldHighlight }>{ el.data[1] }</span>
        </div>
    }

    const tbodyBottomRow = (() =>
        <tr>
            <td colSpan="18" className="main-table__title">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span>10:15</span>
                        <span>Рекомендация обновлена</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <span>Посмотреть историю</span>
                        <DropdownButton
                            className="main-table__btn--rounded"
                            variant="outline-dark"
                            drop="right"
                            size="sm"
                            title=""
                        >
                            <Dropdown.Item as="button">1</Dropdown.Item>
                            <Dropdown.Item as="button">2</Dropdown.Item>
                            <Dropdown.Item as="button">3</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </td>
        </tr>
    )()

    return (
        <div>
            <Table className="main-table" size="sm" striped borderless>
                <thead className="main-table__title">
                    { theadRow }
                </thead>
                <tbody>
                    { tbodyData
                        .map((el, trKey) =>
                            <tr key={ trKey }>
                                { el.map((el, key) =>
                                    <td
                                        colSpan={ el.colSpan }
                                        className={ cellClassName(key, trKey) }
                                        key={ key }
                                        style={{ margin: '0 10px !important' }}
                                    >
                                        { renderCell(key, el) }
                                    </td>)
                                }
                                { renderSelect(trKey) }
                            </tr>)
                    }
                    { tbodyBottomRow }
                </tbody>
            </Table>
        </div>
    );
}

export default AppMainTable;
