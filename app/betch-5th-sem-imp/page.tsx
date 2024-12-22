'use client'

import { useState, useEffect } from 'react'


export default function CourseContent() {
  
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="bg-gray-50  dark:bg-gray-900 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">AI Course Syllabus</h1>
        </header>

        <section className="space-y-12">
          {/** Unit 1 **/}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Unit-I</h2>
            <ul className="mt-4 space-y-4 text-gray-800 dark:text-gray-200">
              <li><strong>I.</strong> Define Artificial intelligence, Discuss its advantage and limitations. </li>
              <li><strong>II.</strong> What are AI problems and how are they categorized as NP problems? </li>
              <li><strong>III.</strong> Explain the role of Intelligent Agents in Artificial Intelligence and describe its types in detail. </li>
              <li><strong>IV.</strong> Explain "The AI Ladder" and its significance for businesses adopting AI. </li>
            </ul>
          </div>

          {/** Unit 2 **/}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Unit-II</h2>
            <ul className="mt-4 space-y-4 text-gray-800 dark:text-gray-200">
              <li><strong>I.</strong> Explain Hill climbing algorithm with its limitations. </li>
              <li><strong>II.</strong> Explain the concept of constraint satisfaction problems and solve the given problem CROSS + ROADS = DANGER. </li>
              <li><strong>III.</strong> Define the state space for the classical water jug problem with a 3-liter and 4-liter jug. How can we exactly get 2 liters of water in a 4-liter jug? </li>
              <li><strong>IV.</strong> Prune the search tree using Alpha Beta cutoff and find the game value. </li>
            </ul>
          </div>

          {/** Unit 3 **/}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Unit-III</h2>
            <ul className="mt-4 space-y-4 text-gray-800 dark:text-gray-200">
              <li><strong>I.</strong> Differentiate between propositional and predicate logic with examples. </li>
              <li><strong>II.</strong> Illustrate the unification algorithm with a simple example involving term and predicate. </li>
              <li><strong>III.</strong> Describe FOPL (First Order Predicate Logic) in AI and represent statements using FOPL. </li>
              <li><strong>IV.</strong> Analyze axioms to determine if Marcus is alive now based on given conditions. </li>
            </ul>
          </div>

          {/** Unit 4 **/}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Unit-IV</h2>
            <ul className="mt-4 space-y-4 text-gray-800 dark:text-gray-200">
              <li><strong>I.</strong> Explain procedural and declarative knowledge representation. </li>
              <li><strong>II.</strong> Write the difference between Forward and backward reasoning in AI. </li>
              <li><strong>III.</strong> Illustrate semantic nets and frames for knowledge representation with an example. </li>
              <li><strong>IV.</strong> How are scripts used in knowledge representation? Provide an example. </li>
            </ul>
          </div>

          {/** Unit 5 **/}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Unit-V</h2>
            <ul className="mt-4 space-y-4 text-gray-800 dark:text-gray-200">
              <li><strong>I.</strong> Describe the process of planning with state space search. </li>
              <li><strong>II.</strong> Design a planning system for a real-world problem using hierarchical planning techniques. </li>
              <li><strong>III.</strong> How can AI planning approaches be applied to multi-agent systems? Provide an example of its applications. </li>
              <li><strong>IV.</strong> Write brief notes on:
                <ul className="list-disc ml-6 mt-2">
                  <li>Conditional planning</li>
                  <li>Planning graphs</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
