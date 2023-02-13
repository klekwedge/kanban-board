import { v4 as uuidv4 } from "uuid";

const cardsData = [
  {
    title: "План на месяц",
    id: uuidv4(),
    tasks: [
      {
        taskTitle: "Пройти курс по React",
        id: uuidv4(),
      },
      {
        taskTitle: "Отметить день рождения",
        id: uuidv4(),
      },
      {
        taskTitle:
          "Записаться на курсы английского языка, чтобы уехать жить в Лондон",

        id: uuidv4(),
      },
      {
        taskTitle: "Сделать бекенд своего сайта на node.js",

        id: uuidv4(),
      },
      {
        taskTitle: "Собрать портфолио",
        id: uuidv4(),
      },
      {
        taskTitle: "Написать первую статью в блог",
        id: uuidv4(),
      },
      {
        taskTitle: "Записаться в автошколу. 🚗",
        id: uuidv4(),
      },
    ],
  },
  {
    title: "План на день",
    id: uuidv4(),
    tasks: [
      {
        taskTitle: "Записаться на курс по React",
        id: uuidv4(),
      },
      {
        taskTitle: "Забронировать тир на субботу",
        id: uuidv4(),
      },
      {
        taskTitle: "Накидать тем для статей в блог",
        id: uuidv4(),
      },
    ],
  },
];
export default cardsData;
