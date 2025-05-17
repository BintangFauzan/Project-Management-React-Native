import React, { useRef, useState } from 'react';
import MainContent from '../components/MainContent';
import ProjectContent from "../components/ProjectContent";
import DrawerContentComponents from "@/app/(tabs)/components/subComponents/DrawerContentComponents";
import {Button} from 'react-native-paper'
import {
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
} from 'react-native';

export default function SideBarComponents({}) {
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');
    const [saveDataProject,setSaveDataProject] = useState([]);
    const [contentVisible, setContentVisible] = useState(false);

    let inputProject = <MainContent onSavePro={handleSaveDataProject}/>

    function handleSaveDataProjectAgain(){
        setContentVisible(false)
    }

    // @ts-ignore
    function handleSaveDataProject(newProjectData) {
        // @ts-ignore
        setSaveDataProject((prevState) => [...prevState,{...newProjectData, id:Math.random().toString(36).substr(2, 10)}]);
        setContentVisible(true);
    }

    if (contentVisible === true) {
        inputProject = <ProjectContent saveProjectList={saveDataProject} onNewProject={handleSaveDataProjectAgain}/>
    }

    console.log("Save Data: ",saveDataProject);

    //const drawerContent =  <DrawerContentComponents onCloseDrawer={() => drawer.current?.closeDrawer()}/>;


    const changeDrawerPosition = () => {
        setDrawerPosition(drawerPosition === 'left' ? 'right' : 'left');
    };

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => <DrawerContentComponents onCloseDrawer={() => drawer.current?.closeDrawer()} listProjects={saveDataProject}/>}
        >
            {inputProject}
          <View style={styles.container}>
              <Button
                  onPress={() => drawer.current?.openDrawer()}
                  mode='contained'
              >
                  Side menu
              </Button>
          </View>
        </DrawerLayoutAndroid>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop : 30,
        alignContent: 'center',
    },
});
