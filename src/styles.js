import styled from "styled-components";
export const styles = {
  CardFlex: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,

  CardContainer: styled.div`
    border: 1px solid #ccc;
    margin-left: 10px;
    margin-top: 5px;
    border-radius: 4px;
    max-width: 30%;
    text-align: center;
  `,

  CardTitle: styled.p`
    font-weight: bold;
  `,

  CardText: styled.p`
    font-size: 16px;
    margin-bottom: 5px;
  `,

  AbilitiesList: styled.ul`
    text-align: start;
    justify-content: center;
    overflow: hidden;
  `,

  AbilityItem: styled.li`
    font-size: 14px;
  `,

  CardImage: styled.img`
    width: 100%;
  `,
  CardInput: styled.input`
    width: 50%;
    height: 50px;
    color: white;
  `,
  CardButton: styled.button`
    width: 20%;
    height: 50px;
  `,
};
