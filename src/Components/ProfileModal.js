import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { ProfileConetxt } from "../ProfileContext";
import { UserContext } from "../UserContext";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.open === true ? "flex" : "none")};
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;
`;

const Modal = styled.div`
  width: 20%;
  padding: 2em;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  position: absolute;
  z-index: 2;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(255, 0, 0, 0.7);
  font-size: 1em;
  padding: 10px;
  outline: none;
  z-index: 1;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.position === true ? `0%` : `50%`)};
  transform: translateY(-50%);
  left: 0;
  color: red;
  font-size: ${(props) => (props.position === true ? `12px` : `14px`)};
  z-index: 2;
  transition: all 0.3s ease-in-out;
`;

const Inputs = styled.div`
  position: relative;
`;

const Avatars = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  img {
    width: 4em;
    height: 4em;
    cursor: pointer;
  }
`;

const ProfileModal = () => {
  const [position, setPosition] = useState(false);
  const [value, setValue] = useState("");

  const { open, dispatch } = useContext(ProfileConetxt);

  const { avatar } = useContext(ProfileConetxt);

  const { username } = useContext(UserContext);

  const AvatarImage = [
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviOG6uGtnghbCeHEZQmBH1HTOqP07nvNYlXL2KBFCEE61w3Defy_jtsiMpTWy7Q2A2cQ&usqp=CAU",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
    "https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg",
  ];

  const handleClick = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    if (value === "") {
      setPosition(false);
    } else {
      setPosition(true);
    }
  };

  const handleAvatar = async (e) => {
    dispatch({
      type: "ADD_PROFILES",
      payload: { name: value, image: e.target.src },
    });
  };

  return (
    <Container open={open}>
      <Modal>
        <form>
          <FontAwesomeIcon
            style={{ position: "absolute", top: "20px", right: "20px" }}
            icon={faClose}
            onClick={() => handleClick()}
          />
          <Inputs onClick={() => setPosition(true)}>
            <Label position={position}>Avatar Name</Label>
            <Input
              type="text"
              value={value}
              onChange={(e) => handleChange(e)}
              onBlur={() => handleBlur()}
            />
          </Inputs>

          <Avatars>
            {AvatarImage.map((item, index) => (
              <img src={item} key={index} onClick={(e) => handleAvatar(e)} />
            ))}
          </Avatars>
        </form>
      </Modal>
    </Container>
  );
};

export default ProfileModal;
