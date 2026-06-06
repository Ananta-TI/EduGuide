import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as ExpoLinking from "expo-linking";
import { CAMPUS, STUDENT } from "../data/courses";

function InfoRow({ icon, label, value }) {
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
      <View className="h-16 w-16 items-center justify-center rounded-[24px] bg-[#FFF3EA]">
        <Ionicons name={icon} size={28} color="#FF8A3D" />
      </View>

      <View className="ml-4 flex-1">
        <Text className="text-xs font-black uppercase tracking-[5px] text-[#A6ACD5]">
          {label}
        </Text>

        <Text numberOfLines={3} className="mt-2 text-lg font-black leading-6 text-[#20264A]">
          {value}
        </Text>
      </View>
    </View>
  );
}

function ActionCard({ icon, title, desc, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="mb-4 flex-row items-center rounded-[30px] bg-white p-4 active:scale-[0.98]"
      style={{
        shadowColor: "#2B3268",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <View
        className="h-16 w-16 items-center justify-center rounded-[24px]"
        style={{ backgroundColor: color }}
      >
        <Ionicons name={icon} size={29} color="#FFFFFF" />
      </View>

      <View className="ml-4 flex-1">
        <Text className="text-lg font-black text-[#20264A]">{title}</Text>
        <Text className="mt-1 text-sm font-semibold leading-5 text-[#A6ACD5]">
          {desc}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={25} color="#C1C6E4" />
    </Pressable>
  );
}

export default function CampusScreen() {
  const openMaps = async () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${CAMPUS.latitude},${CAMPUS.longitude}`;
    await ExpoLinking.openURL(url);
  };

  const sendEmail = async () => {
    const subject = "Pertanyaan Informasi Akademik";
    const body = `Halo Admin Akademik,\n\nSaya ${STUDENT.name} dengan NIM ${STUDENT.nim} ingin bertanya mengenai informasi akademik.\n\nTerima kasih.`;

    const url = `mailto:akademik@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    await ExpoLinking.openURL(url);
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
                Campus
              </Text>
              <Text className="mt-1 text-[42px] font-black text-[#20264A]">
                Location
              </Text>
            </View>

            <View className="h-14 w-14 items-center justify-center rounded-full bg-white">
              <Ionicons name="location" size={27} color="#FF8A3D" />
            </View>
          </View>

          <View className="mt-4 overflow-hidden rounded-[34px] bg-[#FF8A3D] p-5">
            <View className="absolute -right-8 top-10 h-36 w-36 rounded-full border-[22px] border-white/12" />

            <View className="h-24 w-24 items-center justify-center rounded-[30px] bg-white">
              <Ionicons name="map" size={48} color="#FF8A3D" />
            </View>

            <Text numberOfLines={1} className="mt-7 text-[28px] font-black text-white">
              {CAMPUS.name}
            </Text>

            <Text numberOfLines={2} className="mt-3 text-base font-bold leading-6 text-white/85">
              {CAMPUS.address}
            </Text>
          </View>

          <Text className="mt-7 text-[26px] font-black text-[#20264A]">
            Campus Information
          </Text>

          <View className="mt-5">
            <InfoRow
              icon="business-outline"
              label="Nama Kampus"
              value={CAMPUS.name}
            />

            <InfoRow
              icon="navigate-outline"
              label="Alamat"
              value={CAMPUS.address}
            />

            <InfoRow
              icon="pin-outline"
              label="Koordinat"
              value={`${CAMPUS.latitude}, ${CAMPUS.longitude}`}
            />
          </View>

          <Text className="mt-5 text-[26px] font-black text-[#20264A]">
            Actions
          </Text>

          <View className="mt-5">
            <ActionCard
              icon="map-outline"
              title="Open Google Maps"
              desc="Buka lokasi kampus di Google Maps"
              color="#FF8A3D"
              onPress={openMaps}
            />

            <ActionCard
              icon="mail-outline"
              title="Send Email"
              desc="Kirim email ke bagian akademik"
              color="#5B7CFA"
              onPress={sendEmail}
            />
          </View>

          <View
            className="mt-2 flex-row items-center rounded-[30px] bg-white p-4"
            style={{
              shadowColor: "#2B3268",
              shadowOpacity: 0.08,
              shadowRadius: 10,
              elevation: 3,
            }}
          >
            <View className="h-16 w-16 items-center justify-center rounded-[24px] bg-[#EEF0FF]">
              <Ionicons name="information-circle" size={34} color="#5B7CFA" />
            </View>

            <View className="ml-4 flex-1">
              <Text className="text-lg font-black text-[#20264A]">
                Academic Note
              </Text>
              <Text className="mt-1 text-sm font-semibold leading-5 text-[#A6ACD5]">
                Pastikan aplikasi Maps dan Email tersedia di perangkat.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}