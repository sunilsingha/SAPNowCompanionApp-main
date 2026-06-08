import { FastestFingerQuestion } from './mapApiQuestions'

export const FALLBACK_FASTEST_FINGER_QUESTIONS: FastestFingerQuestion[] = [
  {
    id: '100',
    quizQuestionId: 100,
    text: 'In what year was SAP SE founded?',
    answers: [
      { id: 'a', text: '1969' },
      { id: 'b', text: '1972' },
      { id: 'c', text: '1980' },
      { id: 'd', text: '1985' },
    ],
    correctAnswerId: 'b',
  },
  {
    id: '101',
    quizQuestionId: 101,
    text: 'What does the acronym SAP stand for?',
    answers: [
      { id: 'a', text: 'Systems and Applications in Processing' },
      { id: 'b', text: 'Systems, Applications, and Products in Data Processing' },
      { id: 'c', text: 'Software Architecture Platform' },
      { id: 'd', text: 'Systems Automation Protocol' },
    ],
    correctAnswerId: 'b',
  },
  {
    id: '113',
    quizQuestionId: 113,
    text: 'SAP HANA Cloud on BTP supports which type of processing that allows extremely fast analytics on large datasets?',
    answers: [
      { id: 'a', text: 'Batch processing' },
      { id: 'b', text: 'Columnar disk-based processing' },
      { id: 'c', text: 'In-memory computing' },
      { id: 'd', text: 'Distributed MapReduce processing' },
    ],
    correctAnswerId: 'c',
  },
  {
    id: '111',
    quizQuestionId: 111,
    text: 'Which SAP BTP capability enables citizen developers to build applications with low-code/no-code tools?',
    answers: [
      { id: 'a', text: 'SAP Workzone' },
      { id: 'b', text: 'SAP Extension Factory' },
      { id: 'c', text: 'SAP Build' },
      { id: 'd', text: 'SAP Ruum' },
    ],
    correctAnswerId: 'c',
  },
  {
    id: '68',
    quizQuestionId: 68,
    text: 'What is a hat-trick in cricket?',
    answers: [
      { id: 'a', text: 'Three wickets in three consecutive balls' },
      { id: 'b', text: 'Three sixes in an over' },
      { id: 'c', text: 'Three catches in a match' },
      { id: 'd', text: 'Three run-outs in an innings' },
    ],
    correctAnswerId: 'a',
  },
]
