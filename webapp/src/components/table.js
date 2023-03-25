import * as React from 'react';

export default function Table(props) {
    const { items } = props;
    
    return (
        <table>
            <tbody>
                {items.data.results.map(item => {
                    return (
                        <tr key={item.id}>
                            <td><img alt={item.name} src={item.image} /></td>
                            <td>{item.name}</td>
                            <td>{item.status}</td>
                            <td>{item.species}</td>
                            <td>{item.type}</td>
                        </tr>
                    )
                })};
            </tbody>
        </table>
    )
}