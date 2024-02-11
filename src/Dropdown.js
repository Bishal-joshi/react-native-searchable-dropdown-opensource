import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Animated } from 'react-native';
import { getStyle } from './stylesDropdown';

const CustomDropdown = (props) => {
  const { options, onSelect, selectedOption } = props;
  const { dropdownStyle, textStyle, buttonStyle, scroll, itemsVisible,searchStyle,buttonTextStyle } = props;

  const styles = getStyle(props);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [searchQuery, setSearchQuery] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleSelect = (option) => {
    onSelect(option);
    toggleDropdown();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = options.filter(option =>
      option.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isDropdownVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isDropdownVisible, fadeAnim]);


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={{ ...styles.header, ...buttonStyle }}>
        <Text style={{...buttonTextStyle,...styles.headerText}}>{selectedOption}</Text>
      </TouchableOpacity>

      <Animated.View style={{ ...styles.dropdown, ...dropdownStyle, opacity: fadeAnim }}>
        {isDropdownVisible && (
          <View>
            <TextInput
              style={{ ...styles.searchInput,...searchStyle }}
              placeholder="Search..."
              value={searchQuery}
              placeholderTextColor={'gray'}
              onChangeText={handleSearch}
            />
            <ScrollView>
              {filteredOptions.map((option) => (
                <TouchableOpacity key={option} onPress={() => handleSelect(option)}>
                  <Text style={{ ...styles.option, ...textStyle }}>{option}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default CustomDropdown;
