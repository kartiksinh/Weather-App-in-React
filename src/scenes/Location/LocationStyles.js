import styled from 'styled-components';

export const WeatherDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    box-shadow: 0 3px 6px 0 #555;
    padding: 20px 10px;
    border-radius: 4px;
    width: 380px;
    background: white;
    font-family: montserrat;
`;

export const AppLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
`;

export const Condition = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 30px auto;
`;

export const WeatherLogo = styled.img`
   width: 100px;
   height: 100px;
   margin: 5px auto;
`;

export const Temperature = styled.div`
   margin: 20px auto;
   font-size: 14px;
   & span{
       font-size: 28px;
   }
`;

export const LocationCity = styled.span`
    font-size: 28px;
    font-weight: bold;
`;

export const H2 = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin: 20px 25px 10px;
    text-align: start;
    width: 90%;
`;

export const H5 = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin: 20px 25px 10px;
    text-align: start;
    width: 90%;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
