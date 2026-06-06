import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as ExpoLinking from "expo-linking";
import { STUDENT } from "../data/courses";

function ProfileRow({ icon, label, value }) {
  return (
    <View
      className="mb-4 flex-row items-center rounded-[30px] bg-white p-4"
      style={{
        shadowColor: "#2B3268",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <View className="h-16 w-16 items-center justify-center rounded-[24px] bg-[#EEF0FF]">
        <Ionicons name={icon} size={28} color="#5B7CFA" />
      </View>

      <View className="ml-4 flex-1">
        <Text className="text-xs font-black uppercase tracking-[5px] text-[#A6ACD5]">
          {label}
        </Text>

        <Text numberOfLines={2} className="mt-2 text-lg font-black text-[#20264A]">
          {value}
        </Text>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  const sendEmail = async () => {
    await ExpoLinking.openURL(`mailto:${STUDENT.email}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#EEF0FF]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 125 }}
      >
        <View className="px-5 pt-2">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-xs font-black uppercase tracking-[5px] text-[#A6ACD5]">
                Student
              </Text>
              <Text className="mt-1 text-[42px] font-black text-[#20264A]">
                Profile
              </Text>
            </View>

            <View className="h-14 w-14 items-center justify-center rounded-full bg-white">
              <Ionicons name="person" size={26} color="#5B7CFA" />
            </View>
          </View>

          <View className="mt-4 overflow-hidden rounded-[34px] bg-[#5B7CFA] p-5">
            <View className="absolute -right-8 top-10 h-36 w-36 rounded-full border-[22px] border-white/10" />

            <View className="h-24 w-24 items-center justify-center rounded-[30px] bg-white">
              <Text className="text-[38px] font-black text-[#5B7CFA]">AF</Text>
            </View>

            <Text numberOfLines={1} className="mt-7 text-[28px] font-black text-white">
              {STUDENT.name}
            </Text>

            <Text numberOfLines={1} className="mt-2 text-base font-bold text-white/80">
              {STUDENT.nim} • {STUDENT.major}
            </Text>

            <View className="mt-6 self-start rounded-full bg-white/20 px-5 py-3">
              <Text className="text-sm font-black text-white">
                Mahasiswa Aktif
              </Text>
            </View>
          </View>

          <Text className="mt-7 text-[26px] font-black text-[#20264A]">
            Student Information
          </Text>

          <View className="mt-5">
            <ProfileRow
              icon="person-outline"
              label="Nama"
              value={STUDENT.name}
            />

            <ProfileRow icon="card-outline" label="NIM" value={STUDENT.nim} />

            <ProfileRow
              icon="code-slash-outline"
              label="Program"
              value={STUDENT.major}
            />

            <ProfileRow
              icon="business-outline"
              label="Kampus"
              value={STUDENT.campus}
            />

            <ProfileRow
              icon="mail-outline"
              label="Email"
              value={STUDENT.email}
            />
          </View>

          <Pressable
            onPress={sendEmail}
            className="mt-2 h-16 flex-row items-center justify-center rounded-full bg-[#5B7CFA] active:scale-[0.98]"
          >
            <Text className="text-lg font-black text-white">Send Email</Text>
            <View className="ml-4 h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <Ionicons name="mail" size={22} color="#FFFFFF" />
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}