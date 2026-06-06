import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
  Share,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as ExpoLinking from "expo-linking";
import { CAMPUS, LECTURER } from "../data/courses";

function InfoPill({ label, value }) {
  return (
    <View className="flex-1 rounded-[26px] bg-white p-4 shadow-sm">
      <Text className="text-xs font-bold text-[#A6ACD5]">{label}</Text>
      <Text className="mt-2 text-lg font-black text-[#20264A]">{value}</Text>
    </View>
  );
}

function ActionItem({ icon, title, subtitle, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="mb-4 flex-row items-center rounded-[30px] bg-white p-4 shadow-sm active:scale-[0.98]"
    >
      <View
        className="h-14 w-14 items-center justify-center rounded-[22px]"
        style={{ backgroundColor: color }}
      >
        <Ionicons name={icon} size={26} color="#FFFFFF" />
      </View>

      <View className="ml-4 flex-1">
        <Text className="text-base font-black text-[#20264A]">{title}</Text>
        <Text className="mt-1 text-xs leading-5 text-[#A6ACD5]">
          {subtitle}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={22} color="#B7BDE2" />
    </Pressable>
  );
}

export default function CourseDetailScreen({ navigation, route }) {
  const { student, course } = route.params;

  const openPhone = async () => {
    const url = `tel:${LECTURER.phone}`;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Gagal", "Aplikasi telepon tidak tersedia.");
    }
  };

  const openWhatsApp = async () => {
    const message = `Halo Pak/Bu, saya ${student.name} (${student.nim}) ingin bertanya tentang mata kuliah ${course.name}.`;
    const url = `https://wa.me/${LECTURER.phone}?text=${encodeURIComponent(
      message
    )}`;

    await ExpoLinking.openURL(url);
  };

  const openMaps = async () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${CAMPUS.latitude},${CAMPUS.longitude}`;
    await ExpoLinking.openURL(url);
  };

  const shareCourse = async () => {
    await Share.share({
      title: course.name,
      message: `Mata Kuliah: ${course.name}\nKode: ${course.code}\nDosen: ${course.lecturer}\nSKS: ${course.sks}\nDeskripsi: ${course.description}`,
    });
  };

  const sendEmail = async () => {
    const subject = `Pertanyaan Mata Kuliah ${course.name}`;
    const body = `Halo Pak/Bu,\n\nSaya ${student.name} dengan NIM ${student.nim} ingin bertanya mengenai mata kuliah ${course.name}.\n\nTerima kasih.`;

    const url = `mailto:${LECTURER.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    await ExpoLinking.openURL(url);
  };

  const registerCourse = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "Main",
          params: {
            screen: "Home",
            params: {
              selectedCourse: course,
            },
          },
        },
      ],
    });
  };

  return (
    <View className="flex-1 bg-[#EEF0FF]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <LinearGradient
          colors={["#6B8CFF", "#5B7CFA"]}
          className="px-5 pb-10 pt-14"
        >
          <View className="flex-row items-center justify-between">
            <Pressable
              onPress={() => navigation.goBack()}
              className="h-11 w-11 items-center justify-center rounded-full bg-white/20"
            >
              <Ionicons name="chevron-back" size={25} color="#FFFFFF" />
            </Pressable>

            <Text className="text-sm font-black text-white">
              Course Detail
            </Text>

            <View className="h-11 w-11 items-center justify-center rounded-full bg-white/20">
              <Ionicons name="bookmark-outline" size={22} color="#FFFFFF" />
            </View>
          </View>

          <View className="mt-8">
            <View className="flex-row">
              <View className="rounded-full bg-white px-4 py-2">
                <Text className="text-xs font-black text-[#5B7CFA]">
                  {course.code}
                </Text>
              </View>

              <View className="ml-2 rounded-full bg-white/20 px-4 py-2">
                <Text className="text-xs font-black text-white">
                  {course.sks} SKS
                </Text>
              </View>
            </View>

            <Text className="mt-5 text-3xl font-black leading-10 text-white">
              {course.name}
            </Text>

            <Text className="mt-3 text-sm leading-6 text-white/80">
              {course.description}
            </Text>
          </View>
        </LinearGradient>

        <View className="-mt-6 px-5">
          <View className="flex-row gap-4">
            <InfoPill label="Semester" value={course.semester} />
            <InfoPill label="Room" value={course.room} />
          </View>

          <View className="mt-4 rounded-[32px] bg-white p-5 shadow-sm">
            <View className="flex-row items-center">
              <View className="h-14 w-14 items-center justify-center rounded-[22px] bg-[#EEF0FF]">
                <Ionicons name="person" size={26} color="#5B7CFA" />
              </View>

              <View className="ml-4 flex-1">
                <Text className="text-xs font-bold uppercase tracking-[2px] text-[#A6ACD5]">
                  Lecturer
                </Text>

                <Text className="mt-1 text-base font-black text-[#20264A]">
                  {course.lecturer}
                </Text>
              </View>
            </View>

            <View className="mt-5 h-2 rounded-full bg-[#EEF0FF]">
              <View className="h-full w-[70%] rounded-full bg-[#5B7CFA]" />
            </View>

            <Text className="mt-3 text-xs font-bold text-[#A6ACD5]">
              Academic readiness progress
            </Text>
          </View>

          <Text className="mt-7 text-xl font-black text-[#20264A]">
            Academic Actions
          </Text>

          <Text className="mt-1 text-sm leading-6 text-[#8D95C7]">
            Gunakan fitur intent untuk membuka aplikasi eksternal.
          </Text>

          <View className="mt-4">
            <ActionItem
              icon="call"
              title="Hubungi Dosen"
              subtitle="Buka aplikasi telepon"
              color="#5B7CFA"
              onPress={openPhone}
            />

            <ActionItem
              icon="logo-whatsapp"
              title="WhatsApp Dosen"
              subtitle="Kirim pesan ke dosen"
              color="#34C759"
              onPress={openWhatsApp}
            />

            <ActionItem
              icon="location"
              title="Google Maps"
              subtitle="Lihat lokasi kampus"
              color="#FF8A3D"
              onPress={openMaps}
            />

            <ActionItem
              icon="share-social"
              title="Bagikan Mata Kuliah"
              subtitle="Share ke media sosial"
              color="#8B5CF6"
              onPress={shareCourse}
            />

            <ActionItem
              icon="mail"
              title="Kirim Email"
              subtitle="Buka email client"
              color="#14B8A6"
              onPress={sendEmail}
            />
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pb-6 pt-4">
        <Pressable
          onPress={registerCourse}
          className="h-16 flex-row items-center justify-center rounded-full bg-[#5B7CFA] active:scale-[0.98]"
        >
          <Text className="text-lg font-black text-white">
            Daftar Mata Kuliah
          </Text>
          <View className="ml-4 h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <Ionicons name="checkmark" size={23} color="#FFFFFF" />
          </View>
        </Pressable>
      </View>
    </View>
  );
}