import React, { useContext } from "react";
import { View } from "react-native";
import ItemCommunity from "../ItemCommunity";
import { AuthContext } from "../../../../contexts/auth";

export default function ItemCommunityContent({}) {
  const { communityList } = useContext(AuthContext);

  return (
    <View>
      {communityList.map((c, idx) => (
        <ItemCommunity
          id={c.id}
          patron={c.patron}
          location={c.location}
          key={`community-item-${idx}`}
        />
      ))}
    </View>
  );
}
