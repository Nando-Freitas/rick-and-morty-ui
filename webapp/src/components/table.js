import * as React from 'react';
import MoreInfoModal from './moreInfoModal';

export default function Table(props) {
    const { items, search } = props;

    const [showModal, setShowModal] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);

    const handleShowMoreInfo = (item) => {
        setSelectedItem(item);
        setShowModal(true);
      }
    
    if(items.areCharacters === true){
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Specie</td>
                        <td>Type</td>
                        <td>More Info</td>
                    </tr>
                </thead>
                <tbody>
                    {search === '' ? items.data.results.map(item => {
                        return (
                            <tr key={item.id}>
                                <td><img alt={item.name} src={item.image} /></td>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td>{item.species}</td>
                                <td>{item.type}</td>
                                <td><button onClick={() => handleShowMoreInfo(item)}>More Info</button></td>
                            </tr>
                        )
                    }) : items.data.results.filter(item => {return item.name.includes(search)}).map(item => {
                        return (
                            <tr key={item.id}>
                                <td><img alt={item.name} src={item.image} /></td>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td>{item.species}</td>
                                <td>{item.type}</td>
                                <td><button onClick={() => handleShowMoreInfo(item)}>More Info</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {showModal && <MoreInfoModal selectedItem={selectedItem} showModal={showModal} setShowModal={setShowModal} />}</>
        )
    }

    if(items.areLocations === true) {
        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Dimension</td>
                        <td>Type</td>
                    </tr>
                </thead>
                <tbody>
                    {search === '' ? items.data.results.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.dimension}</td>
                                <td>{item.type}</td>
                            </tr>
                        )
                    }) : items.data.results.filter(item => {return item.name.includes(search)}).map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.dimension}</td>
                                <td>{item.type}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
    
    if(items.areEpisodes === true) {
        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Episode</td>
                        <td>Created At</td>
                        <td>Air Date</td>
                    </tr>
                </thead>
                <tbody>
                    {search === '' ? items.data.results.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.episode}</td>
                                <td>{item.created}</td>
                                <td>{item.air_date}</td>
                            </tr>
                        )
                    }) : items.data.results.filter(item => item.name.includes(search) ).map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.episode}</td>
                                <td>{item.created}</td>
                                <td>{item.air_date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}