import React, { useState } from "react";
import PageBase from "../PageBase";
import ItemUserContent from "./ItemUserContent";
import LoadingIndicator from "../../auxiliary/LoadingIndicator";

export default function Users({ navigation }) {
  const [visibleIndicator, setVisibleIndicator] = useState(false);
  return (
    <PageBase title={"Usuários"}>
      {visibleIndicator ? <LoadingIndicator /> : ""}
      <ItemUserContent
        navigation={navigation}
        setVisibleIndicator={setVisibleIndicator}
      />
    </PageBase>
  );
}
