import ReactGA from 'react-ga';

ReactGA.initialize("UA-195960991-2");
ReactGA.pageview(window.location.pathname + window.location.search);

const category = "Interaction"

export function event_About() {
    ReactGA.event({
        category: category,
        action: "About",
      });
}

export function event_Support() {
    ReactGA.event({
        category: category,
        action: "Support",
      });
}

export function event_BMAC() {
    ReactGA.event({
        category: category,
        action: "BMAC",
      });
}

export function event_Kiwanuka() {
    ReactGA.event({
        category: category,
        action: "Kiwanuka",
      });
}