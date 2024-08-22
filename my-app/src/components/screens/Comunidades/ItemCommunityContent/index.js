import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ItemCommunity from "../ItemCommunity";
import { getCommunitiesWithToken } from "../../../../services/community_api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AlertMsg from "../../../auxiliary/AlertMsg";

export default function ItemCommunityContent({ setVisibleIndicator }) {
  const [communityList, setCommunityList] = useState([]);

  async function getCommunities() {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getCommunitiesWithToken(token);
      if (response !== undefined) {
        setCommunityList(response);
        setVisibleIndicator(false);
      } else {
        AlertMsg("Não retornou a lista de comunidades.");
      }
    } catch (error) {
      AlertMsg("Não retornou a lista de avisos.", error);
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
