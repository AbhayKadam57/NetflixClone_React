import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfileModal from "../Components/ProfileModal";
import { ProfileConetxt } from "../ProfileContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserContext } from "../UserContext";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  background-color: #1a1a1a;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Profile = styled.div`
  height: 15em;
  width: 15em;
  background-color: red;
  overflow: hidden;
  border-radius: 1em;

  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background-color: rgba(59, 59, 59, 0.86);
    font-weight: 600;
    padding: 5px 8px;
    border-radius: 5px;
    display: none;
    transition: all 1s ease;
  }

  img {
    width: 100%;
    height: 100%;
    transform: scale(1.1);
    transition: all 0.5s;
  }

  &:hover {
    img {
      transform: scale(1);
      cursor: pointer;
    }

    div {
      display: block;
    }
  }
`;

const Plus = styled.div`
  width: 15em;
  height: 15em;
  border: 20px solid white;
  border-radius: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;

const Profiles = () => {
  const { dispatch } = useContext(ProfileConetxt);

  const { username } = useContext(UserContext);

  const { avatar, selected } = useContext(ProfileConetxt);

  // const [avatars, setAvatars] = useState([]);

  console.log(selected);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "users", username.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().avatar);
        console.log("Document data:", docSnap.data().selected);

        dispatch({ type: "LOAD_PROFILES", payload: docSnap.data() });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getData();
  }, []);

  // useEffect(() => {
  //   const setData = async () => {
  //     await setDoc(doc(db, "users", username.uid), {
  //       avatar: avatar,
  //     });
  //   };

  //   if (avatar.length > 0) {
  //     setData();
  //   }
  // }, [avatar]);

  const handleClick = async (item) => {
    dispatch({ type: "CHOOSE", payload: item });

    await setDoc(doc(db, "users", username.uid), {
      selected: selected,
    });
  };

  return (
    <Wrapper>
      <Navbar />
      <Container>
        {avatar?.length > 0 &&
          avatar?.map((item, index) => (
            <Link to="/home" key={index} onClick={() => handleClick(item)}>
              <Profile>
                <img src={item.image} />
                <div>{item.name}</div>
              </Profile>
            </Link>
          ))}

        <Plus onClick={() => dispatch({ type: "OPEN_MODAL" })}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: "12em" }} />
        </Plus>
      </Container>
      <ProfileModal />
    </Wrapper>
  );
};

export default Profiles;
