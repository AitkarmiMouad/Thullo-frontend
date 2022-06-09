import { v4 as uuidv4 } from "uuid";

const Lists = [{
  id: 1,
  status: "open",
  icon: "⭕️",
  color: "#EB5A46",
  cards: [{
    id: uuidv4(),
    icon: "⭕️",
    status: "open",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form"
  }, {
    id: uuidv4(),
    icon: "🔆️",
    status: "open",
    title: "Purchase present",
    content: "Get an anniversary gift"
  }, {
    id: uuidv4(),
    icon: "✅",
    status: "open",
    title: "Invest in investments",
    content: "Call the bank to talk about investments"
  }, {
    id: uuidv4(),
    icon: "📝",
    status: "open",
    title: "Daily reading",
    content: "Finish reading Intro to UI/UX"
  }]
}, {
  id: 2,
  status: "in progress",
  icon: "🔆️",
  color: "#00C2E0",
  cards: [{
    id: uuidv4(),
    icon: "⭕️",
    status: "open",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form"
  }, {
    id: uuidv4(),
    icon: "🔆️",
    status: "open",
    title: "Purchase present",
    content: "Get an anniversary gift"
  }, {
    id: uuidv4(),
    icon: "✅",
    status: "open",
    title: "Invest in investments",
    content: "Call the bank to talk about investments"
  }]
}, {
  id: 3,
  status: "in review",
  icon: "📝",
  color: "#C377E0",
  cards: [{
    id: uuidv4(),
    icon: "⭕️",
    status: "open",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form"
  }, {
    id: uuidv4(),
    icon: "🔆️",
    status: "open",
    title: "Purchase present",
    content: "Get an anniversary gift"
  },]
}, {
  id: 4,
  status: "done",
  icon: "✅",
  color: "#3981DE",
  cards: [{
    id: uuidv4(),
    icon: "⭕️",
    status: "open",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form"
  },]
}];


export { Lists };