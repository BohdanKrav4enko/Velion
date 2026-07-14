export const formatDate = (
    date: string,
    language: string
) => {
    const locales: Record<string, string> = {
        en: "en-US",
        ru: "ru-RU",
        ua: "uk-UA",
        de: "de-DE",
    };

    return new Date(date).toLocaleDateString(
        locales[language] ?? "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );
};