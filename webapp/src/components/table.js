import * as React from 'react';
import MoreInfoModal from './moreInfoModal' ;

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleInfo, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

import {styledTable, styledTableHeader, styledTableBody, styledTableRow, styledTableImage, moreInfoButton} from './table.style'

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
            <table style={styledTable}>
                <thead style={styledTableHeader}>
                    <tr>
                        <td></td>
                        <td><b>Name</b></td>
                        <td><b>Status</b></td>
                        <td><b>Specie</b></td>
                        <td><b>Type</b></td>
                        <td><b>More Info</b></td>
                    </tr>
                </thead>
                <tbody style={styledTableBody}>
                    {search === '' ? items.data.results.map(item => {
                        return (
                            <tr key={item.id}>
                                <td><img style={styledTableImage} alt={item.name} src={item.image} /></td>
                                <td>{item.name}</td>
                                <td>{item.status === 'Alive' ? (<FontAwesomeIcon icon={faToggleOn} />) :  (<FontAwesomeIcon icon={faToggleOff} />)}</td>
                                <td>{item.species}</td>
                                <td>{item.type}</td>
                                <td>
                                    <button style={moreInfoButton} onClick={() => handleShowMoreInfo(item)}>
                                        <FontAwesomeIcon icon={faCircleInfo}>More Info</FontAwesomeIcon>
                                    </button>
                                </td>
                            </tr>
                        )
                    }) : items.data.results.filter(item => {return item.name.includes(search)}).map(item => {
                        return (
                            <tr key={item.id}>
                                <td><img style={styledTableImage} alt={item.name} src={item.image} /></td>
                                <td>{item.name}</td>
                                <td>{item.status === 'Alive' ? (<FontAwesomeIcon icon={faToggleOn} />) :  (<FontAwesomeIcon icon={faToggleOff} />)}</td>
                                <td>{item.species}</td>
                                <td>{item.type}</td>
                                <td>
                                    <button style={moreInfoButton} onClick={() => handleShowMoreInfo(item)}>
                                        <FontAwesomeIcon icon={faCircleInfo}>More Info</FontAwesomeIcon>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {showModal && <MoreInfoModal selectedItem={selectedItem} showModal={showModal} setShowModal={setShowModal} />}
            </>
        )
    }

    if(items.areLocations === true) {
        return (
            <table style={styledTable}>
                <thead style={styledTableHeader}>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Dimension</b></td>
                        <td><b>Type</b></td>
                    </tr>
                </thead>
                <tbody style={styledTableBody}>
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
            <table style={styledTable}>
                <thead style={styledTableHeader}>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Episode</b></td>
                        <td><b>Air Date</b></td>
                    </tr>
                </thead>
                <tbody style={styledTableBody}>
                    {search === '' ? items.data.results.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.episode}</td>
                                <td>{item.air_date}</td>
                            </tr>
                        )
                    }) : items.data.results.filter(item => item.name.includes(search) ).map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.episode}</td>
                                <td>{item.air_date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}