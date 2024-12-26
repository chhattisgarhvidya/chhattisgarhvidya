'use client';

import React from 'react';


interface SyllabusUnit {
  unit: string;
  questions: string[];
}

const syllabus: SyllabusUnit[] = [
  {
    unit: "Unit-I",
    questions: [
      "What is ERP? Explain the Benefits of ERP?",
      "Explain in detail Business function and Business process?",
      "Explain the methodology for ERP implementation, outlining the key stages and processes involved in ensuring a successful deployment within an organization?",
      "Discuss the risks and benefits associated with the implementation of ERP systems, with reference to their impact on organizational performance and operations?"
    ]
  },
  {
    unit: "Unit-II",
    questions: [
      "Explain the Two Step Process of ERP Package Selection?",
      "Explain Redesign, Reengineering and Benchmarking?",
      "Explain the Roles and Responsibilities of Different Project Team Members?",
      "What are the Reasons for Gaps and Explain the five types of gaps?"
    ]
  },
  {
    unit: "Unit-III",
    questions: [
      "List and Explain package selection criteria?",
      "Explain different types of Security Issues in ERP with real life example?",
      "Explain Configuration and testing of the solution in ERP Implementation?",
      "Explain the Training Objective, Strategy, Environment and Technology in ERP Implementation?"
    ]
  },
  {
    unit: "Unit-IV",
    questions: [
      "What is success planning?",
      "Explain Customer Relationship Management system and its benefits? Write any five CRM based application?",
      "Explain Supplier Relationship Management system and its benefits? Write any five SRM based application?",
      "What are the modern technologies essential for the development and functionality of ERP systems?"
    ]
  },
  {
    unit: "Unit-V",
    questions: [
      "Write Finance justification of ERP?",
      "How can the implementation of an ERP system be financially justified in terms of cost savings, return on investment (ROI), and long-term financial benefits?",
      "Explain the application and benefits of ERP systems in the automobile industry?",
      "How should commercial software be evaluated during the implementation of an ERP system?"
    ]
  }
];

export default function SyllabusViewer() {


  return (
    <div className="min-h-screen  p-3 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-5xl text-blue-600 font-bold mb-5 md:mb-12 text-center">
          ERP Course Syllabus
        </h1>
        
        {syllabus.map((unit) => (
          <div key={unit.unit} className="mb-5 md:mb-8">
            <h2 className="text-2xl font-semibold mb-2 md:mb-6 text-blue-600">
              {unit.unit}
            </h2>
            
            <div className="space-y-2 md:space-y-4">
              {unit.questions.map((question, qIndex) => (
                <div key={qIndex} className="pl-5 md:pl-8 relative">
                  <span className="absolute left-0 max-sm:text-sm font-semibold">
                    {qIndex + 1}.
                  </span>
                  <span className="max-sm:text-sm">
                    {question}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}