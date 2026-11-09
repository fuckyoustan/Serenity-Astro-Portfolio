interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const education: Education[] = [
    {
        title: "Islamic Religious Education",
        startDate: "2021-09-01",
        school: "Nahdlatul Ulama Islamic University",
        location: "Jepara, Indonesia",
        description: "Religious studies and education, pursued alongside self-taught software development and Android system optimization.",
        currentUni: true,
    }
];

export default education;
