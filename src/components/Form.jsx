import styled from "@emotion/styled";

export const Form = styled.form`
  max-width: 40rem;
  width: 95%;
  margin: ${(props) => (props.margin ? props.margin : "5rem auto 0 auto")};
  border-color: black;
`;

export const SubmitButton = styled.button`
  padding: 1.5rem;
  background-color: light blue;
  width: 300px;
  border: 1px solid rgba(10, 7, 7, 0.7);
  // border-radius: 1rem;
  text-align: center;
  margin-top: 80px;
  span {
    margin: 0;
    color: black;
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Inconsolata", monospace;
  }

  span:after {
    position: absolute;
    content: "";
    width: 0%;
    height: 3px;
    background-color: black;
    left: 50%;
    bottom: -5px;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
  }

  &:hover span:after {
    width: 100%;
    left: 0;
  }
`;

export const SubmitButtonDeploy = styled.button`
  padding: 1.5rem;
  background-color: rgb(200, 255, 136);
  width: 300px;
  border: 1px solid rgba(10, 7, 7, 0.7);
  // border-radius: 1rem;
  text-align: center;
  margin-top: 80px;
  span {
    margin: 0;
    color: black;
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Inconsolata", monospace;
  }

  span:after {
    position: absolute;
    content: "";
    width: 0%;
    height: 3px;
    background-color: black;
    left: 50%;
    bottom: -5px;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
  }

  &:hover span:after {
    width: 100%;
    left: 0;
  }
`;
