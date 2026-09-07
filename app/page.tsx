import React from "react";
import Hero from "../components/hero";
import LearningManagement from "@/components/learning-management";
import CooperateTraining from "@/components/corporate-training";
import ManagementDevelopment from "@/components/management-development";
import TransformationHub from "@/components/transformation-hub";
import TrainingTheConsultant from "@/components/training-the-consultant";
import CtaBanner from "@/components/consultation";
import Testimonials from "@/components/testimonial";

const Home = () => {
  return (
    <main className="max-w-360 mx-auto w-full min-h-screen mt-6">
      <Hero />
      <LearningManagement />
      <CooperateTraining />
      <ManagementDevelopment />
      <TransformationHub />
      <TrainingTheConsultant />
      <CtaBanner />
      <Testimonials />
    </main>
  );
};

export default Home;
