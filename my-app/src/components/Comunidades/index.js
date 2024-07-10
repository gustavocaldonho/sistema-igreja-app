import React from "react";
import PageBase from "../PageBase";
import BoxSearch from "../BoxSearch";
import ItemCommunity from "./ItemCommunity";

export default function Comunidades(props) {
  return (
    <PageBase title={"Comunidades"} signButtonAdd={true}>
      <BoxSearch />
      <ItemCommunity
        patron={"São Geraldo Magela"}
        location={"Sapucaia"}
        navigation={props.navigation}
      />
      <ItemCommunity
        patron={"Nossa Senhora das Graças"}
        location={"Paul de Graça Aranha"}
        navigation={props.navigation}
      />
      <ItemCommunity
        patron={"Nossa Senhora Auxiliadora"}
        location={"Marilândia-ES"}
        navigation={props.navigation}
      />
    </PageBase>
  );
}
