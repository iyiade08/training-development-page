import React from "react";
import Hero from "./hero/page";
import LearningManagement from "./learning-management/page";
import CooperateTraining from "./cooperate-training/page";
import ManagementDevelopment from "./management-development/page";
import TransformationHub from "./transformation-hub/page";
import TrainingTheConsultant from "./training-the-consultant/page";
import CtaBanner from "./consultation/page";
import Testimonials from "./testimonial/page";

const Home = () => {
  return (
    <section className="max-w-360 mx-auto w-full min-h-screen mt-6">
      <Hero />
      <LearningManagement />
      <CooperateTraining />
      <ManagementDevelopment />
      <TransformationHub />
      <TrainingTheConsultant />
      <CtaBanner />
      <Testimonials />
    </section>
  );
};

export default Home;
