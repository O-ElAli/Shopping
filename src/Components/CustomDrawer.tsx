import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  const { state, descriptors, navigation } = props;

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#0a8ed9' }}>
      {props.state.routes.map((route, index) => {
        const { options } = props.descriptors[route.key];
        const label =
          options.drawerLabel !== undefined
            ? options.drawerLabel
            : route.name;

        const isActive = index === props.state.index;
        const tintColor = isActive ? '#0a8ed9' : 'white';

        return (
          <DrawerItem
            key={route.key}
            label={label}
            onPress={() => navigation.navigate(route.name)}
            labelStyle={{ color: tintColor }}
            style={{
              backgroundColor: isActive ? 'white' : 'transparent', // Active background color
            }}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
