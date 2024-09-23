import {
    MasterWrapper,
    FilterByName,
    AddApplicationButton,
    AddApplication,
} from "./styles";

export const FilterSection = () => {
    return (
        <MasterWrapper>
            <FilterByName placeholder="Search..."></FilterByName>
            <AddApplicationButton>
                <AddApplication src="plus_icon.png" />
            </AddApplicationButton>
        </MasterWrapper>
    );
};
