import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import ItemCommunity from "../ItemCommunity";
import { getCommunitiesWithToken } from "../../../../services/community_api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalContext } from "../../../../contexts/modalContext";

export default function ItemCommunityContent({ setVisibleIndicator }) {
  const [communityList, setCommunityList] = useState([]);
  const { modalAlert } = useContext(ModalContext);

  async function getCommunities() {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getCommunitiesWithToken(token);
      if (response !== undefined) {
        setCommunityList(response);
        setVisibleIndicator(false);
      } else {
        throw new Error("Não foi possível retornar a lista de comunidades.");
      }
    } catch (error) {
      modalAlert("Ops!", error.message);
    }
  }

  useEffect(() => {
    getCommunities();
  }, []);

  return (
    <View>
      {communityList.map((c, idx) => (
        <ItemCommunity
          patron={c.patron}
          location={c.location}
          key={`community-item-${idx}`}
        />
      ))}
    </View>
  );
}
