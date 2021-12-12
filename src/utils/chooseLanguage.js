const chooseLanguage = (languages) => {
  if (languages.length < 1) return 'en';

  const firstPreferredLanguage = languages[0].substring(0, 2);

  switch (firstPreferredLanguage) {
    case 'no':
    case 'nn':
    case 'nb':
      return 'nb';
    case 'da':
      return 'da';
    case 'sv':
      return 'sv';
    default:
      return 'en';
  }
};

export default chooseLanguage;
