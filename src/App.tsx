import { styled } from "styled-components";
import { FilterSection } from "./sections/FilterSection/FilterSection";
import { ListSection } from "./sections/ListSection/ListSection";

const Section1 = styled.section`
    height: 100px;
    background-color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 40px;
`;
const Section2 = styled.section`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const App = () => {
    return (
        <>
            <Section1>
                <FilterSection></FilterSection>
            </Section1>
            <Section2>
                <ListSection></ListSection>
            </Section2>
        </>
    );
};
