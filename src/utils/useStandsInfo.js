import {useState} from "react";

const standInfo = [
  {
    id: 1,
    StandName: "Название стенда 1",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 2,
    StandName: "Название стенда 2",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 3,
    StandName: "Название стенда 3",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 4,
    StandName: "Название стенда 4",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 5,
    StandName: "Название стенда 5",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 6,
    StandName: "Название стенда 6",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 7,
    StandName: "Название стенда 7",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 8,
    StandName: "Название стенда 8",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 9,
    StandName: "Название стенда 9",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 10,
    StandName: "Название стенда 10",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 11,
    StandName: "Название стенда 11",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 12,
    StandName: "Название стенда 12",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 13,
    StandName: "Название стенда 13",
    StandInfo: "Краткое описание стенда"
  },
  {
    id: 14,
    StandName: "Название стенда 14",
    StandInfo: "Краткое описание стенда"
  },
]

export const useStandsInfo = (initValue = standInfo) => {
  const [stands, setStands] = useState(initValue)
  return { stands, setStands }
}