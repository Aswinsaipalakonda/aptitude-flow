export type Priority = "High" | "Medium" | "Low";

export type CurriculumItem = {
  day: number;
  category: string;
  topic: string;
  priority: Priority;
  video_resource: string;
  practice_resource: string;
};

export const curriculum: CurriculumItem[] = [
  {
    day: 1,
    category: "Quantitative Aptitude",
    topic: "Percentages & Fractions",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=percentages+shortcuts+tricks+aptitude",
    practice_resource: "https://www.indiabix.com/aptitude/percentage/",
  },
  {
    day: 2,
    category: "Quantitative Aptitude",
    topic: "Profit, Loss & Discount",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=profit+and+loss+shortcuts+tricks+aptitude",
    practice_resource: "https://www.indiabix.com/aptitude/profit-and-loss/",
  },
  {
    day: 3,
    category: "Quantitative Aptitude",
    topic: "Ratio, Proportion & Partnership",
    priority: "Medium",
    video_resource:
      "https://www.youtube.com/results?search_query=ratio+and+proportion+tricks+aptitude",
    practice_resource: "https://www.indiabix.com/aptitude/ratio-and-proportion/",
  },
  {
    day: 4,
    category: "Quantitative Aptitude",
    topic: "Averages & Mixtures/Alligations",
    priority: "Medium",
    video_resource:
      "https://www.youtube.com/results?search_query=alligation+and+mixture+shortcuts+aptitude",
    practice_resource: "https://www.indiabix.com/aptitude/alligation-or-mixture/",
  },
  {
    day: 5,
    category: "Quantitative Aptitude",
    topic: "Simple & Compound Interest",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=simple+and+compound+interest+fast+tricks",
    practice_resource: "https://www.indiabix.com/aptitude/simple-interest/",
  },
  {
    day: 6,
    category: "Logical Reasoning",
    topic: "Number Series & Pattern Recognition",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=number+seriesa+reasoning+tricks+and+shortcuts",
    practice_resource: "https://www.indiabix.com/logical-reasoning/number-series/",
  },
  {
    day: 7,
    category: "Logical Reasoning",
    topic: "Blood Relations",
    priority: "Medium",
    video_resource:
      "https://www.youtube.com/results?search_query=blood+relations+reasoning+tricks",
    practice_resource: "https://www.indiabix.com/logical-reasoning/blood-relations/",
  },
  {
    day: 8,
    category: "Logical Reasoning",
    topic: "Coding and Decoding",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=coding+and+decoding+reasoning+tricks",
    practice_resource: "https://www.indiabix.com/logical-reasoning/coding-and-decoding/",
  },
  {
    day: 9,
    category: "Logical Reasoning",
    topic: "Direction Sense Test",
    priority: "Low",
    video_resource:
      "https://www.youtube.com/results?search_query=direction+sense+test+reasoning+shortcuts",
    practice_resource: "https://www.indiabix.com/logical-reasoning/direction-sense-test/",
  },
  {
    day: 10,
    category: "Logical Reasoning",
    topic: "Seating Arrangements (Linear & Circular)",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=seating+arrangement+reasoning+tricks",
    practice_resource: "https://www.indiabix.com/logical-reasoning/seating-arrangement/",
  },
  {
    day: 11,
    category: "Verbal Ability",
    topic: "Spotting Errors & Grammar Rules",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=spotting+errors+english+grammar+tricks",
    practice_resource: "https://www.indiabix.com/verbal-ability/spotting-errors/",
  },
  {
    day: 12,
    category: "Verbal Ability",
    topic: "Synonyms & Antonyms",
    priority: "Low",
    video_resource:
      "https://www.youtube.com/results?search_query=vocabulary+synonyms+antonyms+tricks",
    practice_resource: "https://www.indiabix.com/verbal-ability/synonyms/",
  },
  {
    day: 13,
    category: "Verbal Ability",
    topic: "Sentence Correction & Improvement",
    priority: "Medium",
    video_resource:
      "https://www.youtube.com/results?search_query=sentence+correction+tricks+placement",
    practice_resource: "https://www.indiabix.com/verbal-ability/sentence-correction/",
  },
  {
    day: 14,
    category: "Verbal Ability",
    topic: "Sentence Ordering & Para Jumbles",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=para+jumbles+shortcuts+verbal+ability",
    practice_resource: "https://www.indiabix.com/verbal-ability/sentence-formation/",
  },
  {
    day: 15,
    category: "Verbal Ability",
    topic: "Reading Comprehension Strategy",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=reading+comprehension+tricks+for+placements",
    practice_resource: "https://www.indiabix.com/verbal-ability/reading-comprehension/",
  },
  {
    day: 16,
    category: "Quantitative Aptitude",
    topic: "Time, Speed and Distance",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=time+speed+and+distance+shortcuts",
    practice_resource: "https://www.indiabix.com/aptitude/time-and-distance/",
  },
  {
    day: 17,
    category: "Quantitative Aptitude",
    topic: "Trains, Boats and Streams",
    priority: "Medium",
    video_resource:
      "https://www.youtube.com/results?search_query=problems_on_trains_boats_streams_tricks",
    practice_resource: "https://www.indiabix.com/aptitude/boats-and-streams/",
  },
  {
    day: 18,
    category: "Quantitative Aptitude",
    topic: "Time and Work, Pipes & Cisterns",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=time_and_work_pipes_cisterns_shortcuts",
    practice_resource: "https://www.indiabix.com/aptitude/time-and-work/",
  },
  {
    day: 19,
    category: "Quantitative Aptitude",
    topic: "Permutation, Combination & Probability",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=permutation_combination_probability_tricks",
    practice_resource: "https://www.indiabix.com/aptitude/probability/",
  },
  {
    day: 20,
    category: "Quantitative Aptitude",
    topic: "Number Systems & HCF/LCM",
    priority: "Medium",
    video_resource:
      "https://www.youtube.com/results?search_query=number_system_hcf_lcm_shortcuts",
    practice_resource: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
  },
  {
    day: 21,
    category: "Logical Reasoning",
    topic: "Syllogisms",
    priority: "High",
    video_resource: "https://www.youtube.com/results?search_query=syllogism_venn_diagram_tricks",
    practice_resource: "https://www.indiabix.com/logical-reasoning/syllogism/",
  },
  {
    day: 22,
    category: "Logical Reasoning",
    topic: "Cubes and Dice",
    priority: "Low",
    video_resource:
      "https://www.youtube.com/results?search_query=cubes_and_dice_reasoning_shortcuts",
    practice_resource: "https://www.indiabix.com/logical-reasoning/cube-and-dice/",
  },
  {
    day: 23,
    category: "Logical Reasoning",
    topic: "Clocks and Calendars",
    priority: "Medium",
    video_resource:
      "https://www.youtube.com/results?search_query=clocks_and_calendar_reasoning_tricks",
    practice_resource: "https://www.indiabix.com/logical-reasoning/calendar/",
  },
  {
    day: 24,
    category: "Logical Reasoning",
    topic: "Data Sufficiency",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=data_sufficiency_reasoning_shortcuts",
    practice_resource: "https://www.indiabix.com/logical-reasoning/data-sufficiency/",
  },
  {
    day: 25,
    category: "Logical Reasoning",
    topic: "Statement and Assumptions",
    priority: "Medium",
    video_resource:
      "https://www.youtube.com/results?search_query=statement_and_assumption_reasoning",
    practice_resource: "https://www.indiabix.com/logical-reasoning/statement-and-assumption/",
  },
  {
    day: 26,
    category: "Verbal Ability",
    topic: "Analogies & Odd Man Out",
    priority: "Low",
    video_resource:
      "https://www.youtube.com/results?search_query=verbal_analogies_odd_man_out_tricks",
    practice_resource: "https://www.indiabix.com/verbal-ability/odd-man-out/",
  },
  {
    day: 27,
    category: "Verbal Ability",
    topic: "Idioms and Phrases",
    priority: "Medium",
    video_resource:
      "https://www.youtube.com/results?search_query=idioms_and_phrases_placement_tricks",
    practice_resource: "https://www.indiabix.com/verbal-ability/idioms-and-phrases/",
  },
  {
    day: 28,
    category: "Quantitative Aptitude",
    topic: "Mensuration (Areas, Volumes & Surfaces)",
    priority: "Medium",
    video_resource:
      "https://www.youtube.com/results?search_query=mensuration_shortcuts_formulae_aptitude",
    practice_resource: "https://www.indiabix.com/aptitude/area/",
  },
  {
    day: 29,
    category: "Quantitative Aptitude",
    topic: "Data Interpretation (Tables, Pie Charts, Graphs)",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=data_interpretation_shortcuts_tricks",
    practice_resource: "https://www.indiabix.com/data-interpretation/introduction/",
  },
  {
    day: 30,
    category: "Comprehensive",
    topic: "Grand Mock Test & Comprehensive Review",
    priority: "High",
    video_resource:
      "https://www.youtube.com/results?search_query=full_aptitude_placement_revision_marathon",
    practice_resource: "https://www.indiabix.com/online-test/aptitude-test/",
  },
];
