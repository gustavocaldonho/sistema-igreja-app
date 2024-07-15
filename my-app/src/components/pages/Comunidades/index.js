import React from "react";
import PageBase from "../PageBase";
import BoxSearch from "../../auxiliary/BoxSearch";
import ItemCommunityContent from "./ItemCommunityContent";

export default function Comunidades({ navigation }) {
  return (
    <PageBase title={"Comunidades"} signButtonAdd={true}>
      <BoxSearch />
      <ItemCommunityContent />
    </PageBase>
  );
}
