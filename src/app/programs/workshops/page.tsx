"use client";

import { useState } from "react";
import { Newsletter } from "@/components/sections";

export default function WorkshopsPage() {
  const [showAllWorkshops, setShowAllWorkshops] = useState(false);

  const allWorkshops = [
    {
      title: "Emotional Flooding Awareness",
      description:
        "This session helps individuals understand emotional flooding—a state of overwhelming emotional intensity. Attendees learn techniques to recognize, manage, and navigate intense emotions, especially during conflicts, using stress-management tools and mindfulness.",
      gradient: "from-[#A5375C] to-[#C84862]",
      buttonClass: "wmf-button-primary",
    },
    {
      title: "Mood Swing Management",
      description:
        'Introducing the Mood Swing, this session guides participants on using an evidence-based tool to manage symptoms of anxiety and depression. Participants learn how to engage in "missions" that encourage positive behavior changes and improve emotional resilience.',
      gradient: "from-[#3C6A72] to-[#4A7A82]",
      buttonClass:
        "bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block",
    },
    {
      title: "Boost Self-Esteem",
      description:
        "Aimed at strengthening self-esteem, this workshop includes daily practices like self-acceptance, positive affirmations, and self-care routines. Participants leave with actionable steps to build self-confidence and foster a more positive self-image.",
      gradient: "from-[#DE5762] to-[#E66772]",
      buttonClass:
        "bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block",
    },
    {
      title: "Mindful Breathing",
      description:
        "This mindfulness session focuses on breath awareness, helping participants develop relaxation skills and improve mental clarity. Although not directly aimed at stress reduction, the techniques often lead to a sense of calm and focus.",
      gradient: "from-[#A5375C] to-[#C84862]",
      buttonClass: "wmf-button-primary",
    },
    {
      title: "Managing Anger",
      description:
        "This workshop explores techniques for handling anger constructively. Attendees learn methods to express emotions healthily and recognize triggers that lead to frustration, enhancing their ability to respond rather than react in tense situations.",
      gradient: "from-[#3C6A72] to-[#4A7A82]",
      buttonClass:
        "bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block",
    },
    {
      title: "Conflict Resolution",
      description:
        "This session promotes conflict resolution through active listening, empathy, and collaborative problem-solving. Participants learn how to address disagreements constructively, strengthening personal and professional relationships.",
      gradient: "from-[#DE5762] to-[#E66772]",
      buttonClass:
        "bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block",
    },
    {
      title: "Healing from Deep Wounds",
      description:
        "Addressing emotional wounds, this workshop helps participants identify and heal from past traumas. It teaches that while personal challenges can shape one's view of the world, healing can lead to growth and self-compassion.",
      gradient: "from-[#A5375C] to-[#C84862]",
      buttonClass: "wmf-button-primary",
    },
    {
      title: "Menopause Support",
      description:
        "Focused on the mental and emotional shifts during menopause, this session provides support for women experiencing mood changes and emotional sensitivity. It includes coping strategies to improve mental wellbeing and addresses the social impact of menopause.",
      gradient: "from-[#3C6A72] to-[#4A7A82]",
      buttonClass:
        "bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block",
    },
    {
      title: "Cognitive Reframing",
      description:
        "This cognitive reframing workshop guides participants in shifting perspectives on challenges. Attendees learn to approach stressful situations with a positive outlook, which can enhance emotional resilience and reduce negative thinking.",
      gradient: "from-[#DE5762] to-[#E66772]",
      buttonClass:
        "bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block",
    },
    {
      title: "Self-Care Priority",
      description:
        "This session encourages participants to prioritise self-care by addressing common barriers such as guilt, ingrained habits, or self-doubt. It offers strategies to build a consistent self-care routine, promoting mental and physical wellbeing.",
      gradient: "from-[#A5375C] to-[#C84862]",
      buttonClass: "wmf-button-primary",
    },
    {
      title: "Stress Management",
      description:
        "Offering practical stress-reduction techniques, this workshop includes identifying personal stressors, setting realistic goals, and adopting healthy lifestyle habits. Techniques like time management, meditation, and journaling are also discussed.",
      gradient: "from-[#3C6A72] to-[#4A7A82]",
      buttonClass:
        "bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block",
    },
    {
      title: "Personal Needs",
      description:
        "This session emphasises the importance of recognizing and honouring personal needs without guilt. Participants learn self-reflection and self-advocacy techniques, empowering them to set boundaries and pursue balanced, fulfilling lives.",
      gradient: "from-[#DE5762] to-[#E66772]",
      buttonClass:
        "bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block",
    },
    {
      title: "Problem Solving",
      description:
        "Participants learn structured problem-solving skills, including critical thinking, creative brainstorming, and goal-setting. The session teaches that a positive mindset can turn challenges into opportunities for growth and innovation.",
      gradient: "from-[#A5375C] to-[#C84862]",
      buttonClass: "wmf-button-primary",
    },
    {
      title: "Workplace Health",
      description:
        "Focused on sedentary workplace behaviors, this session highlights the health risks of prolonged sitting. Participants learn about posture, regular movement, and exercises to prevent health issues associated with long hours of sitting.",
      gradient: "from-[#3C6A72] to-[#4A7A82]",
      buttonClass:
        "bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block",
    },
    {
      title: "Self-Care Pathways",
      description:
        "Covering essential self-care practices like sleep, nutrition, and relaxation, this workshop provides a framework for building a holistic self-care routine. Attendees learn how self-care can positively impact both emotional and physical health.",
      gradient: "from-[#DE5762] to-[#E66772]",
      buttonClass:
        "bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block",
    },
    {
      title: "Job Transitions",
      description:
        "This workshop provides guidance on dealing with job changes, whether voluntary or involuntary. It covers emotional resilience, rebranding, and exploring new career opportunities, helping participants manage career shifts positively.",
      gradient: "from-[#A5375C] to-[#C84862]",
      buttonClass: "wmf-button-primary",
    },
  ];

  const displayedWorkshops = showAllWorkshops
    ? allWorkshops
    : allWorkshops.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          Workshops
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">Workshops</h1>
        <p className="text-xl text-[#6B7280] mb-8">
          Interactive, skill-building workshops designed to equip women with
          practical tools for managing stress, practicing self-care, and
          building emotional resilience.
        </p>
      </section>

      {/* Featured Workshops */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Featured Workshops
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-[#A5375C] to-[#C84862] flex items-center justify-center">
              <span className="text-white text-2xl font-bold text-center px-4">
                Financial Wellbeing
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#374151]">
                Financial Wellbeing Webinar
              </h3>
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                This session addresses the impact of rising living costs on
                financial and mental wellbeing. It offers insights into managing
                financial stress and provides practical budgeting and savings
                strategies to help individuals gain financial stability and
                alleviate financial stress.
              </p>
              <a
                href="/contact"
                className="wmf-button-primary px-4 py-2 rounded-lg font-semibold inline-block"
              >
                Enquire Now
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-[#3C6A72] to-[#4A7A82] flex items-center justify-center">
              <span className="text-white text-2xl font-bold text-center px-4">
                Mental Health Conversations
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#374151]">
                How to Talk about Mental Health
              </h3>
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                Designed to guide participants in approaching mental health
                conversations with empathy and understanding, this workshop
                covers strategies for initiating discussions on mental
                well-being. It emphasizes active listening, selecting the right
                setting, and creating a safe, non-judgmental environment.
              </p>
              <a
                href="/contact"
                className="bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block"
              >
                Enquire Now
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-[#DE5762] to-[#E66772] flex items-center justify-center">
              <span className="text-white text-2xl font-bold text-center px-4">
                Workplace Safety
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#374151]">
                Safe Work Australia (Work-Related Injury & Illness Awareness)
              </h3>
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                Focusing on occupational safety, this workshop discusses
                work-related injuries and illnesses. Participants learn about
                the compensation process, preventive practices, and strategies
                to minimize work-related health risks, especially in high-risk
                environments.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="/contact"
                  className="bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Why Choose Our Workshops?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151]">
              Evidence-Based Approach
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              All our workshops are based on proven psychological techniques and
              research-backed strategies for mental health and well-being.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151]">
              Experienced Facilitators
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Our workshops are led by qualified mental health professionals
              with extensive experience in women&apos;s mental health and
              well-being.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151]">
              Supportive Environment
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Create a safe, non-judgmental space where women can learn, share,
              and grow together in a supportive community setting.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151]">
              Practical Application
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Learn skills and strategies that you can immediately apply to your
              daily life for lasting positive change.
            </p>
          </div>
        </div>
      </section>

      {/* All Workshops Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          All Workshops
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {displayedWorkshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-br ${workshop.gradient} flex items-center justify-center`}
              >
                <span className="text-white text-xl font-bold text-center px-4">
                  {workshop.title}
                </span>
              </div>
              <div className="p-6">
                <p className="text-[#6B7280] mb-4 leading-relaxed">
                  {workshop.description}
                </p>
                <a
                  href="/contact"
                  className={`${workshop.buttonClass} px-4 py-2 rounded-lg font-semibold inline-block`}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllWorkshops(!showAllWorkshops)}
            className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {showAllWorkshops
              ? "Show Less"
              : `Show More Workshops (${allWorkshops.length - 3} more)`}
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
