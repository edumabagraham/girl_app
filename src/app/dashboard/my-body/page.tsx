"use client";

import React, { useState, useEffect } from "react";
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
} from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

const formatDate = (date: Date, formatStr: string) => format(date, formatStr);

interface DayInfo {
  date: Date;
  prediction: {
    type: "period" | "ovulation" | "fertile" | "safe";
    probability: number;
  };
  actualPeriod?: "start" | "end" | null;
  isSelected: boolean;
}

const periodColors: Record<
  "period" | "ovulation" | "fertile" | "safe",
  string
> = {
  period: "bg-red-500 text-white",
  ovulation: "bg-red-400 text-white",
  fertile: "bg-red-300 text-white",
  safe: "bg-red-200 text-white",
};

const funFacts = [
  "🩸 The average cycle is 28 days, but it can range from 21 to 35 days!",
  "💪 Exercising during menstruation can reduce cramps and boost your mood.",
  "🍫 Craving chocolate? Dark chocolate is great for cramps due to its magnesium.",
  "🔄 Period syncing (McClintock Effect) might happen with close friends or family.",
  "🛌 Your pain tolerance might increase slightly during your period!",
];

const selfCareTips: Record<
  "period" | "ovulation" | "fertile" | "safe",
  string[]
> = {
  period: [
    "🛌 Rest with a warm heating pad.",
    "💧 Stay hydrated, but avoid caffeine.",
    "🍽️ Eat iron-rich foods like spinach or lentils.",
    "🚶 Take gentle walks to ease cramps and bloating.",
  ],
  ovulation: [
    "🥑 Add healthy fats like avocado to your meals.",
    "🧘 Practice light yoga to relieve stress.",
    "😴 Get plenty of rest to maintain energy levels.",
  ],
  fertile: [
    "🍓 Snack on vitamin-rich fruits for an energy boost.",
    "🧘 Meditate to keep stress levels low.",
    "📋 Track your energy and emotions for better insights.",
  ],
  safe: [
    "🏋️‍♀️ Plan high-intensity workouts for this phase.",
    "💧 Drink lots of water post-workout.",
    "🎨 Use this time to dive into creative tasks.",
  ],
};

// const moodOptions = ["😊", "😐", "😢", "😡", "😴", "🤩"];

// const getCycleStats = () => ({
//   averageCycleLength: 28,
//   nextPeriodDate: format(addMonths(new Date(), 1), "MMM d, yyyy"),
//   daysUntilNextPeriod: 5,
// });

export default function MyBody() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());
  const [calendarDays, setCalendarDays] = useState<DayInfo[]>([]);
  //   const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [userFeelings, setUserFeelings] = useState<string>("");
  const [funFactIndex, setFunFactIndex] = useState(0);
  const [selfCareIndex, setSelfCareIndex] = useState(0);
  //   const cycleStats = getCycleStats();
  const [activeTab, setActiveTab] = useState<string>("Period");

  const getStatusText = (day: DayInfo | undefined) => {
    if (!day) return "No Data";
    if (day.actualPeriod) return `Period ${day.actualPeriod}`;
    return `${
      day.prediction.type.charAt(0).toUpperCase() + day.prediction.type.slice(1)
    } Day`;
  };

  const getCurrentFunFact = () => funFacts[funFactIndex % funFacts.length];

  const getSelfCareTips = (
    type: "period" | "ovulation" | "fertile" | "safe"
  ) => {
    return selfCareTips[type] ?? [];
  };

  const generateCalendarDays = (month: Date) => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    const days = eachDayOfInterval({ start, end });
    const mockPredictions = ["safe", "fertile", "ovulation", "period"];

    return days.map((date, index) => ({
      date,
      prediction: {
        type: mockPredictions[index % 4] as
          | "safe"
          | "fertile"
          | "ovulation"
          | "period",
        probability: Math.random(),
      },
      actualPeriod: null,
      isSelected:
        formatDate(date, "yyyy-MM-dd") ===
        formatDate(selectedDate, "yyyy-MM-dd"),
    }));
  };

  useEffect(() => {
    setCalendarDays(generateCalendarDays(calendarMonth));

    const interval = setInterval(() => {
      setFunFactIndex((prev) => prev + 1);
      setSelfCareIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [calendarMonth, selectedDate]);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-r from-red-100 to-red-200 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-red-600">My Body Journal</h1>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="flex justify-around bg-white shadow rounded-lg p-4">
        {["Period", "Vagina", "Breast", "Hormones"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === tab
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-red-600 hover:bg-red-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side: Calendar and Menstrual Status Bubble */}
        <div className="space-y-6">
          {/* Calendar */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setCalendarMonth(subMonths(calendarMonth, 1))}
                className="text-red-600 hover:text-red-800"
              >
                &lt; Prev
              </button>
              <h2 className="text-lg font-semibold text-red-600">
                {format(calendarMonth, "MMMM yyyy")}
              </h2>
              <button
                onClick={() => setCalendarMonth(addMonths(calendarMonth, 1))}
                className="text-red-600 hover:text-red-800"
              >
                Next &gt;
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day) => (
                <motion.button
                  key={day.date.toISOString()}
                  onClick={() => setSelectedDate(day.date)}
                  className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center ${
                    day.prediction.type
                      ? periodColors[day.prediction.type]
                      : "bg-gray-200"
                  } ${day.isSelected ? "ring-2 ring-red-600" : ""}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {formatDate(day.date, "d")}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Menstrual Status Bubble */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-48 h-48 bg-gradient-to-r from-red-300 to-red-600 rounded-full shadow-lg flex flex-col items-center justify-center text-white text-center">
              <p className="text-2xl font-semibold">
                {formatDate(selectedDate, "MMM d, yyyy")}
              </p>
              <p className="text-lg">
                {getStatusText(calendarDays.find((d) => d.isSelected))}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Predictions, Fun Facts, and Self-Care Tips */}
        <div className="space-y-6">
          {/* Symptom Prediction */}
          <motion.div
            className="bg-red-50 rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold text-red-600 mb-4">
              How Are You Feeling Today?
            </h2>
            <textarea
              value={userFeelings}
              onChange={(e) => setUserFeelings(e.target.value)}
              placeholder="Describe how you're feeling..."
              className="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold text-red-600 mb-4">
              Did You Know?
            </h2>
            <AnimatePresence>
              <motion.div
                key={funFactIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-700">{getCurrentFunFact()}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Self-Care Tips */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold text-red-600 mb-4">
              Self-Care Tips
            </h2>
            <AnimatePresence>
              <motion.div
                key={selfCareIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="space-y-2 text-gray-700">
                  {getSelfCareTips(
                    calendarDays.find((d) => d.isSelected)?.prediction.type ??
                      "safe"
                  ).map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
