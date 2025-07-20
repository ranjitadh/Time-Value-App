import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';


const _layout = () => {
  return (
    <Tabs>
 <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
       <Tabs.Screen
      name="save"
      options={{
        title:"Settings",
        headerShown: false,
        tabBarIcon: ({color,size}) => (
          <Feather name="settings" size={size} color={color} />
        )
      }}
      

      />
      <Tabs.Screen
      name="notification"
      options={{
        title:"Notifications",
        headerShown: false,
        tabBarIcon: ({color,size}) => (
          <Feather name="bell" size={size} color={color} />
        )
      }}

      />
      
       <Tabs.Screen
      name="(tabs_calc)/TimeCalculator"
      options={{
        title:"Calculator",
        headerShown: false,
        tabBarIcon: ({color,size}) => (
          <Ionicons name="calculator-outline" size={size} color={color} />


        )
      }}

      /> 
<Tabs.Screen
      name="profile"
      options={{
        title:"Profile",
        headerShown: false,
        tabBarIcon: ({color,size}) => (
        <Ionicons name="person" size={size} color={color} />
        )
      }}
      
      /> 


    </Tabs>
  )
}

export default _layout