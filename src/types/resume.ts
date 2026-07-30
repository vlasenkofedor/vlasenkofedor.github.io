export interface IntroInfo {
  name: string
  title: string
  location: string
  description: string
  image: string
}

export interface SocialMediaItem {
  icon: string
  link: string
  username: string
  displayName: string
}

export interface ContactItem {
  icon: string
  context: string
  style: string
  link: string
}

export interface ExperienceItem {
  workAt: string
  link: string
  position: string
  duration: string
  description: string
  techs: string[]
}

export interface EducationItem {
  school: string
  location: string
  title: string
  duration: string
  description: string
}

export interface VolunteerItem {
  title: string
  duration: string
  profileLink: string
}

export interface ExampleItem {
  title: string
  link: string
}

export interface SkillItem {
  name: string
  rate: number
}

export interface LanguageItem {
  name: string
  rate: number
  level: string
}

export interface InterestItem {
  name: string
  description: string
  link?: string
}

export interface ResumeData {
  introInfo: IntroInfo
  socialMediaInfo: SocialMediaItem[]
  contactInfo: ContactItem[]
  summaryInfo: string
  experinceInfo: ExperienceItem[]
  educationInfo: EducationItem[]
  volunteerInfo: VolunteerItem[]
  examples: ExampleItem[]
  skillInfo: SkillItem[]
  otherSkillInfo: string[]
  proSkillInfo: string[]
  languageInfo: LanguageItem[]
  interestInfo: InterestItem[]
}
