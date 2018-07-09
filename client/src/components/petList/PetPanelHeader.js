import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const PetPanelHeader = ({searchAction, sortAction}) => {

    const handleChange = (event, index, value) => {
        sortAction.onSort(value);
    };


    return (
        <div className='pet-panel-header'>
            <div className='pet-panel-title'>
                <img className='foot-icon' src='./images/icon/foot.png' alt='foot-icon'/>
                Pets' Details
            </div>
            <div className='pet-panel-sort'>
                <DropDownMenu value={sortAction.sortContent.sortBy} onChange={handleChange} disabled={sortAction.sortContent.disabled}>
                    <MenuItem value='name' primaryText="Sort by name"/>
                    <MenuItem value='species' primaryText="Sort by species"/>
                </DropDownMenu>
            </div>
            <div className='pet-panel-search'>
                <AutoComplete
                    searchText={searchAction.searchContent.searchText}
                    onUpdateInput={searchAction.updateSearch}
                    hintText="Search by breed name"
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={searchAction.searchContent.breedDataSource}
                    maxSearchResults={5}
                    onNewRequest={searchAction.onSearch}
                />
            </div>
        </div>)
};

export default PetPanelHeader;
