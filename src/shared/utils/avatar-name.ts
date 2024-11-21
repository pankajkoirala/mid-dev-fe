export const generateAvatarName = (fullName: string): string => {
    // Get the first letter of the first name
    const names = fullName.split(' ');
    const firstLetter = names?.[0]?.charAt(0)?.toUpperCase();
  
    // Get the first letter of the last name if available
    const lastLetter =
      names?.length > 1 ? names[names.length - 1].charAt(0).toUpperCase() : '';
  
    // Combine the letters to create the avatar name
    const avatarName = `${firstLetter}${lastLetter}`;
    return avatarName;
  };
  