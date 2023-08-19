// Seasonal theming

import moment from 'moment';

const seasons: Record<string, string> = {
  Jan: 'winter',
  Feb: 'winter',
  Mar: 'spring',
  Apr: 'spring',
  May: 'spring',
  Jun: 'summer',
  Jul: 'summer',
  Aug: 'summer',
  Sep: 'autumn',
  Oct: 'autumn',
  Nov: 'winter',
  Dec: 'winter',
};

const seasonThemes: Record<string, Record<string, string>> = {
  winter: {
    start: '#2377a4',
    end: '#79c0d7',
  },
  spring: {
    start: '#88c5a1',
    end: '#e1a18e',
  },
  summer: {
    start: '#f15e34',
    end: '#e9b41d',
  },
  autumn: {
    start: '#5f0f40',
    end: '#e36414',
  },
};

const getSeasonTheme = (): string => {
  const currentMonth = moment().format('MMM') as keyof typeof seasons;
  const season = seasons[currentMonth];
  const seasonTheme = seasonThemes[season];

  return `
    body::-webkit-scrollbar-thumb {
      background-image: linear-gradient(180deg, ${seasonTheme.start} 0%, ${seasonTheme.end} 99%);
    }
  `;
};

export const setScrollbarStyles = () => {
  const styleElement = document.createElement('style');
  const scrollbarStyle = getSeasonTheme();
  styleElement.innerHTML = scrollbarStyle;
  document.head.appendChild(styleElement);
};
