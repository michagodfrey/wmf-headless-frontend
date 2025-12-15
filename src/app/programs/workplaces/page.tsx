"use client";

import { useState } from "react";
// import { Newsletter } from "@/components/sections";
import ContactModal from "@/components/ui/ContactModal";
import Image from "next/image";

export default function WorkplacesPage() {
  const [showAllWorkshops, setShowAllWorkshops] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState("");

  const openWorkshopModal = (workshopTitle: string) => {
    setSelectedWorkshop(workshopTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWorkshop("");
  };

  const allWorkshops = [
    {
      title: "Emotional Flooding Awareness",
      description:
        "This session helps individuals understand emotional flooding—a state of overwhelming emotional intensity. Attendees learn techniques to recognize, manage, and navigate intense emotions, especially during conflicts, using stress-management tools and mindfulness.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      buttonClass: "wmf-button-primary",
    },
    {
      title: "Mood Swing Management",
      description:
        'Introducing the Mood Swing, this session guides participants on using an evidence-based tool to manage symptoms of anxiety and depression. Participants learn how to engage in "missions" that encourage positive behavior changes and improve emotional resilience.',
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/mood-swing.webp",
      buttonClass:
        "bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block",
    },
    {
      title: "Boost Self-Esteem",
      description:
        "Aimed at strengthening self-esteem, this workshop includes daily practices like self-acceptance, positive affirmations, and self-care routines. Participants leave with actionable steps to build self-confidence and foster a more positive self-image.",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/tips-to-build-self-esteem.webp",
      buttonClass:
        "bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block",
    },
    {
      title: "Mindful Breathing",
      description:
        "This mindfulness session focuses on breath awareness, helping participants develop relaxation skills and improve mental clarity. Although not directly aimed at stress reduction, the techniques often lead to a sense of calm and focus.",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/mindful-breathing-techniques.webp",
      buttonClass: "wmf-button-primary",
    },
    {
      title: "Managing Anger",
      description:
        "This workshop explores techniques for handling anger constructively. Attendees learn methods to express emotions healthily and recognize triggers that lead to frustration, enhancing their ability to respond rather than react in tense situations.",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/mananging-anger-through-calmness.webp",
      buttonClass:
        "bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block",
    },
    {
      title: "Conflict Resolution",
      description:
        "This session promotes conflict resolution through active listening, empathy, and collaborative problem-solving. Participants learn how to address disagreements constructively, strengthening personal and professional relationships.",
      image:
        "https://images.unsplash.com/photo-1626447269096-f8665509589c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonClass:
        "bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block",
    },
    {
      title: "Healing from Deep Wounds",
      description:
        "Addressing emotional wounds, this workshop helps participants identify and heal from past traumas. It teaches that while personal challenges can shape one's view of the world, healing can lead to growth and self-compassion.",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/healing-from-wounds-too-deep.webp",
      buttonClass: "wmf-button-primary",
    },
    {
      title: "Menopause Support",
      description:
        "Focused on the mental and emotional shifts during menopause, this session provides support for women experiencing mood changes and emotional sensitivity. It includes coping strategies to improve mental wellbeing and addresses the social impact of menopause.",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/psychological-adjustments-of-menopause.webp",
      buttonClass:
        "bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block",
    },
    {
      title: "Cognitive Reframing",
      description:
        "This cognitive reframing workshop guides participants in shifting perspectives on challenges. Attendees learn to approach stressful situations with a positive outlook, which can enhance emotional resilience and reduce negative thinking.",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/working-on-reframing.webp",
      buttonClass:
        "bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block",
    },
    {
      title: "Self-Care Priority",
      description:
        "This session encourages participants to prioritise self-care by addressing common barriers such as guilt, ingrained habits, or self-doubt. It offers strategies to build a consistent self-care routine, promoting mental and physical wellbeing.",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/self-care-pathways.webp",
      buttonClass: "wmf-button-primary",
    },
    {
      title: "Stress Management",
      description:
        "Offering practical stress-reduction techniques, this workshop includes identifying personal stressors, setting realistic goals, and adopting healthy lifestyle habits. Techniques like time management, meditation, and journaling are also discussed.",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/stress-managment.webp",
      buttonClass:
        "bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block",
    },
    {
      title: "Personal Needs",
      description:
        "This session emphasises the importance of recognizing and honouring personal needs without guilt. Participants learn self-reflection and self-advocacy techniques, empowering them to set boundaries and pursue balanced, fulfilling lives.",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/validating-personal-needs.webp",
      buttonClass:
        "bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block",
    },
    {
      title: "Problem Solving",
      description:
        "Participants learn structured problem-solving skills, including critical thinking, creative brainstorming, and goal-setting. The session teaches that a positive mindset can turn challenges into opportunities for growth and innovation.",
      image:
        "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop",
      buttonClass: "wmf-button-primary",
    },
    {
      title: "Workplace Health",
      description:
        "Focused on sedentary workplace behaviors, this session highlights the health risks of prolonged sitting. Participants learn about posture, regular movement, and exercises to prevent health issues associated with long hours of sitting.",
      image:
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1200&auto=format&fit=crop",
      buttonClass:
        "bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block",
    },
    {
      title: "Self-Care Pathways",
      description:
        "Covering essential self-care practices like sleep, nutrition, and relaxation, this workshop provides a framework for building a holistic self-care routine. Attendees learn how self-care can positively impact both emotional and physical health.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
      buttonClass:
        "bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block",
    },
    {
      title: "Job Transitions",
      description:
        "This workshop provides guidance on dealing with job changes, whether voluntary or involuntary. It covers emotional resilience, rebranding, and exploring new career opportunities, helping participants manage career shifts positively.",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/2024/11/managing-career-transition.webp",
      buttonClass: "wmf-button-primary",
    },
  ];

  const displayedWorkshops = showAllWorkshops
    ? allWorkshops
    : allWorkshops.slice(0, 3);

  // Workshop enquiry form configuration
  const getWorkshopEnquiryFields = () => [
    {
      name: "workshop",
      type: "select" as const,
      label: "Workshop of Interest",
      required: true,
      options: [
        selectedWorkshop,
        ...allWorkshops
          .map((w) => w.title)
          .filter((title) => title !== selectedWorkshop),
      ],
    },
    {
      name: "name",
      type: "text" as const,
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name",
    },
    {
      name: "email",
      type: "email" as const,
      label: "Email Address",
      required: true,
      placeholder: "Enter your email address",
    },
    {
      name: "phone",
      type: "tel" as const,
      label: "Phone Number",
      placeholder: "Enter your phone number",
    },
    {
      name: "organization",
      type: "text" as const,
      label: "Organization/Company",
      required: true,
      placeholder: "Enter your organization name",
    },
    {
      name: "participantCount",
      type: "select" as const,
      label: "Number of Participants",
      required: true,
      options: ["1-5", "6-10", "11-20", "21-50", "50+"],
    },
    {
      name: "preferredDate",
      type: "text" as const,
      label: "Preferred Date/Time",
      placeholder: "e.g., Week of March 15th, 2024",
    },
    {
      name: "additionalInfo",
      type: "textarea" as const,
      label: "Additional Information",
      placeholder: "Tell us about your specific needs or requirements...",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          For Workplaces
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Programs for Workplaces
        </h1>
        <h2 className="text-2xl font-bold mb-6 text-[#374151]">
          Empowering Workplaces: Tailored Training and Mentoring Programs by WMF
        </h2>
        <p className="text-xl text-[#6B7280] mb-8">
          Organisations are powered by people. At WMF we help organisations
          create empowered workplaces so everyone and especially women can
          perform at their best.
        </p>
        <p className="text-xl text-[#6B7280] mb-8">
          WMF has developed tailored training and mentoring programs which allow
          people to find their own unique strength. The programs have been
          designed by WMF&apos;s founder Pushpa Vaghela, who has a background in
          psychology and is a clinical neuro practitioner, and has an enormous
          amount of business, cultural and life&apos;s trauma experience.
        </p>

        {/* Hero Image */}
        <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-6 border border-[#E5E7EB] mt-8">
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
            <Image
              src="/programs/for-workplaces.webp"
              alt="WMF Programs for Workplaces - Empowering Organizations"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          WMF Workshops
        </div>
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
            <div className="h-48 relative">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
                alt="Financial Wellbeing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                priority
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-[#374151] mb-2">
                Financial Wellbeing
              </p>
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
              <button
                onClick={() => openWorkshopModal("Financial Wellbeing Webinar")}
                className="wmf-button-primary px-4 py-2 rounded-lg font-semibold inline-block cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="h-48 relative">
              <Image
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop"
                alt="Mental Health Conversations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                priority
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-[#374151] mb-2">
                Mental Health Conversations
              </p>
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
              <button
                onClick={() =>
                  openWorkshopModal("How to Talk about Mental Health")
                }
                className="bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="h-48 relative">
              <Image
                src="https://womensmentoringfoundation.com/wp-content/uploads/2024/11/work-related-injury-awareness.webp"
                alt="Workplace Safety"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                priority
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-[#374151] mb-2">
                Workplace Safety
              </p>
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
                <button
                  onClick={() =>
                    openWorkshopModal(
                      "Safe Work Australia (Work-Related Injury & Illness Awareness)"
                    )
                  }
                  className="bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block cursor-pointer"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Why Choose Us?
        </h2>
        <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-8 border border-[#E5E7EB] mb-8">
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
                All our workshops are based on proven psychological techniques
                and research-backed strategies for mental health and well-being.
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
                Create a safe, non-judgmental space where women can learn,
                share, and grow together in a supportive community setting.
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
                Learn skills and strategies that you can immediately apply to
                your daily life for lasting positive change.
              </p>
            </div>
          </div>
        </div>

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
                <div className="h-48 relative">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-[#374151] mb-2">
                    {workshop.title}
                  </p>
                  <p className="text-[#6B7280] mb-4 leading-relaxed">
                    {workshop.description}
                  </p>
                  <button
                    onClick={() => openWorkshopModal(workshop.title)}
                    className={`${workshop.buttonClass} px-4 py-2 rounded-lg font-semibold inline-block cursor-pointer`}
                  >
                    Enquire Now
                  </button>
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

        {/* More information */}
        <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">HR Team Training</h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                Specialized training for HR professionals on supporting women
                employees through challenging times, recognizing signs of
                distress, and creating inclusive workplace cultures that promote
                mental health and well-being.
              </p>
              <h4 className="text-lg font-semibold mb-4">HOW WMF WORKS</h4>
              <p className="text-white/90 mb-4 leading-relaxed">
                WMF seeks to be your training organisation of choice especially
                for the women in your organisation. As change takes time for
                individuals and organisations, WMF follows up all workshops with
                a check-in of effectiveness and discusses any further lessons
                for the team or the need for individual mentoring. After
                detailed conversations with an organisation to determine the
                needs for their team, WMF offers the below tailored training and
                mentoring programs.
              </p>
              <ul className="text-white/90 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Mental Health Strategies
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Workers&apos; Rights
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Feeling Safe and Included
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Dispute Resolution
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Embracing Our Differences
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Anger Management
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Leadership Development
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Combining Career and Family
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">GET IN TOUCH</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Invest in the well-being and performance of your team. Contact
                us today to learn more about our workshops and how they can
                benefit your organisation.
              </p>

              {/* Founder Profile */}
              <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <div className="relative w-full h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden">
                    <Image
                      src="/programs/pushpa.webp"
                      alt="Pushpa at the 4EB radio Luncheon on International Women's Day 2024"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">
                      Pushpa Vaghela
                    </p>
                    <p className="text-white/80 text-sm mb-2">
                      Founder & Clinical Neuro Practitioner
                    </p>
                    <p className="text-white/70 text-xs">
                      Leading WMF&apos;s mission to empower women through mental
                      health support and leadership development
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href="tel:0497998829"
                    className="text-white hover:text-white/80 transition-colors font-medium"
                  >
                    0497 998 829
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a
                    href="mailto:pushpa@womensmentoringfoundation.com"
                    className="text-white hover:text-white/80 transition-colors font-medium"
                  >
                    pushpa@womensmentoringfoundation.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <Newsletter /> */}

      {/* Workshop Enquiry Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        inquiryType="workshops"
        title="Workshop Enquiry"
        description="Please fill out the form below to enquire about our workplace workshops. We'll get back to you within 24 hours to discuss your specific needs and requirements."
        customFields={getWorkshopEnquiryFields()}
        initialValues={{ workshop: selectedWorkshop }}
      />
    </div>
  );
}
