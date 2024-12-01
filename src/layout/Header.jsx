import styled from "styled-components";
import AppsIcon from "../assets/AppsIcon.png";
import TrelloIcon from "../assets/TrelloIcon.png";
import NotificationIcon from "../assets/NotificationIcon.png";
import InformationIcon from "../assets/InformationIcon.png";
import AccountCircleIcon from "../assets/AccountCircleIcon.png";
import ContrastIcon from "../assets/ContrastIcon.png";

export default function Header() {
  return (
    <MainHeader>
      <Apps src={AppsIcon} alt="appsIcon" />

      <TrelloLogo src={TrelloIcon} alt="trelloIcon" />

      <TrelloText>Trello</TrelloText>

      <HeaderInput type="text" placeholder="Поиск" />

      <NotificationLogo src={NotificationIcon} alt="" />

      <InformationLogo src={InformationIcon} alt="" />

      <ContrastLogo src={ContrastIcon} alt="" />

      <AccountCircleLogo src={AccountCircleIcon} alt="" />
    </MainHeader>
  );
}

const MainHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1d2025;
`;

const Apps = styled.img`
  width: 24px;
  height: 24px;
  margin: 12px;
`;

const TrelloLogo = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 0px 14px 0px;
  background-color: #1d2025;
`;

const TrelloText = styled.p`
  display: flex;
  font-weight: bold;
  font-size: 25px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #a2acba;
  margin-left: 75px;
  margin-top: -43px;
`;

const HeaderInput = styled.input`
  display: flex;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #656c77;
  padding-left: 15px;
  margin: -30px 0px 0px 75%;
  background-color: #1d2025;
`;

const NotificationLogo = styled.img`
  display: flex;
  width: 25px;
  height: 25px;
  margin: -30px 0px 14px 1390px;
`;

const InformationLogo = styled.img`
  display: flex;
  width: 25px;
  height: 25px;
  margin: -39px 0px 14px 1425px;
`;

const ContrastLogo = styled.img`
  display: flex;
  width: 25px;
  height: 25px;
  margin: -39px 0px 14px 1465px;
`;

const AccountCircleLogo = styled.img`
  display: flex;
  width: 27px;
  height: 27px;
  margin: -41px 0px 14px 1500px;
`;
