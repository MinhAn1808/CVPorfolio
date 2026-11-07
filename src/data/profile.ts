import type { BilingualText } from '../types'

export const profile = {
  name: 'Lê Minh An',
  initials: 'LMA',
  title: 'Backend Developer | ASP.NET',
  email: '',
  github: '',
  linkedin: '',
  location: 'Vietnam',
  cvPath: '',
}

export const heroIntro: BilingualText = {
  en: 'Final-year Software Engineering student at FPT University with a foundation in IT infrastructure and system support. Currently focusing on backend development with ASP.NET, building RESTful APIs, and developing practical software solutions.',
  vi: 'Tôi là sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT, có nền tảng kiến thức về hạ tầng CNTT và hỗ trợ hệ thống. Hiện tại, tôi đang tập trung phát triển Backend với ASP.NET, xây dựng RESTful API và các giải pháp phần mềm thực tế.',
}

export const aboutCopy: BilingualText[] = [
  {
    en: 'I am a final-year Software Engineering student at FPT University with an interest in backend development and software engineering. My technical foundation includes computer networking, IT Helpdesk, IT system support, and basic Windows Server administration.',
    vi: 'Tôi là sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT, có định hướng phát triển trong lĩnh vực Backend Development. Bên cạnh kiến thức lập trình, tôi có nền tảng về mạng máy tính, IT Helpdesk, hỗ trợ hệ thống và kiến thức cơ bản về quản trị Windows Server.',
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
