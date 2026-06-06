import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Main");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 bg-[#EEF0FF]">
      <View className="absolute -left-20 top-20 h-52 w-52 rounded-full bg-[#DDE4FF]" />
      <View className="absolute -right-24 bottom-28 h-64 w-64 rounded-full bg-[#D9E0FF]" />

      <View className="flex-1 px-8 pt-20">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-bold uppercase tracking-[3px] text-[#9AA3D2]">
              Academic App
            </Text>
            <Text className="mt-2 text-2xl font-black text-[#20264A]">
              Student Guide
            </Text>
          </View>

          <View className="h-11 w-11 items-center justify-center rounded-full bg-white">
            <Ionicons name="school" size={24} color="#5B7CFA" />
          </View>
        </View>

        <View className="mt-20 items-center">
          <LinearGradient
            colors={["#6B8CFF", "#5B7CFA"]}
            className="h-64 w-full items-center justify-center rounded-[42px]"
          >
            <View className="absolute left-6 top-8 h-20 w-20 rounded-full border-8 border-white/10" />
            <View className="absolute bottom-8 right-8 h-16 w-16 rounded-full bg-white/10" />

            <View className="flex-row items-end">
              <View className="-mr-3 h-36 w-28 rotate-[-12deg] rounded-3xl bg-white p-4">
                <View className="h-3 w-14 rounded-full bg-[#C9D3FF]" />
                <View className="mt-3 h-3 w-20 rounded-full bg-[#E2E7FF]" />
                <View className="mt-3 h-3 w-12 rounded-full bg-[#E2E7FF]" />
              </View>

              <View className="h-40 w-28 rotate-[10deg] rounded-3xl bg-[#FF8FA3] p-4">
                <View className="h-3 w-14 rounded-full bg-white/70" />
                <View className="mt-3 h-3 w-20 rounded-full bg-white/40" />
                <View className="mt-3 h-3 w-12 rounded-full bg-white/40" />
              </View>
            </View>

            <Text className="mt-8 max-w-[230px] text-center text-base font-semibold leading-6 text-white">
              You can study various academic information in one app
            </Text>
          </LinearGradient>

          <Pressable
            onPress={() => navigation.replace("Main")}
            className="mt-12 h-16 w-52 flex-row items-center justify-center rounded-full bg-white shadow-sm active:scale-95"
          >
            <Text className="text-lg font-black text-[#20264A]">Next</Text>
            <View className="ml-4 h-9 w-9 items-center justify-center rounded-full bg-[#5B7CFA]">
              <Ionicons name="chevron-forward" size={22} color="#FFFFFF" />
            </View>
          </Pressable>
        </View>
      </View>

      <Text className="mb-10 text-center text-xs font-semibold text-[#9AA3D2]">
        Politeknik Caltex Riau
      </Text>
    </View>
  );
}