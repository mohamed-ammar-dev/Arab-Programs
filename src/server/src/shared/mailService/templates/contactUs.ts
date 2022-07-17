export const contactUsTemplate = (replace: any) => {
  return `<p>Dear Mohamed Medhat,<br><br>

            ${replace.name} said: <br>
            ${replace.message}<br><br>            
            
            Sincerely, <br>
            Ammar Support Team</p>`;
};
