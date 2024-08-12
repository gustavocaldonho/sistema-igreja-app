import React from "react";
import PageBase from "../PageBase";
import BoxSearch from "../../auxiliary/BoxSearch";
import ItemUserContent from "./ItemUserContent";

export default function Users({ navigation }) {
  return (
    <PageBase title={"Usuários"}>
      <BoxSearch />
      <ItemUserContent navigation={navigation} />
    </PageBase>
  );
}
