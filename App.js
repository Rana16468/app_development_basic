import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

export default function App() {
  const [name, setName] = useState("A M Sohel Rana");
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          Ali Mohammad Sohel Rana
        </Text>

        {/* button section, with state handeling  */}
        <Text>{name}</Text>
        <Button
          title="Chnage The Name "
          onPress={() => setName("Ali Mohammad Rana Sohel")}></Button>
        <Header title="Hey Softwere Engineer , How Are You" />
        <Text style={{ color: "red", textTransform: "uppercase" }}>
          The Quick Brown Fox Jumps Over the Lazy Dog
        </Text>
        <Image
          style={{ height: 200, width: 200 }}
          source={require("./src/assets/fast_office.png")}
        />
        <Image
          style={{ height: 200, width: 200 }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVhjAnuHwzrqnVn-1F4Wz7cP3GCdeBx-NxQ&s",
          }}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          quibusdam autem, omnis non porro quos magni ipsa iure libero
          consequatur fugit dicta? Quos quo odio soluta culpa repudiandae
          voluptatibus animi id exercitationem accusamus aliquid, porro amet
          deleniti rem fuga veniam nihil
        </Text>
        <Text>
          sunt sapiente nobis maiores doloribus non commodi aliquam.
          Consequuntur fugiat tempore suscipit, asperiores explicabo natus,
          dolore at pariatur odio quasi consectetur assumenda officia beatae
          omnis deserunt sint culpa eveniet nesciunt? Ex odio nostrum natus
          minus! Magni officia reiciendis odio nemo, ratione sequi doloribus
          beatae eius facilis iure natus tempora saepe maxime vitae dolores quo
          reprehenderit fuga. Necessitatibus rem beatae consequatur, voluptate
          porro eaque est delectus odio perferendis recusandae magni doloribus
          soluta eveniet expedita accusamus non illo provident blanditiis nulla
          possimus iste nam quaerat reprehenderit! Qui officiis illum voluptatem
          officia animi culpa ratione ducimus assumenda porro doloribus
          reiciendis, aliquid vitae optio esse aliquam facilis ea quae expedita
          placeat mollitia maiores molestiae! Provident iusto quia quibusdam.
        </Text>
        <Text style={styles.text_container}>
          Repudiandae dolorum odio nam doloremque repellat aspernatur id
          praesentium veniam quisquam ex eaque dolores, autem veritatis
          voluptatem accusamus minus vel minima, nemo atque? Architecto
          accusamus possimus incidunt dolore? Sint, voluptates? Consequuntur
          nemo quisquam sed incidunt optio aliquam est, in nobis atque
          cupiditate dolorum reiciendis magnam.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text_container: {
    width: 200,
    backgroundColor: "red",
    margin: 10,
  },
});

function Header(props) {
  const { title } = props;
  return (
    <View>
      <Text>{title}</Text>
      <Text>My Header Components</Text>
    </View>
  );
}
