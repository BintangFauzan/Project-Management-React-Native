import {Button, Text, View,  StyleSheet,} from "react-native";
import React from "react";

export default function DrawerContentComponents({ onCloseDrawer, listProjects }) {
    return (
      <>
          {listProjects.map(project => (
              <View style={[styles.container, styles.navigationContainer]} key={project.id}>
                  <Text style={styles.paragraph}>{project.title}</Text>
              </View>
          ))}
          <Button title="Close drawer" onPress={onCloseDrawer} />
      </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1',
    },
})
