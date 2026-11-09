interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

const workExperience: WorkExperience[] = [
    {
        title: "Independent System Developer",
        startDate: "2025-06-01",
        company: "Self-employed",
        location: "Indonesia",
        description: "Android system-level optimization and automation scripts, released as open-source Magisk and KernelSU modules.",
        goals: [
            "Tuning system network protocols to improve connectivity and reduce latency.",
            "Implementing thermal management behavior for mobile hardware.",
            "Designing responsive web interfaces for system configuration.",
        ],
        currentJob: true,
    },
    {
        title: "Open Source Contributor",
        startDate: "2024-01-01",
        endDate: "2025-05-30",
        company: "Android community",
        location: "Remote",
        description: "Collaborated on projects focused on kernel-level tweaks and system performance.",
        goals: [
            "Researched and applied kernel parameter tuning for better power efficiency.",
            "Wrote shell scripts that automate repetitive system maintenance tasks.",
            "Worked with developers worldwide to troubleshoot and patch system-level bugs.",
        ],
        currentJob: false,
    },
];

export default workExperience;
