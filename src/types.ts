export interface CaseStudy {
  id: string;
  category: 'design' | 'engineering';
  title: string;
  role: string;
  problemOrWhat: string;
  approachOrRole: string;
  outcome?: string;
  tags?: string[];
  iconType: 'fitness' | 'ecommerce' | 'news' | 'service' | 'booking' | 'ai' | 'maintenance';
  imageUrl?: string;
  imageAlt?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface AchievementItem {
  id: string;
  text: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
