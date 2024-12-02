
function sendInterest(domain) {
    const emailBody = `Hei, jeg er interessert i domenenavnet ${domain}.`;
    const mailtoLink = `mailto:Kontakt@Navnhuset.no?subject=Interesse for domenenavn&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
}
