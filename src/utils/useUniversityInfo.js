import {useState} from "react";

const uniInfo = [
  {
    id: 1,
    NameUniversity: "МИСиС",
    NameUniversityInfo: "Заметки пользователя",
    stands: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    id: 2,
    NameUniversity: "УрФУ",
    NameUniversityInfo: "День карьеры",
    stands: [1, 5, 14]
  },
  {
    id: 3,
    NameUniversity: "МГУ",
    NameUniversityInfo: "День карьеры",
    stands: [2, 3, 6]
  },
  {
    id: 4,
    NameUniversity: "СТАНКИН",
    NameUniversityInfo: "День карьеры",
    stands: [8, 10]
  },
  {
    id: 5,
    NameUniversity: "МГТУ им. Баумана",
    NameUniversityInfo: "День карьеры",
    stands: [1, 2, 3]
  },
  {
    id: 6,
    NameUniversity: "МФТИ",
    NameUniversityInfo: "День карьеры",
    stands: [1, 5, 6]
  },
  {
    id: 7,
    NameUniversity: "МИФИ",
    NameUniversityInfo: "День карьеры",
    stands: [1, 9, 10]
  },
  {
    id: 8,
    NameUniversity: "РУДН",
    NameUniversityInfo: "День карьеры",
    stands: [2, 3, 4]
  },
]

export const useUniversityInfo = (initValue = uniInfo) => {
  const [universities, setUniversities] = useState(initValue)
  return { universities, setUniversities }
}