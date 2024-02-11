import { StyleSheet } from 'react-native';

export function getStyle(props) {
  const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    header: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor:'blue'
    },
    headerText:{
      color:'white'
    },
    dropdown: {
      position: 'absolute',
      top: 40, // adjust as needed
      left: 0,
      right: 0,
      zIndex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      maxHeight: props.scroll ? (props.itemsVisible ? (props.itemsVisible * 45)+50 : (5 * 45)+50) : null,
      paddingBottom:50,
      overflow:'hidden',
      backgroundColor:"white",
      elevation:5,
    },
    option: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      color: 'black',
    },
    searchInput: {
      height: 40,
      borderColor: 'gray',
      backgroundColor:'white',
      color:'black',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });

  return styles;
}
