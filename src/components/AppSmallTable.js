import React from 'react';
import Table from 'react-bootstrap/Table'
import '../styles/AppSmallTable.scss'

const AppSmallTable = () => {
    const tbodyRows = (() => {
        const data = [
            {
                title: 'Г',
                data: [20, 20]
            },
            {
                title: 'Ю',
                data: [10, 15]
            },
            {
                title: 'З',
                data: [25, 35]
            },
            {
                title: 'С',
                data: [40, 25]
            },
            {
                title: 'Э 48',
                data: [5, 5]
            }
        ]

        return data.map((el, key) =>
            <tr key={ key }>
                <td className="small-table__col">
                    <p>{ el.title }</p>
                </td>
                {
                    el.data
                        .map((el, key) =>
                            <td
                                className="small-table__col small-table__col--highlighted"
                                key={ key }
                            >
                                <p>{ el }</p>
                            </td>)
                }
            </tr>
        )
    })()

    return (
        <div className="small-table">
            <span className="small-table__title">Характеристики руды, %</span>
            <Table>
                <thead className="small-table__head">
                    <tr>
                        <td className="small-table__col">
                            <p>ПО</p>
                        </td>
                        <td className="small-table__col small-table__col--highlighted">
                            <p className="small-table__col__hint">текущее</p>
                            <p>63,97</p>
                        </td>
                        <td className="small-table__col small-table__col--highlighted">
                            <p className="small-table__col__hint">через 1 час</p>
                            <p>64,23</p>
                        </td>
                    </tr>
                </thead>
                <tbody className="small-table__body">
                    { tbodyRows }
                    <tr>
                        <td className="small-table__col">
                            <p>...</p>
                        </td>
                        <td className="small-table__col small-table__col--highlighted">
                            <p>-</p>
                        </td>
                        <td className="small-table__col small-table__col--highlighted">
                            <p>-</p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AppSmallTable;
