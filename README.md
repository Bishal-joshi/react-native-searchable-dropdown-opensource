# React Native Custom Dropdown

A customizable React Native dropdown component with optional styling options.

## Installation

Install the package using npm or yarn:

```bash
npm i react-native-searchable-dropdown-opensource

```
##Usage

```javascript
import React, { useState } from 'react';
import CustomDropdown from 'react-native-searchable-dropdown-opensource';

const App = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 5'];
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <Text>Selected Option: {selectedOption}</Text>

<CustomDropdown options={options} onSelect={handleSelect} selectedOption={selectedOption}
buttonStyle={{}}
buttonTextStyle={{}}
dropdownStyle={{}}
textStyle={{}}
searchStyle={{backgroundColor:'white'}}
scroll
itemsVisible={2}
/>

    </View>
  );
};

export default App;
```

#Props
#Required Props
1. options: An array of options to be displayed in the dropdown.
2. onSelect: A callback function triggered when an option is selected.
3. selectedOption: The currently selected option.

##Optional Props
1. buttonStyle: Additional styles for the dropdown button.
2. buttonTextStyle: Additional styles for the button text.
3. dropdownStyle: Additional styles for the dropdown container.
4. textStyle: Additional styles for the text within the dropdown.
5. scroll: Enable scrolling in the dropdown.
6. itemsVisible: Number of items visible in the dropdown (if scrolling is enabled).





##Example

```javascript

<CustomDropdown options={options} onSelect={handleSelect} selectedOption={selectedOption}
buttonStyle={{}}
buttonTextStyle={{}}
dropdownStyle={{}}
textStyle={{}}
searchStyle={{backgroundColor:'white'}}
scroll
itemsVisible={2}
/>

```
