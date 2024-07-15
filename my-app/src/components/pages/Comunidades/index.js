import React, { useState } from "react";
import { View } from "react-native";
import PageBase from "../PageBase";
import BoxSearch from "../../auxiliary/BoxSearch";
import ItemCommunityContent from "./ItemCommunityContent";
import ModalCommunity from "./ModalCommunity";

export default function Comunidades({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  function OnPressButtonAdd() {
    setModalVisible(!modalVisible);
  }

  return (
    <PageBase
      title={"Comunidades"}
      signButtonAdd={true}
      onPressAdd={OnPressButtonAdd}
    >
      {modalVisible ? (
        <ModalCommunity
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        <View>
          <BoxSearch />
          <ItemCommunityContent />
        </View>
      )}
    </PageBase>
  );
}
