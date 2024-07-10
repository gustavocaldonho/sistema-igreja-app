import React, { useContext } from "react";
import PageBase from "../PageBase";
import BoxSearch from "../BoxSearch";
import ItemUserContent from "./ItemUserContent";
import { AuthContext } from "../../contexts/auth";

export default function Users({ navigation }) {
  const { userList } = useContext(AuthContext);

  return (
    <PageBase title={"Usuários"}>
      <BoxSearch />
      <ItemUserContent navigation={navigation} userList={userList} />
    </PageBase>
  );
}
