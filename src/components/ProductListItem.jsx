import styled from 'styled-components'

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: dodgerblue;

    &:hover
    {
        cursor: pointer;
    }
`;

const Btn = styled.button`
    
`;

function ProductListItem()
{
    return (
        <Box>
            Produkt List Ajtem :)
            <Btn>Tryckmig</Btn>
        </Box>
    );
}

export default ProductListItem;