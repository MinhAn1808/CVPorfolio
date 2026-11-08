import type { BilingualText } from '../types'

export const profile = {
  name: 'Lê Minh An',
  initials: 'LMA',
  title: 'Backend Developer | ASP.NET',
  zalo: '0924741879',
  phone: '0824071808',
  email: 'leminhan1808@gmail.com',
  github: '',
  linkedin: '',
  location: 'Ho Chi Minh City, Vietnam',
  locationVi: 'TP. Hồ Chí Minh, Việt Nam',
  cvPath: '/files/LeMinhAnBeDev.pdf',
}

export const heroIntro: BilingualText = {
  en: 'Final-year Software Engineering graduate from FPT University with a foundation in computer networking, IT support, and system administration. Hands-on experience in backend development using .NET and ASP.NET Core. Eager to develop a career in IT Support, Helpdesk, and IT Administration, with a proactive attitude, strong problem-solving skills, and willingness to learn new technologies.',
  vi: 'Cử nhân Kỹ thuật Phần mềm tại Đại học FPT, có nền tảng về mạng máy tính, hỗ trợ CNTT và quản trị hệ thống. Có kinh nghiệm thực hành phát triển Backend với .NET và ASP.NET Core. Định hướng phát triển trong lĩnh vực IT Support, Helpdesk và IT Administration; chủ động, tư duy giải quyết vấn đề tốt và sẵn sàng học công nghệ mới.',
}

export const aboutCopy: BilingualText[] = [
  {
    en: 'Final-year Software Engineering graduate from FPT University with a foundation in computer networking, IT support, and system administration. Hands-on experience in backend development using .NET and ASP.NET Core. Eager to develop a career in IT Support, Helpdesk, and IT Administration, with a proactive attitude, strong problem-solving skills, and willingness to learn new technologies.',
    vi: 'Cử nhân Kỹ thuật Phần mềm tại Đại học FPT, có nền tảng về mạng máy tính, hỗ trợ CNTT và quản trị hệ thống. Có kinh nghiệm thực hành phát triển Backend với .NET và ASP.NET Core. Định hướng phát triển trong lĩnh vực IT Support, Helpdesk và IT Administration; chủ động, tư duy giải quyết vấn đề tốt và sẵn sàng học công nghệ mới.',
  },
  {
    en: 'I am currently focusing on backend development with ASP.NET, building RESTful APIs, and understanding system architecture through practical projects.',
    vi: 'Tôi tập trung phát triển Backend với ASP.NET, xây dựng RESTful API và tìm hiểu kiến trúc hệ thống qua các dự án thực tế.',
  },
  {
    en: 'I enjoy learning new technologies, solving technical problems, and building maintainable software solutions. I am proactive, responsible, and eager to grow as a professional Backend Developer.',
    vi: 'Tôi chủ động, có trách nhiệm, thích giải quyết vấn đề kỹ thuật và luôn muốn nâng cao năng lực chuyên môn.',
  },
]

export const values: Array<{ title: BilingualText; description: BilingualText; mark: string }> = [
  {
    title: { en: 'Continuous Learning', vi: 'Không ngừng học hỏi' },
    description: { en: 'Keep building a stronger foundation through deliberate practice.', vi: 'Từng bước xây dựng nền tảng vững chắc qua việc thực hành có chủ đích.' },
    mark: '01',
  },
  {
    title: { en: 'Problem Solving', vi: 'Giải quyết vấn đề' },
    description: { en: 'Break complex technical problems into useful, testable steps.', vi: 'Phân tích vấn đề kỹ thuật thành những bước rõ ràng và có thể kiểm chứng.' },
    mark: '02',
  },
  {
    title: { en: 'Responsibility & Ownership', vi: 'Trách nhiệm & chủ động' },
    description: { en: 'Take ownership of the work from first implementation to integration.', vi: 'Chủ động theo sát công việc từ triển khai ban đầu đến tích hợp hoàn chỉnh.' },
    mark: '03',
  },
]

export const education = {
  institution: 'FPT University – Ho Chi Minh City Campus',
  major: { en: 'Software Engineering', vi: 'Kỹ thuật Phần mềm' },
  graduation: { en: 'Graduated · February 2026', vi: 'Đã tốt nghiệp · Tháng 02/2026' },
  direction: { en: 'Career direction · Backend Developer – ASP.NET', vi: 'Định hướng · Backend Developer – ASP.NET' },
  year: '2026',
}
