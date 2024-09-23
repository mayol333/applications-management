import styled from "styled-components";
import { TestTable } from "../../TestTable";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

export const Headlines = styled.div`
    background-color: ${({ theme }) => theme.colors.gray};
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export const CompanyName = styled.p`
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Date = styled.p`
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Salary = styled.p`
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const AppStatus = styled.p`
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const ApplicationsList = styled.table`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: ${({ theme }) => theme.borderRadius};
    display: flex;
    flex-direction: column;
`;

export const Application = styled.li`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.backgrounds.listEven};
    }
`;

export const ListSection = () => {
    return (
        <Wrapper>
            {/* <Headlines>
                <CompanyName>Company</CompanyName>
                <Date>Date</Date>
                <Salary>Possible Salary</Salary>
                <AppStatus>Status</AppStatus>
            </Headlines>
            <ApplicationsList>
                <Application>
                    <CompanyName>Company</CompanyName>
                    <Date>Date</Date>
                    <Salary>Possible Salary</Salary>
                    <AppStatus>Status</AppStatus>
                </Application>
                
            </ApplicationsList> */}
            <TestTable />
        </Wrapper>
    );
};
