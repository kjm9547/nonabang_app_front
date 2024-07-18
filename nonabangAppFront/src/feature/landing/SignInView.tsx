import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { COLOR } from "../../colors/colors"
import { LoginButton } from "../../components/LoginButton"
import { useCallback, useMemo, useRef, useState } from "react"

import BottomSheet, {
    BottomSheetFlatList,
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BackDropView } from "./bottommodal/BackDropView";
import { ModalSignUpView } from "./bottommodal/ModalSignUpView";
export const SignInView = () => {
    const [isExpanded, setIsExpanded] = useState(false);//필름뷰의 투명도 조절 모달이 올라온 경우 뒤에 필름 씌우기
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['10%', '93%'], []);
    const data = useMemo(
        () =>
            Array(1)
                .fill(0)
                .map((_, index) => `index-${index}`),
        []
    );
    // callbacks
    const handlePresentModalPress = useCallback(() => {
        setIsExpanded(true)
        bottomSheetModalRef.current?.expand();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const handleClosePress = useCallback(() => {
        setIsExpanded(false)
        bottomSheetModalRef.current?.close();
    }, []);
    const ModalHeader = () => {
        return (
            <View style={{
                borderBottomWidth:1,
                width:"90%",
                height: 65,
                alignSelf:"center",
                justifyContent: "center",
                alignItems:"center",
                paddingHorizontal: 10,
                borderColor:COLOR.BORDERSHADOW_BLACK
            }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>회원가입</Text>
            </View>
        )
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <BottomSheet
                    ref={bottomSheetModalRef}
                    index={-1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    backgroundStyle={{ backgroundColor: COLOR.BACKGROUND_WHITE_DOWN }}
                    backdropComponent={() => {
                        return (
                            <BackDropView
                                handlePresentModalPress={handlePresentModalPress}
                                isExpanded={isExpanded}
                            />)
                    }}>
                    <BottomSheetFlatList
                        data={data}
                        keyExtractor={(i) => i}
                        renderItem={() => { return (<ModalSignUpView handleClosePress={handleClosePress} />) }}
                        ListHeaderComponent={ModalHeader}>
                    </BottomSheetFlatList>
                </BottomSheet>

            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.MAIN_ORANGE
    },
    inputBox: {
        borderWidth: 1,
        width: "70%",
        height: 50,
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 15,
        paddingLeft: 20,
        marginBottom: 8
    },

})