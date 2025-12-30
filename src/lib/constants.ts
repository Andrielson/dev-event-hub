export interface EventItem {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventItem[] = [
    {
        title: "React Summit 2024",
        image: "/images/event1.png",
        slug: "react-summit-2024",
        location: "Amsterdam, Netherlands",
        date: "June 13-14, 2024",
        time: "9:00 AM - 6:00 PM CEST"
    },
    {
        title: "Web Dev Conference 2024",
        image: "/images/event2.png",
        slug: "web-dev-conference-2024",
        location: "San Francisco, CA",
        date: "July 20-22, 2024",
        time: "10:00 AM - 5:00 PM PDT"
    },
    {
        title: "JavaScript Hackathon",
        image: "/images/event3.png",
        slug: "javascript-hackathon-2024",
        location: "New York, NY",
        date: "August 5-6, 2024",
        time: "9:00 AM - 9:00 PM EST"
    },
    {
        title: "Next.js Conf 2024",
        image: "/images/event4.png",
        slug: "nextjs-conf-2024",
        location: "London, UK",
        date: "September 15-16, 2024",
        time: "9:30 AM - 5:30 PM BST"
    },
    {
        title: "TypeScript Meetup",
        image: "/images/event5.png",
        slug: "typescript-meetup-2024",
        location: "Berlin, Germany",
        date: "October 8, 2024",
        time: "6:00 PM - 9:00 PM CEST"
    },
    {
        title: "Frontend Masters Workshop",
        image: "/images/event6.png",
        slug: "frontend-masters-workshop-2024",
        location: "Austin, TX",
        date: "November 12-13, 2024",
        time: "9:00 AM - 4:00 PM CST"
    },
    {
        title: "Node.js Summit",
        image: "/images/event-full.png",
        slug: "nodejs-summit-2024",
        location: "Seattle, WA",
        date: "December 3-4, 2024",
        time: "10:00 AM - 6:00 PM PST"
    },
    {
        title: "CSS Dev Conference",
        image: "/images/event1.png",
        slug: "css-dev-conference-2024",
        location: "Toronto, Canada",
        date: "January 18-19, 2025",
        time: "9:00 AM - 5:00 PM EST"
    },
    {
        title: "React Native Summit",
        image: "/images/event2.png",
        slug: "react-native-summit-2025",
        location: "Miami, FL",
        date: "February 22-23, 2025",
        time: "10:00 AM - 6:00 PM EST"
    },
    {
        title: "Web Performance Conference",
        image: "/images/event3.png",
        slug: "web-performance-conference-2025",
        location: "Denver, CO",
        date: "March 15-16, 2025",
        time: "9:00 AM - 5:00 PM MST"
    }
];