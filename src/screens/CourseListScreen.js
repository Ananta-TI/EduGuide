import React, { useMemo, useState } from "react";
import { View, Text, FlatList, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COURSES, STUDENT } from "../data/courses";

function CourseCard({ course, index, onPress }) {
  const colors = ["#5B7CFA", "#FF8FA3", "#8B5CF6", "#34C759"];
  const color = colors[index % colors.length];

  return (
    <Pressable
      onPress={onPress}
      className="mb-4 rounded-[32px] bg-white p-4 shadow-sm active:scale-[0.98]"
    >
      <View className="flex-row items-start">
        <View
          className="h-16 w-16 items-center justify-center rounded-[24px]"
          style={{ backgroundColor: color }}
        >
          <Ionicons name="book" size={30} color="#FFFFFF" />
        </View>

        <View className="ml-4 flex-1">
          <View className="flex-row items-center justify-between">
            <Text className="rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-black text-[#5B7CFA]">
              {course.code}
            </Text>

            <Text className="text-xs font-black text-[#A6ACD5]">
              {course.sks} SKS
            </Text>
          </View>

          <Text className="mt-3 text-lg font-black leading-6 text-[#20264A]">
            {course.name}
          </Text>

          <Text className="mt-1 text-xs leading-5 text-[#A6ACD5]">
            {course.lecturer}
          </Text>
        </View>
      </View>

      <View className="mt-4 rounded-[24px] bg-[#F7F8FF] p-4">
        <Text className="text-xs leading-5 text-[#8D95C7]">
          {course.description}
        </Text>

        <View className="mt-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons name="business-outline" size={16} color="#9AA3D2" />
            <Text className="ml-2 text-xs font-bold text-[#9AA3D2]">
              {course.room}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Text className="mr-2 text-xs font-black text-[#5B7CFA]">
              Detail
            </Text>
            <Ionicons name="arrow-forward-circle" size={24} color="#5B7CFA" />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default function CourseListScreen({ navigation }) {
  const [query, setQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const keyword = query.toLowerCase().trim();

    if (!keyword) return COURSES;

    return COURSES.filter((course) => {
      return (
        course.name.toLowerCase().includes(keyword) ||
        course.code.toLowerCase().includes(keyword) ||
        course.lecturer.toLowerCase().includes(keyword)
      );
    });
  }, [query]);

  return (
    <View className="flex-1 bg-[#EEF0FF]">
      <View className="px-5 pt-14">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-bold uppercase tracking-[3px] text-[#9AA3D2]">
              Learning Plan
            </Text>
            <Text className="mt-1 text-3xl font-black text-[#20264A]">
              Courses
            </Text>
          </View>

          <View className="h-12 w-12 items-center justify-center rounded-full bg-white">
            <Ionicons name="library" size={24} color="#5B7CFA" />
          </View>
        </View>

        <View className="mt-6 flex-row items-center rounded-[26px] bg-white px-4 py-3 shadow-sm">
          <Ionicons name="search" size={21} color="#B7BDE2" />

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search course..."
            placeholderTextColor="#B7BDE2"
            className="ml-3 flex-1 text-sm font-semibold text-[#20264A]"
          />

          {query.length > 0 && (
            <Pressable onPress={() => setQuery("")}>
              <Ionicons name="close-circle" size={21} color="#B7BDE2" />
            </Pressable>
          )}
        </View>

        <View className="mt-5 flex-row items-center justify-between">
          <Text className="text-base font-black text-[#20264A]">
            {filteredCourses.length} Courses
          </Text>

          <View className="rounded-full bg-white px-4 py-2">
            <Text className="text-xs font-black text-[#5B7CFA]">
              Semester 6
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 115,
        }}
        renderItem={({ item, index }) => (
          <CourseCard
            course={item}
            index={index}
            onPress={() =>
              navigation.navigate("CourseDetail", {
                student: STUDENT,
                course: item,
              })
            }
          />
        )}
        ListEmptyComponent={
          <View className="items-center justify-center py-24">
            <View className="h-24 w-24 items-center justify-center rounded-[34px] bg-white">
              <Ionicons name="search" size={42} color="#B7BDE2" />
            </View>

            <Text className="mt-5 text-xl font-black text-[#20264A]">
              Course not found
            </Text>

            <Text className="mt-2 text-center text-sm leading-6 text-[#A6ACD5]">
              Coba pakai kata kunci lain. Aplikasi ini belum bisa membaca
              pikiran, untungnya.
            </Text>
          </View>
        }
      />
    </View>
  );
}