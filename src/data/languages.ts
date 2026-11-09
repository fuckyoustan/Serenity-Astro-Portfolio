interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Indonesian",
        level: "Native",
        description: "Spoken and written",
        show: true
    },
    {
        name: "Javanese",
        level: "Native",
        description: "Spoken and written",
        show: true
    },
    {
        name: "English",
        level: "Fluent",
        description: "Spoken and written",
        show: true
    },
    {
        name: "Sundanese",
        level: "Fluent",
        description: "Spoken and written",
        show: true
    }
];

export default languages;
