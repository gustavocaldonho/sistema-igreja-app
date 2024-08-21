import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import ItemCommunity from "../ItemCommunity";
import { AuthContext } from "../../../../contexts/auth";
import { getCommunitiesWithToken } from "../../../../services/community_api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ItemCommunityContent({ setVisibleIndicator }) {
  const [communityList, setCommunityList] = useState([]);

  async function getCommunities() {
    try {
      setVisibleIndicator(true);
      const token = await AsyncStorage.getItem("AccessToken");
      const response = await getCommunitiesWithToken(token);
      setCommunityList(response);
      setVisibleIndicator(false);
    } catch (error) {
      console.log(error);
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
