import React from 'react';
import Species from './Species';
import PropTypes from "prop-types";

const SpeciesList = ({species, toggleSpecies, speciesFilter}) => (
    <div className="species-list">
        <Species
            onClick={() => toggleSpecies("ALL")}
            key="ALl"
            name="ALL"
            picUrl="./images/icon/foot.png"
            selectedFilter={speciesFilter}/>
        {!species || species.map(s =>
            <Species
                onClick={() => toggleSpecies(s.name)}
                key={s.name}
                {...s}
                selectedFilter={speciesFilter}
            />
        )}
    </div>
);
SpeciesList.propTypes = {
    species: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        picUrl: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleSpecies: PropTypes.func.isRequired
};
export default SpeciesList;
