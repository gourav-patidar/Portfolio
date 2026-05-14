import {
  AppWindow,
  Boxes,
  Cloud,
  Code2,
  GraduationCap,
  Layers3,
  MapPin,
  Medal,
  MonitorSmartphone,
  RadioTower,
  Smartphone,
  TestTube2,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Gourav Patidar",
  initials: "GP",
  title: "Flutter Developer",
  focus: "Mobile app development, Flutter Web, and native SDK bridges",
  location: "Indore, India",
  availability: "Available for remote Flutter roles",
  email: "er.gourav.patidar@gmail.com",
  github: "https://github.com/gourav-patidar",
  linkedin: "https://in.linkedin.com/in/gourav-patidar1",
  summary:
    "I build production Flutter apps that feel reliable on every screen: mobile, web, and native SDK surfaces. My work sits close to platform boundaries, where clean architecture, test coverage, and careful releases matter.",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "2+", label: "Years shipping" },
  { value: "1yr+", label: "Flutter Web" },
  { value: "3", label: "SDK surfaces" },
  { value: "4+", label: "Apps shipped" },
];

export const projects = [
  {
    title: "Solved Dashboard",
    subtitle: "School Management Web Platform",
    description:
      "Enterprise Flutter Web platform used by students and teachers daily, with production features across courses, notifications, and reporting.",
    highlights: [
      "Owned feature delivery for a live Flutter Web product for over a year.",
      "Integrated CTLE courses, push notifications, charts, and REST API flows.",
      "Built with BLoC patterns and Firebase-backed product workflows.",
    ],
    tags: ["Flutter Web", "REST APIs", "BLoC", "Firebase", "fl_chart"],
    url: "https://www.solvedconsulting.com/dashboard",
  },
  {
    title: "Uptick Flutter SDK",
    subtitle: "Cross-platform Native SDK Bridge",
    description:
      "A single Dart API wrapping native Android and iOS SDK behavior through MethodChannel and PlatformView integrations.",
    highlights: [
      "Implemented native bridge coverage across Android and iOS.",
      "Exposed platform capabilities through a clean Dart-facing API.",
      "Added unit test suites around SDK behavior and API stability.",
    ],
    tags: ["Flutter", "MethodChannel", "PlatformView", "Swift", "Kotlin"],
    url: "https://www.uptick.com/",
  },
  {
    title: "UptickAds iOS SDK",
    subtitle: "Native Advertising SDK",
    description:
      "Contributed to iOS SDK v2 with backward compatibility work, bug fixes, and unit tests for long-term maintainability.",
    highlights: [
      "Improved stability across v1 and v2 SDK behavior.",
      "Covered critical paths with XCTest suites.",
      "Worked across Swift and Objective-C interoperability boundaries.",
    ],
    tags: ["Swift", "Objective-C", "XCTest", "iOS SDK"],
  },
  {
    title: "Habit Tracker App",
    subtitle: "Full-stack Flutter App",
    description:
      "Cross-platform habit tracking app with authentication, Firestore CRUD, push notifications, and app store deployment flows.",
    highlights: [
      "Implemented Firebase Authentication and Firestore data flows.",
      "Integrated OneSignal push notifications.",
      "Prepared releases for Google Play Store and Apple App Store.",
    ],
    tags: ["Flutter", "Firebase", "OneSignal", "Android", "iOS"],
    url: "https://github.com/gourav-patidar",
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Zehntech Technologies Pvt. Ltd.",
    period: "Jul 2023 - Present",
    location: "Indore, India",
    badge: "Employee of the Month",
    points: [
      "Led Flutter Web development for Solved Dashboard, a production enterprise platform.",
      "Built Uptick Flutter SDK bridging native Android and iOS via MethodChannel and PlatformView.",
      "Contributed to UptickAds iOS SDK v2 with XCTest coverage across SDK versions.",
      "Automated CI/CD pipelines to AWS CloudFront through GitHub Actions.",
      "Shipped apps to Google Play Store and Apple App Store with careful release workflows.",
    ],
  },
];

export const principles = [
  {
    icon: Layers3,
    title: "Feature-first architecture",
    description:
      "I keep features self-contained across data, domain, and presentation layers so products can grow without becoming hard to change.",
  },
  {
    icon: RadioTower,
    title: "Native platform fluency",
    description:
      "MethodChannel, PlatformView, Swift, Kotlin, and SDK constraints are part of the work, not an afterthought.",
  },
  {
    icon: TestTube2,
    title: "Tests around risk",
    description:
      "I prioritize unit, widget, and XCTest coverage where bugs would be expensive or hard to diagnose after release.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Dart", "Swift", "Kotlin", "Java", "Objective-C"],
  },
  {
    title: "Frameworks",
    skills: ["Flutter Web", "Flutter Android", "Flutter iOS", "Android SDK", "iOS SDK"],
  },
  {
    title: "Architecture",
    skills: ["Clean Architecture", "BLoC", "Provider", "MVVM", "Repository Pattern"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Firebase", "REST APIs", "Firestore", "Node.js", "AWS CloudFront"],
  },
  {
    title: "Testing",
    skills: ["Unit Testing", "Widget Testing", "XCTest", "JUnit", "Mock Testing"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "CI/CD", "Android Studio", "Xcode", "Postman"],
  },
];

export const aboutFacts = [
  { icon: MapPin, label: "Indore, Madhya Pradesh, India" },
  { icon: MonitorSmartphone, label: "Mobile, web, and SDK product surfaces" },
  { icon: GraduationCap, label: "B.Tech IT, 8.2 CGPA, 2023" },
  { icon: Medal, label: "Employee of the Month recognition" },
];

export const marquee = [
  "Flutter",
  "Dart",
  "Swift",
  "Kotlin",
  "BLoC",
  "Firebase",
  "XCTest",
  "PlatformView",
  "MethodChannel",
  "CI/CD",
];

export const serviceCards = [
  { icon: Smartphone, label: "Cross-platform apps" },
  { icon: Boxes, label: "Native SDK bridges" },
  { icon: Workflow, label: "Clean release pipelines" },
  { icon: Cloud, label: "Firebase product flows" },
  { icon: AppWindow, label: "Flutter Web platforms" },
  { icon: Code2, label: "Maintainable codebases" },
];
