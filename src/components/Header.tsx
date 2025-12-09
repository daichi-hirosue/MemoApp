import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <View style = {styles.headerInner}>
                <Text style={styles.headerTitle}>Memo App</Text>
                <Text style={styles.headerLogout}>ログアウト</Text>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({
    header: {
        height: 104,
        backgroundColor: '#467FD3',
        justifyContent: 'flex-end',
    },
    headerInner: {
        alignItems: 'center',
    },
    headerLogout: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color:'rgba(255,255,255,0.7)',
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
});
export default Header;