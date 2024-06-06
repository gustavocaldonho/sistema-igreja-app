import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import ScreenBase from "../ScreenBase";
import ButtonAdd from "../ButtonAdd";

export default function CaixaMortuaria({ navigation }) {
  const [valorCaixaMortuaria, setValorCaixaMortuaria] = useState("");
  const [codPix, setCodePix] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            <View style={styles.boxItem}>
              <View style={styles.boxTop}>
                <View style={styles.boxStatus}>
                  <Text style={styles.textStatus}>Aguardando Pagamento</Text>
                </View>
                <View style={styles.boxYear}>
                  <Text style={styles.textYear}>2024</Text>
                </View>
              </View>
              <View style={styles.boxMiddle}>
                <Text style={styles.textValue}>R$ 50,00</Text>
              </View>
              <View style={styles.boxBottom}>
                <View style={styles.boxObs}>
                  <Text style={styles.textObs}>Vencimento em 30/09/2024</Text>
                </View>
                <View style={styles.boxPayButton}>
                  <TouchableOpacity style={styles.payButton}>
                    <Text style={styles.textPayButton}>Copiar Código</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScreenBase>
        <ButtonAdd />
      </View>
    </View>
  );
}
