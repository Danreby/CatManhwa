import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 items-center justify-center bg-slate-100">
      <Text className="text-2xl font-bold mb-4">Olá — React Native + NativeWind</Text>

      <TouchableOpacity
        onPress={() => setCount(c => c + 1)}
        className="bg-blue-600 px-4 py-2 rounded-md"
      >
        <Text className="text-white">Clique ({count})</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
