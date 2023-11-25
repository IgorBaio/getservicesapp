export const getEllipsisArrayText = (texts: string[], limit: number) => {
    return texts.length > limit ? 
    `${texts.slice(0,limit).join(', ')}...`
    : texts.join(', ');
  };
  