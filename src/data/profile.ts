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
  cvPath: '',
}

export const heroIntro: BilingualText = {
  en: 'Final-year Software Engineering graduate from FPT University with a foundation in computer networking, IT support, and system administration. Hands-on experience in backend development using .NET and ASP.NET Core. Eager to develop a career in IT Support, Helpdesk, and IT Administration, with a proactive attitude, strong problem-solving skills, and willingness to learn new technologies.',
  vi: 'Tốt nghiệp ngành Kỹ thuật Phần mềm tại Đại học FPT, có nền tảng về mạng máy tính, hỗ trợ CNTT và quản trị hệ thống. Có kinh nghiệm thực hành phát triển Backend với .NET và ASP.NET Core. Mong muốn phát triển sự nghiệp trong lĩnh vực IT Support, Helpdesk và IT Administration, với tinh thần chủ động, khả năng giải quyết vấn đề tốt và sẵn sàng học hỏi công nghệ mới.',
}

export const aboutCopy: BilingualText[] = [
  {
    en: 'Final-year Software Engineering graduate from FPT University with a foundation in computer networking, IT support, and system administration. Hands-on experience in backend development using .NET and ASP.NET Core. Eager to develop a career in IT Support, Helpdesk, and IT Administration, with a proactive attitude, strong problem-solving skills, and willingness to learn new technologies.',
    vi: 'Tốt nghiệp ngành Kỹ thuật Phần mềm tại Đại học FPT, có nền tảng về mạng máy tính, hỗ trợ CNTT và quản trị hệ thống. Có kinh nghiệm thực hành phát triển Backend với .NET và ASP.NET Core. Mong muốn phát triển sự nghiệp trong lĩnh vực IT Support, Helpdesk và IT Administration, với tinh thần chủ động, khả năng giải quyết vấn đề tốt và sẵn sàng học hỏi công nghệ mới.',
  },
  {
    en: 'I am currently focusing on backend development with ASP.NET, building RESTful APIs, and understanding system architecture through practical projects.',
    vi: 'Hiện tại, tôi tập trung phát triển kỹ năng Backend với ASP.NET, xây dựng RESTful API và tìm hiểu kiến trúc hệ thống thông qua các dự án thực tế.',
  },
  {
    en: 'I enjoy learning new technologies, solving technical problems, and building maintainable software solutions. I am proactive, responsible, and eager to grow as a professional Backend Developer.',
    vi: 'Tôi là người chủ động, có trách nhiệm, yêu thích học hỏi và luôn mong muốn cải thiện năng lực chuyên môn để phát triển thành một Backend Developer chuyên nghiệp.',
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
  institution: 'FPT University',
  major: { en: 'Software Engineering', vi: 'Kỹ thuật Phần mềm' },
  graduation: { en: 'Expected graduation · 2027', vi: 'Dự kiến tốt nghiệp · 2027' },
  direction: { en: 'Career direction · Backend Developer – ASP.NET', vi: 'Định hướng · Backend Developer – ASP.NET' },
}
