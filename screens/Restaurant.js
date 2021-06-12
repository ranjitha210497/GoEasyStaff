import * as React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import {icons, images, SIZES, COLORS, FONTS}  from '../constants';

const Restaurant = ({ navigation }) => {
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, top: 50, backgroundColor: "#D3CCCC", width: '100%'}}>
               <Text style={{left: 30,top: 15, fontWeight: 'bold', color: "#AD3333", justifyContent: 'center'}}>GoEasyStaff</Text>
                <TouchableOpacity
                    style={{
                        width: 100,
                        justifyContent: 'center',
                        left: 200
                    }}
                >
                    <Text style={{color: "#E14C4C"}} onPress={() => navigation.push('OrderDelivery')}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 100,
                        justifyContent: 'center',
                        left: 150
                    }}
                >
                    <Text style={{color: "#E14C4C"}}>Signup</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {/* <Image source={images.labour} /> */}
            {/* {renderMainCategories()}
            {renderRestaurantList()} */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default Restaurant;