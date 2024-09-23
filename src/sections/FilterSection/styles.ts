import styled from "styled-components";

export const MasterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 1200px;
    justify-content: space-between;
    margin: 0 auto;
`;

export const FilterByName = styled.input`
    width: 200px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 5px;
`;

export const AddApplicationButton = styled.button`
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

export const AddApplication = styled.img`
    height: 40px;
    width: 40px;
`;
