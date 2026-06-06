import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { STUDENT, COURSES } from "../data/courses";

function SectionHeader({ title, rightText, onPress }) {
  return (
    <View className="mt-7 flex-row items-center justify-between">
      <Text className="text-[24px] font-black text-[#20264A]">{title}</Text>

      {rightText && (
        <Pressable onPress={onPress}>
          <Text className="text-sm font-black text-[#5B7CFA]">
            {rightText}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <View
      className="flex-1 rounded-[26px] bg-white p-4"
      style={{
        shadowColor: "#2B3268",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <View
        className="h-12 w-12 items-center justify-center rounded-[18px]"
        style={{ backgroundColor: color }}
      >
        <Ionicons name={icon} size={25} color="#FFFFFF" />
      </View>

      <Text className="mt-5 text-[30px] font-black text-[#20264A]">
        {value}
      </Text>

      <Text className="mt-1 text-sm font-black text-[#A6ACD5]">{label}</Text>
    </View>
  );
}

function MenuCard({ icon, title, desc, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="mb-4 flex-row items-center rounded-[28px] bg-white p-4 active:scale-[0.98]"
      style={{
        shadowColor: "#2B3268",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <View
        className="h-14 w-14 items-center justify-center rounded-[20px]"
        style={{ backgroundColor: color }}
      >
        <Ionicons name={icon} size={27} color="#FFFFFF" />
      </View>

      <View className="ml-4 flex-1">
        <Text className="text-[18px] font-black text-[#20264A]">{title}</Text>
        <Text className="mt-1 text-[13px] font-semibold leading-5 text-[#A6ACD5]">
          {desc}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={24} color="#C1C6E4" />
    </Pressable>
  );
}

function CourseCard({ course, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="mr-4 w-60 rounded-[28px] bg-white p-4 active:scale-[0.98]"
      style={{
        shadowColor: "#2B3268",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <View className="flex-row items-center justify-between">
        <View className="rounded-full bg-[#EEF0FF] px-3 py-1">
          <Text className="text-xs font-black text-[#5B7CFA]">
            {course.code}
          </Text>
        </View>

        <Text className="text-xs font-black text-[#A6ACD5]">
          {course.sks} SKS
        </Text>
      </View>

      <Text numberOfLines={2} className="mt-4 text-[18px] font-black leading-6 text-[#20264A]">
        {course.name}
      </Text>

      <Text numberOfLines={1} className="mt-2 text-xs font-semibold text-[#A6ACD5]">
        {course.lecturer}
      </Text>

      <View className="mt-5 h-2 overflow-hidden rounded-full bg-[#EEF0FF]">
        <View className="h-full w-[68%] rounded-full bg-[#5B7CFA]" />
      </View>

      <Text className="mt-2 text-xs font-black text-[#A6ACD5]">
        Learning progress
      </Text>
    </Pressable>
  );
}

export default function HomeScreen({ navigation, route }) {
  const selectedCourse = route?.params?.selectedCourse;
  const totalSks = COURSES.reduce((total, course) => total + course.sks, 0);

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
                Dashboard
              </Text>
              <Text className="mt-1 text-[42px] font-black text-[#20264A]">
                Activity
              </Text>
            </View>

            <View className="h-14 w-14 items-center justify-center rounded-full bg-white">
              <Ionicons name="notifications" size={25} color="#5B7CFA" />
            </View>
          </View>

          <View className="mt-4 overflow-hidden rounded-[32px] bg-[#5B7CFA] p-5">
            <View className="absolute -right-8 top-8 h-36 w-36 rounded-full border-[22px] border-white/10" />

            <View className="flex-row items-start justify-between">
              <View className="flex-1 pr-3">
                <Text className="text-xs font-black uppercase tracking-[4px] text-white/70">
                  Welcome Back
                </Text>

                <Text numberOfLines={1} className="mt-5 text-[30px] font-black text-white">
                  {STUDENT.name}
                </Text>

                <Text numberOfLines={1} className="mt-2 text-base font-bold text-white/80">
                  {STUDENT.nim} • {STUDENT.major}
                </Text>
              </View>

              <View className="h-16 w-16 items-center justify-center rounded-[22px] bg-white/20">
                <Ionicons name="school" size={38} color="#FFFFFF" />
              </View>
            </View>

            <View className="mt-6 flex-row items-center rounded-[26px] bg-white/15 p-4">
              <View className="h-14 w-14 items-center justify-center rounded-[20px] bg-white">
                <Ionicons name="trending-up" size={28} color="#5B7CFA" />
              </View>

              <View className="ml-4 flex-1">
                <Text className="text-lg font-black text-white">
                  Keep improving
                </Text>
                <Text className="mt-1 text-sm font-semibold leading-5 text-white/75">
                  Kelola informasi akademik dalam satu aplikasi.
                </Text>
              </View>
            </View>
          </View>

          {selectedCourse && (
            <View
              className="mt-5 flex-row items-center rounded-[28px] bg-white p-4"
              style={{
                shadowColor: "#2B3268",
                shadowOpacity: 0.08,
                shadowRadius: 10,
                elevation: 3,
              }}
            >
              <View className="h-14 w-14 items-center justify-center rounded-[20px] bg-[#34C759]">
                <Ionicons name="checkmark" size={29} color="#FFFFFF" />
              </View>

              <View className="ml-4 flex-1">
                <Text className="text-sm font-black text-[#34C759]">
                  Mata kuliah berhasil didaftarkan
                </Text>
                <Text numberOfLines={1} className="mt-1 text-lg font-black text-[#20264A]">
                  {selectedCourse.name}
                </Text>
              </View>
            </View>
          )}

          <View className="mt-5 flex-row gap-4">
            <StatCard
              icon="book"
              label="Courses"
              value={COURSES.length}
              color="#5B7CFA"
            />
            <StatCard
              icon="bar-chart"
              label="Total SKS"
              value={totalSks}
              color="#FF8FA3"
            />
          </View>

          <SectionHeader title="Quick Menu" rightText="Academic" />

          <View className="mt-4">
            <MenuCard
              icon="book-outline"
              title="Mata Kuliah"
              desc="Lihat daftar dan detail mata kuliah"
              color="#5B7CFA"
              onPress={() => navigation.navigate("Mata Kuliah")}
            />

            <MenuCard
              icon="location-outline"
              title="Lokasi Kampus"
              desc="Buka lokasi kampus melalui Google Maps"
              color="#FF8A3D"
              onPress={() => navigation.navigate("Kampus")}
            />

            <MenuCard
              icon="person-outline"
              title="Profil Mahasiswa"
              desc="Lihat informasi identitas mahasiswa"
              color="#8B5CF6"
              onPress={() => navigation.navigate("Profil")}
            />
          </View>

          <SectionHeader
            title="Latest Courses"
            rightText="See all"
            onPress={() => navigation.navigate("Mata Kuliah")}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
          contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
        >
          {COURSES.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onPress={() =>
                navigation.navigate("CourseDetail", {
                  student: STUDENT,
                  course,
                })
              }
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}