import * as React from 'react';
import { Text,Button } from 'react-native-paper';
import {View, StyleSheet} from "react-native";
// import SideBarComponents from "@/app/(tabs)/components/SideBarComponents";

export default function ProjectContent({saveProjectList, onNewProject}){
    const listProject = saveProjectList;
    return (
        <>
            {listProject.map((project) => (
                <View key={project.id} styles={styles.container}>
                    <Text variant="bodyLarge" styles={styles.container}>{project.title}</Text>
                    <Text variant="bodyLarge">{project.description}</Text>
                    <Text variant="bodyLarge">{project.date}</Text>
                </View>
            ))}
            <Button mode='contained' style={{marginTop : 20}} onPress={onNewProject}> Isi Project baru</Button>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 40,
        marginTop: 40,
    }
})
